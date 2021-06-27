const Discord = require('discord.js');

module.exports = {
	name: 'news',
	description: 'news',
	execute(message, args) {
		const exampleEmbed = new Discord.MessageEmbed()
	    .setColor('#E5C601')
	    .setTitle('Libertarian News')
	    .setDescription('Here are links to libertarian news sources.')
	    .setThumbnail('https://images.pexels.com/photos/4057663/pexels-photo-4057663.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260')
	    .addFields(
		    { name: 'The Liberty Herald', value: '[Link](https://thelibertyherald.com)', inline: true},
		    { name: 'Reason Magazine', value: `[Link](https://reason.com)`, inline: true},
	    )
	    .setTimestamp()
	    .setFooter('I was created by Theodore Gercken, email contact.theodoregercken@gmail.com to request a feature, report a bug/typo, or just get in touch!');
    message.channel.send(exampleEmbed);

	},
};