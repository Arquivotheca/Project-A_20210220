/**
 * O Comando "convite" mostra quem criou o convite e a quantidade de vezes usada.
*/

const Discord = require('discord.js');
module.exports = {

/** Primeiro o metodo run(client, message, args) será executado pelo arquivo message.js
  * Que passará os argumentos atraves do middleware.
*/

	run: function(client, message) {
		message.guild.fetchInvites()
		
			.then(invites => {
				if (!invites) {
					return message.channel.send(`> ${message.author}, esse servidor não possui convites!`);
				}
				const rank = invites.array().sort((a, b) => b.uses - a.uses).slice(0, 5);

				if (!rank.length) return message.channel;

				const embed = new Discord.MessageEmbed()
					.setAuthor(`✉️ Convites | ${message.guild.name}`);
				rank.map((user, index) => embed.addField('⠀⠀⠀⠀', `**${index + 1}º** ${user.inviter.username} \`\`\`Convidados: ${user.uses}\`\`\` **Link do convite**: ${user.url}`, false));
				embed.addField('Total/Convites', `\`\`\`${invites.size} convites\`\`\``, true)
					.setColor("#29C9FC")
					.setFooter('2021 © Liga dos Programadores.')
					.setTimestamp()

				message.channel.send(embed);
			})
			// eslint-disable-next-line no-empty-function
			.catch(() => { });
	},

	conf: {
		// Comando deve ser usado apenas dentro de um servidor
		onlyguilds: true,
	},

	/**
    * Aqui exportamos ajuda do comando como o seu nome categoria, descrição, etc...
	*/

	get help() {
		return {
			name: 'convite',
			category: 'info',
			description: 'Mostra quem criou o convite e a quantidade de vezes usada.',
			usage: 'convite',
		};
	},
};