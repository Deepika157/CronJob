const { exec } = require('child_process');


function scheduleTaskAtSpecificTime(time, command) {

    const cronCommand = `echo "${command}" | crontab -`;

    exec(cronCommand, (error, stdout, stderr) => {
        if (error) {
            console.error(`Error scheduling task: ${error}`);
            return;
        }
        console.log(`Task scheduled successfully.Output: ${stdout}`);
    });
}


const specificTime = '*/10 * * * * *'; // every 10 sec
const commandToExecute = `node ${__dirname}/script.js`; 

scheduleTaskAtSpecificTime(specificTime, commandToExecute);
