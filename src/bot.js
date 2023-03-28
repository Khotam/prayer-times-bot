const axios = require("axios");

const sendMessageToChannel = async (data) => {
  const apiToken = "5824412735:AAHhVJNJ29jl_sFuN9m2GAyFgy30Dvxq4LY";
  const chatId = "@namoz_vaqtlari_islomuz";

  let formattedText = "Assalomu aleykum! \n \n";
  formattedText += Object.entries(data).reduce((result, curr) => {
    const [title, prayerTime] = curr;
    result += `${title}: ${prayerTime} \n`;
    return result;
  }, "");

  const urlString = `https://api.telegram.org/bot${apiToken}/sendMessage?chat_id=${chatId}&text=${encodeURIComponent(
    formattedText
  )}`;

  const response = await axios.get(urlString);
  return response;
};

module.exports = { sendMessageToChannel };
