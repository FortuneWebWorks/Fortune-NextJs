/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  images: {
    domains: ['localhost'],
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
  },
};

module.exports = nextConfig;
