const cron = require('node-cron');
const express= require('express');

const app= express();


cron.schedule('*/10 * * * * *', function()  {
    console.log("Scheduling job to run at specified time");
 
});

app.listen(3000, function(){
    console.log("started at port 3000");
})