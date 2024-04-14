"use server";
import { RedirectType, redirect } from "next/navigation";

export async function sendVerificationCode(lang: string) {
  redirect(
    `/${lang}/signIn?verificationCodeId=${"randomuuid"}`,
    RedirectType.replace
  );
}
