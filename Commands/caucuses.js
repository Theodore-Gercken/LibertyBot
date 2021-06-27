const Discord = require('discord.js');

module.exports = {
	name: 'caucuses',
	description: 'caucuses',
	execute(message, args) {
		const exampleEmbed = new Discord.MessageEmbed()
	    .setColor('#E5C601')
	    .setTitle('Libertarian Party Caucuses')
	    .setThumbnail('https://scontent-sjc3-1.xx.fbcdn.net/v/t1.6435-9/s1080x2048/204011362_4243756659018252_5133387192759563418_n.jpg?_nc_cat=103&ccb=1-3&_nc_sid=730e14&_nc_ohc=2EieE0lrUUsAX9RqA6i&_nc_ht=scontent-sjc3-1.xx&tp=7&oh=9225e1e628b5d6e4856db6064d11b1cc&oe=60DA6189')
	    .addFields(
		    { name: 'Mises', value: '- [Website](https://lpmisescaucus.com)\n- [Facebook](https://www.facebook.com/lpmisescaucus)\n- [Twitter](https://twitter.com/LPMisesCaucus)\n- [Instagram](https://www.instagram.com/lpmisescaucus)\n- [LPedia](https://lpedia.org/wiki/Mises_Caucus)', inline: true},
        { name: 'Radical', value: '- [Website](https://www.lpradicalcaucus.org)\n- [Facebook](https://www.facebook.com/LPRadicals)\n- [Twitter](https://twitter.com/LPRadicals)\n- [Instagram](https://www.instagram.com/lpradicals/)\n- [LPedia](https://lpedia.org/wiki/Libertarian_Party_Radical_Caucus_(2006))', inline: true},
        { name: 'Pragmatic', value: '- [Website](https://www.lpcaucus.org)\n- [Facebook](https://www.facebook.com/LPCaucus)\n- [Twitter](https://twitter.com/LPCaucus)\n- [LPedia](https://lpedia.org/wiki/Libertarian_Pragmatist_Caucus)', inline: true},
		    { name: 'Youth', value: `- [Website](https://lycaucus.org)\n- [Facebook](https://www.facebook.com/LYCaucus)\n-[Instagram](https://www.instagram.com/libertarian_youth_caucus/)\n- [LPedia](https://lpedia.org/wiki/Libertarian_Youth_Caucus)`, inline: true},
        { name: 'Other', value: `- [LPedia](https://lpedia.org/wiki/List_of_Libertarian_Party_Caucuses)`, inline: true},
	    )
	    .setTimestamp()
	    .setFooter('I was created by Theodore Gercken, email contact.theodoregercken@gmail.com to request a feature, report a bug/typo, or just get in touch!');
    message.channel.send(exampleEmbed);
    
	},
};