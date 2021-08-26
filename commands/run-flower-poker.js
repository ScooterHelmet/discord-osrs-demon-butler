const { MessageAttachment } = require("discord.js");
const fs = require('fs');
const path = require('path');
// const client  = require('../server');
const { MessageActionRow, MessageButton } = require('discord.js');

const pastelFlowers = fs.readFileSync(path.join(__dirname, '../assets/pastelFlowers.png'))
const redFlowers = fs.readFileSync(path.join(__dirname, '../assets/redFlowers.png'))
const blueFlowers = fs.readFileSync(path.join(__dirname, '../assets/blueFlowers.png'))
const yellowFlowers = fs.readFileSync(path.join(__dirname, '../assets/yellowFlowers.png'))
const purpleFlowers = fs.readFileSync(path.join(__dirname, '../assets/purpleFlowers.png'))
const orangeFlowers = fs.readFileSync(path.join(__dirname, '../assets/orangeFlowers.png'))
const mixedFlowers = fs.readFileSync(path.join(__dirname, '../assets/mixedFlowers.png'))
const whiteFlowers = fs.readFileSync(path.join(__dirname, '../assets/whiteFlowers.png'))
const blackFlowers = fs.readFileSync(path.join(__dirname, '../assets/blackFlowers.png'))

const flowers = [
  pastelFlowers,
  redFlowers,
  blueFlowers,
  yellowFlowers,
  purpleFlowers,
  orangeFlowers,
  mixedFlowers,
  whiteFlowers,
  blackFlowers
];

const row = new MessageActionRow().addComponents(
  new MessageButton()
    .setCustomId("first")
    .setLabel("primary")
    .setStyle("PRIMARY"),

  new MessageButton()
    .setCustomId("second")
    .setLabel("secondary-bt")
    .setStyle("SECONDARY"),

  new MessageButton()
    .setCustomId("third")
    .setLabel("success")
    .setStyle("SUCCESS"),

  new MessageButton()
    .setCustomId("fourth")
    .setLabel("Danger")
    .setStyle("DANGER"),

  new MessageButton()
    .setCustomId("fourth")
    .setLabel("COINiD")
    .setStyle("https://apps.apple.com/us/app/btc-testnet-wallet-for-coinid/id1367659583")
);

/**
 * @param {*} client client
 * @param {*} msg message
 * @param {*} args args
 */
module.exports = async (msg, args) => {
  console.log(`msg: ${msg}, args: ${args}`);

  if (args === 'bid') {
    msg.delete();

    let val1 = flowers[Math.floor(Math.random() * flowers.length)]
    let val2 = flowers[Math.floor(Math.random() * flowers.length)]
    let val3 = flowers[Math.floor(Math.random() * flowers.length)]
    let val4 = flowers[Math.floor(Math.random() * flowers.length)]
    let val5 = flowers[Math.floor(Math.random() * flowers.length)]

    const plant1 = new MessageAttachment(val1)
    const plant2 = new MessageAttachment(val2)
    const plant3 = new MessageAttachment(val3)
    const plant4 = new MessageAttachment(val4)
    const plant5 = new MessageAttachment(val5)

    msg.channel.send(`1 ... ${msg.author}`, { files: [plant1] });
    msg.channel.send(`2 ... ${msg.author}`, { files: [plant2] });
    msg.channel.send(`3 ... ${msg.author}`, { files: [plant3] });
    msg.channel.send(`4 ... ${msg.author}`, { files: [plant4] });
    msg.channel.send(`5 ... ${msg.author}`, { files: [plant5] });

    const m = await msg.channel.send({
      content: "What have you? ...",
      Comp: [row]
    })

    const iFilter = i => i.user.id === msg.author.id;

    const collector = m.createMessageComponentCollector({ filter: iFilter, time: 60000});
 
    collector.on('collect', async i => { 
      if(i.customId==='first') {
        //const role = i.member.roles.cache?.has('')
        console.log('dookie')
    }
  })
  }
}