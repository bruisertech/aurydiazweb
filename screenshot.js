const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();

  // start a local web server just in case
  const { exec } = require('child_process');
  const server = exec('python3 -m http.server 8000');

  // Wait a bit for server to start
  await new Promise(resolve => setTimeout(resolve, 1000));

  await page.goto('http://localhost:8000/index.html');

  // take a screenshot of marco normativo section
  const section = await page.$('#jerarquia');
  if (section) {
    await section.screenshot({ path: 'jerarquia_btn.png' });
    console.log('Screenshot saved to jerarquia_btn.png');
  } else {
    console.log('Section not found');
  }

  // take screenshot of footer
  const footer = await page.$('footer');
  if (footer) {
    await footer.screenshot({ path: 'footer_btn.png' });
    console.log('Screenshot saved to footer_btn.png');
  } else {
    console.log('Footer not found');
  }

  await browser.close();
  server.kill();
})();
