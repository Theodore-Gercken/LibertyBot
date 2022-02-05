const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed } = require('discord.js');
const { color } = require("../config.json")

module.exports = {
	data: new SlashCommandBuilder()
		.setName('news')
		.setDescription('Libertarian news sources.'),
	async execute(interaction) {
        const embed = new MessageEmbed()
	        .setColor(color)
	        .setTitle('Libertarian News Sources!')
            .setThumbnail('https://images.pexels.com/photos/4057663/pexels-photo-4057663.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260')
	        .addFields(
                { name: 'The Mises Institute', value: '[Link](https://mises.org)', inline: true},
                { name: 'The Cato Institute', value: '[Link](https://www.cato.org)', inline: true},
                { name: 'The Libertarian Party', value: '[Link](https://www.lp.org/press-releases-party-news/)', inline: true},
                { name: 'Reason Magazine', value: `[Link](https://reason.com)`, inline: true},
                { name: 'The Liberty Herald', value: '[Link](https://thelibertyherald.com)', inline: true},
            )
            .setTimestamp()
	        .setFooter({text: 'I was created by Theodore Gercken, use /feedback to request a feature, report a bug/typo, or just get in touch!'});
		await interaction.reply({ embeds: [embed] });
	},
};