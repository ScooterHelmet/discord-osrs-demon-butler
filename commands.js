const btc = require('./commands/coinmarketcap');
const bid = require('./commands/run-flower-poker');
const clear = require('./commands/bulk-delete');
const ping = require('./commands/ping');
const invoice = require('./commands/btc-pay-server');

// jump table
const commands = { btc, bid, clear, invoice, ping };

module.exports = async msg => {
  if ((msg.channel.id) == '878066462445678593') {

    if (!msg.guild || msg.author.bot) return;

    if (msg.content.startsWith('$ ')) {
      /**
     * 1) Remove whitespaces from beginning and end of string
     * 2) Split string into an array of substrings
     * 3) Concatenate all of the elements in the array
     */
      let tokens = msg.content.trim().split(" ").join();
      // console.log(`Tokens: ${tokens}`);
      // console.log(`Token length: ${tokens.length}`);
      // console.log(`${tokens.split(",")}`)

      let command = tokens.toLowerCase();
      // console.log(`Command: ${command}`);

      if ((command.charAt(0) === "$") && (tokens.length > 0)) {
        args = command.substring(2);

        console.log(`substring(2) args: ${args}`);
        commands[args](msg, args);
      }
    } else {

      console.log('... on standby')
    }
  }

  return;
}