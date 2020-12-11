CREATE DATABASE lp3;

use lp3; 

CREATE table pesquisa(    	
    id_pesquisa     int() auto_increment,
    palavra         varchar(300) NOT NULL,
    id_wiki         int() NOT NULL
primary key (id_pesquisa)); 
 
SELECT * FROM pesquisa;
 
TRUNCATE TABLE pesquisa;

