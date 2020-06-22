var Discord = require("discord.js");
var fs = require("fs");
var env = require()
var Bot = new Discord.Client();
require('dotenv').config();
var Token = process.env.DISCORD_TOKEN;
var Prefix = "br!"


Bot.on("ready", val => {
    console.log("BrandenBot is operational.")
});

Bot.login(Token);