// Public campaign configuration. No credentials belong in this file.
export const excelReporting = {
  bookingUrl: "https://calendar.app.google/uV1Mua1VdEaYQ73i7",
  contactEmail: "info@trellisworks.ca",
  durationMinutes: 15,
  campaign: "excel_reporting",
  landingPath: "/excel-reporting/",
};

const body = `Hey Trellis Works,

I'd like to talk about automating a recurring Excel report.

Company:
What the report is used for:
How often we prepare it:
Where the source data comes from:
The steps we do by hand:

Thanks,
[Your name]`;

export const reportingEmail = {
  gmail: `https://mail.google.com/mail/?${new URLSearchParams({
    view: "cm", fs: "1", to: excelReporting.contactEmail,
    su: "Excel reporting automation enquiry", body,
  })}`,
  mailto: `mailto:${excelReporting.contactEmail}?${new URLSearchParams({
    subject: "Excel reporting automation enquiry", body,
  })}`,
};
