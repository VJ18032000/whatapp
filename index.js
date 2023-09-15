
const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({ headless: false }); 
  const page = await browser.newPage();

  await page.goto('https://web.whatsapp.com/', { waitUntil: 'networkidle0' });

  await page.waitForSelector('._21S-L');

  const contactName = 'Mani Maran Kst';

  const message = 'Hello, this is an automated message.';

  await page.click('._21S-L');
  await page.type('._21S-L', contactName);

  await page.waitForSelector(`span[title='${contactName}']`);

  await page.click(`span[title='${contactName}']`);

   page.frames().find(frame => frame.name() === 'frame-name'); 
  await page.waitForSelector('._1VZX7', { visible: true });

  for(let i=0;i<=100;i++){
      await page.type('._1VZX7', message);
      await page.keyboard.press('Enter');
  }


  await page.waitForTimeout(9000); 

//   await browser.close();
})();
