set names utf8;

drop database if exists shenye;

create database shenye;

use shenye;

<<<<<<< HEAD
create table users(id int primary key auto_increment not null,username varchar(1024),password varchar(128),email varchar(128));

/* insert into users values */
=======
create table user(id int primary key auto_increment not null,username varchar(64),password int,email varchar(128));

/* insert into user values */
>>>>>>> dev
