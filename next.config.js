module.exports = {
  reactStrictMode: true,
  esModule: true,
  devIndicators: {
    autoPrerender: true
  },
  images: {
    domains: ['firebasestorage.googleapis.com']
  },
  env: {
    FIREBASE_ASSET_01: process.env.FIREBASE_ASSET_01,
    FIREBASE_ASSET_02: process.env.FIREBASE_ASSET_02,
    FIREBASE_ASSET_03: process.env.FIREBASE_ASSET_03,
    FIREBASE_ASSET_04: process.env.FIREBASE_ASSET_04,
    FIREBASE_ASSET_05: process.env.FIREBASE_ASSET_05,
    FIREBASE_ASSET_06: process.env.FIREBASE_ASSET_06,
    FIREBASE_ASSET_07: process.env.FIREBASE_ASSET_07,

    FIREBASE_ASSET_SIGNATURE: process.env.FIREBASE_ASSET_SIGNATURE
  }
}
