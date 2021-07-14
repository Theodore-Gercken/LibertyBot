const Discord = require('discord.js');

module.exports = {
	name: 'links',
	description: 'links',
	execute(message, args) {
		const exampleEmbed = new Discord.MessageEmbed()
	    .setColor('#E5C601')
	    .setTitle('Links')
	    .setDescription('Here are the important links associated with this bot.')
      .addFields(
		    { name: 'Invitation Link', value: '[Link](https://discord.com/oauth2/authorize?client_id=853455948848300043&scope=bot+applications.commands)'},
	              { name: 'Website', value: '[Link](https://top.gg/bot/853455948848300043)'},
        { name: 'Code', value: '[Link](https://github.com/Theodore-Gercken/LibertyBot)'},
		    { name: 'Event Creation Form', value: `[Link](https://forms.gle/DXSAaWDTWyCRTGZf7)`},
        { name: 'Patreon', value: '*Hosting LibertyBot 24/7 costs $8 a month, so if you want to help out to make sure it keeps existing as a free resource for everyone, feel free to donate to the patreon. Any money in excess of what is needed to host LibertyBot will be donated to the Libertarian Youth Caucus or the Frontier Project.*\n[Link](https://www.patreon.com/libertybot)'},
	    )
      .setThumbnail('https://i.postimg.cc/3RzDY40n/Logo.png')
	    .setTimestamp()
	    .setFooter('I was created by Theodore Gercken, email contact.theodoregercken@gmail.com to request a feature, report a bug/typo, or just get in touch!');
    message.channel.send(exampleEmbed);
    
	},
};
