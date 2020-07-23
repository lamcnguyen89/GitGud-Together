DROP DATABASE IF EXISTS `steamGames_db`;
CREATE DATABASE `steamGames_db`;
USE `steamGames_db`;

CREATE TABLE games
(
	appid int,
	name varchar(255),
	release_date varchar(255),
	developer varchar(255),
	publisher varchar(255),
	platforms varchar(255),
	required_age varchar(255),
	categories varchar(255),
	genres varchar(30),
	positive_ratings varchar(255),
	negative_ratings varchar(255),
	owners varchar(255),
	price varchar(255),
	
	
	PRIMARY KEY (appid)
);