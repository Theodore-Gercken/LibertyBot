const Discord = require('discord.js');

module.exports = {
	name: 'taxation',
	description: 'taxation',
	execute(message, args) {
		const exampleEmbed = new Discord.MessageEmbed()
	    .setColor('#E5C601')
	    .setTitle('Is Taxation Theft?')
      .setDescription('If you want to learn about whether taxation is theft check out this [awesome interactive website](https://exploreistaxationtheft.com)')
	    .setThumbnail('https://images.pexels.com/photos/6863250/pexels-photo-6863250.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260')
	    .setTimestamp()
	    .setFooter('I was created by Theodore Gercken, email contact.theodoregercken@gmail.com to request a feature, report a bug/typo, or just get in touch!');
    message.channel.send(exampleEmbed);
    
	},
};