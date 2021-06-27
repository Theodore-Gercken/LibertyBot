const Discord = require('discord.js');

module.exports = {
	name: 'ping',
	description: 'ping',
	execute(message, args) {
		const exampleEmbed = new Discord.MessageEmbed()
	    .setColor('#E5C601')
	    .setTitle('Pong!')
      .setThumbnail('https://images.pexels.com/photos/187329/pexels-photo-187329.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260')
	    .setTimestamp()
	    .setFooter('I was created by Theodore Gercken, email contact.theodoregercken@gmail.com to request a feature, report a bug/typo, or just get in touch!');
    message.channel.send(exampleEmbed);

	},
};

///Can use https://github.com/AirFusion45/db8bot/blob/master/commands/ping.js to add a description about latency