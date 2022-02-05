const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed } = require('discord.js');
const { color } = require("../config.json")

module.exports = {
	data: new SlashCommandBuilder()
		.setName('libertarianism')
		.setDescription('Discuss Libertarianism with LibertyBot.')
        .addStringOption(option =>
            option.setName('prompt')
                .setDescription('The prompt you have been instructed to move to.')
                .setRequired(true)
                .addChoice('Start', 'start')
                .addChoice('Individualism', 'individualism')
                .addChoice('Equality', 'equality')
                .addChoice('Utilitarianism', 'utilitarianism')),
	async execute(interaction) {
        if(interaction.options.getString('prompt') === 'start') {
            var description = "Hello :wave:! I would love to engage you in a quick conversation to convince you that libertarianism is the correct philosophy. Because I am not a real human, I have provided three philosophies (in the options of this command) and you can choose the appropriate case to read about libertarian ethics (or you can read all three!).\n\nHere are the philosophies! An individualist believes the rights of an individual, stemming from self-ownership, are the highest goal. Equality based ethics, either in opportunity or outcome, hold that there should be a level playing field and that society should be dedicated to that goal. Utilitarianism is the philosophy that whatever is the greatest good for the greatest number of people is the option that should be enacted."
            var name = "Libertarianism"
        } else if(interaction.options.getString('prompt') === 'individualism') {
            var description = "So now that we’ve established that each of us owns ourselves and that that is critical to consider for any action, it’s relatively easy to arrive at libertarianism. If we own our own body absolutely then we own our labor absolutely. A core element of owning something is that we can trade it (if we can’t, then we don’t really own it), which means that money, which you trade your labor for with your employer, is a part of you just as much as your body. How could it not be? The transitive property is in full force here, as I just described. By the same token, the property you traded your money for is just as much yours as your body, which we already identified is yours absolutely. Therefore it is just as immoral for the government to take or impede your property as it is for them to kill you. It’s relatively easy to see why taxation, drug laws, economic regulations, etc., are immoral. That’s libertarianism right there!"
            var name = "Individualism"
        } else if (interaction.options.getString('prompt') === 'equality') {
            var description = "Equality is not something that can be used to prove libertarianism, so instead, I will ask you a question to try to change your philosophical framework. Is the better system one where everyone has exactly the same or where people have different amounts of wealth, but everyone is better off than in the first system? If you believe the latter, that is exactly what libertarianism strives to do, and you may actually be more of a Utilitarian than someone who cares absolutely about Equality. Utilitarians believe in the best result for everyone in total. By choosing the second option, you're clearly valuing some form of the greater good over pure Equality. If you believe the former option, this may be where we have to part ways but let me make one last appeal. True Equality is not possible! In communist society after communist society, we have seen the leaders get rich while their people starve. The Soviet Union, Cuba, and now Venezuela have all gone down that path. Striving for true Equality is an illusion; it has never been done, and it is likely to never work. Equality for Equality's sake, where everyone is worse off, and isn't even possible, is an irrational goal and thus is one not compatible with libertarianism."
            var name = "Equality"
        } else if (interaction.options.getString('prompt') === 'utilitarianism') {
            var description1 = "Utilitarianism, the idea that the greater good, no matter the individual ramifications, seems like an odd place to prove that libertarianism is correct, but interestingly enough, it's actually not that hard. Governmental policies can be divided into two camps: social and economic. Let's start with social issues. libertarians believe that the government shouldn't get involved in topics such as drugs, abortion, or guns. This is consistent with a Utilitarian point of view because banning things such as drugs, abortion, or guns only serves to make the problems worse. After Portugal legalized drugs, the lethality of their drugs dropped because of public oversight and accountability, because of the loss of stigma, more people were able to get treatment, and the number of drug users actually dropped. In countries where guns have been banned, in many cases, the number of firearms in the country actually increased (for example, Australia). In countries that legalized abortions, deaths from unsafe procedures dropped. These show that it's better for the greater good when the government gets out of social policy. That same logic is broadly applicable to all social issues."
            var description2 = "Now, let's take the economy. libertarians believe in capitalism which has dramatically improved everyone's standards of living over the last hundred years. While the rich may be getting richer at a rate far faster than the poor, global poverty rates have fallen significantly in that timeframe. In addition, the total amount of wealth has dramatically increased, which means the actual quality of life for everyone has also improved considerably. A smaller share of a huge pie is better than a larger share of crumbs. There may be problems, but there is no example where the central planning of economies has yielded any better results for society at large. It's hard to prove to you that no other system can deliver better results because that's impossible to do definitively. Still, it should be obvious to see that from the 1930s to today, there has been a considerable improvement in the quality of life for everyone. Things like toasters would have been luxuries in the past but now are commonplace even among the poor. That is progress, and that satisfies Utilitarian ethics."
            var name = "Utilitarianism"
        }
        if(interaction.options.getString('prompt') != 'utilitarianism') {
            const embed = new MessageEmbed()
	            .setColor(color)
	            .setTitle(`${name}`)
                .setDescription(`${description}`)
                .setThumbnail('https://images.pexels.com/photos/935949/pexels-photo-935949.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260')
	            .setTimestamp()
	            .setFooter({text: 'I was created by Theodore Gercken, use /feedback to request a feature, report a bug/typo, or just get in touch!'});
            interaction.reply({ embeds: [embed] });
        } else {
            const embed1 = new MessageEmbed()
	            .setColor(color)
	            .setTitle(`${name}`)
                .setDescription(`${description1}`)
                .setThumbnail('https://images.pexels.com/photos/935949/pexels-photo-935949.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260')
            const embed2 = new MessageEmbed()
	            .setColor(color)
                .setDescription(`${description2}`)
	            .setTimestamp()
	            .setFooter({text: 'I was created by Theodore Gercken, use /feedback to request a feature, report a bug/typo, or just get in touch!'});
            interaction.reply({ embeds: [embed1, embed2] });
        }
	},
};