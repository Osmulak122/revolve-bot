const Discord = require('discord.js');
var bot = new Discord.Client();
const prefix = "!";

bot.on("guildMemberAdd", function(member) {
    var role_rules = member.guild.roles.find('name', 'Unaccepted Rules');
    member.addRole(role_rules)
});



bot.on("ready", function() {
    bot.user.setActivity('!help');
    console.log("Im Ready!");
});



bot.on("message", function(message) {

    var msg = message.content.toLowerCase();
    var cont = message.content.slice(prefix.length).split(" ");
    var args = cont.slice(1);
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
   
    if (msg == prefix + "help") {
        message.channel.send("__**Commands :**__\n\n**!youtube**\n**!leaders**\n**!botcode**\n\n__**Music:**__\n**!musicbot** *Some music commands*");
    }                    
    
    if(msg == prefix + "leaders") {
        message.channel.send("Leaders :\n**Four** :flag_es:\n**Liptik** :flag_pt:\nCo-Leaders\n**Minty** :flag_pl:\n**Yanick** :flag_nl:");
    }
    
    if(msg == prefix + "botcode") {
        message.channel.send("**Actual bot code! -** https://github.com/Osmulak122/revolve-bot/blob/master/index.js");
    }
     if(msg == prefix + "youtube") {
        message.channel.send("**Our Youtube! -** https://www.youtube.com/RevolveTeam");
    }

    if(msg.startsWith(prefix + "clear")) {


        var channelID = message.channel;

        async function clear() {
            message.delete();

            if (!message.member.hasPermission("MANAGE_MESSAGES")) {
                message.channel("You don't have permissions to use this command!");
                return;
            }

            if (isNaN(args[0])) {
                message.channel.send("**Please include amount of messages you want to delete**");
                return;
            }

            const fetched = await message.channel.fetchMessages({limit: args[0]} + 1);
            message.channel.bulkDelete(fetched)
                .catch(error => message.channel.send("Can't clear the chat!"));

                bot.channels.find("name", "bot-logs").send(msgauthor.username + "** cleared : **" + (fetched.size) + "** messages in channel :** " + (channelID));

 }
        clear();
    }
    
 
              
});      
bot.login(process.env.BOT_TOKEN);


