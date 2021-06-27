const db = require('db')

module.exports = {
	name: 'database',
	description: 'database',
	execute(message, args) {
		db.set("event1", {args})

  
	},
};