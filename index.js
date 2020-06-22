var Discord = require("discord.js");
var fs = require("fs");
var Bot = new Discord.Client();
var Token = "NzI0NDc3MDU4Mzk4NTUyMjk1.XvAv3Q.GrRlqUqfYmNv0PwJIGAag153kgU";
var Prefix = "br!"


Bot.on("ready", val => {
    console.log("BrandenBot is operational.")
});

Bot.login(Token);