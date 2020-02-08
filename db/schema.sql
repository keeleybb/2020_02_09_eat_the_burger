
CREATE DATABASE burger_db;
USE burger_db;

-- CREATE TABLE burgers
-- (
-- 	id int NOT NULL AUTO_INCREMENT,
-- 	name varchar(255) NOT NULL,
-- 	eaten BOOLEAN DEFAULT false,
-- 	PRIMARY KEY (id)
-- );
CREATE TABLE burgers (
	id INT AUTO_INCREMENT NOT NULL,
	name varchar(255) NOT NULL,
	eaten BOOLEAN DEFAULT false,
    createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
	PRIMARY KEY (id)
);