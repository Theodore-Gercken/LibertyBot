const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed } = require('discord.js');
const { color } = require("../config.json")

module.exports = {
	data: new SlashCommandBuilder()
		.setName('libertarian-af')
		.setDescription('For when something is libertarian af.'),
	async execute(interaction) {
		var links = ['https://c.tenor.com/AWo5batiskUAAAAd/libertarian-gun.gif', 'https://c.tenor.com/1l62KLwvuVcAAAAd/voluntaryism-libertarianism.gif', 'https://c.tenor.com/FfGbDuaJbOgAAAAC/libertarian-party-libertarian.gif', 'https://c.tenor.com/bAtGYjM2NNUAAAAM/not-left-not-right.gif', 'https://c.tenor.com/ER-hPMcFi_sAAAAM/libertarian-libertarian-party.gif', 'https://c.tenor.com/NdVcJcoz_KAAAAAM/real-libertarian-not-real-libertarian.gif', 'https://c.tenor.com/OmVabxp2M04AAAAM/libertarian-libertarian-party.gif', 'https://c.tenor.com/mmRqye96mRgAAAAM/spike-cohen-libertarian.gif', 'https://c.tenor.com/Vw_Ex8QMd94AAAAM/ancap-anarchist.gif'];
		var rand = Math.floor(Math.random()*links.length);
		var randomgif = links[rand];
		const userCount = interaction.client.guilds.cache.reduce((acc, guild) => acc + guild.memberCount, 0)
		console.log(userCount);
        const embed = new MessageEmbed()
	        .setColor(color)
			.setImage(`${randomgif}`)
	        .setTimestamp()
	        .setFooter({text: 'I was created by Theodore Gercken, use /feedback to request a feature, report a bug/typo, or just get in touch!'});
		await interaction.reply({ embeds: [embed] });
	},
};