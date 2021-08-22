let status = 'offline';
let log;
let output;
let result;

const exec = require('child_process').exec;
process = (error, stdout, stderr) => {
  if (!error) {
    status = `🤝 online`
  }

  log = error;
  output = stdout;
  result = stderr;
}
exec("ping -c 3 ubuntu", process);

module.exports = async (msg, args) => {
  if (msg.content.startsWith('$ ping')) {
    msg.delete();

    msg.author.send(`BTC Pay Server status: ${status}\n ${output}`);
  }
}