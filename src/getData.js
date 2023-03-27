import * as puppeteer from "puppeteer";

const SITE_NAME = "https://islom.uz/";

export const getData = async () => {
  const browser = await puppeteer.launch({ timeout: 0 });
  const page = await browser.newPage();
  await page.goto(SITE_NAME, {
    waitUntil: "domcontentloaded",
  });

  const data = await page.evaluate(() => {
    const prayertimeEls = [...document.querySelectorAll(".p_clock > b")];
    const titleEls = [...document.querySelectorAll(".in_cricle > div.p_v")];

    const prayerTimes = prayertimeEls.map((el) => el.innerHTML);
    const titles = titleEls.map((el) => el.innerHTML);

    return { titles, prayerTimes };
  });

  await browser.close();

  const values = Object.values(data);

  const result = values[0].reduce((acc, curr, idx) => {
    acc[curr] = values[1][idx];
    return acc;
  }, {});

  return result;
};
