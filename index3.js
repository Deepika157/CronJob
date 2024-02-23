const cron = require('node-cron');
const { exec } = require('child_process');


function executeCommand(command) {
    exec(command, (error, stdout, stderr) => {
        if (error) {
            console.error(`Error executing command: ${error}`);
            return;
        }
        console.log(`Command executed successfully. Output: ${stdout}`);
    });
}


const specificTime = '*/10 * * * * *'; // every 10sec
const commandToExecute = `node ${__dirname}/script.js`; 


cron.schedule(specificTime, () => {
    console.log(`Scheduling task to run at ${specificTime}`);
    executeCommand(commandToExecute);
});
