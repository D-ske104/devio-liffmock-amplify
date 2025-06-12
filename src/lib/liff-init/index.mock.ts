// LIFF Mock
import { liff } from "@line/liff";
import LiffMockPlugin from "@line/liff-mock";

import { getProfile } from "./mocks";

export const liffInit = async () => {
  try {
    // モックプラグインを設定
    liff.use(new LiffMockPlugin());

    // LIFFを初期化
    await liff.init({
      liffId: import.meta.env.VITE_LIFF_ID || "mock-liff-id",
      mock: true,
    });

    // ブラウザ環境ではログイン処理が必要
    if (!liff.isInClient()) {
      liff.login();
    }

    // モックデータを設定
    liff.$mock.set({
      getProfile,
    });

    console.debug("LIFF initialization completed (mock)");
  } catch (error) {
    console.error("LIFF mock initialization failed:", error);
    throw error;
  }
};
