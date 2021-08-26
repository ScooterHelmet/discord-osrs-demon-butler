const commandHandler = require("./commands");
const config = require(`./config`);
const Discord = require('discord.js');
const os = require('os');
const ifaces = os.networkInterfaces();

/**
 * Reduce Bandwidth, CPU, RAM consumption with intents - Discord.js v13
 */
const intents = new Discord.Intents(32767); // Let's use all of them ...

const client = new Discord.Client({ intents });

/**
 * Log bot credentials accessed
 */
client.on("ready", () => {
  console.log(`\n Logged in as ${client.user.tag}`);
});

/**
 * Set Dynamic commandhandler
 */
client.on("messageCreate", commandHandler);

/**
 * Login
 */
client.login(config.token);

/**
 * Show available internal addresses
 */
Object.keys(ifaces).forEach(function (ifname) {
  var alias = 0;
  ifaces[ifname].forEach(function (iface) {
    if ('IPv4' !== iface.family || iface.internal !== false) {
      // skip over internal (i.e. 127.0.0.1) and non-ipv4 addresses
      return;
    }
    if (alias >= 1) {
      // this single interface has multiple ipv4 addresses
      console.log(`\n ${ifname}: ${alias}, ${iface.address}`);
    } else {
      // this interface has only one ipv4 adress
      console.log(`\n ${ifname}: ${iface.address} \n`);
    }
    ++alias;
  })
})

module.exports = client;