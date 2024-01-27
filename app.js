const puppeteer = require('puppeteer');
console.log('puppeteer started');

console.log('Before');
const browserOpenPromise = puppeteer.launch({headless : false});

browserOpenPromise.then(() => {
    console.log("Browser Opened");
});

console.log("After");
