const Discord = require('discord.js');

module.exports = {
	name: 'events',
	description: 'events',
	execute(message, args) {
		if (!args.length) {
			const exampleEmbed = new Discord.MessageEmbed()
	    .setColor('#E5C601')
	    .setTitle('Events')
	    .setDescription('Use one of the following commands to see the events of one of our partner organizations.\n\n*You can learn more about each event by using the number with the command (ex: "events 1" for the first event)*')
	    .setThumbnail('https://images.pexels.com/photos/4226140/pexels-photo-4226140.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260')
	    .addFields(
		    { name: 'The Libertarian Youth Caucus', value: '- No Events Currently Scheduled'},
        { name: 'Work For Liberty', value: '- No Events Currently Scheduled'},
	    )
	    .setTimestamp()
	    .setFooter('I was created by Theodore Gercken, email contact.theodoregercken@gmail.com to request a feature, report a bug/typo, or just get in touch!');
    message.channel.send(exampleEmbed);;
    
    } else if (args[0] === '1') {
			const exampleEmbed = new Discord.MessageEmbed()
	    .setColor('#E5C601')
	    .setTitle('No Events Currently Scheduled!')
	    .setThumbnail('https://images.pexels.com/photos/4226140/pexels-photo-4226140.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260')
	    .setTimestamp()
	    .setFooter('I was created by Theodore Gercken, email contact.theodoregercken@gmail.com to request a feature, report a bug/typo, or just get in touch!');
    message.channel.send(exampleEmbed);

		} else {
			const exampleEmbed = new Discord.MessageEmbed()
	    .setColor('#E5C601')
	    .setTitle('That Is Not A Valid Event!')
	    .setThumbnail('https://images.pexels.com/photos/4226140/pexels-photo-4226140.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260')
	    .setTimestamp()
	    .setFooter('I was created by Theodore Gercken, email contact.theodoregercken@gmail.com to request a feature, report a bug/typo, or just get in touch!');
    message.channel.send(exampleEmbed);
    
		}
	},
};