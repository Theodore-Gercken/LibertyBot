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
		    { name: 'Event Creation Form', value: `[Link](https://forms.gle/DXSAaWDTWyCRTGZf7)`},
        { name: 'Creators Website', value: `[Link](https://www.theodoregercken.com)`},
	    )
      .setThumbnail('https://i.postimg.cc/3RzDY40n/Logo.png')
	    .setTimestamp()
	    .setFooter('I was created by Theodore Gercken, email contact.theodoregercken@gmail.com to request a feature, report a bug/typo, or just get in touch!');
    message.channel.send(exampleEmbed);
    
	},
};