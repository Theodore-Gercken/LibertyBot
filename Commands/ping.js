const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed } = require('discord.js');
const { color } = require("../config.json")

module.exports = {
	data: new SlashCommandBuilder()
		.setName('ping')
		.setDescription('Check that the bot is online.'),
	async execute(interaction) {
        const embed = new MessageEmbed()
	        .setColor(color)
	        .setTitle('Pong!')
            .setDescription(`Latency is ${Date.now() - interaction.createdTimestamp}ms.`)
            .setThumbnail('https://images.pexels.com/photos/187329/pexels-photo-187329.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260')
	        .setTimestamp()
	        .setFooter({text: 'I was created by Theodore Gercken, use /feedback to request a feature, report a bug/typo, or just get in touch!'});
		await interaction.reply({ embeds: [embed], ephemeral: true  });
	},
};