/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  images: {
    domains: ['localhost', 'drive.google.com'],
  },

  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });

    return config;
  },

  env: {
    TELEGRAM_BOT_TOKEN: '5186582196:AAF6dIzidTOtJRfwhaAu-hqwIkgdTsbA1zY',
    TELEGRAM_CHAT_ID: '761026981',
    NOTION_SECRESTS: 'secret_nR1Tpm4c53k9rY1tsxYz2PqfJn470mELIZubfR2w6zn',
    NOTION_DATABASE_ID: '13f75ba83d0242b5a5077206097f4107',
  },
};

module.exports = nextConfig;
