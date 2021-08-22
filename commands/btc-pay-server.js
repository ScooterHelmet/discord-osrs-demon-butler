
const { MessageAttachment, MessageEmbed } = require("discord.js")
const fs = require('fs')
const path = require('path')
const btcLogo = fs.readFileSync(path.join(__dirname, '../assets/btc.png'))
const testnet = fs.readFileSync(path.join(__dirname, '../assets/2N7hjSNurcm9cntXVDMYhjtq45nRwKfEAz6.jpg'))

module.exports = async (msg, args) => {
  if (msg.content.startsWith('$ invoice')) {
    msg.delete();

    const invoice = new MessageAttachment(testnet, 'invoice.jpg');
    const btc = new MessageAttachment(btcLogo, 'btc.jpg');

    let embed = new MessageEmbed()
      .addField('Pay via COINiD Wallet', 'https://apps.apple.com/us/app/btc-testnet-wallet-for-coinid/id1367659583')
      .addField('Pay to address', '2N7hjSNurcm9cntXVDMYhjtq45nRwKfEAz6')
      .setAuthor('Demon Butler – Maker Fee')
      .setColor(0x0099ff)
      .setDescription('Amount Owed: $5.00 USD')
      .setImage('attachment://invoice.jpg')
      .setThumbnail('attachment://btc.jpg')
      .setTimestamp()
      .setTitle('Flower Poker')

    msg.author.send({
      embed: embed,
      files: [invoice, btc]
    });
  }
}