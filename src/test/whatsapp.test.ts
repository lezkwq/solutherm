import { describe, expect, it } from "vitest";
import { whatsappLink } from "@/lib/whatsapp";

describe("whatsappLink", () => {
  it("opens a chat with Qualitech's number (48) 99132-1945", () => {
    expect(whatsappLink("Oi")).toBe("https://wa.me/5548991321945?text=Oi");
  });
});
