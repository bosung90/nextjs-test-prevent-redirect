"use client";
import { isRedirectError } from "next/dist/client/components/redirect";
import { sendVerificationCode } from "./actions.server";

export default function ButtonCall() {
  async function handleCall() {
    try {
      const res = await sendVerificationCode("en").catch((e) => {
        console.log(e);
        if (isRedirectError(e)) {
          console.log(e);
        }
        return { success: false, message: e.message } as const;
      });
      console.log(res);
    } catch (e) {
      console.log("catch error", e);
    }
  }

  return <button onClick={handleCall}>Call</button>;
}
