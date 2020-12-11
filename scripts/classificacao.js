const mysql      = require('mysql');
const connection = mysql.createConnection({
  host     : '127.0.0.1',
  port     : 3307,
  user     : 'root',
  password : '',
  database : 'music_singer'
});
connection.connect(); 


var Crawler = {
	request : null,
	cheerio : null,
	fs      : null,
	init : function(){
		Crawler.request = require('request');
		Crawler.cheerio = require('cheerio');
		Crawler.fs      = require('fs');
		Crawler.getmusic();
	},
	getmusic: function(){
		Crawler.request('https://www.letras.mus.br/estilos/rock/', function(err, res, body){
			if(err)
			console.log('Error: ' + err);
			var $ = Crawler.cheerio.load(body);
			
			//console.log(body);

			$('.top-list_mus li a').each(function(){
				var musica  = $(this).find('b').text().trim();
				var artista = $(this).find('span').text().trim();
				//console.log(musica + ' - ' + artista);

				const newmusic = {nome_musica: musica , nome_cantor: artista }
					connection.query(
						'INSERT INTO musicas SET ?', newmusic, (err, res) => {					
					})
					
					// Crawler.fs.appendFile('imdb.txt', title + ' ' + rating + '\n', function (err) {
						// 	if (err) throw err;
						// 	console.log('Arquivo salvo com sucesso!');
						// });
					});
		console.log('INSERIDO COM SUCESSO');				
		});
	}
};

Crawler.init();	
	
//connection.end();