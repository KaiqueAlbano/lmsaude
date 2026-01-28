function getWhatsApp(numero: string, desc: string): void {
  window.open(
    `https://api.whatsapp.com/send?phone=${numero}&text=${encodeURIComponent(
      desc,
    )}`,
    "_blank",
  );
}
function getEmail(email: string, subject: string, body: string): void {
  const url = `mailto:${email}?subject=${encodeURIComponent(
    subject,
  )}&body=${encodeURIComponent(body)}`;
  window.location.href = url;
}
function gtagEvent(
  event: string,
  eventLabel: string = "whatsapp",
  eventCategory: string = "engagement",
) {
  if (typeof window !== "undefined" && (window as any).gtag) {
    (window as any).gtag("event", event, {
      event_category: eventCategory,
      event_label: eventLabel,
    });
  }
}

const UtilServices = {
  getWhatsApp(numero: string, desc: string): void {
    return getWhatsApp(numero, desc);
  },
  getEmail(email: string, subject: string, body: string): void {
    return getEmail(email, subject, body);
  },
  gtagEvent(event: string, eventLabel?: string, eventCategory?: string): void {
    return gtagEvent(event, eventLabel, eventCategory);
  },
};

export default UtilServices;
