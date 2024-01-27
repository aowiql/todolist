CREATE DATABASE IF NOT EXISTS `todolist_directory`;

USE `todolist_directory`;

DROP TABLE IF EXISTS `todolists`;

CREATE TABLE `todolists` (
	`id` int NOT NULL AUTO_INCREMENT,
    `todo_task` varchar(100) DEFAULT NULL,
    `todo_done` boolean DEFAULT TRUE,
    PRIMARY KEY (`id`)
);

INSERT INTO `todolists` VALUES
(1,'할일1',true),
(2,'할일2',false),
(3,'할일3',true);