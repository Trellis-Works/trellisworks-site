// Instrumentation only: no analytics provider, storage or network transmission.
// Josh deferred additional analytics configuration on 2026-11-17.
export function campaignAttribution(search: string) {
  const params = new URLSearchParams(search);
  const values = {
    utm_source: ["chatgpt", "direct", "other"],
    utm_medium: ["paid", "direct", "other"],
    utm_campaign: ["excel_reporting"],
    utm_content: ["recurring_report", "combine_files", "reliable_handoff"],
  };
  return Object.fromEntries(Object.entries(values).map(([key, allowed]) => {
    const value = params.get(key);
    return [key, value && allowed.includes(value) ? value : key === "utm_campaign" ? "excel_reporting" : value ? "other" : "direct"];
  }));
}

export function initCampaignEvents() {
  if (typeof window === "undefined") return;
  const attribution = campaignAttribution(window.location.search);
  const allowedEvents = ["landing_view", "booking_click", "enquiry_click"];
  const allowedPlacements = ["page", "hero", "booking_card", "gmail", "email"];
  const campaignWindow = window as Window & { dataLayer?: Record<string, string>[] };
  function emit(event: string, placement: string) {
    if (!allowedEvents.includes(event) || !allowedPlacements.includes(placement)) return;
    const detail = { event: `trellis_${event}`, campaign: "excel_reporting", placement, ...attribution };
    campaignWindow.dataLayer = campaignWindow.dataLayer || [];
    campaignWindow.dataLayer.push(detail);
    window.dispatchEvent(new CustomEvent("trellis:campaign", { detail }));
  }
  emit("landing_view", "page");
  document.querySelectorAll<HTMLAnchorElement>("a[data-campaign-event]").forEach(link => {
    link.addEventListener("click", () => emit(link.dataset.campaignEvent || "", link.dataset.placement || ""));
  });
}
