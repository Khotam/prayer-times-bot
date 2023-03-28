const { writeFile } = require("fs").promises;
const cron = require("node-cron");

const { sendMessageToChannel } = require("./bot");
const { getData } = require("./getData");

async function main() {
  try {
    const data = await getData();
    await sendMessageToChannel(data);
  } catch (error) {
    console.log("Error: ", error);
    await writeFile("./error.log", error.message);
    throw new Error("App failed");
  }
}

console.log("App started");
cron.schedule("7 11 * * *", function () {
  main();
});
