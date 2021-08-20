const { default: axios } = require("axios");
const { MessageButton } = require("discord-buttons");
const { Client } = require("discord.js");
const { airtable } = require("../config");
const client = new Client();
require("discord-buttons")(client);

const loginButton = new MessageButton().setStyle("green").setID("1").setLabel("Take me to to Airtable");

module.exports = async (message, args) => {
  // const config = {
  //   method: 'get',
  //   url: 'https://api.airtable.com/v0/app2AVKQIq2GoJiZA/Tasks',
  //   headers: {
  //     'Authorization': `Bearer ${airtable}`,
  //     'Cookie': 'brw=brwAg1QlYCKR7mH5f'
  //   }
  // };

  // let getAirtableTasks = async () => {
  //   let response = await axios(config);
  //   let tasks = JSON.stringify(response.data.records[1]);
  //   return tasks;
  // }

  // let tasksValue = await getAirtableTasks();

  message.author.send("Test");
  // message.author.send("Test", { buttons: [loginButton] });
}
