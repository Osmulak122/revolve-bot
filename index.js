const Discord = require('discord.js');
var bot = new Discord.Client();


const PREFIX = "!";

bot.on("guildMemberAdd", function(member) {
    var role_rules = member.guild.roles.find('name', 'Unaccepted Rules');
    member.addRole(role_rules)
});

bot.on('messageReactionAdd', function(reaction, member) {
    var Welcome = bot.channels.find("name", "readme");
    console.log(reaction.channel)
    var Emoji = "✅";
    var rolenews = member.guild.roles.find('name', 'Unaccepted Rules');
    if (!reaction.channel == Welcome) return;
    if (!reaction.emoji.name == Emoji) return;
    member.removeRole(rolenews);
});

bot.on("ready", function() {
    bot.user.setActivity('!help');
    console.log("Im Ready!");
});



bot.on("message", function(message) {
    if (message.author.equals(bot.user)) return;

    if (!message.content.startsWith(PREFIX)) return;
        var args = message.content.substring(PREFIX.length).split(" ");

        switch (args[0].toLowerCase()) {
            case "help":
                message.channel.send("**Commands :**\n");
                break;
              
}});    
bot.login(process.env.BOT_TOKEN);
