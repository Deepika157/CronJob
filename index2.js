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


const commandToExecute = 'script.js'; 

cron.schedule("*/10 * * * * *", () => {
    console.log(`Scheduling job to run at specificTime`);
    executeCommand(commandToExecute);
});
