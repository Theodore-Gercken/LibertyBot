const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed } = require('discord.js');
const { color, logo } = require("../config.json")

module.exports = {
	data: new SlashCommandBuilder()
		.setName('feedback')
		.setDescription("Send feedback or bug reports to the bot's creator. (this feedback will not be public)")
		.addStringOption(option =>
			option.setName('message')
				.setDescription('Your request, bug report, or message!')
				.setRequired(true))
		.addStringOption(option =>
            option.setName('email')
            	.setDescription('Your email. (optional)')),
	async execute(interaction) {
		if (interaction.options.getString("email") === null) {
			var email = "No Email Provided"
		} else {
			var email = interaction.options.getString("email")
		}
        const embed = new MessageEmbed()
	        .setColor(color)
	        .setTitle('Your Response Has Been Recorded!')
			.setDescription(`Message/Feedback: ${interaction.options.getString("message")}\nEmail: ${email}`)
            .setThumbnail(logo)
	        .setTimestamp()
	        .setFooter({text: 'I was created by Theodore Gercken, use /feedback to request a feature, report a bug/typo, or just get in touch!'});
		var user = await interaction.client.users.fetch("666430201546407949")
		const embed2 = new MessageEmbed()
            .setColor(color)
            .setTitle(`New feedback from ${interaction.user.tag}.`)
            .setDescription(`Message/Feedback: ${interaction.options.getString("message")}\nEmail: ${email}`)
            .setThumbnail(interaction.user.displayAvatarURL({ dynamic: true }))
            .setTimestamp()
            .setFooter({text: 'I was created by Theodore Gercken, use /feedback to request a feature, report a bug/typo, or just get in touch!'});
		user.send({ embeds: [embed2] })
		await interaction.reply({ embeds: [embed], ephemeral: true});
	},
};