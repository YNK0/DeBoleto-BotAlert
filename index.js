const { chromium } = require("playwright");
const enviarCorreo = require("./alerta");
require("dotenv").config();

const EMAIL = process.env.EMAIL;
const URL = process.env.URL;
const timeOut = process.env.TIMEOUT;

(async () => {
  const browser = await chromium.launch();

  const context = await browser.newContext();

  const page = await context.newPage();

  await page.goto(URL);
  await page.setDefaultTimeout(10000);

  while (true) {
    await page.reload();
    const button = await page.$(".disabled");
    if (button) {
      console.log("No hay boletos disponibles");
      await page.waitForTimeout(timeOut);
    } else {
      console.log("Hay boletos disponibles");
      await page.screenshot({ path: "BoletosDisponibles.png" });
      enviarCorreo("Boletos disponibles " + URL, EMAIL);
      break;
    }
  }

  await browser.close();
})();
