/*
 *  Database schema for Burger-App
 */

CREATE DATABASE burgers_db;

USE burgers_db;

CREATE TABLE burgers(
    id INTEGER(10) AUTO_INCREMENT PRIMARY KEY,
    burger_name VARCHAR(20) NOT NULL,
    devoured BOOLEAN DEFAULT 0
);