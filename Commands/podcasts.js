const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed } = require('discord.js');
const { color } = require("../config.json")

module.exports = {
	data: new SlashCommandBuilder()
		.setName('podcasts')
		.setDescription('Finds libertarian podcasts.'),
	async execute(interaction) {
        const embed = new MessageEmbed()
	        .setColor(color)
	        .setTitle('Libertarian podcasts.')
            .setThumbnail('https://images.pexels.com/photos/6954162/pexels-photo-6954162.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260')
	        .addFields(
                { name: 'Lions of Liberty', value: '[Link](https://www.lionsofliberty.com/episodes)', inline: true},
                { name: 'The Tom Woods Show', value: '[Link](https://tomwoods.com/podcasts/)', inline: true},
                { name: 'Free Thoughts', value: '[Link](https://www.libertarianism.org/podcasts/free-thoughts)', inline: true},
                { name: 'Ron Paul Liberty Report', value: `[Link](http://www.ronpaullibertyreport.com/)`, inline: true},
                { name: 'Part Of The Problem', value: '[Link](https://gasdigitalnetwork.com/gdn-show-channels/part-of-the-problem/)', inline: true},
                { name: 'The Brian Nichols Show', value: '[Link](https://briannicholsshow.com/episodes)', inline: true},
                { name: 'Chris Spangle Show', value: '[Link](https://wearelibertarians.com)', inline: true},
                { name: 'We Are Libertarians', value: '[Link](https://wearelibertarians.com/category/podcasts/)', inline: true},
            )
            .setTimestamp()
	        .setFooter({text: 'I was created by Theodore Gercken, use /feedback to request a feature, report a bug/typo, or just get in touch!'});
		await interaction.reply({ embeds: [embed] });
	},
};