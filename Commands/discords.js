const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed } = require('discord.js');
const { color } = require("../config.json")

module.exports = {
	data: new SlashCommandBuilder()
		.setName('discords')
		.setDescription('Invitation links to libertarian discords.'),
	async execute(interaction) {
        const embed = new MessageEmbed()
            .setColor(color)
	        .setTitle('Libertarian Discords!')
            .setThumbnail('https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.pcgamesn.com%2Fwp-content%2Fuploads%2F2018%2F10%2Fdiscord-logo.jpg&f=1&nofb=1')
	        .addFields(
				{ name: 'Work For Liberty', value: `[Invite Link](https://discord.gg/f7NhsgAa3A)`},
				{ name: 'Libertarian Memes', value: `[Invite Link](https://discord.gg/9XEWMuPP)`},
				{ name: 'The Libertarian Youth Caucus', value: '[Invite Link](https://discord.gg/Rz8ZMBPfEE)'},
				{ name: 'The Libertarian Veterans Caucus', value: '[Invite Link](https://discord.com/invite/CmJQyUEnxd)'},
	        )
            .setTimestamp()
	        .setFooter({text: 'I was created by Theodore Gercken, use /feedback to request a feature, report a bug/typo, or just get in touch!'});
		await interaction.reply({ embeds: [embed] });
	},
};