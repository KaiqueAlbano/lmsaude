function getWhatsApp(numero: string, desc: string): void {
  window.open(
    `https://api.whatsapp.com/send?phone=${numero}&text=${encodeURIComponent(
      desc,
    )}`,
    "_blank",
  );
}

const UtilServices = {
  getWhatsApp(numero: string, desc: string): void {
    return getWhatsApp(numero, desc);
  },
};

export default UtilServices;
