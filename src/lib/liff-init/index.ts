import { liff } from "@line/liff";

export const liffInit = async () => {
  return await liff
    .init({ liffId: import.meta.env.VITE_LIFF_ID || "" })
    .then(() => {
      if (!liff.isLoggedIn() && !liff.isInClient()) {
        liff.login();
      }
    });
};
