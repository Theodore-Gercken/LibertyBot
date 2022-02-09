const fs = require('fs');
const { Client, Collection, Intents } = require('discord.js');
const { guildId, token, color, logo } = require('./config.json');
const {google} = require("googleapis")
const config = require('./config.json');
const { MessageEmbed } = require('discord.js');

const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MEMBERS, Intents.FLAGS.GUILD_MESSAGES, Intents.FLAGS.GUILD_MESSAGE_REACTIONS,], partials: ['MESSAGE', 'REACTION', 'CHANNEL'] });

client.commands = new Collection();
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
	const command = require(`./commands/${file}`);
	client.commands.set(command.data.name, command);
}

const auth = new google.auth.GoogleAuth({
    keyFile: "sheets-credentials.json",
    scopes: "https://www.googleapis.com/auth/spreadsheets",
});
const googleSheets = google.sheets({ version: "v4", auth: client });
const spreadsheetId = "1d_AGk80pukZ1Sej0jfislgafNw-1KMqG4czmltfFdzk";

client.once('ready', async () => {
	console.log('Ready!');
    client.user.setStatus('online')
    client.user.setActivity('/info')
    setInterval(() => {
        googleSheets.spreadsheets.values.update({
            auth,
            spreadsheetId,
            range: "Sheet1!B4",
            valueInputOption: "USER_ENTERED",
            requestBody: { values: [[client.guilds.cache.reduce((acc, guild) => acc + guild.memberCount, 0)]] },
        });        
    }, 600000);
    var user = await client.users.fetch("666430201546407949")
		const embed = new MessageEmbed()
            .setColor(color)
            .setTitle(`LibertyBot has (re)started!`)
            .setThumbnail(logo)
            .setTimestamp()
            .setFooter({text: 'I was created by Theodore Gercken, use /feedback to request a feature, report a bug/typo, or just get in touch!'});
	user.send({ embeds: [embed] })
});

client.on('interactionCreate', async interaction => {
	if (!interaction.isCommand()) return;
	const command = client.commands.get(interaction.commandName);
	if (!command) return;
	try {
		await command.execute(interaction);
	} catch (error) {
		console.error(error);
        const embed = new MessageEmbed()
	        .setColor(color)
	        .setTitle('Error!')
            .setDescription(`There was an error while executing this command! If you would like to provide any more information surrounding the error you may use /feedback but the error has been logged.`)
            .setThumbnail(logo)
	        .setTimestamp()
	        .setFooter({text: 'I was created by Theodore Gercken, use /feedback to request a feature, report a bug/typo, or just get in touch!'});
        var user = await interaction.client.users.fetch("666430201546407949")
		const embed2 = new MessageEmbed()
            .setColor(color)
            .setTitle(`Error!`)
            .setDescription(`Error: ${interaction.user.tag} used ${interaction}\nError Message:${error}`)
            .setThumbnail(logo)
            .setTimestamp()
            .setFooter({text: 'I was created by Theodore Gercken, use /feedback to request a feature, report a bug/typo, or just get in touch!'});
		user.send({ embeds: [embed2] })
		return interaction.reply({ embeds: [embed], ephemeral: true });
	}
});

client.login(token);