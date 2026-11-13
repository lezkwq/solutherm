export const WHATSAPP_NUMBER = "5547933863367";
export const PHONE_DISPLAY = "(47) 93386-3367";

export function whatsappLink(message: string) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}
