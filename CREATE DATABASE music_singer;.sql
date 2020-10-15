CREATE DATABASE music_singer;

use music_singer; 

CREATE table musicas(
 musicaid 	 int(4) auto_increment,
 nome_musica varchar(30) NOT NULL,
 nome_cantor varchar(30) NOT NULL,
 primary key (musicaid)); 
 
select *from musicas;
 
TRUNCATE TABLE musicas;


INSERT INTO musicas SET nome_musica = 'Sweden Rock' , nome_cantor = 'HammerFall';

INSERT INTO musicas (nome_musica, nome_cantor) values ('Killers' , 'Iron Maiden');