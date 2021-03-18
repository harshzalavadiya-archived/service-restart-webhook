export const sendNotification = async (text) => {
  const response = await fetch(process.env.GOOGLE_CHAT_WEBHOOK_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json; charset=UTF-8" },
    body: JSON.stringify({ text }),
  });
  console.log(response);
};
