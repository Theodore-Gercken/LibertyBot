const db = require('db')

module.exports = {
	name: 'database2',
	description: 'database2',
	execute(message, args) {
		return message.channel.send(db.get("event1"))

  
	},
};