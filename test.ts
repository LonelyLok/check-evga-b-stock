import {api} from './src/api';
const cron = require('node-cron');

cron.schedule(`*/10 * * * * *`, async () => {
    console.log(new Date(), 'start scan')
    await api().run();
    console.log(new Date(), 'end scan')
  });