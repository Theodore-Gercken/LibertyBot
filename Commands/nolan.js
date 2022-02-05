const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed } = require('discord.js');
const { color } = require("../config.json")

module.exports = {
	data: new SlashCommandBuilder()
		.setName('nolan')
		.setDescription("Take the world's smallest political quiz!")
		.addStringOption(option =>
            option.setName('question-one')
                .setDescription('The government should protect absolute free speech.')
                .setRequired(true)
                .addChoice('I agree', 'y')
                .addChoice('I disagree', 'n'))
		.addStringOption(option =>
            option.setName('question-two')
                .setDescription('The government should not infringe on the right to bear arms.')
                .setRequired(true)
                .addChoice('I agree', 'y')
                .addChoice('I disagree', 'n'))
		.addStringOption(option =>
            option.setName('question-three')
                .setDescription('The government should treat all people (regardless of race, sex, or sexual identity) equally.')
                .setRequired(true)
                .addChoice('I agree', 'y')
                .addChoice('I disagree', 'n'))
		.addStringOption(option =>
            option.setName('question-four')
                .setDescription('The government should withdraw our troops from non-defensive activites.')
                .setRequired(true)
                .addChoice('I agree', 'y')
                .addChoice('I disagree', 'n'))
		.addStringOption(option =>
            option.setName('question-five')
                .setDescription('The government should stop surveilling their citizens through programs such as the NSA.')
                .setRequired(true)
                .addChoice('I agree', 'y')
                .addChoice('I disagree', 'n'))
		.addStringOption(option =>
            option.setName('question-six')
                .setDescription('The government should not bail out corporations or in any other way engage in corporate wellfare.')
                .setRequired(true)
                .addChoice('I agree', 'y')
                .addChoice('I disagree', 'n'))
		.addStringOption(option =>
            option.setName('question-seven')
                .setDescription('The government should allow absolute free trade within the United States and oversees.')
                .setRequired(true)
                .addChoice('I agree', 'y')
                .addChoice('I disagree', 'n'))
		.addStringOption(option =>
            option.setName('question-eight')
                .setDescription('The government should wind down welfare programs such as social security or medicare.')
                .setRequired(true)
                .addChoice('I agree', 'y')
                .addChoice('I disagree', 'n'))
		.addStringOption(option =>
            option.setName('question-nine')
                .setDescription('The government should allow private businesses to do anything if it does not hurt others.')
                .setRequired(true)
                .addChoice('I agree', 'y')
                .addChoice('I disagree', 'n'))
		.addStringOption(option =>
            option.setName('question-ten')
                .setDescription('The government should cut taxes and spending.')
                .setRequired(true)
                .addChoice('I agree', 'y')
                .addChoice('I disagree', 'n'))
		.addStringOption(option =>
            option.setName('share')
                .setDescription('Would you like your results to be shared to the channel?')
                .setRequired(true)
                .addChoice('Yes', 'yes')
                .addChoice('No', 'no')),
	async execute(interaction) {
		if(((`${interaction.options.getString('question-one')}${interaction.options.getString('question-two')}${interaction.options.getString('question-three')}${interaction.options.getString('question-four')}${interaction.options.getString('question-five')}`.match(/y/g) || []).length) > 2) {
			var social_decision = "are"
		} else {
			var social_decision = "are not"
		}
		if(((`${interaction.options.getString('question-six')}${interaction.options.getString('question-seven')}${interaction.options.getString('question-eight')}${interaction.options.getString('question-nine')}${interaction.options.getString('question-ten')}`.match(/y/g) || []).length) > 2) {
			var econ_decision = "are"
		} else {
			var econ_decision = "are not"
		}
		const embed = new MessageEmbed()
	        .setColor(color)
	        .setTitle('The Nolan Political Test!')
			.setThumbnail('https://images.pexels.com/photos/5775/calculator-scientific.jpg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260')
            .setDescription(`The Nolan Political Test is a ten question quiz to outline basic libertarian principles. You answered with a libertarian persuasion on ${((`${interaction.options.getString('question-one')}${interaction.options.getString('question-two')}${interaction.options.getString('question-three')}${interaction.options.getString('question-four')}${interaction.options.getString('question-five')}`.match(/y/g) || []).length)}/5 social issues and ${((`${interaction.options.getString('question-six')}${interaction.options.getString('question-seven')}${interaction.options.getString('question-eight')}${interaction.options.getString('question-nine')}${interaction.options.getString('question-ten')}`.match(/y/g) || []).length)}/5 economic issues. This means you ${social_decision} socially libertarian and ${econ_decision} economically libertarian. Take the test by using /nolan!`)
	        .setTimestamp()
	        .setFooter({text: 'I was created by Theodore Gercken, use /feedback to request a feature, report a bug/typo, or just get in touch!'});
		if(interaction.options.getString('share') === 'yes') {
			interaction.reply({ embeds: [embed]});
		} else {
			interaction.reply({ embeds: [embed], ephemeral: true});
		}
        
	},
};