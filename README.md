## Check EVGA BStock for RTX GPU

* Warning!! EVGA will ban IP address if you access their website too many times in short period of time. Use this at your own risk.
* use selenium webdriver
* do a scan every 10 seconds on the EVGA BStock page https://www.evga.com/products/ProductList.aspx?type=8
* send window notification if the page contain RTX GPU

### Before run

* need to download the driver from https://chromedriver.chromium.org/downloads
* put the chromedriver.exe into the "driver" folder

### How to run
```
npm install
npm run build
node test.js
```