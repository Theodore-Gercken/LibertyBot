const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed } = require('discord.js');
const { color } = require("../config.json")

module.exports = {
	data: new SlashCommandBuilder()
		.setName('taxation')
		.setDescription('Learn why taxation is theft.'),
	async execute(interaction) {
        const embed = new MessageEmbed()
	        .setColor(color)
	        .setTitle('Is Taxation Theft?')
            .setDescription(`If you want to learn about whether taxation is theft check out this [awesome interactive website](https://exploreistaxationtheft.com)`)
            .setThumbnail('https://images.pexels.com/photos/6863250/pexels-photo-6863250.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260')
	        .setTimestamp()
	        .setFooter({text: 'I was created by Theodore Gercken, use /feedback to request a feature, report a bug/typo, or just get in touch!'});
		await interaction.reply({ embeds: [embed] });
	},
};