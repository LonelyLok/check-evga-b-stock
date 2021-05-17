## Check EVGA BStock for RTX GPU

* use selenium webdriver
* do a scan every 10 seconds on the EVGA BStock page https://www.evga.com/products/ProductList.aspx?type=8
* send window notification if the page 

### Before run

* need to download the driver from https://chromedriver.chromium.org/downloads
* put the chromedriver.exe into the "driver" folder

### How to run
```
npm install
npm run build
node test.js
```