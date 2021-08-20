const { default: axios } = require('axios');
const { MessageButton } = require("discord-buttons");
const { MessageEmbed } = require("discord.js");
const { edapp } = require("../config");

// const messageEmbed = new MessageEmbed();
const loginButton = new MessageButton().setStyle("green").setID("2").setLabel("Take me to EdApp");

module.exports = async (message, args) => {
  const config = {
    method: 'get',
    url: 'https://rest.edapp.com/v2/analytics/lessonstatistics',
    headers: {
      'Authorization': `Bearer ${edapp}`
    }
  };

  let getLessonStatistics = async () => {
    let response = await axios(config);
    let payload = {
      totalCount: JSON.stringify(response.data.totalCount),
      items: []
    }
    response.data.items.forEach(element => {
      payload.items.push(element)
    });
    return JSON.stringify(payload);
  }

  let data = await getLessonStatistics();

  message.author.send(data, { buttons: [loginButton] });

  // messageEmbed.setTitle('How can I help?').setColor(0x000000).setDescription(
  //   `${airtable}\n`
  //   + `${edapp}\n`
  //   + `${menu}\n`
  // );

  // message.author.send(messageEmbed);
}