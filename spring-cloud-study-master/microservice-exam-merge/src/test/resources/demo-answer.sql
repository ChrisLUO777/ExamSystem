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
-- Table structure for answertb
-- ----------------------------
DROP TABLE IF EXISTS `answertb`;
CREATE TABLE `answertb` (
  `ansid` int(11) NOT NULL,
  `qid` int(11) NOT NULL,
  `content` varchar(255) NOT NULL,
  `paperid` int(11) NOT NULL ,
	PRIMARY KEY (`ansid`,`qid`,`paperid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of answertb
-- ----------------------------
INSERT INTO `answertb` VALUES ('1',1, 'answer1', 1);
INSERT INTO `answertb` VALUES ('2',1, 'answer2', 1);
INSERT INTO `answertb` VALUES ('3',1, 'answer3', 1);
INSERT INTO `answertb` VALUES ('4',1, 'answer4', 1);
INSERT INTO `answertb` VALUES ('1',2, 'answer1', 1);
INSERT INTO `answertb` VALUES ('2',2, 'answer2', 1);
INSERT INTO `answertb` VALUES ('3',2, 'answer3', 1);
INSERT INTO `answertb` VALUES ('4',2, 'answer4', 1);
INSERT INTO `answertb` VALUES ('1',3, 'answer1', 1);
INSERT INTO `answertb` VALUES ('2',3, 'answer2', 1);
INSERT INTO `answertb` VALUES ('3',3, 'answer3', 1);
INSERT INTO `answertb` VALUES ('4',3, 'answer4', 1);
INSERT INTO `answertb` VALUES ('1',4, 'answer1', 1);
INSERT INTO `answertb` VALUES ('2',4, 'answer2', 1);
INSERT INTO `answertb` VALUES ('3',4, 'answer3', 1);
INSERT INTO `answertb` VALUES ('4',4, 'answer4', 1);
INSERT INTO `answertb` VALUES ('1',5, 'answer1', 1);
INSERT INTO `answertb` VALUES ('2',5, 'answer2', 1);
INSERT INTO `answertb` VALUES ('3',5, 'answer3', 1);
INSERT INTO `answertb` VALUES ('4',5, 'answer4', 1);
INSERT INTO `answertb` VALUES ('1',6, 'answer1', 1);
INSERT INTO `answertb` VALUES ('2',6, 'answer2', 1);
INSERT INTO `answertb` VALUES ('3',6, 'answer3', 1);
INSERT INTO `answertb` VALUES ('4',6, 'answer4', 1);
INSERT INTO `answertb` VALUES ('1',7, 'answer1', 1);
INSERT INTO `answertb` VALUES ('2',7, 'answer2', 1);
INSERT INTO `answertb` VALUES ('3',7, 'answer3', 1);
INSERT INTO `answertb` VALUES ('4',7, 'answer4', 1);

SET FOREIGN_KEY_CHECKS=1;
