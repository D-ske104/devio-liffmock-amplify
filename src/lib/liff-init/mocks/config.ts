// モック設定の一元管理
export const mockConfig = {
  // モックユーザープロファイル設定
  profile: {
    userId: "U1234567890",
    displayName: "Mock User",
    pictureUrl: "https://example.com/profile.jpg",
    statusMessage: "お昼休みはもくもくモッキング",
  },

  // 他のLIFF APIモック設定を追加可能
  // 例: isInClient, isLoggedIn, getLanguage, getOS, getVersion など
  isInClient: true,
  isLoggedIn: true,
  getLanguage: "ja",
  getOS: "web",
  getVersion: "2.21.0",

  // モックの振る舞い設定
  behavior: {
    shouldSucceedShareTargetPicker: true,
    shouldSucceedScanCode: true,
    // その他の振る舞い設定...
  }
};
