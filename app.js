const puppeteer = require('puppeteer');

console.log('puppeteer started');

(async () => {
    console.log('Before');
    const browser = await puppeteer.launch({headless : false, ignoreHTTPSErrors: true});
    console.log("Browser Opened");

    const page = await browser.newPage();
    await page.goto('http://secure.indeed.com/');
    console.log("Navigated to http://indeed.in");

    // Rest of your code
})();
console.log("After");
