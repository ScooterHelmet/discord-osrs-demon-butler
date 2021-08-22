const { token } = require(`./config`);
const { Client } = require('discord.js');
const client = new Client();
const commandHandler = require("./commands");
const os = require('os');
const ifaces = os.networkInterfaces();

client.on("ready", () => {
  console.log(`\n Logged in as ${client.user.tag}`)
});

client.on("message", commandHandler);

client.login(token);

// Show IP address in console
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