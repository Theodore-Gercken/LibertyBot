const Discord = require('discord.js');

module.exports = {
	name: 'discords',
	description: 'discords',
	execute(message, args) {
		const exampleEmbed = new Discord.MessageEmbed()
	    .setColor('#E5C601')
	    .setTitle('Other Discord Servers')
	    .setDescription('Here are links to other liberty minded discords.')
      .addFields(
		    { name: 'The Libertarian Youth Caucus', value: '[Invite Link](https://discord.gg/Rz8ZMBPfEE)'},
		    { name: 'The Alameda County Libertarian Party', value: `[Invite Link](https://discord.gg/zSVgbnkDBh)`},
        { name: 'Work For Liberty', value: `[Invite Link](https://discord.gg/f7NhsgAa3A)`},
	    )
	    .setThumbnail('https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.pcgamesn.com%2Fwp-content%2Fuploads%2F2018%2F10%2Fdiscord-logo.jpg&f=1&nofb=1')
	    .setTimestamp()
	    .setFooter('I was created by Theodore Gercken, email contact.theodoregercken@gmail.com to request a feature, report a bug/typo, or just get in touch!');
    message.channel.send(exampleEmbed);
    
	},
};