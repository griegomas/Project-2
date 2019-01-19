### Schema

CREATE DATABASE climate_db;

USE climate_db;

CREATE TABLE past
(
    climateVar varchar(2) NOT NULL,
    fromYear INT NOT NULL,
    toYear INT NOT NULL,
    annualData INT NOT NULL,
    ISO3past varchar(3) NOT NULL,
	id INT NOT NULL AUTO_INCREMENT,
	PRIMARY KEY (id)
);

CREATE TABLE future
(
    climateVar varchar(2) NOT NULL,
    fromYear INT NOT NULL,
    toYear INT NOT NULL,
    annualData INT NOT NULL,
    ISO3future varchar(3) NOT NULL,
	id INT NOT NULL AUTO_INCREMENT,
	PRIMARY KEY (id),
	FOREIGN KEY (ISO3future) REFERENCES past(ISO3past)
);

### Test

DROP DATABASE IF EXISTS testdb;
CREATE DATABASE testdb;
