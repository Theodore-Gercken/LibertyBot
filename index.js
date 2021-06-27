const fs = require('fs');
const Discord = require('discord.js');
const config = require('./config.json');
const client = new Discord.Client();
client.commands = new Discord.Collection();
const Database = require("@replit/database")
const db = new Database()



const commandFiles = fs.readdirSync('./Commands').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
	const command = require(`./Commands/${file}`);
	client.commands.set(command.name, command);
}


client.once('ready', () => {
	console.log('Ready!');
  client.user.setStatus('online')
    client.user.setActivity('-info')
});

client.on('message', message => {
	if (!message.content.startsWith(config.prefix) || message.author.bot) return;

	const args = message.content.slice(config.prefix.length).trim().split(/ +/).map(x => x.toLowerCase())
	const command = args.shift().toLowerCase();

	if (!client.commands.has(command)) return;

	try {
    client.commands.get(command).execute(message, args);
	} catch (error) {
		console.error(error);
    const exampleEmbed = new Discord.MessageEmbed()
	    .setColor('#E5C601')
	    .setTitle('Error!')
	    .setDescription('There was an error executing your command!')
	    .setThumbnail('https://i.postimg.cc/3RzDY40n/Logo.png')
	    .setTimestamp()
	    .setFooter('I was created by Theodore Gercken, email contact.theodoregercken@gmail.com to request a feature, report a bug/typo, or just get in touch!');

    message.channel.send(exampleEmbed);
	}
});

client.login(config.token)