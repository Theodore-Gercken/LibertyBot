const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed } = require('discord.js');
const { color } = require("../config.json")

module.exports = {
	data: new SlashCommandBuilder()
		.setName('lp')
		.setDescription('Information about a state LP.')
        .addStringOption(option =>
            option.setName('state-abbreviation')
                .setDescription("The lower case postal code of the state (leave blank for national)")),
	async execute(interaction) {
		if (interaction.options.getString('state-abbreviation') === `al`) {
      		const embed = new MessageEmbed()
	    		.setColor(color)
	    		.setTitle(`The Libertarian Party of Alabama`)
	    		.setThumbnail(`https://lpalabama.org/wp-content/uploads/sites/27/2019/04/AL_Logo_gray.png`)
      			.addFields(
		   			{ name: `Website`, value: `[Link](https://lpalabama.org)`, inline: true},
        			{ name: `Twitter`, value: `[Link](https://twitter.com/LP_Alabama)`, inline: true},
        			{ name: `Facebook`, value: `[Link](https://www.facebook.com/lpalabama)`, inline: true},
        			{ name: `Instagram`, value: `[Link](https://www.instagram.com/lpalabama)`, inline: true},
        			{ name: `Reddit`, value: `[Link](https://www.reddit.com/r/AlabamaLibertarians)`, inline: true},
        			{ name: `LPedia`, value: `[Link](http://lpedia.org/wiki/Libertarian_Party_of_Alabama)`, inline: true},
	    		)
	    		.setTimestamp()
	    		.setFooter({text: 'I was created by Theodore Gercken, use /feedback to request a feature, report a bug/typo, or just get in touch!'});
    		interaction.reply({ embeds: [embed]});
		} else if (interaction.options.getString('state-abbreviation') === `ak`) {
      		const embed = new MessageEmbed()
	    		.setColor(color)
	    		.setTitle(`The Libertarian Party of Alaska`)
	    		.setThumbnail(`https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fen%2F0%2F00%2FLP_of_Alaska.png&f=1&nofb=1`)
      			.addFields(
		    		{ name: `Website`, value: `[Link](http://alaskalp.org/index.html)`, inline: true},
        			{ name: `Twitter`, value: `[Link](https://twitter.com/AlaskaLP)`, inline: true},
        			{ name: `Facebook`, value: `[Link](https://www.facebook.com/AlaskaLiberty)`, inline: true},
        			{ name: `LPedia`, value: `[Link](http://lpedia.org/wiki/Alaska_Libertarian_Party)`, inline: true},
	    		)
	    		.setTimestamp()
	    		.setFooter({text: 'I was created by Theodore Gercken, use /feedback to request a feature, report a bug/typo, or just get in touch!'});
    		interaction.reply({ embeds: [embed]});
		} else if (interaction.options.getString('state-abbreviation') === `az`) {
      		const embed = new MessageEmbed()
	    		.setColor(color)
	    		.setTitle(`The Libertarian Party of Arizona`)
	    		.setThumbnail(`https://azlp.org/wp-content/uploads/sites/39/2020/09/AZLP-logo-250x93.png`)
      			.addFields(
		    		{ name: `Website`, value: `[Link](https://azlp.org)`, inline: true},
        			{ name: `Twitter`, value: `[Link](https://twitter.com/Arizona_LP)`, inline: true},
        			{ name: `Facebook`, value: `[Link](https://www.facebook.com/LParizona)`, inline: true},
        			{ name: `Reddit`, value: `[Link](https://www.reddit.com/r/ArizonaLibertarians)`, inline: true},
        			{ name: `LPedia`, value: `[Link](http://lpedia.org/wiki/Arizona_Libertarian_Party)`, inline: true},
	    		)
	    		.setTimestamp()
	    		.setFooter({text: 'I was created by Theodore Gercken, use /feedback to request a feature, report a bug/typo, or just get in touch!'});
    		interaction.reply({ embeds: [embed]});
		} else if (interaction.options.getString('state-abbreviation') === `ar`) {
			const embed = new MessageEmbed()
	    		.setColor(color)
	    		.setTitle(`The Libertarian Party of Arkansas`)
	    		.setThumbnail(`https://lpar.org/wp-content/uploads/sites/10/2017/01/lpar_logo_2.png`)
      			.addFields(
		    		{ name: `Website`, value: `[Link](https://lpar.org)`, inline: true},
        			{ name: `Twitter`, value: `[Link](https://twitter.com/LPArkansas)`, inline: true},
        			{ name: `Facebook`, value: `[Link](https://www.facebook.com/lp.arkansas)`, inline: true},
        			{ name: `Instagram`, value: `[Link](https://www.instagram.com/lparkansas)`, inline: true},
        			{ name: `Reddit`, value: `[Link](https://www.reddit.com/r/ArkansasLibertarians)`, inline: true},
        			{ name: `LPedia`, value: `[Link](http://lpedia.org/wiki/Arkansas_Libertarian_Party)`, inline: true},
	    		)
	    		.setTimestamp()
	    		.setFooter({text: 'I was created by Theodore Gercken, use /feedback to request a feature, report a bug/typo, or just get in touch!'});
    		interaction.reply({ embeds: [embed]});
		} else if (interaction.options.getString('state-abbreviation') === `ca`) {
			const embed = new MessageEmbed()
	    		.setColor(color)
	    		.setTitle(`The Libertarian Party of California`)
	    		.setThumbnail(`https://u1myo26o1t789cb2l4fjwcx8-wpengine.netdna-ssl.com/wp-content/uploads/2019/10/california-libertarian-party-logo.png`)
      			.addFields(
		   	 		{ name: `Website`, value: `[Link](https://ca.lp.org)`, inline: true},
        			{ name: `Twitter`, value: `[Link](https://twitter.com/LPofCal)`, inline: true},
        			{ name: `Facebook`, value: `[Link](https://www.facebook.com/LPCalifornia)`, inline: true},
        			{ name: `Instagram`, value: `[Link](https://www.instagram.com/libertarianpartyofcalifornia)`, inline: true},
        			{ name: `Reddit`, value: `[Link](https://www.reddit.com/r/LPCalifornia/)`, inline: true},
        			{ name: `LPedia`, value: `[Link](http://lpedia.org/wiki/Libertarian_Party_of_California)`, inline: true},
	    		)
	    		.setTimestamp()
	    		.setFooter({text: 'I was created by Theodore Gercken, use /feedback to request a feature, report a bug/typo, or just get in touch!'});
    		interaction.reply({ embeds: [embed]});
		} else if (interaction.options.getString('state-abbreviation') === `co`) {
			const embed = new MessageEmbed()
	    		.setColor(color)
	    		.setTitle(`The Libertarian Party of Colorado`)
	    		.setThumbnail(`https://lpcolorado.org/wp-content/uploads/sites/26/2018/11/CO_logo_gray_dark-250x93.png`)
      			.addFields(
		    		{ name: `Website`, value: `[Link](https://lpcolorado.org)`, inline: true},
        			{ name: `Twitter`, value: `[Link](https://twitter.com/LPCO)`, inline: true},
        			{ name: `Facebook`, value: `[Link](https://www.facebook.com/lpcolorado)`, inline: true},
        			{ name: `Instagram`, value: `[Link](https://www.instagram.com/lpofcolorado)`, inline: true},
        			{ name: `Reddit`, value: `[Link](https://www.reddit.com/r/ColoradoLibertarian)`, inline: true},
        			{ name: `LPedia`, value: `[Link](http://lpedia.org/wiki/Libertarian_Party_of_Colorado)`, inline: true},
	    		)
	    		.setTimestamp()
	    		.setFooter({text: 'I was created by Theodore Gercken, use /feedback to request a feature, report a bug/typo, or just get in touch!'});
    		interaction.reply({ embeds: [embed]});
		} else if (interaction.options.getString('state-abbreviation') === `ct`) {
			const embed = new MessageEmbed()
	    		.setColor(color)
	    		.setTitle(`The Libertarian Party of Connecticut`)
	    		.setThumbnail(`https://d3n8a8pro7vhmx.cloudfront.net/lpct/sites/1/meta_images/original/lib_ct.png?1525229918`)
      			.addFields(
		    		{ name: `Website`, value: `[Link](https://www.lpct.org)`, inline: true},
        			{ name: `Twitter`, value: `[Link](https://twitter.com/LibertarianCT)`, inline: true},
        			{ name: `Facebook`, value: `[Link](https://www.facebook.com/LPConn)`, inline: true},
        			{ name: `Reddit`, value: `[Link](https://www.reddit.com/r/CTLibertarians/)`, inline: true},
        			{ name: `LPedia`, value: `[Link](http://lpedia.org/wiki/Libertarian_Party_of_Connecticut)`, inline: true},
	    		)
	    		.setTimestamp()
	    		.setFooter({text: 'I was created by Theodore Gercken, use /feedback to request a feature, report a bug/typo, or just get in touch!'});
    		interaction.reply({ embeds: [embed]});
		} else if (interaction.options.getString('state-abbreviation') === `de`) {
			const embed = new MessageEmbed()
	    		.setColor(color)
	    		.setTitle(`The Libertarian Party of Deleware`)
	    		.setThumbnail(`http://4.bp.blogspot.com/-jNHsgvFz8gc/YBBh3Ww4ipI/AAAAAAAAO5w/98LeWoNZZK87MncFoftJpdoMWPKFXTZkgCK4BGAYYCw/s1600/141793153_10106723053244314_6205238022029510160_o.jpg`)
      			.addFields(
		    		{ name: `Website`, value: `[Link](http://www.lpdelaware.org)`, inline: true},
        			{ name: `Twitter`, value: `[Link](https://twitter.com/lpdelaware)`, inline: true},
        			{ name: `Facebook`, value: `[Link](https://www.facebook.com/LPDel)`, inline: true},
        			{ name: `Reddit`, value: `[Link](https://www.reddit.com/r/DelawareLibertarians)`, inline: true},
        			{ name: `LPedia`, value: `[Link](http://lpedia.org/wiki/Libertarian_Party_of_Delaware)`, inline: true},
	    		)
	    		.setTimestamp()
	    		.setFooter({text: 'I was created by Theodore Gercken, use /feedback to request a feature, report a bug/typo, or just get in touch!'});
    		interaction.reply({ embeds: [embed]});
		} else if (interaction.options.getString('state-abbreviation') === `dc`) {
			const embed = new MessageEmbed()
	    		.setColor(color)
	    		.setTitle(`The Libertarian Party of Washington DC`)
	    		.setThumbnail(`https://pbs.twimg.com/profile_images/892152057200771081/NmiPbbYt_400x400.jpg`)
      			.addFields(
		    		{ name: `Website`, value: `[Link](https://www.dclibertarians.org)`, inline: true},
        			{ name: `Twitter`, value: `[Link](https://twitter.com/LibertarianDC)`, inline: true},
        			{ name: `Facebook`, value: `[Link](https://www.facebook.com/dclibertarians)`, inline: true},
        			{ name: `Reddit`, value: `[Link](https://www.reddit.com/r/DCLibertarians)`, inline: true},
        			{ name: `LPedia`, value: `[Link](http://lpedia.org/wiki/Libertarian_Party_of_the_District_of_Columbia)`, inline: true},
	    		)
	    		.setTimestamp()
	    		.setFooter({text: 'I was created by Theodore Gercken, use /feedback to request a feature, report a bug/typo, or just get in touch!'});
    		interaction.reply({ embeds: [embed]});
		} else if (interaction.options.getString('state-abbreviation') === `fl`) {
			const embed = new MessageEmbed()
	    		.setColor(color)
	    		.setTitle(`The Libertarian Party of Florida`)
	    		.setThumbnail(`https://lpf.org/wp-content/uploads/sites/35/2021/04/LPF-Logo_Banner_trans.png`)
      			.addFields(
		    		{ name: `Website`, value: `[Link](https://lpf.org)`, inline: true},
        			{ name: `Twitter`, value: `[Link](https://twitter.com/LP_Florida)`, inline: true},
        			{ name: `Facebook`, value: `[Link](https://www.facebook.com/LPFlorida)`, inline: true},
        			{ name: `Instagram`, value: `[Link](https://www.instagram.com/lpflorida)`, inline: true},
        			{ name: `Reddit`, value: `[Link](https://www.reddit.com/r/lpfl)`, inline: true},
        			{ name: `LPedia`, value: `[Link](http://lpedia.org/wiki/Libertarian_Party_of_Florida)`, inline: true},
	    		)
	    		.setTimestamp()
	    		.setFooter({text: 'I was created by Theodore Gercken, use /feedback to request a feature, report a bug/typo, or just get in touch!'});
    		interaction.reply({ embeds: [embed]});
		} else if (interaction.options.getString('state-abbreviation') === `ga`) {
			const embed = new MessageEmbed()
	    		.setColor(color)
	    		.setTitle(`The Libertarian Party of Georgia`)
	    		.setThumbnail(`https://lpgeorgia.com/wp-content/uploads/sites/22/2017/08/lpga_logo_overflow_150px-1.png`)
      			.addFields(
		    		{ name: `Website`, value: `[Link](https://lpgeorgia.com)`, inline: true},
        			{ name: `Twitter`, value: `[Link](https://twitter.com/LPGeorgia)`, inline: true},
        			{ name: `Facebook`, value: `[Link](https://www.facebook.com/LPGeorgia)`, inline: true},
        			{ name: `Instagram`, value: `[Link](https://www.instagram.com/lpofgeorgia)`, inline: true},
        			{ name: `Reddit`, value: `[Link](https://www.reddit.com/r/GeorgiaLibertarians)`, inline: true},
        			{ name: `LPedia`, value: `[Link](http://lpedia.org/wiki/Libertarian_Party_of_Georgia)`, inline: true},
	    		)
	    		.setTimestamp()
	    		.setFooter({text: 'I was created by Theodore Gercken, use /feedback to request a feature, report a bug/typo, or just get in touch!'});
    		interaction.reply({ embeds: [embed]});
		} else if (interaction.options.getString('state-abbreviation') === `hi`) {
			const embed = new MessageEmbed()
	    		.setColor(color)
	    		.setTitle(`The Libertarian Party of Hawaii`)
	    		.setThumbnail(`https://static.wixstatic.com/media/fe08f5_694581d6c1bb4d3deab75610d1cbc421.jpg/v1/fill/w_416,h_280,al_c,q_80,usm_0.66_1.00_0.01/fe08f5_694581d6c1bb4d3deab75610d1cbc421.webp`)
      			.addFields(
		    		{ name: `Website`, value: `[Link](https://www.libertarianpartyofhawaii.com)`, inline: true},
        			{ name: `Twitter`, value: `[Link](https://twitter.com/LPBigIsland)`, inline: true},
        			{ name: `Facebook`, value: `[Link](https://www.facebook.com/LibertarianPartyOfHawaii)`, inline: true},
        			{ name: `LPedia`, value: `[Link](http://lpedia.org/wiki/Libertarian_Party_of_Hawaii)`, inline: true},
	    		)
	    		.setTimestamp()
	    		.setFooter({text: 'I was created by Theodore Gercken, use /feedback to request a feature, report a bug/typo, or just get in touch!'});
    		interaction.reply({ embeds: [embed]});
		} else if (interaction.options.getString('state-abbreviation') === `id`) {
			const embed = new MessageEmbed()
	    		.setColor(color)
	    		.setTitle(`The Libertarian Party of Idaho`)
	    		.setThumbnail(`https://d3n8a8pro7vhmx.cloudfront.net/lpid/sites/1/meta_images/original/LPID_Logo_Web.png?1610689002`)
      			.addFields(
		    		{ name: `Website`, value: `[Link](https://www.lpid.org)`, inline: true},
        			{ name: `Twitter`, value: `[Link](https://twitter.com/lp_idaho)`, inline: true},
        			{ name: `Facebook`, value: `[Link](https://www.facebook.com/LPIdaho)`, inline: true},
        			{ name: `Instagram`, value: `[Link](https://www.instagram.com/libertarians_of_idaho)`, inline: true},
        			{ name: `Reddit`, value: `[Link](https://www.reddit.com/r/IdahoLibertarians)`, inline: true},
        			{ name: `LPedia`, value: `[Link](http://lpedia.org/wiki/Libertarian_Party_of_Idaho)`, inline: true},
	    		)
	    		.setTimestamp()
	    		.setFooter({text: 'I was created by Theodore Gercken, use /feedback to request a feature, report a bug/typo, or just get in touch!'});
    		interaction.reply({ embeds: [embed]});
		} else if (interaction.options.getString('state-abbreviation') === `il`) {
			const embed = new MessageEmbed()
	    		.setColor(color)
	    		.setTitle(`The Libertarian Party of Illinois`)
	    		.setThumbnail(`https://lpillinois.org/wp-content/uploads/sites/44/2018/04/lpil-header.png`)
      			.addFields(
		    		{ name: `Website`, value: `[Link](https://lpillinois.org)`, inline: true},
        			{ name: `Twitter`, value: `[Link](https://twitter.com/LPIllinois)`, inline: true},
        			{ name: `Facebook`, value: `[Link](https://www.facebook.com/LPIllinois)`, inline: true},
        			{ name: `Instagram`, value: `[Link](https://www.instagram.com/libertarian.party.of.illinois)`, inline: true},
        			{ name: `Reddit`, value: `[Link](https://www.reddit.com/r/IllinoisLibertarians)`, inline: true},
        			{ name: `LPedia`, value: `[Link](http://lpedia.org/wiki/Libertarian_Party_of_Illinois)`, inline: true},
	    		)
	    		.setTimestamp()
	    		.setFooter({text: 'I was created by Theodore Gercken, use /feedback to request a feature, report a bug/typo, or just get in touch!'});
    		interaction.reply({ embeds: [embed]});
		} else if (interaction.options.getString('state-abbreviation') === `in`) {
			const embed = new MessageEmbed()
	    		.setColor(color)
	    		.setTitle(`The Libertarian Party of Indiana`)
	    		.setThumbnail(`https://lpin.org/wp-content/uploads/sites/20/LPIN-logo-white-500px.png`)
      			.addFields(
		    		{ name: `Website`, value: `[Link](https://lpin.org)`, inline: true},
        			{ name: `Twitter`, value: `[Link](https://twitter.com/LPINorg)`, inline: true},
        			{ name: `Facebook`, value: `[Link](https://www.facebook.com/LPINorg)`, inline: true},
        			{ name: `Instagram`, value: `[Link](https://www.instagram.com/lpinorg)`, inline: true},
        			{ name: `Reddit`, value: `[Link](https://www.reddit.com/r/HoosierLibertarians)`, inline: true},
        			{ name: `LPedia`, value: `[Link](http://lpedia.org/wiki/Libertarian_Party_of_Indiana)`, inline: true},
	    		)
	    		.setTimestamp()
	    		.setFooter({text: 'I was created by Theodore Gercken, use /feedback to request a feature, report a bug/typo, or just get in touch!'});
    		interaction.reply({ embeds: [embed]});
		} else if (interaction.options.getString('state-abbreviation') === `ia`) {
			const embed = new MessageEmbed()
      			.setColor(color)
	    		.setTitle(`The Libertarian Party of Iowa`)
	    		.setThumbnail(`https://lpia.org/wp-content/uploads/sites/21/lpialogocolorcropped-300x208.png`)
      			.addFields(
		    		{ name: `Website`, value: `[Link](https://lpia.org)`, inline: true},
        			{ name: `Twitter`, value: `[Link](https://twitter.com/LPIowa)`, inline: true},
        			{ name: `Facebook`, value: `[Link](https://www.facebook.com/LPIOWA)`, inline: true},
        			{ name: `Instagram`, value: `[Link](https://www.instagram.com/lpofiowa)`, inline: true},
        			{ name: `Reddit`, value: `[Link](https://www.reddit.com/r/IowaLibertarians)`, inline: true},
        			{ name: `LPedia`, value: `[Link](http://lpedia.org/wiki/Libertarian_Party_of_Iowa)`, inline: true},
	    		)
	    		.setTimestamp()
	    		.setFooter({text: 'I was created by Theodore Gercken, use /feedback to request a feature, report a bug/typo, or just get in touch!'});
    		interaction.reply({ embeds: [embed]});
		} else if (interaction.options.getString('state-abbreviation') === `ks`) {
			const embed = new MessageEmbed()
      			.setColor(color)
	    		.setTitle(`The Libertarian Party of Kansas`)
	    		.setThumbnail(`https://lpks.org/wp-content/uploads/sites/45/2021/01/lpks-logo-250x141.png`)
      			.addFields(
		    		{ name: `Website`, value: `[Link](https://lpks.org)`, inline: true},
        			{ name: `Twitter`, value: `[Link](https://twitter.com/LPKS_Org)`, inline: true},
        			{ name: `Facebook`, value: `[Link](https://www.facebook.com/LibertarianPartyofKansas)`, inline: true},
        			{ name: `Instagram`, value: `[Link](https://www.instagram.com/libertarianpartyofkansas)`, inline: true},
        			{ name: `Reddit`, value: `[Link](https://www.reddit.com/r/KansasLibertarians)`, inline: true},
        			{ name: `LPedia`, value: `[Link](http://lpedia.org/wiki/Libertarian_Party_of_Kansas)`, inline: true},
	    		)
	    		.setTimestamp()
	    		.setFooter({text: 'I was created by Theodore Gercken, use /feedback to request a feature, report a bug/typo, or just get in touch!'});
    		interaction.reply({ embeds: [embed]}); 
		} else if (interaction.options.getString('state-abbreviation') === `ky`) {
			const embed = new MessageEmbed()
      			.setColor(color)
	    		.setTitle(`The Libertarian Party of Kentucky`)
	    		.setThumbnail(`https://lpky.org/wp-content/uploads/sites/17/2017/06/LPKY_state_logo.png`)
      			.addFields(
		    		{ name: `Website`, value: `[Link](https://lpky.org)`, inline: true},
        			{ name: `Twitter`, value: `[Link](https://twitter.com/lpky)`, inline: true},
        			{ name: `Facebook`, value: `[Link](https://www.facebook.com/LPKentucky)`, inline: true},
        			{ name: `Instagram`, value: `[Link](https://www.instagram.com/lpkentucky)`, inline: true},
        			{ name: `Reddit`, value: `[Link](https://www.reddit.com/r/LibertarianKentucky)`, inline: true},
        			{ name: `LPedia`, value: `[Link](http://lpedia.org/wiki/Libertarian_Party_of_Kentucky)`, inline: true},
	    		)
	    		.setTimestamp()
	    		.setFooter({text: 'I was created by Theodore Gercken, use /feedback to request a feature, report a bug/typo, or just get in touch!'});
    		interaction.reply({ embeds: [embed]});
		} else if (interaction.options.getString('state-abbreviation') === `la`) {
			const embed = new MessageEmbed()
      			.setColor(color)
	   			.setTitle(`The Libertarian Party of Louisiana`)
	    		.setThumbnail(`http://lplouisiana.org/images/WebLogo.png`)
      			.addFields(
		    		{ name: `Website`, value: `[Link](http://lplouisiana.org)`, inline: true},
        			{ name: `Twitter`, value: `[Link](https://twitter.com/LouisianaLp)`, inline: true},
        			{ name: `Facebook`, value: `[Link](https://www.facebook.com/LibertarianPartyOfLouisiana)`, inline: true},
        			{ name: `Reddit`, value: `[Link](https://www.reddit.com/r/LouisianaLibertarians)`, inline: true},
        			{ name: `LPedia`, value: `[Link](http://lpedia.org/wiki/Libertarian_Party_of_Louisiana)`, inline: true},
	    		)
	    		.setTimestamp()
	    		.setFooter({text: 'I was created by Theodore Gercken, use /feedback to request a feature, report a bug/typo, or just get in touch!'});
    		interaction.reply({ embeds: [embed]});
		} else if (interaction.options.getString('state-abbreviation') === `me`) {
			const embed = new MessageEmbed()
      			.setColor(color)
	    		.setTitle(`The Libertarian Party of Maine`)
	    		.setThumbnail(`https://lpme.org/wp-content/uploads/sites/46/2020/05/cropped-LP_Text_Logo_Margin_Dark-250x83.png`)
      			.addFields(
		   	 		{ name: `Website`, value: `[Link](https://lpme.org)`, inline: true},
        			{ name: `Twitter`, value: `[Link](https://twitter.com/LP_Maine)`, inline: true},
        			{ name: `Facebook`, value: `[Link](https://www.facebook.com/LibertarianPartyOfMaine)`, inline: true},
        			{ name: `Instagram`, value: `[Link](https://www.instagram.com/mainelibertarians)`, inline: true},
        			{ name: `Reddit`, value: `[Link](https://www.reddit.com/r/MaineLibertarians)`, inline: true},
        			{ name: `LPedia`, value: `[Link](http://lpedia.org/wiki/Libertarian_Party_of_Maine)`, inline: true},
	    		)
	    		.setTimestamp()
	    		.setFooter({text: 'I was created by Theodore Gercken, use /feedback to request a feature, report a bug/typo, or just get in touch!'});
    		interaction.reply({ embeds: [embed]});
		} else if (interaction.options.getString('state-abbreviation') === `md`) {
			const embed = new MessageEmbed()
      			.setColor(color)
	    		.setTitle(`The Libertarian Party of Maryland`)
	    		.setThumbnail(`https://lpmaryland.org/wp-content/uploads/2020/07/header_lpmd.png`)
      			.addFields(
		    		{ name: `Website`, value: `[Link](https://lpmaryland.org)`, inline: true},
        			{ name: `Twitter`, value: `[Link](https://twitter.com/LPMaryland)`, inline: true},
        			{ name: `Facebook`, value: `[Link](https://www.facebook.com/LPMaryland)`, inline: true},
        			{ name: `Instagram`, value: `[Link](https://www.instagram.com/lpmaryland)`, inline: true},
        			{ name: `Reddit`, value: `[Link](https://www.reddit.com/r/MDLibertarians)`, inline: true},
        			{ name: `LPedia`, value: `[Link](http://lpedia.org/wiki/Libertarian_Party_of_Maryland)`, inline: true},
	    		)
	    		.setTimestamp()
	    		.setFooter({text: 'I was created by Theodore Gercken, use /feedback to request a feature, report a bug/typo, or just get in touch!'});
    		interaction.reply({ embeds: [embed]});
		} else if (interaction.options.getString('state-abbreviation') === `ma`) {
			const embed = new MessageEmbed()
      			.setColor(color)
	   			.setTitle(`The Libertarian Party of Massachusetts`)
	    		.setThumbnail(`https://d3n8a8pro7vhmx.cloudfront.net/lpma/sites/2/meta_images/original/logo_(1).png?1585057661`)
      			.addFields(
		    		{ name: `Website`, value: `[Link](https://www.lpmass.org)`, inline: true},
        			{ name: `Twitter`, value: `[Link](https://twitter.com/LPMassachusetts)`, inline: true},
        			{ name: `Facebook`, value: `[Link](https://www.facebook.com/LPMassachusetts)`, inline: true},
        			{ name: `Reddit`, value: `[Link](https://www.reddit.com/r/mass_libertarians)`, inline: true},
        			{ name: `LPedia`, value: `[Link](http://lpedia.org/wiki/Libertarian_Party_of_Massachusetts)`, inline: true},
	    		)
	    		.setTimestamp()
	    		.setFooter({text: 'I was created by Theodore Gercken, use /feedback to request a feature, report a bug/typo, or just get in touch!'});
    		interaction.reply({ embeds: [embed]});
		} else if (interaction.options.getString('state-abbreviation') === `mi`) {
			const embed = new MessageEmbed()
      			.setColor(color)
	   			.setTitle(`The Libertarian Party of Michigan`)
	    		.setThumbnail(`https://michiganlp.org/wp-content/uploads/sites/15/2018/01/LPMI-Logo-Square-Blue-Text_horiz.png`)
      			.addFields(
		    		{ name: `Website`, value: `[Link](https://michiganlp.org)`, inline: true},
        			{ name: `Twitter`, value: `[Link](https://twitter.com/lpmi)`, inline: true},
        			{ name: `Facebook`, value: `[Link](https://www.facebook.com/LibertarianPartyofMI)`, inline: true},
        			{ name: `Instagram`, value: `[Link](https://www.instagram.com/michigan_lp)`, inline: true},
        			{ name: `Reddit`, value: `[Link](https://www.reddit.com/r/MILibertarians)`, inline: true},
        			{ name: `LPedia`, value: `[Link](http://lpedia.org/wiki/Libertarian_Party_of_Michigan)`, inline: true},
	    		)
	    		.setTimestamp()
	    		.setFooter({text: 'I was created by Theodore Gercken, use /feedback to request a feature, report a bug/typo, or just get in touch!'});
    		interaction.reply({ embeds: [embed]});
		} else if (interaction.options.getString('state-abbreviation') === `mn`) {
			const embed = new MessageEmbed()
      			.setColor(color)
	    		.setTitle(`The Libertarian Party of Minnesota`)
	    		.setThumbnail(`https://www.lpmn.org/wp-content/uploads/2019/04/logo_yellow_trans-200.png`)
      			.addFields(
		    		{ name: `Website`, value: `[Link](https://www.lpmn.org)`, inline: true},
        			{ name: `Twitter`, value: `[Link](https://twitter.com/LPofMN)`, inline: true},
        			{ name: `Facebook`, value: `[Link](https://www.facebook.com/LPMINNESOTA)`, inline: true},
        			{ name: `Instagram`, value: `[Link](https://www.instagram.com/lpofmnofficial)`, inline: true},
        			{ name: `Reddit`, value: `[Link](https://www.reddit.com/r/LibertarianMN)`, inline: true},
        			{ name: `LPedia`, value: `[Link](http://lpedia.org/wiki/Libertarian_Party_of_Minnesota)`, inline: true},
	    		)
	    		.setTimestamp()
	    		.setFooter({text: 'I was created by Theodore Gercken, use /feedback to request a feature, report a bug/typo, or just get in touch!'});
   	 		interaction.reply({ embeds: [embed]});
		} else if (interaction.options.getString('state-abbreviation') === `ms`) {
			const embed = new MessageEmbed()
      			.setColor(color)
	    		.setTitle(`The Libertarian Party of Mississippi`)
	    		.setThumbnail(`https://mslp.org/wp-content/uploads/sites/50/2021/04/MS_logo.png`)
      			.addFields(
		    		{ name: `Website`, value: `[Link](https://mslp.org)`, inline: true},
        			{ name: `Twitter`, value: `[Link](https://twitter.com/LPMississippi)`, inline: true},
        			{ name: `Facebook`, value: `[Link](https://www.facebook.com/lpmississippi)`, inline: true},
        			{ name: `Instagram`, value: `[Link](https://www.instagram.com/libertyofmississippi)`, inline: true},
        			{ name: `Reddit`, value: `[Link](https://www.reddit.com/r/MSLibertarians)`, inline: true},
        			{ name: `LPedia`, value: `[Link](http://lpedia.org/wiki/Libertarian_Party_of_Mississippi)`, inline: true},
	    		)
	    		.setTimestamp()
	    		.setFooter({text: 'I was created by Theodore Gercken, use /feedback to request a feature, report a bug/typo, or just get in touch!'});
    		interaction.reply({ embeds: [embed]});
		} else if (interaction.options.getString('state-abbreviation') === `mo`) {
			const embed = new MessageEmbed()
      			.setColor(color)
	    		.setTitle(`The Libertarian Party of Missouri`)
	    		.setThumbnail(`https://lpmo.org/wp-content/uploads/sites/16/2017/06/lpmo_logo-250x131.png`)
      			.addFields(
		    		{ name: `Website`, value: `[Link](https://lpmo.org)`, inline: true},
        			{ name: `Twitter`, value: `[Link](https://twitter.com/MissouriLP)`, inline: true},
        			{ name: `Facebook`, value: `[Link](https://www.facebook.com/LibertarianPartyofMissouri)`},
        			{ name: `Reddit`, value: `[Link](https://www.reddit.com/r/MissouriLibertarians)`, inline: true},
        			{ name: `LPedia`, value: `[Link](http://lpedia.org/wiki/Missouri_Libertarian_Party)`, inline: true},
	    		)
	    		.setTimestamp()
	    		.setFooter({text: 'I was created by Theodore Gercken, use /feedback to request a feature, report a bug/typo, or just get in touch!'});
    		interaction.reply({ embeds: [embed]});
		} else if (interaction.options.getString('state-abbreviation') === `mt`) {
			const embed = new MessageEmbed()
      			.setColor(color)
	   			.setTitle(`The Libertarian Party of Montana`)
	    		.setThumbnail(`https://images.squarespace-cdn.com/content/5766a974d1758e42b2567ef6/1500920506119-BSVGHZ9VFKTKIY3QECHB/mtlp-logo.png?format=1500w&content-type=image%2Fpng`)
      			.addFields(
		    		{ name: `Website`, value: `[Link](https://www.mtlp.org)`, inline: true},
        			{ name: `Twitter`, value: `[Link](https://twitter.com/Montana_LP)`, inline: true},
        			{ name: `Facebook`, value: `[Link](https://www.facebook.com/MontanaLibertarianParty)`, inline: true},
        			{ name: `Reddit`, value: `[Link](https://www.reddit.com/r/MontanaLibertarians)`, inline: true},
       			 	{ name: `LPedia`, value: `[Link](http://lpedia.org/wiki/Montana_Libertarian_Party)`, inline: true},
	    		)
	    		.setTimestamp()
	    		.setFooter({text: 'I was created by Theodore Gercken, use /feedback to request a feature, report a bug/typo, or just get in touch!'});
    		interaction.reply({ embeds: [embed]});
		} else if (interaction.options.getString('state-abbreviation') === `ne`) {
			const embed = new MessageEmbed()
      			.setColor(color)
	    		.setTitle(`The Libertarian Party of Nebraska`)
	    		.setThumbnail(`https://lpne.org/wp-content/uploads/sites/4/2016/08/NE_Logo_gray-300x97.png`)
      			.addFields(
		    		{ name: `Website`, value: `[Link](https://lpne.org)`, inline: true},
        			{ name: `Twitter`, value: `[Link](https://twitter.com/LPNebraska)`, inline: true},
        			{ name: `Facebook`, value: `[Link](https://www.facebook.com/LPNebraska)`, inline: true},
        			{ name: `Instagram`, value: `[Link](https://www.instagram.com/libertarianpartyofnebraska)`, inline: true},
        			{ name: `Reddit`, value: `[Link](https://www.reddit.com/r/NELibertarians)`, inline: true},
        			{ name: `LPedia`, value: `[Link](http://lpedia.org/wiki/Libertarian_Party_of_Nebraska)`, inline: true},
	    		)
	    		.setTimestamp()
	    		.setFooter({text: 'I was created by Theodore Gercken, use /feedback to request a feature, report a bug/typo, or just get in touch!'});
    		interaction.reply({ embeds: [embed]});
		} else if (interaction.options.getString('state-abbreviation') === `nv`) {
			const embed = new MessageEmbed()
      			.setColor(color)
	    		.setTitle(`The Libertarian Party of Nevada`)
	    		.setThumbnail(`https://d3n8a8pro7vhmx.cloudfront.net/lpn/sites/1/meta_images/original/Libertarian-Party-of-Nevada-logo-nb-light.fw.png?1440564149`)
      			.addFields(
		    		{ name: `Website`, value: `[Link](https://www.lpnevada.org)`, inline: true},
        			{ name: `Twitter`, value: `[Link](https://twitter.com/lpnevada)`, inline: true},
        			{ name: `Facebook`, value: `[Link](https://www.facebook.com/lpnevada)`, inline: true},
        			{ name: `Instagram`, value: `[Link](https://www.instagram.com/libertarianpartynv)`, inline: true},
        			{ name: `Reddit`, value: `[Link](https://www.reddit.com/r/NevadaLibertarians)`, inline: true},
        			{ name: `LPedia`, value: `[Link](http://lpedia.org/wiki/Libertarian_Party_of_Nevada)`, inline: true},
	    		)
	    		.setTimestamp()
	    		.setFooter({text: 'I was created by Theodore Gercken, use /feedback to request a feature, report a bug/typo, or just get in touch!'});
    		interaction.reply({ embeds: [embed]});
		} else if (interaction.options.getString('state-abbreviation') === `nh`) {
			const embed = new MessageEmbed()
      			.setColor(color)
	    		.setTitle(`The Libertarian Party of New Hampshire`)
	    		.setThumbnail(`https://lpnh.org/wp-content/uploads/sites/32/2018/10/lpnh_logo_revised.png`)
      			.addFields(
		    		{ name: `Website`, value: `[Link](https://lpnh.org)`, inline: true},
        			{ name: `Twitter`, value: `[Link](https://twitter.com/LPNH)`, inline: true},
        			{ name: `Facebook`, value: `[Link](https://www.facebook.com/LPNewHampshire)`, inline: true},
        			{ name: `Instagram`, value: `[Link](https://www.instagram.com/lpnewhampshire)`, inline: true},
        			{ name: `Reddit`, value: `[Link](https://www.reddit.com/r/NH_Libertarians)`, inline: true},
        			{ name: `LPedia`, value: `[Link](http://lpedia.org/wiki/Libertarian_Party_of_New_Hampshire)`, inline: true},
	    		)
	    		.setTimestamp()
	    		.setFooter({text: 'I was created by Theodore Gercken, use /feedback to request a feature, report a bug/typo, or just get in touch!'});
    		interaction.reply({ embeds: [embed]});
		} else if (interaction.options.getString('state-abbreviation') === `nj`) {
			const embed = new MessageEmbed()
      			.setColor(color)
	    		.setTitle(`The Libertarian Party of New Jersey`)
	    		.setThumbnail(`https://njlp.org/templates/g5_helium/custom/images/state_logo_nj.png`)
      			.addFields(
		    		{ name: `Website`, value: `[Link](https://njlp.org)`, inline: true},
        			{ name: `Twitter`, value: `[Link](https://twitter.com/NewJerseyLP)`, inline: true},
        			{ name: `Facebook`, value: `[Link](https://www.facebook.com/NJLibertarian)`, inline: true},
        			{ name: `Instagram`, value: `[Link](https://www.instagram.com/newjerseylp)`, inline: true},
        			{ name: `Reddit`, value: `[Link](https://www.reddit.com/r/NewJerseyLibertarians)`, inline: true},
        			{ name: `LPedia`, value: `[Link](http://lpedia.org/wiki/New_Jersey_Libertarian_Party)`, inline: true},
	    		)
	    		.setTimestamp()
	    		.setFooter({text: 'I was created by Theodore Gercken, use /feedback to request a feature, report a bug/typo, or just get in touch!'});
    		interaction.reply({ embeds: [embed]});
		} else if (interaction.options.getString('state-abbreviation') === `nm`) {
			const embed = new MessageEmbed()
      			.setColor(color)
	    		.setTitle(`The Libertarian Party of New Mexico`)
	    		.setThumbnail(`https://lpnm.us/wp-content/uploads/2017/06/cropped-lpnmlogo.png`)
      			.addFields(
		    		{ name: `Website`, value: `[Link](https://lpnm.us)`, inline: true},
        			{ name: `Twitter`, value: `[Link](https://twitter.com/newmexicolp)`, inline: true},
        			{ name: `Facebook`, value: `[Link](https://www.facebook.com/LPNewMexico)`, inline: true},
        			{ name: `Reddit`, value: `[Link](https://www.reddit.com/r/NewMexicoLP)`, inline: true},
        			{ name: `LPedia`, value: `[Link](http://lpedia.org/wiki/Libertarian_Party_of_New_Mexico)`, inline: true},
	    		)
	    		.setTimestamp()
	    		.setFooter({text: 'I was created by Theodore Gercken, use /feedback to request a feature, report a bug/typo, or just get in touch!'});
    		interaction.reply({ embeds: [embed]});
		} else if (interaction.options.getString('state-abbreviation') === `ny`) {
			const embed = new MessageEmbed()
      			.setColor(color)
	    		.setTitle(`The Libertarian Party of New York`)
	    		.setThumbnail(`https://lpny.org/wp-content/uploads/sites/24/2017/03/LPNY-logo-gray-300x108.png`)
      			.addFields(
		    		{ name: `Website`, value: `[Link](https://lpny.org)`, inline: true},
        			{ name: `Twitter`, value: `[Link](https://twitter.com/lpnyofficial)`, inline: true},
        			{ name: `Facebook`, value: `[Link](https://www.facebook.com/LPNYOfficial)`, inline: true},
        			{ name: `Instagram`, value: `[Link](https://www.instagram.com/lpnyofficial)`, inline: true},
        			{ name: `Reddit`, value: `[Link](https://www.reddit.com/r/NYLibertarians)`, inline: true},
        			{ name: `LPedia`, value: `[Link](http://lpedia.org/wiki/Libertarian_Party_of_New_York)`, inline: true},
	    		)
	    		.setTimestamp()
	    		.setFooter({text: 'I was created by Theodore Gercken, use /feedback to request a feature, report a bug/typo, or just get in touch!'});
    		interaction.reply({ embeds: [embed]});
		} else if (interaction.options.getString('state-abbreviation') === `nc`) {
			const embed = new MessageEmbed()
      			.setColor(color)
	    		.setTitle(`The Libertarian Party of North Carolina`)
	    		.setThumbnail(`https://d3n8a8pro7vhmx.cloudfront.net/lpnc/sites/1/meta_images/original/LPNC_Logo_Mark_Blue.png?1436400896`)
      			.addFields(
		    		{ name: `Website`, value: `[Link](https://www.lpnc.org)`, inline: true},
        			{ name: `Twitter`, value: `[Link](https://twitter.com/LPNC)`, inline: true},
        			{ name: `Facebook`, value: `[Link](https://www.facebook.com/LPofNC)`, inline: true},
        			{ name: `Reddit`, value: `[Link](https://www.reddit.com/r/NCLibertarians)`, inline: true},
        			{ name: `LPedia`, value: `[Link](http://lpedia.org/wiki/Libertarian_Party_of_North_Carolina)`, inline: true},
	    		)
	    		.setTimestamp()
	    		.setFooter({text: 'I was created by Theodore Gercken, use /feedback to request a feature, report a bug/typo, or just get in touch!'});
    		interaction.reply({ embeds: [embed]});
		} else if (interaction.options.getString('state-abbreviation') === `nd`) {
			const embed = new MessageEmbed()
      			.setColor(color)
	    		.setTitle(`The Libertarian Party of North Dakota`)
	    		.setThumbnail(`https://lpnorthdakota.org/wp-content/uploads/sites/6/2018/12/ND_Logo_gray-300x99.png`)
      			.addFields(
		   	 		{ name: `Website`, value: `[Link](https://lpnorthdakota.org)`, inline: true},
        			{ name: `Facebook`, value: `[Link](https://www.facebook.com/NDLiberty)`, inline: true},
        			{ name: `Reddit`, value: `[Link](https://www.reddit.com/r/LPND)`, inline: true},
        			{ name: `LPedia`, value: `[Link](http://lpedia.org/wiki/Libertarian_Party_of_North_Dakota)`, inline: true},
	    		)
	    		.setTimestamp()
	    		.setFooter({text: 'I was created by Theodore Gercken, use /feedback to request a feature, report a bug/typo, or just get in touch!'});
    		interaction.reply({ embeds: [embed]});
		} else if (interaction.options.getString('state-abbreviation') === `oh`) {
			const embed = new MessageEmbed()
      			.setColor(color)
	    		.setTitle(`The Libertarian Party of Ohio`)
	    		.setThumbnail(`https://lpo.org/wp-content/uploads/2019/03/lpo_banner-600x166.png`)
      			.addFields(
		    		{ name: `Website`, value: `[Link](https://lpo.org)`, inline: true},
        			{ name: `Twitter`, value: `[Link](https://twitter.com/LPOhio)`, inline: true},
        			{ name: `Facebook`, value: `[Link](https://www.facebook.com/LibertarianPartyOhio)`, inline: true},
        			{ name: `Reddit`, value: `[Link](https://www.reddit.com/r/LibertarianPartyOhio)`, inline: true},
        			{ name: `LPedia`, value: `[Link](http://lpedia.org/wiki/Libertarian_Party_of_Ohio)`, inline: true},
	    		)
	    		.setTimestamp()
	    		.setFooter({text: 'I was created by Theodore Gercken, use /feedback to request a feature, report a bug/typo, or just get in touch!'});
    		interaction.reply({ embeds: [embed]});
		} else if (interaction.options.getString('state-abbreviation') === `ok`) {
			const embed = new MessageEmbed()
      			.setColor(color)
	    		.setTitle(`The Libertarian Party of Oklahoma`)
	    		.setThumbnail(`https://oklp.org/wp-content/uploads/sites/29/2019/01/cropped-g1420.png`)
      			.addFields(
		    		{ name: `Website`, value: `[Link](https://oklp.org)`, inline: true},
        			{ name: `Twitter`, value: `[Link](https://twitter.com/OklahomaLP)`, inline: true},
        			{ name: `Facebook`, value: `[Link](https://www.facebook.com/OklahomaLP)`, inline: true},
        			{ name: `Instagram`, value: `[Link](https://www.instagram.com/lpoklahoma)`, inline: true},
        			{ name: `Reddit`, value: `[Link](https://www.reddit.com/r/OKLibertarians)`, inline: true},
        			{ name: `LPedia`, value: `[Link](http://lpedia.org/wiki/Oklahoma_Libertarian_Party)`, inline: true},
	    		)
	    		.setTimestamp()
	    		.setFooter({text: 'I was created by Theodore Gercken, use /feedback to request a feature, report a bug/typo, or just get in touch!'});
    		interaction.reply({ embeds: [embed]});
		} else if (interaction.options.getString('state-abbreviation') === `or`) {
			const embed = new MessageEmbed()
      			.setColor(color)
	    		.setTitle(`The Libertarian Party of Oregon`)
	    		.setThumbnail(`https://lporegon.org/wp-content/uploads/Branding/lpor_logo_white_transparent.png`)
      			.addFields(
		    		{ name: `Website`, value: `[Link](https://lporegon.org)`, inline: true},
        			{ name: `Twitter`, value: `[Link](https://twitter.com/LibertarianOre)`, inline: true},
        			{ name: `Facebook`, value: `[Link](https://www.facebook.com/LibertarianPartyOfOregon)`, inline: true},
        			{ name: `Instagram`, value: `[Link](https://www.instagram.com/libertarianpartyoforegon)`, inline: true},
        			{ name: `Reddit`, value: `[Link](https://www.reddit.com/r/OregonLibertarians)`, inline: true},
        			{ name: `LPedia`, value: `[Link](http://lpedia.org/wiki/Libertarian_Party_of_Oregon)`, inline: true},
	    		)
	    		.setTimestamp()
	    		.setFooter({text: 'I was created by Theodore Gercken, use /feedback to request a feature, report a bug/typo, or just get in touch!'});
    		interaction.reply({ embeds: [embed]});
		} else if (interaction.options.getString('state-abbreviation') === `pa`) {
			const embed = new MessageEmbed()
      			.setColor(color)
	    		.setTitle(`The Libertarian Party of Pennsylvania`)
	    		.setThumbnail(`https://lppa.org/wp-content/uploads/sites/33/2019/07/lppa_logo-250x93.png`)
      			.addFields(
		    		{ name: `Website`, value: `[Link](https://lppa.org)`, inline: true},
        			{ name: `Twitter`, value: `[Link](https://twitter.com/LPPAorg)`, inline: true},
        			{ name: `Facebook`, value: `[Link](https://www.facebook.com/LibertarianPartyOfPennsylvania)`, inline: true},
        			{ name: `Reddit`, value: `[Link](https://www.reddit.com/r/PaLibertarian)`, inline: true},
        			{ name: `LPedia`, value: `[Link](http://lpedia.org/wiki/Libertarian_Party_of_Pennsylvania)`, inline: true},
	    		)
	    		.setTimestamp()
	    		.setFooter({text: 'I was created by Theodore Gercken, use /feedback to request a feature, report a bug/typo, or just get in touch!'});
    		interaction.reply({ embeds: [embed]});
    	} else if (interaction.options.getString('state-abbreviation') === `pr`) {
			const embed = new MessageEmbed()
      			.setColor(color)
	    		.setTitle(`The Libertarian Party of Puerto Rico`)
	    		.setThumbnail(`https://lporegon.org/wp-content/uploads/Branding/lpor_logo_white_transparent.png`)
      			.addFields(
        			{ name: `Reddit`, value: `[Link](https://www.reddit.com/r/PuertoRicoLP)`, inline: true},
        			{ name: `LPedia`, value: `[Link](http://lpedia.org/wiki/Libertarian_Party_of_Puerto_Rico)`, inline: true},
	    		)
	    		.setTimestamp()
	    		.setFooter({text: 'I was created by Theodore Gercken, use /feedback to request a feature, report a bug/typo, or just get in touch!'});
    		interaction.reply({ embeds: [embed]});
		} else if (interaction.options.getString('state-abbreviation') === `ri`) {
			const embed = new MessageEmbed()
      			.setColor(color)
	    		.setTitle(`The Libertarian Party of Rhode Island`)
	    		.setThumbnail(`https://lpri.us/wp-content/uploads/2016/06/LPRI_logo_yw.png`)
      			.addFields(
		    		{ name: `Website`, value: `[Link](https://lporegon.org)`, inline: true},
        			{ name: `Twitter`, value: `[Link](https://twitter.com/LPofRI)`, inline: true},
        			{ name: `Facebook`, value: `[Link](https://www.facebook.com/lpofri)`, inline: true},
        			{ name: `Instagram`, value: `[Link](https://www.instagram.com/lpofrhodeisland)`, inline: true},
        			{ name: `LPedia`, value: `[Link](http://lpedia.org/wiki/Libertarian_Party_of_Rhode_Island)`, inline: true},
	    		)
	    		.setTimestamp()
	    		.setFooter({text: 'I was created by Theodore Gercken, use /feedback to request a feature, report a bug/typo, or just get in touch!'});
    		interaction.reply({ embeds: [embed]});
		} else if (interaction.options.getString('state-abbreviation') === `sc`) {
			const embed = new MessageEmbed()
      			.setColor(color)
	    		.setTitle(`The Libertarian Party of South Carolina`)
	    		.setThumbnail(`https://sclp.org/wp-content/uploads/sites/25/2018/07/SC_state_logo.png`)
      			.addFields(
		    		{ name: `Website`, value: `[Link](https://sclp.org)`, inline: true},
        			{ name: `Twitter`, value: `[Link](https://twitter.com/SCLP_Official)`, inline: true},
        			{ name: `Facebook`, value: `[Link](https://www.facebook.com/sclibertarianparty)`, inline: true},
        			{ name: `Reddit`, value: `[Link](https://www.reddit.com/r/SCLibertarians)`, inline: true},
        			{ name: `LPedia`, value: `[Link](http://lpedia.org/wiki/South_Carolina_Libertarian_Party)`, inline: true},
	    		)
	    		.setTimestamp()
	    		.setFooter({text: 'I was created by Theodore Gercken, use /feedback to request a feature, report a bug/typo, or just get in touch!'});
   		 	interaction.reply({ embeds: [embed]});
		} else if (interaction.options.getString('state-abbreviation') === `sd`) {
			const embed = new MessageEmbed()
      			.setColor(color)
	    		.setTitle(`The Libertarian Party of South Dakota`)
	    		.setThumbnail(`https://lpsouthdakota.org/wp-content/uploads/elementor/thumbs/LPSD-Torch-Logo-White-p35ffewipm6ceiog67c4nvf0cnbfp1ijjh3e29ts44.png`)
      			.addFields(
		    		{ name: `Website`, value: `[Link](https://lpsouthdakota.org)`, inline: true},
        			{ name: `Twitter`, value: `[Link](https://twitter.com/SouthDakotaLP)`, inline: true},
        			{ name: `Facebook`, value: `[Link](https://www.facebook.com/LibertarianPartyofSouthDakota)`, inline: true},
        			{ name: `Instagram`, value: `[Link](https://www.instagram.com/lpsouthdakota)`, inline: true},
        			{ name: `Reddit`, value: `[Link](https://www.reddit.com/r/SDLibertarians)`, inline: true},
        			{ name: `LPedia`, value: `[Link](http://lpedia.org/wiki/South_Dakota_Libertarian_Party)`, inline: true},
	    		)
	    		.setTimestamp()
	    		.setFooter({text: 'I was created by Theodore Gercken, use /feedback to request a feature, report a bug/typo, or just get in touch!'});
    		interaction.reply({ embeds: [embed]});
		} else if (interaction.options.getString('state-abbreviation') === `tn`) {
			const embed = new MessageEmbed()
      			.setColor(color)
	    		.setTitle(`The Libertarian Party of Tennessee`)
	    		.setThumbnail(`https://lptn.org/wp-content/uploads/sites/11/2017/09/statelogo-300x104.png`)
      			.addFields(
		    		{ name: `Website`, value: `[Link](https://lptn.org)`, inline: true},
        			{ name: `Twitter`, value: `[Link](https://twitter.com/LPTN1776)`, inline: true},
        			{ name: `Facebook`, value: `[Link](https://www.facebook.com/LPofTN)`, inline: true},
        			{ name: `Instagram`, value: `[Link](https://www.instagram.com/libertarianpartytn)`, inline: true},
        			{ name: `Reddit`, value: `[Link](https://www.reddit.com/r/TennesseeLibertarians)`, inline: true},
        			{ name: `LPedia`, value: `[Link](http://lpedia.org/wiki/Libertarian_Party_of_Tennessee)`, inline: true},
	    		)
	    		.setTimestamp()
	    		.setFooter({text: 'I was created by Theodore Gercken, use /feedback to request a feature, report a bug/typo, or just get in touch!'});
    		interaction.reply({ embeds: [embed]});
		} else if (interaction.options.getString('state-abbreviation') === `tx`) {
			const embed = new MessageEmbed()
      			.setColor(color)
	    		.setTitle(`The Libertarian Party of Texas`)
	    		.setThumbnail(`https://d3n8a8pro7vhmx.cloudfront.net/lptexas/sites/1/header_images/original/LPTexasBanner.png?1618022801`)
      			.addFields(
		    		{ name: `Website`, value: `[Link](https://www.lptexas.org)`, inline: true},
        			{ name: `Twitter`, value: `[Link](https://twitter.com/LPTexas)`, inline: true},
        			{ name: `Facebook`, value: `[Link](https://www.facebook.com/LPtexas)`, inline: true},
        			{ name: `Instagram`, value: `[Link](https://www.facebook.com/LPtexas)`, inline: true},
        			{ name: `Reddit`, value: `[Link](https://www.reddit.com/r/TexasLibertarians)`, inline: true},
        			{ name: `LPedia`, value: `[Link](http://lpedia.org/wiki/Libertarian_Party_of_Texas)`, inline: true},
	    		)
	    		.setTimestamp()
	    		.setFooter({text: 'I was created by Theodore Gercken, use /feedback to request a feature, report a bug/typo, or just get in touch!'});
    		interaction.reply({ embeds: [embed]});
		} else if (interaction.options.getString('state-abbreviation') === `ut`) {
		  	const embed = new MessageEmbed()
      			.setColor(color)
	    		.setTitle(`The Libertarian Party of Utah`)
	    		.setThumbnail(`https://www.libertarianutah.org/wp-content/uploads/2017/10/Logo-gray-w-slogan-2.png`)
      			.addFields(
		    		{ name: `Website`, value: `[Link](https://www.libertarianutah.org)`, inline: true},
        			{ name: `Twitter`, value: `[Link](https://twitter.com/UtahLP)`, inline: true},
        			{ name: `Facebook`, value: `[Link](https://www.facebook.com/LibertarianUtah)`, inline: true},
        			{ name: `Instagram`, value: `[Link](https://www.instagram.com/libertarianutah)`, inline: true},
        			{ name: `Reddit`, value: `[Link](https://www.reddit.com/r/UtahLibertarians)`, inline: true},
        			{ name: `LPedia`, value: `[Link](http://lpedia.org/wiki/Libertarian_Party_of_Utah)`, inline: true},
	    		)
	    		.setTimestamp()
	    		.setFooter({text: 'I was created by Theodore Gercken, use /feedback to request a feature, report a bug/typo, or just get in touch!'});
    		interaction.reply({ embeds: [embed]});	
		} else if (interaction.options.getString('state-abbreviation') === `vt`) {
			const embed = new MessageEmbed()
      			.setColor(color)
	    		.setTitle(`The Libertarian Party of Vermont`)
	    		.setThumbnail(`https://vtlp.org/wp-content/uploads/vtlp-logo-headerfinal-2.png`)
      			.addFields(
		    		{ name: `Website`, value: `[Link](https://vtlp.org)`, inline: true},
        			{ name: `Facebook`, value: `[Link](https://www.facebook.com/vermontlibertarianparty)`, inline: true},
        			{ name: `Instagram`, value: `[Link](https://www.instagram.com/vtlibertarians)`, inline: true},
        			{ name: `LPedia`, value: `[Link](http://lpedia.org/wiki/Vermont_Libertarian_Party)`, inline: true},
	    		)
	    		.setTimestamp()
	    		.setFooter({text: 'I was created by Theodore Gercken, use /feedback to request a feature, report a bug/typo, or just get in touch!'});
    		interaction.reply({ embeds: [embed]});
		} else if (interaction.options.getString('state-abbreviation') === `va`) {
			const embed = new MessageEmbed()
      			.setColor(color)
	    		.setTitle(`The Libertarian Party of Virginia`)
	    		.setThumbnail(`https://lpvirginia.org/wp-content/uploads/sites/7/2016/06/VA_Logo_white-768x252.png`)
      			.addFields(
		    		{ name: `Website`, value: `[Link](https://lpvirginia.org)`, inline: true},
        			{ name: `Twitter`, value: `[Link](https://twitter.com/lpva)`, inline: true},
        			{ name: `Facebook`, value: `[Link](https://www.facebook.com/LPVirginia)`, inline: true},
        			{ name: `Instagram`, value: `[Link](https://www.instagram.com/libertarianpartyofva)`, inline: true},
        			{ name: `Reddit`, value: `[Link](https://www.reddit.com/r/VirginiaLibertarians)`, inline: true},
        			{ name: `LPedia`, value: `[Link](http://lpedia.org/wiki/Libertarian_Party_of_Virginia)`, inline: true},
	    		)
	    		.setTimestamp()
	    		.setFooter({text: 'I was created by Theodore Gercken, use /feedback to request a feature, report a bug/typo, or just get in touch!'});
    		interaction.reply({ embeds: [embed]});
		} else if (interaction.options.getString('state-abbreviation') === `wa`) {
			const embed = new MessageEmbed()
      			.setColor(color)
	    		.setTitle(`The Libertarian Party of Washington`)
	    		.setThumbnail(`https://lpwa.org/wp-content/uploads/2015/11/WA_Logo_gray.png`)
      			.addFields(
		    		{ name: `Website`, value: `[Link](https://lpwa.org)`, inline: true},
        			{ name: `Facebook`, value: `[Link](https://www.facebook.com/libertarianpartyofWA)`, inline: true},
        			{ name: `Instagram`, value: `[Link](https://www.instagram.com/lpwaofficial)`, inline: true},
        			{ name: `Reddit`, value: `[Link](https://www.reddit.com/r/WALibertarians)`, inline: true},
        			{ name: `LPedia`, value: `[Link](http://lpedia.org/wiki/Libertarian_Party_of_Washington_State)`, inline: true},
	    		)
	    		.setTimestamp()
	    		.setFooter({text: 'I was created by Theodore Gercken, use /feedback to request a feature, report a bug/typo, or just get in touch!'});
    		interaction.reply({ embeds: [embed]});
		} else if (interaction.options.getString('state-abbreviation') === `wv`) {
			const embed = new MessageEmbed()
      			.setColor(color)
	    		.setTitle(`The Libertarian Party of West Virginia`)
	    		.setThumbnail(`https://lpwv.org/wp-content/uploads/sites/23/2017/09/lpwv_white_logo-250x90.png`)
      			.addFields(
		    		{ name: `Website`, value: `[Link](https://lpwv.org)`, inline: true},
        			{ name: `Twitter`, value: `[Link](https://twitter.com/LPWV)`, inline: true},
        			{ name: `Facebook`, value: `[Link](https://www.facebook.com/thelpwv)`, inline: true},
        			{ name: `Reddit`, value: `[Link](https://www.reddit.com/r/WVLibertarians)`, inline: true},
        			{ name: `LPedia`, value: `[Link](http://lpedia.org/wiki/Libertarian_Party_of_West_Virginia)`, inline: true},
	    		)
	    		.setTimestamp()
	    		.setFooter({text: 'I was created by Theodore Gercken, use /feedback to request a feature, report a bug/typo, or just get in touch!'});
    		interaction.reply({ embeds: [embed]});
		} else if (interaction.options.getString('state-abbreviation') === `wi`) {
			const embed = new MessageEmbed()
      			.setColor(color)
	    		.setTitle(`The Libertarian Party of Wisconsin`)
	    		.setThumbnail(`https://lpwi.org/wp-content/uploads/sites/28/2019/03/WI_state_logo_360px-250x250.png`)
      			.addFields(
		    		{ name: `Website`, value: `[Link](https://lpwi.org)`, inline: true},
        			{ name: `Twitter`, value: `[Link](https://twitter.com/LPWI)`, inline: true},
        			{ name: `Facebook`, value: `[Link](https://www.facebook.com/LPWIS)`, inline: true},
        			{ name: `Instagram`, value: `[Link](https://www.instagram.com/wisconsin_lp)`, inline: true},
        			{ name: `Reddit`, value: `[Link](https://www.reddit.com/r/WisconsinLibertarians)`, inline: true},
        			{ name: `LPedia`, value: `[Link](http://lpedia.org/wiki/Libertarian_Party_of_Wisconsin)`, inline: true},
	    		)
	    		.setTimestamp()
	    		.setFooter({text: 'I was created by Theodore Gercken, use /feedback to request a feature, report a bug/typo, or just get in touch!'});
    		interaction.reply({ embeds: [embed]});
		} else if (interaction.options.getString('state-abbreviation') === `wy`) {
			const embed = new MessageEmbed()
      			.setColor(color)
	    		.setTitle(`The Libertarian Party of Wyoming`)
	    		.setThumbnail(`https://lpwy.org/wp-content/uploads/sites/18/2017/07/LPWY_state_logo.png`)
      			.addFields(
		    		{ name: `Website`, value: `[Link](https://lpwy.org)`, inline: true},
        			{ name: `Facebook`, value: `[Link](https://www.facebook.com/libertariansWY)`, inline: true},
        			{ name: `Reddit`, value: `[Link](https://www.reddit.com/r/WYLibertarians)`, inline: true},
        			{ name: `LPedia`, value: `[Link](http://lpedia.org/wiki/Wyoming_Libertarian_Party)`, inline: true},
	    		)
	    		.setTimestamp()
	    		.setFooter({text: 'I was created by Theodore Gercken, use /feedback to request a feature, report a bug/typo, or just get in touch!'});
    		interaction.reply({ embeds: [embed]});
		} else {
			const embed = new MessageEmbed()
	    		.setColor(color)
      			.setDescription('*You can learn more about each state party by using the state postal code in the optional state-abbreviation field (ex: `/lp ca` for California)*')
	    		.setTitle(`The Libertarian Party of America`)
	    		.setThumbnail(`https://www.lp.org/wp-content/uploads/2017/03/party_of_principle_logo.png`)
      			.addFields(
		    		{ name: `Website`, value: `[Link](https://www.lp.org)`, inline: true},
        			{ name: `Leadership`, value: `[Link](https://www.lp.org/libertarian-national-committee)`, inline: true},
        			{ name: `Twitter`, value: `[Link](https://twitter.com/LPNational)`, inline: true},
        			{ name: `Facebook`, value: `[Link](https://www.facebook.com/libertarians)`, inline: true},
        			{ name: `Instagram`, value: `[Link](https://www.instagram.com/libertarianpartyofficial)`, inline: true},
        			{ name: `Reddit`, value: `[Link](https://www.reddit.com/r/LibertarianPartyUSA)`, inline: true},
		    		{ name: `Email List`, value: `[Link](https://groups.google.com/a/lp.org/g/lnc-business)`, inline: true},
        			{ name: `LPedia`, value: `[Link](https://lpedia.org/wiki/Main_Page)`, inline: true},
	    		)
	    		.setTimestamp()
	    		.setFooter({text: 'I was created by Theodore Gercken, use /feedback to request a feature, report a bug/typo, or just get in touch!'});
    		interaction.reply({ embeds: [embed]});
    	}
	},
};