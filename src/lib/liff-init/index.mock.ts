// LIFF Mock
import { liff } from "@line/liff";
import LiffMockPlugin from "@line/liff-mock";

import { getProfile } from "./mocks";

export const liffInit = async () => {
  liff.use(new LiffMockPlugin());
  await liff
    .init({ liffId: import.meta.env.VITE_LIFF_ID, mock: true })
  // liff.login() が呼ばれている必要があるため
  if (!liff.isInClient()) liff.login()

  liff.$mock.set({
    getProfile
  })
};
