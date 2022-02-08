const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed } = require('discord.js');
const {google} = require("googleapis")
const { color, logo } = require("../config.json")

module.exports = {
	data: new SlashCommandBuilder()
		.setName('info')
		.setDescription('Find out about LibertyBot!'),
	async execute(interaction) {
		const auth = new google.auth.GoogleAuth({
            keyFile: "sheets-credentials.json",
            scopes: "https://www.googleapis.com/auth/spreadsheets",
        });
		const client = await auth.getClient();
        const googleSheets = google.sheets({ version: "v4", auth: client });
        const spreadsheetId = "1d_AGk80pukZ1Sej0jfislgafNw-1KMqG4czmltfFdzk";
		const users = await googleSheets.spreadsheets.values.get({spreadsheetId, range: `Sheet1!D1`});
        const embed = new MessageEmbed()
	        .setColor(color)
	        .setTitle('About LibertyBot!')
            .setDescription(`This bot is the generic LibertyBot application, one of many bots designed by Theodore Gercken as a community service project for libertarian discord servers. Anyone can add this bot to their server and learn more about it at it's website [here](https://libertybot.theodoregercken.com), and organizations can request a custom LibertyBot with additional features and total customization. Use /feedback or email t.gercken@lpac.us to get a custom application for your server!\n\n**Total LibertyBot Users**: ${users.data.values[0][0]}\n\nMaking LibertyBot available to everyone 24/7 costs money, so if you want to help out to make sure it keeps existing, feel free to donate to the [patreon](https://www.patreon.com/libertybot)!\n\nJoin the support server [here](https://discord.gg/CDC2BrEFdm)!\n\nView LibertyBot's open sourced code [here](https://github.com/Theodore-Gercken/LibertyBot)!`)
            .setThumbnail(logo)
	        .setTimestamp()
	        .setFooter({text: 'I was created by Theodore Gercken, use /feedback to request a feature, report a bug/typo, or just get in touch!'});
		await interaction.reply({ embeds: [embed] });
	},
};