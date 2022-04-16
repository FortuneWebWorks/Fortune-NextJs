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
    NOTION_SECRESTS: 'secret_80UTjG2bD30G7BbyMrlJU90trYeGsmpVxCPayst92Jw',
    NOTION_DATABASE_ID: '465c13b7bbe740e9895a31c0905cea89',
  },
};

module.exports = nextConfig;
