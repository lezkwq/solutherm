export const WHATSAPP_NUMBER = "5548991321945";
export const PHONE_DISPLAY = "(48) 99132-1945";

export function whatsappLink(message: string) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}
