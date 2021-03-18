export const sendNotification = async () => {
  const response = await fetch(process.env.GOOGLE_CHAT_WEBHOOK_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json; charset=UTF-8" },
    body: JSON.stringify({ text: `auto restarting ${process.env.APP_SERVICES}` }),
  });
  console.log(response);
};
