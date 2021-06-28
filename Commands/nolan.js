const Discord = require('discord.js');

module.exports = {
	name: 'nolan',
	description: 'nolan',
	execute(message, args) {
		if (!args.length) {
			const exampleEmbed = new Discord.MessageEmbed()
	    .setColor('#E5C601')
	    .setTitle('The Nolan Political Test')
	    .setDescription(`'Have you ever wondered where you fall on the American political spectrum? The Nolan Test can help! Just count how many of the following statements you agree with in the first set and how many you agree with in the second set. Then let me know you are ready by using the `-nolan result` command.')
	    .setThumbnail('https://images.pexels.com/photos/5775/calculator-scientific.jpg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260')
      .addFields(
		    { name: 'Set 1', value: '*The government should:*\n-protect absolute free speech\n-not infringe on the right to bear arms\n-treat all people (regardless of race, sex, or sexual identity) equally in all regards\n-withdraw our troops from non-defensive activites\n-stop surveilling their citizens through programs such as the NSA'},
		    { name: 'Set 2', value: `*The government should:*\n-not bail out corporations or in any other way engage in corporate wellfare\n-allow absolute free trade both within the United States and with oversees partners\n-wind down welfare programs such as social security or medicare\n-allow private businesses to do whatever they want providing they are not engaging in actions that would hurt another individual or corporation\n-cut taxes and spending`},
	    )
	    .setTimestamp()
	    .setFooter('I was created by Theodore Gercken, email contact.theodoregercken@gmail.com to request a feature, report a bug/typo, or just get in touch!');
    message.channel.send(exampleEmbed);
    
    } else {
			const exampleEmbed = new Discord.MessageEmbed()
	    .setColor('#E5C601')
	    .setTitle('The Nolan Political Test')
	    .setDescription(`Scores between 0 and 2 are B scores, and scores between 3 and 5 are A scores. Find your match below:\n\n-AA: You are a libertarian! A strong mix of personal and economic freedom indicates that you will be right at home in America's third-largest political party!\n-AB: You are a liberal as you believe more in personal than economic freedoms. \n-BA: You are a conservative as you believe more in economic than personal freedoms. \n-BB: You are a communitarian because you believe in neither set of freedoms.\n\n*If you did not get the result of libertarian, feel free to try to command "libertarianism" to learn more about the philosophy.*`)
	    .setThumbnail('https://images.pexels.com/photos/5775/calculator-scientific.jpg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260')
	    .setTimestamp()
	    .setFooter('I was created by Theodore Gercken, email contact.theodoregercken@gmail.com to request a feature, report a bug/typo, or just get in touch!');
    message.channel.send(exampleEmbed);
    
		}
	},
};
