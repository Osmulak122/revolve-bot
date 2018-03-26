const Discord = require('discord.js');
var bot = new Discord.Client();

bot.on("guildMemberAdd", function(member) {
    var role_rules = member.guild.roles.find('name', 'Unaccepted Rules');
    member.addRole(role_rules)
});



bot.on("ready", function() {
    bot.user.setActivity('!help');
    console.log("Im Ready!");
});



bot.on("message", function(message) {
    var msg = message.content.toUpperCase();
    var msgauthor = message.author;
    var channel1 = bot.channels.find('name', 'readme');

    if (message.channel == channel1 && msg == "!agree" || msg == "!Agree" || msg == "!AGREE" || msg == '"agree"' || msg == '"Agree"' || msg == '"AGREE"' || msg == "agree" || msg == "Agree" || msg == "AGREE" || msg == '"!agree"' || msg == '"!Agree"'|| msg == '"!AGREE"') {
        var role_rules = message.member.guild.roles.find('name', 'Unaccepted Rules');
        message.member.removeRole(role_rules);
        message.author.send("**Verification Completed!**\n*Welcome to the server and have fun!*");
        bot.channels.find('name', 'bot-logs').send(msgauthor.toString() + ", *Agreed to Rules!*");
    }

    if (message.channel == channel1) {
        message.delete();
    }
            
    if (message.content == "!help") {
        message.channel.send("__**Commands :**__\n\n**!youtube**\n**!leaders**\n**!botcode**\n\n__**Music:**__\n**?play** *<link>*\n");
    }                    
    
    if(message.content == "!leaders") {
        message.channel.send("Leaders :\n**Four** :flag_es:\n**Liptik** :flag_pt:\nCo-Leaders\n**Minty** :flag_pl:\n**Yanick** :flag_nl:");
    }
    
    if(message.content == "!botcode") {
        message.channel.send("**Actual bot code! -** https://github.com/Osmulak122/revolve-bot/blob/master/index.js");
    }
     if(message.content == "!youtube") {
        message.channel.send("**Our Youtube! -** https://www.youtube.com/RevolveTeam");
    }


              
});    
bot.login(process.env.BOT_TOKEN);


