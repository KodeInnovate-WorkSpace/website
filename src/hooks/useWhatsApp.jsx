const useWhatsApp = (message) => {
  const whatsappNumber = import.meta.env.VITE_PHONE;
  const url = `https://api.whatsapp.com/send?phone=${whatsappNumber}&text=${encodeURIComponent(
    message
  )}`;

  return () => {
    window.open(url, "_blank");
  };
};

export default useWhatsApp;
