const Discord = require('discord.js');

module.exports = {
	name: 'libertarianism',
	description: 'libertarianism',
	execute(message, args) {
		if (!args.length) {
			const exampleEmbed = new Discord.MessageEmbed()
	    .setColor('#E5C601')
      .setTitle('Libertarianism')
	    .setDescription('Hello :wave:! I would love to engage you in a quick conversation to convince you that libertarianism is the correct philosophy. Because I am not a real human, I am going to talk and then present options for you to choose from. The possibilities are numbered and you will type your desired options number in command form (ex: `-libertarianism 2`). This is meant to convince those who are not libertarians but feel free to use it to improve your argument skills!\n\nThis conversation is going to be reasonably simple. We will identify your ideology and then link libertarianism to it. For starters, I am defining libertarianism as the philosophy that the least government and most individual freedom is the optimal state of affairs.\n\nLets start with a simple question: do we own our own bodies absolutely?\n\n1: Yes\n4: No')
	    .setThumbnail('https://images.pexels.com/photos/935949/pexels-photo-935949.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260')
	    .setTimestamp()
	    .setFooter('I was created by Theodore Gercken, email contact.theodoregercken@gmail.com to request a feature, report a bug/typo, or just get in touch!');
    message.channel.send(exampleEmbed);
    
    } else if (args[0] === '1') {
			const exampleEmbed = new Discord.MessageEmbed()
	    .setColor('#E5C601')
      .setTitle('Libertarianism')
	    .setDescription(`So you're probably an individualist. Let me explain. If you believe that we own our own bodies absolutely then nobody can violate that integrity. That makes individualism the core goal of any action: making sure you don't infringe on anyone else. Do you agree?\n\n3: Yes\n2: No`)
	    .setThumbnail('https://images.pexels.com/photos/935949/pexels-photo-935949.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260')
	    .setTimestamp()
	    .setFooter('I was created by Theodore Gercken, email contact.theodoregercken@gmail.com to request a feature, report a bug/typo, or just get in touch!');
    message.channel.send(exampleEmbed);

		} else if (args[0] === '2') {
			const exampleEmbed = new Discord.MessageEmbed()
	    .setColor('#E5C601')
      .setTitle('Libertarianism')
	    .setDescription(`Ok so you believe that we own ourselves but can see that the absolutism I'm getting at isn't what you believe. Perfectly fine!\n\n4: Ok`)
	    .setThumbnail('https://images.pexels.com/photos/935949/pexels-photo-935949.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260')
	    .setTimestamp()
	    .setFooter('I was created by Theodore Gercken, email contact.theodoregercken@gmail.com to request a feature, report a bug/typo, or just get in touch!');
    message.channel.send(exampleEmbed);

		} else if (args[0] === '3') {
      const exampleEmbed = new Discord.MessageEmbed()
	    .setColor('#E5C601')
      .setTitle('Libertarianism')
	    .setDescription(`So now that we’ve established that each of us owns ourselves and that that is critical to consider for any action, it’s relatively easy to arrive at libertarianism. If we own our own body absolutely then we own our labor absolutely. A core element of owning something is that we can trade it (if we can’t, then we don’t really own it), which means that money, which you trade your labor for with your employer, is a part of you just as much as your body. How could it not be? The transitive property is in full force here, as I just described. By the same token, the property you traded your money for is just as much yours as your body, which we already identified is yours absolutely. Therefore it is just as immoral for the government to take or impede your property as it is for them to kill you. It’s relatively easy to see why taxation, drug laws, economic regulations, etc., are immoral. That’s libertarianism right there!\n\n2: Hmmm…. maybe I’m not as much of an Individualist as I thought`)
	    .setThumbnail('https://images.pexels.com/photos/935949/pexels-photo-935949.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260')
	    .setTimestamp()
	    .setFooter('I was created by Theodore Gercken, email contact.theodoregercken@gmail.com to request a feature, report a bug/typo, or just get in touch!');
    message.channel.send(exampleEmbed);
      
		} else if (args[0] === '4') {
      const exampleEmbed = new Discord.MessageEmbed()
	    .setColor('#E5C601')
      .setTitle('Libertarianism')
	    .setDescription(`There are three dominant philosophies in the world today about what is the most important attribute in decision making—Individualism, Equality, and Utilitarianism. You have already indicated that you’re not a pure Individualist, so this may not be useful. Still, an individualist believes the rights of an individual, stemming from self-ownership, are the highest goal. Equality, either in opportunity or outcome, holds that there should be some measure of a level playing field and that society should be dedicated to making that happen. Utilitarianism is the philosophy that whatever is the greatest good for the greatest number of people is the option that everyone should choose.\n\n5: I side more with Equality\n6: I side more with Utilitarianism\n7: I am somewhere in the middle of the three philosophies\n1: After hearing that I might be more of an Individualist than I had thought`)
	    .setThumbnail('https://images.pexels.com/photos/935949/pexels-photo-935949.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260')
	    .setTimestamp()
	    .setFooter('I was created by Theodore Gercken, email contact.theodoregercken@gmail.com to request a feature, report a bug/typo, or just get in touch!');
    message.channel.send(exampleEmbed);
      
		} else if (args[0] === '5') {
			const exampleEmbed = new Discord.MessageEmbed()
	    .setColor('#E5C601')
      .setTitle('Libertarianism')
	    .setDescription(`Equality is not something that can be used to prove libertarianism, so instead, I will ask you a question to try to change your philosophical framework. Is the better system one where everyone has exactly the same or where people have different amounts of wealth, but everyone is better off than in the first system? If you believe the latter, that is exactly what libertarianism strives to do, and you may actually be more of a Utilitarian than someone who cares absolutely about Equality. Utilitarians believe in the best result for everyone in total. By choosing the second option, you're clearly valuing some form of the greater good over pure Equality. If you believe the former option, this may be where we have to part ways but let me make one last appeal. True Equality is not possible! In communist society after communist society, we have seen the leaders get rich while their people starve. The Soviet Union, Cuba, and now Venezuela have all gone down that path. Striving for true Equality is an illusion; it has never been done, and it is likely to never work. Equality for Equality's sake, where everyone is worse off, and isn't even possible, is an irrational goal and thus is one not compatible with libertarianism.\n\n6: You know what, I am a Utilitarian`)
	    .setThumbnail('https://images.pexels.com/photos/935949/pexels-photo-935949.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260')
	    .setTimestamp()
	    .setFooter('I was created by Theodore Gercken, email contact.theodoregercken@gmail.com to request a feature, report a bug/typo, or just get in touch!');
    message.channel.send(exampleEmbed);
      
		} else if (args[0] === '6') {
      const exampleEmbed = new Discord.MessageEmbed()
	    .setColor('#E5C601')
      .setTitle('Libertarianism')
	    .setDescription(`Utilitarianism, the idea that the greater good, no matter the individual ramifications, seems like an odd place to prove that libertarianism is correct, but interestingly enough, it's actually not that hard. Governmental policies can be divided into two camps: social and economic. Let's start with social issues. libertarians believe that the government shouldn't get involved in topics such as drugs, abortion, or guns. This is consistent with a Utilitarian point of view because banning things such as drugs, abortion, or guns only serves to make the problems worse. After Portugal legalized drugs, the lethality of their drugs dropped because of public oversight and accountability, because of the loss of stigma, more people were able to get treatment, and the number of drug users actually dropped. In countries where guns have been banned, in many cases, the number of firearms in the country actually increased (for example, Australia). In countries that legalized abortions, deaths from unsafe procedures dropped. These show that it's better for the greater good when the government gets out of social policy. That same logic is broadly applicable to all social issues.`)
	    .setThumbnail('https://images.pexels.com/photos/935949/pexels-photo-935949.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260')
    message.channel.send(exampleEmbed);
      const exampleEmbed2 = new Discord.MessageEmbed()
	    .setColor('#E5C601')
	    .setDescription(`Now, let's take the economy. libertarians believe in capitalism which has dramatically improved everyone's standards of living over the last hundred years. While the rich may be getting richer at a rate far faster than the poor, global poverty rates have fallen significantly in that timeframe. In addition, the total amount of wealth has dramatically increased, which means the actual quality of life for everyone has also improved considerably. A smaller share of a huge pie is better than a larger share of crumbs. There may be problems, but there is no example where the central planning of economies has yielded any better results for society at large. It's hard to prove to you that no other system can deliver better results because that's impossible to do definitively. Still, it should be obvious to see that from the 1930s to today, there has been a considerable improvement in the quality of life for everyone. Things like toasters would have been luxuries in the past but now are commonplace even among the poor. That is progress, and that satisfies Utilitarian ethics.\n\n4: Hmmm…. maybe I'm not as much of a Utilitarian as I thought`)
	    .setTimestamp()
	    .setFooter('I was created by Theodore Gercken, email contact.theodoregercken@gmail.com to request a feature, report a bug/typo, or just get in touch!');
    message.channel.send(exampleEmbed2);
      
		} else if (args[0] === '7') {
			const exampleEmbed = new Discord.MessageEmbed()
	    .setColor('#E5C601')
      .setTitle('Libertarianism')
	    .setDescription(`If you’re somewhere in the middle, try reading all of these explanations for an all-around convincing argument.\n\n3: Individualism\n6: Utilitarianism\n5: Equality`)
	    .setThumbnail('https://images.pexels.com/photos/935949/pexels-photo-935949.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260')
	    .setTimestamp()
	    .setFooter('I was created by Theodore Gercken, email contact.theodoregercken@gmail.com to request a feature, report a bug/typo, or just get in touch!');
    message.channel.send(exampleEmbed);
      
		} else {
			const exampleEmbed = new Discord.MessageEmbed()
	    .setColor('#E5C601')
	    .setTitle('That Is Not A Valid Response!')
	    .setThumbnail('https://images.pexels.com/photos/935949/pexels-photo-935949.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260')
	    .setTimestamp()
	    .setFooter('I was created by Theodore Gercken, email contact.theodoregercken@gmail.com to request a feature, report a bug/typo, or just get in touch!');
    message.channel.send(exampleEmbed);

		}
	},
};
