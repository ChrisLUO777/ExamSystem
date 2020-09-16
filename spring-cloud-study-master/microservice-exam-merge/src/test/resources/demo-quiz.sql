/*
Navicat MySQL Data Transfer

Source Server         : Localhost
Source Server Version : 50713
Source Host           : localhost:3306
Source Database       : test

Target Server Type    : MYSQL
Target Server Version : 50713
File Encoding         : 65001

Date: 2017-06-23 14:25:27
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for quiz
-- ----------------------------
DROP TABLE IF EXISTS `quiz`;
CREATE TABLE `quiz` (
  `qid` int(11) NOT NULL AUTO_INCREMENT,
  `quiz` varchar(255) NOT NULL,
  `rightans` varchar(255) NOT NULL,
  `point` int(11) DEFAULT 1,
  `paperid` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of quiz
-- ----------------------------
INSERT INTO `quiz` VALUES ('1', 'quiz1', '1',2,1);
INSERT INTO `quiz` VALUES ('2', 'quiz1', '2',2,1);
INSERT INTO `quiz` VALUES ('3', 'quiz1', '3',2,1);
INSERT INTO `quiz` VALUES ('4', 'quiz1', '4',2,1);
INSERT INTO `quiz` VALUES ('5', 'quiz1', '1&2',2,1);
INSERT INTO `quiz` VALUES ('6', 'quiz1', '1&3',2,1);
INSERT INTO `quiz` VALUES ('7', 'quiz1', '1&2&3',2,1);
SET FOREIGN_KEY_CHECKS=1;
