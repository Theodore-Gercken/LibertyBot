const Discord = require('discord.js');

module.exports = {
	name: 'info',
	description: 'info',
	execute(message, args) {
		const exampleEmbed = new Discord.MessageEmbed()
	    .setColor('#E5C601')
	    .setTitle('Information')
	    .setDescription('LibertyBot is a community service project created by Theodore Gercken for libertarian discord servers. It is privacy focused, requiring no perms or data storing. It is the ultimate LP application with features to tie the libertarian internet community together on Discord.\n\nUse the prefix `-` before any commands. (ex: `-events` for events)')
	    .setThumbnail('https://i.postimg.cc/3RzDY40n/Logo.png')
	    .addFields(
		    { name: 'Liberty Commands', value: '-`events`: See a list of libertarian events taking place across the internet.\n-`lp`: Look up official LP links.\n-`caucuses`: Look up official LP caucus links.\n-`discords`: Join other libertarian discord servers.\n-`news`: Find libertarian news sources covering the party and politics in general.\n-`nolan`: Take the Nolan Political Test to see where you fall on the political compass.\n-`libertarianism`: Engage in a short conversation with the bot to explore the foundations of libertarian philosophy.\n-`taxation`: Learn why taxation is theft.'},
		    { name: 'Bot Commands', value: '-`info`: Pulls up general information about the bot.\n-`links`: Pulls up all of the bots relevant links.\n-`ping`: Checks to see if the bot is still connected. It should respond with pong!'},
        { name: 'Invite LibertyBot To Another Server!', value: `Invite the bot to another server [here](https://discord.com/oauth2/authorize?client_id=853455948848300043&scope=bot+applications.commands)\nCheck out the website [here](https://top.gg/bot/853455948848300043)`},
	    )
	    .setTimestamp()
	    .setFooter('I was created by Theodore Gercken, email contact.theodoregercken@gmail.com to request a feature, report a bug/typo, or just get in touch!');
    message.channel.send(exampleEmbed);

	},
};
