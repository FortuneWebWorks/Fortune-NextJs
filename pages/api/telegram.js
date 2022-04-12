export default async function sendData(req, res) {
  const token = process.env.TELEGRAM_BOT_TOKEN;
  const chatId = process.env.TELEGRAM_CHAT_ID;

  const response = await fetch(
    `https://api.telegram.org/bot${token}/sendMessage?chat_id=${chatId}&text=Hell`
  );

  res.status(200).json({ Hell: 'Hell' });
  console.log(response);
}
