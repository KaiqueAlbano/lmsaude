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

//GOOGLE TAGMENTO.
export function gtagEvent(
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
export function fbqEvent(
  event: string,
  params?: {
    content_name?: string;
    content_category?: string;
    [key: string]: any;
  },
) {
  if (typeof window !== "undefined" && (window as any).fbq) {
    (window as any).fbq("track", event, {
      content_name: params?.content_name ?? "Botão WhatsApp",
      content_category: params?.content_category ?? "Lead",
      ...params,
    });
  }
  gtag_report_conversion();
}
function gtag_report_conversion() {
  // var callback = function () {
  //   if (typeof url != "undefined") {
  //     window.location.href = url;
  //   }
  // };
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag("event", "conversion", {
      send_to: "AW-17383696913/y60TCKet_vobEJHUmOFA",
      value: 1.0,
      currency: "BRL",
      // event_callback: callback,
    });
  } else {
    // callback();
  }
  return false;
}

const UtilServices = {
  getWhatsApp(numero: string, desc: string): void {
    return getWhatsApp(numero, desc);
  },
  getEmail(email: string, subject: string, body: string): void {
    return getEmail(email, subject, body);
  },
};

export default UtilServices;
