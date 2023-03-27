const cron = require("node-cron");

const { sendMessageToChannel } = require("./bot");
const { getData } = require("./getData");

async function main() {
  try {
    const data = await getData();
    await sendMessageToChannel(data);
  } catch (error) {
    console.log("Error: ", error);
    throw new Error("App failed");
  }
}

cron.schedule("0 5 * * *", function () {
  main();
});
