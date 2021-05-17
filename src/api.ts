interface Api {
    run:()=>Promise<any>,
}

const path = require('path');
const notifier = require('node-notifier');
const { ServiceBuilder, Options } = require('selenium-webdriver/chrome');
const { Builder, By } = require('selenium-webdriver');

export function api (){
    const url = 'https://www.evga.com/products/ProductList.aspx?type=8';

    const userAgent = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/90.0.4430.212 Safari/537.36'

    const driverPath = path.join(__dirname, '../driver/chromedriver.exe');

    const serviceBuilder = new ServiceBuilder(driverPath);

    const optionsBuilder = new Options().addArguments(["--headless",`user-agent="${userAgent}"`]);
    // const urlTest = 'https://www.evga.com/products/ProductList.aspx?type=8&family=GeForce+30+Series+Family';

    const keyword = 'EVGA GeForce RTX';
    const self:Api = {
        run: async () => {

            const driver = await new Builder()
            .forBrowser('chrome')
            .setChromeOptions(optionsBuilder)
            .setChromeService(serviceBuilder)
            .build();

            await driver.get(url);

            const resp = await driver.findElements(By.className('pl-list-pname'));

            const nameOfBstockProduct:Array<string> = await Promise.all(resp.map((r:any)=>r.getText()));
            
            await driver.quit();

            nameOfBstockProduct.forEach((s:string)=>{
                if(s.includes(keyword)){
                    notifier.notify({
                        title: 'BStock',
                        message: s,
                        timeout: 1,
                    })
                }
            })
        }
    };

    return self;
}