/**
  * O Comando "codigo" vai enviar uma mensagem ao usuário mostrando como deve ser enviado uma linha de código.
*/

const Discord = require('discord.js');
require('dotenv').config();

module.exports = {

	/**
		* Primeiro o metodo run(client, message, args) será executado pelo nosso arquivo message.js
		* Que passará os argumentos atraves do middleware que programamos.
  */

	run: function (client, message) {
		const snippetEmbed = new Discord.MessageEmbed()
			.setColor("#29C9FC")
			.setAuthor('💻 Snippet de código')
			.setDescription('**Ao enviar um snippet (trecho de código), siga o modelo da imagem.**\nPara mais informações você pode acessar: [Formatação Discord](https://support.discord.com/hc/pt-br/artAicles/210298617-Noções-básicas-de-marcação-de-texto-Formatação-do-chat-negrito-itálico-e-sublinhado-). Troque `js` por outro tipo de linguagem.')
			.setImage('https://i.imgur.com/i5b7pYf.png')
			// .setFooter('2020 © Liga dos Programadores', process.env.SERVERIMAGE)
			.setTimestamp();
		message.channel.send(snippetEmbed);
	},

	/**
		* Aqui podemos colocar mais algumas configurações do comando.
  */
	conf: {},

	/**
		* Aqui exportamos ajuda do comando como o seu nome categoria, descrição, etc...
  */
	get help() {
		return {
			name: 'codigo',
			category: 'Útil',
			description: 'Como deve ser enviando uma linha de código.',
			usage: '',
		};
	},
};