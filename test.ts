import {api} from './src/api';
const cron = require('node-cron');

cron.schedule(`*/10 * * * * *`, async () => {
    console.log(new Date())
    await api().run();
  });