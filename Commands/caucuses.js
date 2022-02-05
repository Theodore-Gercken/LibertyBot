const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed } = require('discord.js');
const { color } = require("../config.json")

module.exports = {
	data: new SlashCommandBuilder()
		.setName('caucuses')
		.setDescription('Information about LP caucuses.'),
	async execute(interaction) {
        const embed = new MessageEmbed()
            .setColor(color)
	        .setTitle('Libertarian Party Caucuses!')
            .setThumbnail('https://www.lp.org/wp-content/uploads/2017/03/party_of_principle_logo.png')
	        .addFields(
		        { name: 'Mises', value: '- [Website](https://lpmisescaucus.com)\n- [Facebook](https://www.facebook.com/lpmisescaucus)\n- [Twitter](https://twitter.com/LPMisesCaucus)\n- [Instagram](https://www.instagram.com/lpmisescaucus)\n- [LPedia](https://lpedia.org/wiki/Mises_Caucus)', inline: true},
                { name: 'Radical', value: '- [Website](https://www.lpradicalcaucus.org)\n- [Facebook](https://www.facebook.com/LPRadicals)\n- [Twitter](https://twitter.com/LPRadicals)\n- [Instagram](https://www.instagram.com/lpradicals/)\n- [LPedia](https://lpedia.org/wiki/Libertarian_Party_Radical_Caucus_(2006))', inline: true},
		        { name: 'Youth', value: `- [Website](https://lycaucus.org)\n- [Facebook](https://www.facebook.com/LYCaucus)\n-[Instagram](https://www.instagram.com/libertarian_youth_caucus/)\n- [LPedia](https://lpedia.org/wiki/Libertarian_Youth_Caucus)`, inline: true},
                { name: 'Veterans', value: '- [Website](https://linktr.ee/LPVC)\n- [Facebook](https://www.facebook.com/LPVets)\n- [Twitter](https://mobile.twitter.com/lpvets)', inline: true},
                { name: 'Other', value: `- [LPedia](https://lpedia.org/wiki/List_of_Libertarian_Party_Caucuses)`, inline: true},
	        )
            .setTimestamp()
	        .setFooter({text: 'I was created by Theodore Gercken, use /feedback to request a feature, report a bug/typo, or just get in touch!'});
		await interaction.reply({ embeds: [embed] });
	},
};