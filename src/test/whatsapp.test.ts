import { describe, expect, it } from "vitest";
import { whatsappLink } from "@/lib/whatsapp";

describe("whatsappLink", () => {
  it("opens a chat with the SOLU THERM number (47) 93386-3367", () => {
    expect(whatsappLink("Oi")).toBe("https://wa.me/5547933863367?text=Oi");
  });
});
