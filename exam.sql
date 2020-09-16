/*
Navicat MySQL Data Transfer

Source Server         : localhost_3306
Source Server Version : 50717
Source Host           : localhost:3306
Source Database       : exam

Target Server Type    : MYSQL
Target Server Version : 50717
File Encoding         : 65001

Date: 2017-12-16 15:50:47
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for `answertb`
-- ----------------------------
DROP TABLE IF EXISTS `answertb`;
CREATE TABLE `answertb` (
  `ansid` int(11) NOT NULL,
  `qid` int(11) NOT NULL,
  `content` varchar(255) NOT NULL,
  `paperid` int(11) NOT NULL,
  PRIMARY KEY (`ansid`,`qid`,`paperid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of answertb
-- ----------------------------
INSERT INTO `answertb` VALUES ('1', '1', 'the first choice', '1');
INSERT INTO `answertb` VALUES ('1', '1', 'answer1', '2');
INSERT INTO `answertb` VALUES ('1', '2', 'answer1', '1');
INSERT INTO `answertb` VALUES ('1', '2', 'answer1', '2');
INSERT INTO `answertb` VALUES ('1', '3', 'answer1', '1');
INSERT INTO `answertb` VALUES ('1', '3', 'answer1', '2');
INSERT INTO `answertb` VALUES ('1', '4', 'answer1', '1');
INSERT INTO `answertb` VALUES ('1', '4', 'answer1', '2');
INSERT INTO `answertb` VALUES ('1', '5', 'answer1', '1');
INSERT INTO `answertb` VALUES ('1', '5', 'answer1', '2');
INSERT INTO `answertb` VALUES ('1', '6', 'answer1', '1');
INSERT INTO `answertb` VALUES ('1', '6', 'answer1', '2');
INSERT INTO `answertb` VALUES ('1', '7', 'answer1', '1');
INSERT INTO `answertb` VALUES ('1', '7', 'answer1', '2');
INSERT INTO `answertb` VALUES ('1', '8', 'answer1', '2');
INSERT INTO `answertb` VALUES ('1', '9', 'answer1', '2');
INSERT INTO `answertb` VALUES ('1', '10', 'answer1', '2');
INSERT INTO `answertb` VALUES ('2', '1', 'answer2', '1');
INSERT INTO `answertb` VALUES ('2', '1', 'answer2', '2');
INSERT INTO `answertb` VALUES ('2', '2', 'answer2', '1');
INSERT INTO `answertb` VALUES ('2', '2', 'answer2', '2');
INSERT INTO `answertb` VALUES ('2', '3', 'answer2', '1');
INSERT INTO `answertb` VALUES ('2', '3', 'answer2', '2');
INSERT INTO `answertb` VALUES ('2', '4', 'answer2', '1');
INSERT INTO `answertb` VALUES ('2', '4', 'answer2', '2');
INSERT INTO `answertb` VALUES ('2', '5', 'answer2', '1');
INSERT INTO `answertb` VALUES ('2', '5', 'answer2', '2');
INSERT INTO `answertb` VALUES ('2', '6', 'answer2', '1');
INSERT INTO `answertb` VALUES ('2', '6', 'answer2', '2');
INSERT INTO `answertb` VALUES ('2', '7', 'answer2', '1');
INSERT INTO `answertb` VALUES ('2', '7', 'answer2', '2');
INSERT INTO `answertb` VALUES ('2', '8', 'answer2', '2');
INSERT INTO `answertb` VALUES ('2', '9', 'answer2', '2');
INSERT INTO `answertb` VALUES ('2', '10', 'answer2', '2');
INSERT INTO `answertb` VALUES ('3', '1', 'answer3', '1');
INSERT INTO `answertb` VALUES ('3', '1', 'answer3', '2');
INSERT INTO `answertb` VALUES ('3', '2', 'answer3', '1');
INSERT INTO `answertb` VALUES ('3', '2', 'answer3', '2');
INSERT INTO `answertb` VALUES ('3', '3', 'answer3', '1');
INSERT INTO `answertb` VALUES ('3', '3', 'answer3', '2');
INSERT INTO `answertb` VALUES ('3', '4', 'answer3', '1');
INSERT INTO `answertb` VALUES ('3', '4', 'answer3', '2');
INSERT INTO `answertb` VALUES ('3', '5', 'answer3', '1');
INSERT INTO `answertb` VALUES ('3', '5', 'answer3', '2');
INSERT INTO `answertb` VALUES ('3', '6', 'answer3', '1');
INSERT INTO `answertb` VALUES ('3', '6', 'answer3', '2');
INSERT INTO `answertb` VALUES ('3', '7', 'answer3', '1');
INSERT INTO `answertb` VALUES ('3', '7', 'answer3', '2');
INSERT INTO `answertb` VALUES ('3', '8', 'answer3', '2');
INSERT INTO `answertb` VALUES ('3', '9', 'answer3', '2');
INSERT INTO `answertb` VALUES ('3', '10', 'answer3', '2');
INSERT INTO `answertb` VALUES ('4', '1', 'answer4', '1');
INSERT INTO `answertb` VALUES ('4', '1', 'answer4', '2');
INSERT INTO `answertb` VALUES ('4', '2', 'answer4', '1');
INSERT INTO `answertb` VALUES ('4', '2', 'answer4', '2');
INSERT INTO `answertb` VALUES ('4', '3', 'answer4', '1');
INSERT INTO `answertb` VALUES ('4', '3', 'answer4', '2');
INSERT INTO `answertb` VALUES ('4', '4', 'answer4', '1');
INSERT INTO `answertb` VALUES ('4', '4', 'answer4', '2');
INSERT INTO `answertb` VALUES ('4', '5', 'answer4', '1');
INSERT INTO `answertb` VALUES ('4', '5', 'answer4', '2');
INSERT INTO `answertb` VALUES ('4', '6', 'answer4', '1');
INSERT INTO `answertb` VALUES ('4', '6', 'answer4', '2');
INSERT INTO `answertb` VALUES ('4', '7', 'answer4', '1');
INSERT INTO `answertb` VALUES ('4', '7', 'answer4', '2');
INSERT INTO `answertb` VALUES ('4', '8', 'answer4', '2');
INSERT INTO `answertb` VALUES ('4', '9', 'answer4', '2');
INSERT INTO `answertb` VALUES ('4', '10', 'answer4', '2');

-- ----------------------------
-- Table structure for `grade`
-- ----------------------------
DROP TABLE IF EXISTS `grade`;
CREATE TABLE `grade` (
  `tid` int(11) NOT NULL,
  `uid` int(11) NOT NULL,
  `grade` int(11) NOT NULL,
  PRIMARY KEY (`tid`,`uid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of grade
-- ----------------------------
INSERT INTO `grade` VALUES ('1', '1', '6');
INSERT INTO `grade` VALUES ('1', '2', '80');
INSERT INTO `grade` VALUES ('2', '1', '90');
INSERT INTO `grade` VALUES ('2', '2', '90');
INSERT INTO `grade` VALUES ('3', '1', '14');
INSERT INTO `grade` VALUES ('3', '2', '100');
INSERT INTO `grade` VALUES ('4', '1', '2');

-- ----------------------------
-- Table structure for `quiz`
-- ----------------------------
DROP TABLE IF EXISTS `quiz`;
CREATE TABLE `quiz` (
  `qid` int(11) NOT NULL AUTO_INCREMENT,
  `quiz` varchar(255) NOT NULL,
  `rightans` varchar(255) NOT NULL,
  `point` int(11) DEFAULT '1',
  `paperid` int(11) NOT NULL,
  PRIMARY KEY (`qid`,`paperid`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of quiz
-- ----------------------------
INSERT INTO `quiz` VALUES ('1', 'The first question.', '1', '5', '1');
INSERT INTO `quiz` VALUES ('1', '1 the 2 问题', '1', '10', '2');
INSERT INTO `quiz` VALUES ('2', 'quiz2', '2', '2', '1');
INSERT INTO `quiz` VALUES ('2', '2 the 2 quiz', '2', '10', '2');
INSERT INTO `quiz` VALUES ('3', 'quiz3', '3', '2', '1');
INSERT INTO `quiz` VALUES ('3', '3 the 2 quiz', '3', '10', '2');
INSERT INTO `quiz` VALUES ('4', 'quiz4', '4', '2', '1');
INSERT INTO `quiz` VALUES ('4', '4 the 2 quiz', '4', '10', '2');
INSERT INTO `quiz` VALUES ('5', 'quiz5', '1&2', '2', '1');
INSERT INTO `quiz` VALUES ('5', '5 the 2 quiz', '1', '10', '2');
INSERT INTO `quiz` VALUES ('6', 'quiz6', '1&3', '2', '1');
INSERT INTO `quiz` VALUES ('6', '6 the 2 quiz', '2', '10', '2');
INSERT INTO `quiz` VALUES ('7', 'quiz7', '1&2&3', '2', '1');
INSERT INTO `quiz` VALUES ('7', '7 the 2 quiz', '3', '10', '2');
INSERT INTO `quiz` VALUES ('8', '8 the 2 quiz', '4', '10', '2');
INSERT INTO `quiz` VALUES ('9', '9 the 2 quiz', '1&2', '10', '2');
INSERT INTO `quiz` VALUES ('10', '10 the 2 quiz', '2&3', '10', '2');

-- ----------------------------
-- Table structure for `testaccess`
-- ----------------------------
DROP TABLE IF EXISTS `testaccess`;
CREATE TABLE `testaccess` (
  `tid` int(11) NOT NULL,
  `username` varchar(255) NOT NULL,
  PRIMARY KEY (`tid`,`username`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of testaccess
-- ----------------------------
INSERT INTO `testaccess` VALUES ('1', '1@qq.com');
INSERT INTO `testaccess` VALUES ('2', '1@qq.com');
INSERT INTO `testaccess` VALUES ('3', '1@qq.com');
INSERT INTO `testaccess` VALUES ('4', '1@qq.com');

-- ----------------------------
-- Table structure for `testset`
-- ----------------------------
DROP TABLE IF EXISTS `testset`;
CREATE TABLE `testset` (
  `tid` int(11) NOT NULL AUTO_INCREMENT,
  `testtitle` varchar(255) DEFAULT NULL,
  `paperid` int(11) NOT NULL,
  `testdescrip` varchar(255) DEFAULT NULL,
  `deadlinedate` datetime DEFAULT NULL,
  PRIMARY KEY (`tid`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of testset
-- ----------------------------
INSERT INTO `testset` VALUES ('1', 'The first test', '1', 'This is the first test.', '2017-12-23 00:00:01');
INSERT INTO `testset` VALUES ('2', 'The second test', '1', 'This is the second test.', '2017-12-11 23:09:00');
INSERT INTO `testset` VALUES ('3', 'The third test', '1', 'This is the third test.', '2017-12-23 10:00:00');
INSERT INTO `testset` VALUES ('4', 'test', '2', 'test', '2017-12-31 01:00:51');

-- ----------------------------
-- Table structure for `user`
-- ----------------------------
DROP TABLE IF EXISTS `user`;
CREATE TABLE `user` (
  `uid` int(11) NOT NULL AUTO_INCREMENT,
  `username` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `nickName` varchar(255) DEFAULT NULL,
  `role` int(1) DEFAULT NULL,
  PRIMARY KEY (`uid`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of user
-- ----------------------------
INSERT INTO `user` VALUES ('1', '1@qq.com', '123456', '土豆-1', '1');
INSERT INTO `user` VALUES ('2', '2@qq.com', '1ee04e0b1cb5af7367c80c22e42efd8b', '土豆-2', '1');
INSERT INTO `user` VALUES ('3', '3@qq.com', '1ee04e0b1cb5af7367c80c22e42efd8b', '土豆-3', '1');
INSERT INTO `user` VALUES ('4', '4@qq.com', '1ee04e0b1cb5af7367c80c22e42efd8b', '土豆-4', '1');
INSERT INTO `user` VALUES ('5', '5@qq.com', '1ee04e0b1cb5af7367c80c22e42efd8b', '土豆-5', '1');
INSERT INTO `user` VALUES ('6', '6@qq.com', '1ee04e0b1cb5af7367c80c22e42efd8b', '土豆-6', '1');
INSERT INTO `user` VALUES ('7', '7@qq.com', '1ee04e0b1cb5af7367c80c22e42efd8b', '土豆-7', '1');
INSERT INTO `user` VALUES ('8', '8@qq.com', '1ee04e0b1cb5af7367c80c22e42efd8b', '土豆-8', '1');
INSERT INTO `user` VALUES ('9', '9@qq.com', '1ee04e0b1cb5af7367c80c22e42efd8b', '土豆-9', '1');
INSERT INTO `user` VALUES ('10', '10@qq.com', '1ee04e0b1cb5af7367c80c22e42efd8b', '土豆-10', '1');
