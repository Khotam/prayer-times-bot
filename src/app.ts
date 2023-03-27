import cron from "node-cron";

import { sendMessageToChannel } from "./bot";
import { getData } from "./getData";

async function main() {
  const data = await getData();
  await sendMessageToChannel(data);
}

cron.schedule("0 5 * * *", function () {
  console.log("running a task every minute");
  main();
});
