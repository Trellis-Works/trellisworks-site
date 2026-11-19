export const PIXEL_ID = "6t4ZMHXfpzY86EcD2TpKiS";
export const CONSENT_KEY = "trellis-ad-measurement-v1";
type Pixel = (...args: unknown[]) => void;

export function initOpenAIMeasurement() {
  const panel = document.querySelector<HTMLElement>("[data-measurement-panel]");
  if (!panel) return;
  const pixelWindow = window as Window & { oaiq?: Pixel };
  let allowed = false;
  let initialized = false;
  function start() {
    if (!pixelWindow.oaiq) {
      const queue: unknown[][] = [];
      pixelWindow.oaiq = Object.assign((...args: unknown[]) => { queue.push(args); }, { q: queue });
      const script = document.createElement("script");
      script.async = true;
      script.src = "https://bzrcdn.openai.com/sdk/oaiq.min.js";
      document.head.appendChild(script);
    }
    pixelWindow.oaiq("consent", true);
    if (!initialized) {
      pixelWindow.oaiq("init", { pixelId: PIXEL_ID, debug: false });
      initialized = true;
    }
    pixelWindow.oaiq("measure", "page_viewed", {
      type: "contents", contents: [{ id: "excel_reporting", name: "Excel reporting automation", content_type: "page" }],
    }, { opt_out: true });
  }
  function choose(value: string) {
    const wasAllowed = allowed;
    allowed = value === "allow";
    try { localStorage.setItem(CONSENT_KEY, value); } catch { /* Choice still applies for this page. */ }
    if (allowed && !wasAllowed) start();
    if (!allowed && pixelWindow.oaiq) pixelWindow.oaiq("consent", false);
    panel!.hidden = true;
  }
  document.querySelectorAll<HTMLElement>("[data-measurement-choice]").forEach(button => {
    button.addEventListener("click", () => choose(button.dataset.measurementChoice || "decline"));
  });
  document.querySelector<HTMLElement>("[data-measurement-settings]")?.addEventListener("click", () => {
    panel.hidden = false;
    panel.querySelector<HTMLButtonElement>("button")?.focus();
  });
  document.querySelectorAll<HTMLAnchorElement>('a[data-campaign-event="booking_click"]').forEach(link => {
    link.addEventListener("click", () => {
      if (!allowed) return;
      pixelWindow.oaiq?.("measure", "custom", { type: "custom" }, {
        custom_event_name: "excel_reporting_booking_click", opt_out: true,
      });
    });
  });
  let stored: string | null = null;
  try { stored = localStorage.getItem(CONSENT_KEY); } catch { /* Ask on each visit when storage is unavailable. */ }
  if (stored === "allow" || stored === "decline") choose(stored);
  else panel.hidden = false;
}
