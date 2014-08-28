-- phpMyAdmin SQL Dump
-- version 4.1.12
-- http://www.phpmyadmin.net
--
-- Host: webdb.uvm.edu
-- Generation Time: Aug 28, 2014 at 12:21 PM
-- Server version: 5.5.38-35.2-log
-- PHP Version: 5.3.3

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Database: `MFTOTH_trc`
--

-- --------------------------------------------------------

--
-- Table structure for table `audit_question`
--

CREATE TABLE IF NOT EXISTS `audit_question` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `text` varchar(70) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=5 ;

--
-- Dumping data for table `audit_question`
--

INSERT INTO `audit_question` (`id`, `text`) VALUES
(1, 'Feeling of safety'),
(2, 'Overall attractiveness'),
(3, 'Mix of stores and services'),
(4, 'Ease of biking in location');

-- --------------------------------------------------------

--
-- Table structure for table `audit_response`
--

CREATE TABLE IF NOT EXISTS `audit_response` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `timestamp` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `audit_type_id` int(11) NOT NULL,
  `participant_id` int(11) NOT NULL,
  `marker_id` int(11) NOT NULL,
  `zoom_changed` tinyint(1) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=431 ;

--
-- Dumping data for table `audit_response`
--

INSERT INTO `audit_response` (`id`, `timestamp`, `audit_type_id`, `participant_id`, `marker_id`, `zoom_changed`) VALUES
(2, '2014-03-16 21:53:08', 1, 1, 12, 0),
(3, '2014-03-16 21:53:22', 1, 1, 14, 0),
(4, '2014-03-20 01:06:44', 1, 6, 16, 0),
(5, '2014-03-20 01:06:59', 1, 6, 21, 0),
(6, '2014-03-20 02:09:02', 1, 6, 19, 0),
(7, '2014-03-20 04:05:55', 1, 7, 6, 0),
(8, '2014-03-20 04:49:03', 1, 7, 7, 0),
(9, '2014-03-20 04:49:12', 1, 7, 8, 0),
(10, '2014-03-20 04:49:32', 1, 7, 9, 0),
(11, '2014-03-20 04:49:54', 1, 7, 10, 0),
(12, '2014-03-20 04:50:14', 1, 7, 11, 0),
(13, '2014-03-20 04:50:29', 1, 7, 12, 0),
(14, '2014-03-20 04:50:51', 1, 7, 13, 0),
(15, '2014-03-20 04:51:13', 1, 7, 14, 0),
(16, '2014-03-20 04:51:31', 1, 7, 15, 0),
(17, '2014-03-20 04:51:50', 1, 7, 16, 0),
(18, '2014-03-20 04:52:23', 1, 7, 17, 0),
(19, '2014-03-20 04:52:49', 1, 7, 18, 0),
(20, '2014-03-20 04:53:19', 1, 7, 19, 0),
(21, '2014-03-20 04:53:38', 1, 7, 20, 0),
(22, '2014-03-20 04:54:00', 1, 7, 21, 0),
(23, '2014-03-20 04:54:19', 1, 7, 22, 0),
(24, '2014-03-20 04:54:39', 1, 7, 23, 0),
(25, '2014-03-20 05:00:03', 1, 7, 24, 0),
(26, '2014-03-20 05:00:09', 1, 7, 25, 0),
(27, '2014-03-20 07:45:40', 1, 9, 11, 0),
(70, '2014-03-20 12:52:40', 1, 11, 10, 0),
(71, '2014-03-20 13:51:28', 1, 11, 8, 0),
(72, '2014-04-02 16:08:59', 1, 16, 92, 1),
(73, '2014-04-02 16:09:11', 1, 16, 91, 0),
(74, '2014-04-02 20:25:29', 1, 16, 80, 0),
(75, '2014-04-02 20:25:30', 1, 16, 86, 0),
(76, '2014-04-02 20:25:30', 1, 16, 82, 0),
(77, '2014-04-02 20:25:30', 1, 16, 75, 0),
(78, '2014-04-02 20:25:31', 1, 16, 79, 0),
(79, '2014-04-02 20:25:32', 1, 16, 85, 0),
(80, '2014-04-02 20:25:33', 1, 16, 74, 0),
(81, '2014-04-02 20:25:34', 1, 16, 72, 0),
(82, '2014-04-02 20:25:34', 1, 16, 89, 0),
(83, '2014-04-02 20:25:35', 1, 16, 84, 0),
(84, '2014-04-02 20:25:36', 1, 16, 76, 0),
(85, '2014-04-02 20:25:41', 1, 16, 90, 0),
(86, '2014-04-02 20:25:42', 1, 16, 81, 0),
(87, '2014-04-02 20:25:42', 1, 16, 78, 0),
(88, '2014-04-02 20:25:43', 1, 16, 71, 0),
(89, '2014-04-02 20:25:43', 1, 16, 73, 0),
(90, '2014-04-02 20:25:44', 1, 16, 88, 0),
(91, '2014-04-02 20:25:45', 1, 16, 77, 0),
(92, '2014-04-02 20:25:46', 1, 16, 83, 0),
(93, '2014-04-02 20:25:48', 1, 16, 87, 0),
(94, '2014-04-02 21:04:59', 1, 0, 77, 0),
(95, '2014-04-02 21:05:03', 1, 0, 83, 0),
(96, '2014-04-02 21:05:20', 1, 0, 78, 0),
(97, '2014-04-02 21:05:32', 1, 0, 89, 0),
(98, '2014-04-02 21:05:40', 1, 0, 81, 1),
(99, '2014-04-02 21:05:44', 1, 0, 72, 1),
(100, '2014-04-02 21:05:50', 1, 0, 77, 0),
(101, '2014-04-02 21:06:08', 1, 0, 83, 0),
(102, '2014-04-02 21:06:09', 1, 0, 86, 0),
(103, '2014-04-02 21:06:12', 1, 0, 88, 1),
(104, '2014-04-02 21:06:14', 1, 0, 72, 0),
(105, '2014-04-02 21:06:16', 1, 0, 78, 1),
(106, '2014-04-02 21:06:23', 1, 0, 72, 0),
(107, '2014-04-02 21:06:27', 1, 0, 87, 0),
(108, '2014-04-02 21:06:29', 1, 0, 76, 1),
(109, '2014-04-02 21:06:33', 1, 0, 85, 1),
(110, '2014-04-02 21:06:37', 1, 0, 82, 0),
(111, '2014-04-02 21:06:38', 1, 0, 76, 0),
(112, '2014-04-02 21:06:41', 1, 0, 73, 0),
(113, '2014-04-02 21:06:44', 1, 0, 76, 1),
(114, '2014-04-02 21:06:44', 1, 0, 86, 0),
(115, '2014-04-02 21:06:53', 1, 0, 74, 0),
(116, '2014-04-02 21:06:53', 1, 0, 85, 1),
(117, '2014-04-02 21:07:02', 1, 0, 82, 0),
(118, '2014-04-02 21:07:02', 1, 0, 85, 0),
(119, '2014-04-02 21:07:06', 1, 0, 86, 0),
(120, '2014-04-02 21:07:14', 1, 0, 79, 0),
(121, '2014-04-02 21:07:14', 1, 0, 81, 1),
(122, '2014-04-02 21:07:20', 1, 0, 90, 0),
(123, '2014-04-02 21:07:21', 1, 0, 82, 1),
(124, '2014-04-02 21:07:22', 1, 0, 71, 0),
(125, '2014-04-02 21:07:35', 1, 0, 79, 0),
(126, '2014-04-02 21:07:38', 1, 0, 82, 0),
(127, '2014-04-02 21:07:39', 1, 0, 90, 1),
(128, '2014-04-02 21:07:40', 1, 0, 81, 1),
(129, '2014-04-02 21:07:42', 1, 0, 84, 0),
(130, '2014-04-02 21:07:44', 1, 0, 86, 0),
(131, '2014-04-02 21:07:47', 1, 0, 75, 0),
(132, '2014-04-02 21:07:53', 1, 0, 88, 1),
(133, '2014-04-02 21:07:54', 1, 0, 87, 1),
(134, '2014-04-02 21:07:58', 1, 0, 82, 1),
(135, '2014-04-02 21:07:59', 1, 0, 85, 0),
(136, '2014-04-02 21:07:59', 1, 0, 90, 0),
(137, '2014-04-02 21:08:03', 1, 0, 71, 0),
(138, '2014-04-02 21:08:09', 1, 0, 84, 1),
(139, '2014-04-02 21:08:10', 1, 0, 76, 0),
(140, '2014-04-02 21:08:17', 1, 0, 80, 0),
(141, '2014-04-02 21:08:20', 1, 0, 81, 0),
(142, '2014-04-02 21:08:24', 1, 0, 80, 0),
(143, '2014-04-02 21:08:24', 1, 0, 75, 0),
(144, '2014-04-02 21:08:31', 1, 0, 86, 0),
(145, '2014-04-02 21:08:34', 1, 0, 73, 0),
(146, '2014-04-02 21:08:35', 1, 0, 80, 0),
(147, '2014-04-02 21:08:36', 1, 0, 87, 1),
(148, '2014-04-02 21:08:36', 1, 0, 78, 0),
(149, '2014-04-02 21:08:36', 1, 0, 88, 0),
(150, '2014-04-02 21:08:41', 1, 0, 79, 1),
(151, '2014-04-02 21:08:47', 1, 0, 76, 0),
(152, '2014-04-02 21:08:51', 1, 0, 73, 0),
(153, '2014-04-02 21:08:57', 1, 0, 88, 1),
(154, '2014-04-02 21:08:59', 1, 0, 89, 0),
(155, '2014-04-02 21:09:04', 1, 0, 84, 1),
(156, '2014-04-02 21:09:06', 1, 0, 83, 0),
(157, '2014-04-02 21:09:07', 1, 0, 72, 1),
(158, '2014-04-02 21:09:08', 1, 0, 82, 0),
(159, '2014-04-02 21:09:09', 1, 0, 76, 1),
(160, '2014-04-02 21:09:09', 1, 0, 86, 0),
(161, '2014-04-02 21:09:11', 1, 0, 90, 1),
(162, '2014-04-02 21:09:13', 1, 0, 82, 0),
(163, '2014-04-02 21:09:16', 1, 0, 86, 0),
(164, '2014-04-02 21:09:20', 1, 0, 73, 1),
(165, '2014-04-02 21:09:22', 1, 0, 88, 0),
(166, '2014-04-02 21:09:24', 1, 0, 77, 0),
(167, '2014-04-02 21:09:24', 1, 0, 74, 0),
(168, '2014-04-02 21:09:27', 1, 0, 82, 0),
(169, '2014-04-02 21:09:27', 1, 0, 73, 0),
(170, '2014-04-02 21:09:29', 1, 0, 87, 1),
(171, '2014-04-02 21:09:32', 1, 0, 71, 0),
(172, '2014-04-02 21:09:33', 1, 0, 78, 1),
(173, '2014-04-02 21:09:36', 1, 0, 78, 1),
(174, '2014-04-02 21:09:36', 1, 0, 75, 1),
(175, '2014-04-02 21:09:41', 1, 0, 80, 0),
(176, '2014-04-02 21:09:42', 1, 0, 88, 0),
(177, '2014-04-02 21:09:48', 1, 0, 88, 0),
(178, '2014-04-02 21:09:48', 1, 0, 75, 1),
(179, '2014-04-02 21:09:48', 1, 0, 80, 0),
(180, '2014-04-02 21:09:50', 1, 0, 79, 0),
(181, '2014-04-02 21:09:51', 1, 0, 84, 1),
(182, '2014-04-02 21:09:59', 1, 0, 76, 0),
(183, '2014-04-02 21:09:59', 1, 0, 83, 0),
(184, '2014-04-02 21:10:02', 1, 0, 71, 0),
(185, '2014-04-02 21:10:04', 1, 0, 89, 0),
(186, '2014-04-02 21:10:06', 1, 0, 71, 0),
(187, '2014-04-02 21:10:10', 1, 0, 74, 0),
(188, '2014-04-02 21:10:13', 1, 0, 90, 1),
(189, '2014-04-02 21:10:16', 1, 17, 84, 1),
(190, '2014-04-02 21:10:17', 1, 0, 83, 0),
(191, '2014-04-02 21:10:18', 1, 0, 81, 1),
(192, '2014-04-02 21:10:19', 1, 0, 89, 0),
(193, '2014-04-02 21:10:19', 1, 0, 74, 0),
(194, '2014-04-02 21:10:22', 1, 0, 76, 0),
(195, '2014-04-02 21:10:25', 1, 0, 88, 1),
(196, '2014-04-02 21:10:30', 1, 0, 73, 0),
(197, '2014-04-02 21:10:33', 1, 0, 85, 0),
(198, '2014-04-02 21:10:34', 1, 0, 72, 1),
(199, '2014-04-02 21:10:34', 1, 0, 80, 0),
(200, '2014-04-02 21:10:35', 1, 0, 71, 0),
(201, '2014-04-02 21:10:35', 1, 0, 85, 1),
(202, '2014-04-02 21:10:41', 1, 0, 75, 1),
(203, '2014-04-02 21:10:41', 1, 0, 74, 0),
(204, '2014-04-02 21:10:44', 1, 0, 86, 0),
(205, '2014-04-02 21:10:47', 1, 0, 71, 0),
(206, '2014-04-02 21:10:49', 1, 0, 71, 0),
(207, '2014-04-02 21:10:49', 1, 0, 72, 0),
(208, '2014-04-02 21:10:52', 1, 0, 73, 0),
(209, '2014-04-02 21:10:52', 1, 0, 86, 0),
(210, '2014-04-02 21:10:52', 1, 0, 89, 0),
(211, '2014-04-02 21:10:54', 1, 17, 82, 0),
(212, '2014-04-02 21:10:57', 1, 0, 73, 0),
(213, '2014-04-02 21:10:59', 1, 0, 72, 1),
(214, '2014-04-02 21:11:00', 1, 0, 84, 1),
(215, '2014-04-02 21:11:04', 1, 0, 81, 0),
(216, '2014-04-02 21:11:04', 1, 0, 83, 0),
(217, '2014-04-02 21:11:06', 1, 0, 80, 0),
(218, '2014-04-02 21:11:06', 1, 0, 85, 0),
(219, '2014-04-02 21:11:11', 1, 0, 78, 0),
(220, '2014-04-02 21:11:12', 1, 0, 73, 0),
(221, '2014-04-02 21:11:13', 1, 0, 88, 1),
(222, '2014-04-02 21:11:14', 1, 0, 75, 0),
(223, '2014-04-02 21:11:14', 1, 0, 90, 1),
(224, '2014-04-02 21:11:16', 1, 0, 87, 1),
(225, '2014-04-02 21:11:18', 1, 0, 79, 1),
(226, '2014-04-02 21:11:21', 1, 0, 80, 0),
(227, '2014-04-02 21:11:21', 1, 0, 89, 0),
(228, '2014-04-02 21:11:24', 1, 0, 87, 1),
(229, '2014-04-02 21:11:28', 1, 17, 71, 0),
(230, '2014-04-02 21:11:28', 1, 0, 84, 1),
(231, '2014-04-02 21:11:29', 1, 0, 76, 0),
(232, '2014-04-02 21:11:29', 1, 0, 75, 0),
(233, '2014-04-02 21:11:31', 1, 0, 75, 0),
(234, '2014-04-02 21:11:31', 1, 0, 87, 1),
(235, '2014-04-02 21:11:35', 1, 0, 80, 0),
(236, '2014-04-02 21:11:36', 1, 0, 84, 0),
(237, '2014-04-02 21:11:40', 1, 0, 77, 0),
(238, '2014-04-02 21:11:47', 1, 0, 74, 0),
(239, '2014-04-02 21:11:48', 1, 0, 90, 1),
(240, '2014-04-02 21:11:49', 1, 0, 88, 1),
(241, '2014-04-02 21:11:52', 1, 0, 71, 0),
(242, '2014-04-02 21:11:53', 1, 0, 76, 0),
(243, '2014-04-02 21:11:55', 1, 0, 81, 1),
(244, '2014-04-02 21:11:56', 1, 0, 89, 0),
(245, '2014-04-02 21:11:59', 1, 0, 72, 0),
(246, '2014-04-02 21:12:01', 1, 0, 74, 0),
(247, '2014-04-02 21:12:05', 1, 0, 90, 1),
(248, '2014-04-02 21:12:06', 1, 17, 86, 0),
(249, '2014-04-02 21:12:08', 1, 0, 74, 0),
(250, '2014-04-02 21:12:08', 1, 0, 88, 1),
(251, '2014-04-02 21:12:10', 1, 0, 82, 0),
(252, '2014-04-02 21:12:25', 1, 0, 79, 1),
(253, '2014-04-02 21:12:30', 1, 0, 76, 0),
(254, '2014-04-02 21:12:31', 1, 0, 75, 1),
(255, '2014-04-02 21:12:32', 1, 0, 81, 0),
(256, '2014-04-02 21:12:33', 1, 0, 77, 0),
(257, '2014-04-02 21:12:35', 1, 0, 77, 0),
(258, '2014-04-02 21:12:42', 1, 17, 90, 1),
(259, '2014-04-02 21:12:47', 1, 0, 84, 1),
(260, '2014-04-02 21:12:49', 1, 0, 74, 0),
(261, '2014-04-02 21:12:50', 1, 0, 79, 1),
(262, '2014-04-02 21:12:52', 1, 0, 90, 0),
(263, '2014-04-02 21:12:58', 1, 0, 85, 1),
(264, '2014-04-02 21:13:02', 1, 0, 90, 0),
(265, '2014-04-02 21:13:07', 1, 0, 71, 0),
(266, '2014-04-02 21:13:12', 1, 0, 80, 0),
(267, '2014-04-02 21:13:13', 1, 0, 79, 0),
(268, '2014-04-02 21:13:13', 1, 0, 84, 0),
(269, '2014-04-02 21:13:14', 1, 0, 81, 0),
(270, '2014-04-02 21:13:14', 1, 0, 79, 0),
(271, '2014-04-02 21:13:14', 1, 0, 74, 0),
(272, '2014-04-02 21:13:15', 1, 0, 73, 0),
(273, '2014-04-02 21:13:16', 1, 0, 78, 0),
(274, '2014-04-02 21:13:17', 1, 0, 87, 0),
(275, '2014-04-02 21:13:28', 1, 0, 85, 1),
(276, '2014-04-02 21:13:28', 1, 0, 85, 0),
(277, '2014-04-02 21:13:29', 1, 17, 81, 1),
(278, '2014-04-02 21:13:36', 1, 0, 79, 0),
(279, '2014-04-02 21:13:39', 1, 0, 77, 0),
(280, '2014-04-02 21:13:41', 1, 0, 75, 0),
(281, '2014-04-02 21:13:41', 1, 0, 87, 0),
(282, '2014-04-02 21:13:42', 1, 0, 84, 0),
(283, '2014-04-02 21:13:53', 1, 0, 83, 0),
(284, '2014-04-02 21:13:55', 1, 0, 72, 0),
(285, '2014-04-02 21:14:01', 1, 17, 87, 1),
(286, '2014-04-02 21:14:02', 1, 0, 82, 0),
(287, '2014-04-02 21:14:09', 1, 0, 86, 0),
(288, '2014-04-02 21:14:24', 1, 0, 89, 0),
(289, '2014-04-02 21:14:37', 1, 0, 87, 1),
(290, '2014-04-02 21:14:42', 1, 17, 88, 0),
(291, '2014-04-22 12:30:31', 1, 0, 92, 0),
(292, '2014-06-03 20:44:55', 1, 0, 91, 0),
(293, '2014-06-03 20:50:38', 1, 31, 91, 0),
(294, '2014-06-03 20:50:39', 1, 31, 92, 0),
(295, '2014-06-03 20:50:50', 1, 31, 89, 0),
(296, '2014-06-03 20:50:51', 1, 31, 80, 0),
(297, '2014-06-03 20:50:52', 1, 31, 79, 0),
(298, '2014-06-03 20:50:52', 1, 31, 81, 0),
(299, '2014-06-03 20:50:53', 1, 31, 86, 0),
(300, '2014-06-03 20:50:53', 1, 31, 78, 0),
(301, '2014-06-03 20:50:53', 1, 31, 76, 0),
(302, '2014-06-03 20:50:53', 1, 31, 75, 0),
(303, '2014-06-03 20:50:54', 1, 31, 71, 0),
(304, '2014-06-03 20:50:54', 1, 31, 85, 0),
(305, '2014-06-03 20:50:54', 1, 31, 73, 0),
(306, '2014-06-03 20:50:54', 1, 31, 77, 0),
(307, '2014-06-03 20:50:54', 1, 31, 88, 0),
(308, '2014-06-03 20:50:55', 1, 31, 72, 0),
(309, '2014-06-03 20:50:55', 1, 31, 74, 0),
(310, '2014-06-03 20:50:55', 1, 31, 83, 0),
(311, '2014-06-03 20:50:55', 1, 31, 90, 0),
(312, '2014-06-03 20:50:55', 1, 31, 82, 0),
(313, '2014-06-03 20:50:56', 1, 31, 87, 0),
(314, '2014-06-03 20:50:57', 1, 31, 84, 0),
(315, '2014-06-03 20:51:12', 1, 30, 73, 0),
(316, '2014-06-03 20:51:13', 1, 30, 71, 0),
(317, '2014-06-03 20:51:13', 1, 30, 88, 0),
(318, '2014-06-03 20:51:13', 1, 30, 85, 0),
(319, '2014-06-03 20:51:14', 1, 30, 78, 0),
(320, '2014-06-03 20:51:14', 1, 30, 75, 0),
(321, '2014-06-03 20:51:15', 1, 30, 87, 0),
(322, '2014-06-03 20:51:15', 1, 30, 72, 0),
(323, '2014-06-03 20:51:15', 1, 30, 80, 0),
(324, '2014-06-03 20:51:16', 1, 30, 90, 0),
(325, '2014-06-03 20:51:16', 1, 30, 81, 0),
(326, '2014-06-03 20:51:17', 1, 30, 83, 0),
(327, '2014-06-03 20:51:17', 1, 30, 86, 0),
(328, '2014-06-03 20:51:18', 1, 30, 82, 0),
(329, '2014-06-03 20:51:18', 1, 30, 79, 0),
(330, '2014-06-03 20:51:19', 1, 30, 89, 0),
(331, '2014-06-03 20:51:20', 1, 30, 74, 0),
(332, '2014-06-03 20:51:21', 1, 30, 76, 0),
(333, '2014-06-03 20:51:22', 1, 30, 84, 0),
(334, '2014-06-03 20:51:23', 1, 30, 77, 0),
(335, '2014-06-03 20:53:08', 1, 33, 82, 0),
(336, '2014-06-03 20:53:08', 1, 33, 83, 0),
(337, '2014-06-03 20:53:08', 1, 33, 81, 0),
(338, '2014-06-03 20:53:09', 1, 33, 75, 0),
(339, '2014-06-03 20:53:09', 1, 33, 80, 0),
(340, '2014-06-03 20:53:09', 1, 33, 77, 0),
(341, '2014-06-03 20:53:09', 1, 33, 79, 0),
(342, '2014-06-03 20:53:09', 1, 33, 71, 0),
(343, '2014-06-03 20:53:09', 1, 33, 87, 0),
(344, '2014-06-03 20:53:10', 1, 33, 89, 0),
(345, '2014-06-03 20:53:10', 1, 33, 78, 0),
(346, '2014-06-03 20:53:10', 1, 33, 76, 0),
(347, '2014-06-03 20:53:10', 1, 33, 85, 0),
(348, '2014-06-03 20:53:10', 1, 33, 74, 0),
(349, '2014-06-03 20:53:10', 1, 33, 84, 0),
(350, '2014-06-03 20:53:11', 1, 33, 88, 0),
(351, '2014-06-03 20:53:11', 1, 33, 73, 0),
(352, '2014-06-03 20:53:11', 1, 33, 86, 0),
(353, '2014-06-03 20:53:11', 1, 33, 72, 0),
(354, '2014-06-03 20:53:11', 1, 33, 90, 0),
(355, '2014-06-03 20:53:13', 1, 33, 90, 0),
(356, '2014-06-03 20:53:14', 1, 33, 90, 0),
(357, '2014-06-03 20:58:03', 1, 34, 89, 0),
(358, '2014-06-05 04:42:19', 1, 34, 73, 0),
(359, '2014-07-14 23:10:09', 1, 38, 90, 0),
(360, '2014-07-14 23:10:09', 1, 38, 78, 0),
(361, '2014-07-14 23:15:22', 1, 38, 81, 0),
(362, '2014-07-14 23:15:23', 1, 38, 89, 0),
(363, '2014-08-07 21:15:26', 1, 41, 78, 0),
(364, '2014-08-07 21:15:27', 1, 41, 88, 0),
(365, '2014-08-07 21:15:29', 1, 41, 81, 0),
(366, '2014-08-07 21:15:31', 1, 41, 77, 0),
(367, '2014-08-07 21:15:33', 1, 41, 75, 0),
(368, '2014-08-07 21:15:35', 1, 41, 86, 0),
(369, '2014-08-07 21:15:57', 1, 41, 87, 0),
(370, '2014-08-07 21:16:21', 1, 41, 82, 0),
(371, '2014-08-07 21:16:24', 1, 41, 74, 0),
(372, '2014-08-07 21:16:47', 1, 41, 84, 0),
(373, '2014-08-07 21:16:48', 1, 41, 83, 0),
(374, '2014-08-07 21:16:49', 1, 41, 89, 0),
(375, '2014-08-07 21:16:53', 1, 41, 72, 0),
(376, '2014-08-07 22:09:49', 1, 42, 89, 0),
(377, '2014-08-07 22:09:50', 1, 42, 74, 0),
(378, '2014-08-07 22:09:51', 1, 42, 72, 0),
(379, '2014-08-07 22:09:53', 1, 42, 90, 0),
(380, '2014-08-07 22:09:53', 1, 42, 75, 0),
(381, '2014-08-07 22:12:55', 1, 42, 76, 0),
(382, '2014-08-07 22:14:09', 1, 42, 77, 0),
(383, '2014-08-07 22:14:10', 1, 42, 78, 0),
(384, '2014-08-07 22:14:11', 1, 42, 88, 0),
(385, '2014-08-19 18:05:10', 1, 44, 83, 0),
(386, '2014-08-19 18:05:11', 1, 44, 90, 0),
(387, '2014-08-19 18:05:13', 1, 44, 80, 0),
(388, '2014-08-19 18:05:14', 1, 44, 88, 0),
(389, '2014-08-19 18:05:16', 1, 44, 86, 0),
(390, '2014-08-19 18:05:18', 1, 44, 76, 0),
(391, '2014-08-19 18:05:18', 1, 44, 77, 0),
(392, '2014-08-19 18:05:19', 1, 44, 84, 0),
(393, '2014-08-19 18:05:20', 1, 44, 72, 0),
(394, '2014-08-19 18:05:21', 1, 44, 78, 0),
(395, '2014-08-19 18:05:23', 1, 44, 71, 0),
(396, '2014-08-19 18:05:23', 1, 44, 89, 0),
(397, '2014-08-19 18:05:25', 1, 44, 81, 0),
(398, '2014-08-19 18:05:27', 1, 44, 74, 0),
(399, '2014-08-19 18:05:28', 1, 44, 87, 0),
(400, '2014-08-19 18:05:29', 1, 44, 75, 0),
(401, '2014-08-19 18:05:31', 1, 44, 79, 0),
(402, '2014-08-19 18:09:09', 1, 44, 73, 0),
(403, '2014-08-19 18:09:10', 1, 44, 82, 0),
(404, '2014-08-19 18:09:11', 1, 44, 85, 0),
(405, '2014-08-19 18:26:24', 1, 46, 80, 0),
(406, '2014-08-19 19:09:03', 1, 46, 85, 0),
(407, '2014-08-19 19:09:04', 1, 46, 86, 0),
(408, '2014-08-19 19:09:05', 1, 46, 82, 0),
(409, '2014-08-19 19:09:06', 1, 46, 84, 0),
(410, '2014-08-19 19:09:08', 1, 46, 77, 0),
(411, '2014-08-19 19:30:16', 1, 47, 83, 0),
(412, '2014-08-19 19:30:33', 1, 47, 75, 0),
(413, '2014-08-19 19:31:16', 1, 47, 89, 0),
(414, '2014-08-19 19:31:32', 1, 47, 76, 0),
(415, '2014-08-19 19:31:41', 1, 47, 73, 0),
(416, '2014-08-19 19:32:04', 1, 47, 82, 0),
(417, '2014-08-19 19:32:07', 1, 47, 78, 0),
(418, '2014-08-19 19:32:15', 1, 47, 86, 0),
(419, '2014-08-19 19:32:31', 1, 47, 77, 0),
(420, '2014-08-19 19:32:35', 1, 47, 79, 0),
(421, '2014-08-19 19:32:38', 1, 47, 81, 0),
(422, '2014-08-19 19:32:40', 1, 47, 88, 0),
(423, '2014-08-19 19:32:43', 1, 47, 74, 0),
(424, '2014-08-19 19:32:47', 1, 47, 85, 0),
(425, '2014-08-19 19:32:49', 1, 47, 90, 0),
(426, '2014-08-19 19:32:51', 1, 47, 72, 0),
(427, '2014-08-19 19:32:56', 1, 47, 71, 0),
(428, '2014-08-19 19:33:01', 1, 47, 80, 0),
(429, '2014-08-19 19:33:03', 1, 47, 84, 0),
(430, '2014-08-19 19:33:04', 1, 47, 87, 0);

-- --------------------------------------------------------

--
-- Table structure for table `audit_type`
--

CREATE TABLE IF NOT EXISTS `audit_type` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(30) NOT NULL,
  `planner_id` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=2 ;

--
-- Dumping data for table `audit_type`
--

INSERT INTO `audit_type` (`id`, `name`, `planner_id`) VALUES
(1, 'Place', 1);

-- --------------------------------------------------------

--
-- Table structure for table `audit_type_question`
--

CREATE TABLE IF NOT EXISTS `audit_type_question` (
  `audit_type_id` int(11) NOT NULL,
  `audit_question_id` int(11) NOT NULL,
  `order` int(11) DEFAULT NULL,
  PRIMARY KEY (`audit_type_id`,`audit_question_id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `audit_type_question`
--

INSERT INTO `audit_type_question` (`audit_type_id`, `audit_question_id`, `order`) VALUES
(1, 1, 1),
(1, 2, 2),
(1, 3, 3),
(1, 4, 4);

-- --------------------------------------------------------

--
-- Table structure for table `marker`
--

CREATE TABLE IF NOT EXISTS `marker` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `lat` varchar(13) NOT NULL,
  `lng` varchar(13) NOT NULL,
  `place_id` int(11) NOT NULL,
  `view` varchar(10) NOT NULL DEFAULT 'street',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=93 ;

--
-- Dumping data for table `marker`
--

INSERT INTO `marker` (`id`, `lat`, `lng`, `place_id`, `view`) VALUES
(1, '44.4773', '-73.209', 1, 'street'),
(2, '44.477', '-73.2141', 1, 'street'),
(3, '44.4782', '-73.2117', 1, 'street'),
(4, '44.4781', '-73.2143', 1, 'street'),
(5, '44.4759', '-73.211', 1, 'street'),
(6, '44.4782', '-73.2126', 2, 'street'),
(7, '44.4771', '-73.2126', 2, 'street'),
(8, '44.4772', '-73.2111', 2, 'street'),
(9, '44.4783', '-73.2111', 2, 'street'),
(10, '44.4793', '-73.2112', 2, 'street'),
(11, '44.4793', '-73.2127', 2, 'street'),
(12, '44.4805', '-73.2113', 2, 'street'),
(13, '44.4759', '-73.211', 2, 'street'),
(14, '44.4758', '-73.2126', 2, 'street'),
(15, '44.4758', '-73.214', 2, 'street'),
(16, '44.477', '-73.2141', 2, 'street'),
(17, '44.4781', '-73.2141', 2, 'street'),
(18, '44.4793', '-73.2142', 2, 'street'),
(19, '44.4804', '-73.2143', 2, 'street'),
(20, '44.4804', '-73.2127', 2, 'street'),
(21, '44.477', '-73.2156', 2, 'street'),
(22, '44.478', '-73.2157', 2, 'street'),
(23, '44.4792', '-73.2158', 2, 'street'),
(24, '40.7484', '-73.9805', 3, 'street'),
(25, '40.749', '-73.98', 3, 'street'),
(26, '44.4769', '-73.2171', 4, 'street'),
(27, '44.4769', '-73.2169', 4, 'hybrid'),
(28, '44.4781', '-73.2157', 4, 'street'),
(29, '44.4781', '-73.2142', 4, 'hybrid'),
(30, '44.477', '-73.2141', 4, 'street'),
(31, '44.4771', '-73.2126', 4, 'hybrid'),
(32, '44.4782', '-73.2126', 4, 'street'),
(33, '44.4794', '-73.2112', 4, 'hybrid'),
(34, '44.4783', '-73.2111', 4, 'street'),
(35, '44.4772', '-73.211', 4, 'hybrid'),
(36, '44.4759', '-73.214', 4, 'street'),
(37, '44.4758', '-73.2156', 4, 'hybrid'),
(38, '44.476', '-73.211', 4, 'street'),
(39, '44.4759', '-73.2125', 4, 'hybrid'),
(40, '44.4766', '-73.2125', 4, 'street'),
(41, '44.4793', '-73.2127', 4, 'hybrid'),
(42, '44.477', '-73.2156', 4, 'street'),
(43, '44.4793', '-73.2143', 4, 'hybrid'),
(44, '44.4792', '-73.2158', 4, 'street'),
(45, '44.4805', '-73.2112', 4, 'hybrid'),
(46, '44.4792', '-73.2173', 4, 'street'),
(47, '44.4807', '-73.2006', 4, 'hybrid'),
(48, '44.4806', '-73.1998', 4, 'street'),
(49, '44.4796', '-73.1996', 4, 'hybrid'),
(50, '44.4796', '-73.2005', 4, 'street'),
(51, '44.4807', '-73.1967', 4, 'street'),
(52, '44.4807', '-73.1977', 4, 'hybrid'),
(53, '44.4788', '-73.1995', 4, 'street'),
(54, '44.4791', '-73.1973', 4, 'hybrid'),
(55, '44.4822', '-73.1927', 4, 'street'),
(56, '44.4811', '-73.1952', 4, 'hybrid'),
(57, '44.4775', '-73.1992', 4, 'street'),
(58, '44.4778', '-73.2006', 4, 'hybrid'),
(59, '44.4785', '-73.2005', 4, 'hybrid'),
(60, '44.4775', '-73.1971', 4, 'street'),
(61, '44.4747', '-73.1951', 4, 'hybrid'),
(62, '44.4764', '-73.1991', 4, 'street'),
(63, '44.4763', '-73.2007', 4, 'street'),
(64, '44.4807', '-73.2034', 4, 'street'),
(65, '44.4776', '-73.2031', 4, 'hybrid'),
(66, '44.4763', '-73.203', 4, 'hybrid'),
(67, '44.4755', '-73.1967', 4, 'hybrid'),
(68, '44.4772', '-73.211', 1, 'street'),
(69, '44.4760933125', '-73.208943503', 1, 'street'),
(70, '44.4780186350', '-73.209072249', 1, 'street'),
(71, '44.4805534251', '-73.209334192', 5, 'street'),
(72, '44.4770961789', '-73.212567595', 5, 'roadmap'),
(73, '44.4758866207', '-73.214003918', 5, 'hybrid'),
(74, '44.4782253325', '-73.211576519', 5, 'street'),
(75, '44.4804912290', '-73.211227831', 5, 'roadmap'),
(76, '44.4771631632', '-73.211046782', 5, 'hybrid'),
(77, '44.4770006366', '-73.215644089', 5, 'street'),
(78, '44.4793171547', '-73.212720481', 5, 'roadmap'),
(79, '44.4781707417', '-73.214209107', 5, 'hybrid'),
(80, '44.4804633198', '-73.212792900', 5, 'street'),
(81, '44.4807769438', '-73.200578121', 5, 'roadmap'),
(82, '44.4763826441', '-73.198848096', 5, 'hybrid'),
(83, '44.4822029492', '-73.192668286', 5, 'street'),
(84, '44.4747392758', '-73.195062158', 5, 'roadmap'),
(85, '44.4782819743', '-73.200551298', 5, 'hybrid'),
(86, '44.4764101359', '-73.200637129', 5, 'street'),
(87, '44.4807227066', '-73.196560842', 5, 'roadmap'),
(88, '44.4788903762', '-73.199441534', 5, 'hybrid'),
(89, '44.4725317049', '-73.190268380', 5, 'street'),
(90, '44.4803072410', '-73.192146597', 5, 'roadmap'),
(91, '44.4803', '-73.2145', 6, 'hybrid'),
(92, '44.4806061964', '-73.207676460', 6, 'roadmap');

-- --------------------------------------------------------

--
-- Table structure for table `participant`
--

CREATE TABLE IF NOT EXISTS `participant` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `ip` varchar(20) NOT NULL,
  `is_registered` int(11) NOT NULL DEFAULT '0',
  `email` varchar(50) DEFAULT NULL,
  `password` int(128) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `email` (`email`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=49 ;

--
-- Dumping data for table `participant`
--

INSERT INTO `participant` (`id`, `ip`, `is_registered`, `email`, `password`) VALUES
(1, '00.00.00.00', 0, 'mtotho@gmai.com', NULL),
(2, '00.00.00.00', 0, NULL, NULL),
(3, '00.00.00.00', 0, NULL, NULL),
(4, '00.00.00.00', 0, NULL, NULL),
(5, '00.00.00.00', 0, NULL, NULL),
(6, '00.00.00.00', 0, NULL, NULL),
(7, '00.00.00.00', 0, NULL, NULL),
(8, '00.00.00.00', 0, NULL, NULL),
(9, '00.00.00.00', 0, NULL, NULL),
(10, '00.00.00.00', 0, NULL, NULL),
(11, '00.00.00.00', 0, NULL, NULL),
(12, '00.00.00.00', 0, NULL, NULL),
(13, '00.00.00.00', 0, NULL, NULL),
(14, '00.00.00.00', 0, NULL, NULL),
(15, '00.00.00.00', 0, NULL, NULL),
(16, '00.00.00.00', 0, NULL, NULL),
(17, '00.00.00.00', 0, NULL, NULL),
(18, '00.00.00.00', 0, NULL, NULL),
(19, '00.00.00.00', 0, NULL, NULL),
(20, '00.00.00.00', 0, NULL, NULL),
(21, '00.00.00.00', 0, NULL, NULL),
(22, '00.00.00.00', 0, NULL, NULL),
(23, '00.00.00.00', 0, NULL, NULL),
(24, '00.00.00.00', 0, NULL, NULL),
(25, '00.00.00.00', 0, NULL, NULL),
(26, '00.00.00.00', 0, NULL, NULL),
(27, '00.00.00.00', 0, NULL, NULL),
(28, '00.00.00.00', 0, NULL, NULL),
(29, '00.00.00.00', 0, NULL, NULL),
(30, '00.00.00.00', 0, NULL, NULL),
(31, '00.00.00.00', 0, NULL, NULL),
(32, '00.00.00.00', 0, NULL, NULL),
(33, '00.00.00.00', 0, NULL, NULL),
(34, '00.00.00.00', 0, NULL, NULL),
(35, '00.00.00.00', 0, NULL, NULL),
(36, '00.00.00.00', 0, NULL, NULL),
(37, '00.00.00.00', 0, NULL, NULL),
(38, '00.00.00.00', 0, NULL, NULL),
(39, '00.00.00.00', 0, NULL, NULL),
(40, '00.00.00.00', 0, NULL, NULL),
(41, '00.00.00.00', 0, NULL, NULL),
(42, '00.00.00.00', 0, NULL, NULL),
(43, '00.00.00.00', 0, NULL, NULL),
(44, '00.00.00.00', 0, NULL, NULL),
(45, '00.00.00.00', 0, NULL, NULL),
(46, '00.00.00.00', 0, NULL, NULL),
(47, '00.00.00.00', 0, NULL, NULL),
(48, '00.00.00.00', 0, NULL, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `place`
--

CREATE TABLE IF NOT EXISTS `place` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(50) NOT NULL,
  `lat` float NOT NULL,
  `lng` float NOT NULL,
  `zoom` int(11) NOT NULL,
  `planner_id` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=7 ;

--
-- Dumping data for table `place`
--

INSERT INTO `place` (`id`, `name`, `lat`, `lng`, `zoom`, `planner_id`) VALUES
(1, 'Downtown Burlington', 44.4771, -73.2111, 17, 1),
(2, 'Downtown Burlington 2', 44.4781, -73.2127, 16, 1),
(3, 'Downtown Burlington 2', 40.7484, -73.9805, 19, 1),
(4, 'Burlington Study Area', 44.4791, -73.2071, 16, 1),
(5, 'Focus Group study area', 44.4774, -73.207, 15, 1),
(6, 'Focus Group study area', 44.4803, -73.2145, 15, 1);

-- --------------------------------------------------------

--
-- Table structure for table `planner`
--

CREATE TABLE IF NOT EXISTS `planner` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `email` varchar(50) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1 AUTO_INCREMENT=1 ;

-- --------------------------------------------------------

--
-- Table structure for table `question_response`
--

CREATE TABLE IF NOT EXISTS `question_response` (
  `audit_question_id` int(11) NOT NULL,
  `audit_response_id` int(11) NOT NULL,
  `response` int(11) NOT NULL,
  PRIMARY KEY (`audit_question_id`,`audit_response_id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `question_response`
--

INSERT INTO `question_response` (`audit_question_id`, `audit_response_id`, `response`) VALUES
(1, 2, 2),
(1, 3, 5),
(1, 6, 2),
(1, 7, 2),
(1, 8, 5),
(1, 9, 3),
(1, 10, 2),
(1, 11, 4),
(1, 12, 4),
(1, 13, 1),
(1, 14, 2),
(1, 15, 4),
(1, 16, 2),
(1, 17, 3),
(1, 18, 3),
(1, 19, 2),
(1, 20, 3),
(1, 21, 3),
(1, 22, 3),
(1, 23, 3),
(1, 24, 2),
(1, 25, 1),
(1, 26, 5),
(1, 71, 4),
(1, 72, 1),
(1, 73, 1),
(1, 77, 1),
(1, 95, 1),
(1, 96, 3),
(1, 97, 1),
(1, 98, 2),
(1, 99, 3),
(1, 100, 2),
(1, 101, 1),
(1, 102, 2),
(1, 103, 1),
(1, 104, 3),
(1, 105, 3),
(1, 106, 3),
(1, 108, 2),
(1, 109, 3),
(1, 110, 2),
(1, 111, 2),
(1, 112, 3),
(1, 113, 3),
(1, 115, 2),
(1, 116, 3),
(1, 117, 2),
(1, 118, 2),
(1, 119, 2),
(1, 120, 1),
(1, 121, 3),
(1, 123, 3),
(1, 124, 3),
(1, 125, 2),
(1, 126, 2),
(1, 127, 2),
(1, 128, 3),
(1, 129, 3),
(1, 130, 1),
(1, 131, 2),
(1, 132, 2),
(1, 133, 2),
(1, 134, 2),
(1, 135, 3),
(1, 136, 2),
(1, 137, 3),
(1, 138, 1),
(1, 139, 3),
(1, 140, 2),
(1, 141, 1),
(1, 142, 3),
(1, 143, -1),
(1, 144, 3),
(1, 145, 3),
(1, 146, 3),
(1, 147, 2),
(1, 148, 3),
(1, 149, 2),
(1, 150, 3),
(1, 151, 2),
(1, 152, 2),
(1, 153, 3),
(1, 154, 2),
(1, 155, 2),
(1, 156, 2),
(1, 157, 2),
(1, 158, 2),
(1, 159, 2),
(1, 160, 2),
(1, 161, 3),
(1, 162, 1),
(1, 163, 2),
(1, 164, 2),
(1, 165, 3),
(1, 166, 2),
(1, 167, 2),
(1, 168, 3),
(1, 169, 2),
(1, 170, -1),
(1, 171, 3),
(1, 172, 3),
(1, 173, 3),
(1, 174, 2),
(1, 175, 2),
(1, 176, 2),
(1, 177, 2),
(1, 178, 2),
(1, 179, 2),
(1, 180, 2),
(1, 181, 2),
(1, 182, 1),
(1, 183, 2),
(1, 184, 2),
(1, 185, 2),
(1, 186, 2),
(1, 187, 3),
(1, 188, 2),
(1, 189, 2),
(1, 190, 3),
(1, 191, 2),
(1, 192, 1),
(1, 193, 2),
(1, 194, 2),
(1, 195, 2),
(1, 196, 2),
(1, 197, 3),
(1, 198, 3),
(1, 199, 3),
(1, 200, 3),
(1, 201, 3),
(1, 202, 3),
(1, 203, 2),
(1, 204, 2),
(1, 205, 2),
(1, 206, 1),
(1, 207, 3),
(1, 208, 2),
(1, 209, 2),
(1, 210, 2),
(1, 211, 2),
(1, 212, 2),
(1, 213, -1),
(1, 214, 2),
(1, 215, 1),
(1, 216, 2),
(1, 217, 3),
(1, 218, 2),
(1, 219, -1),
(1, 220, 2),
(1, 221, 2),
(1, 222, 2),
(1, 223, 3),
(1, 224, 2),
(1, 225, 2),
(1, 226, 2),
(1, 227, 1),
(1, 228, 1),
(1, 230, 2),
(1, 231, 2),
(1, 232, 3),
(1, 233, 3),
(1, 234, 2),
(1, 235, 2),
(1, 236, 2),
(1, 237, 3),
(1, 238, 2),
(1, 239, 2),
(1, 240, 3),
(1, 241, 2),
(1, 242, 2),
(1, 243, 2),
(1, 244, 3),
(1, 245, 3),
(1, 246, 2),
(1, 247, 2),
(1, 248, 1),
(1, 249, 3),
(1, 250, 2),
(1, 251, 2),
(1, 252, 2),
(1, 254, 2),
(1, 256, 2),
(1, 257, 3),
(1, 258, 3),
(1, 259, 2),
(1, 260, 3),
(1, 261, 2),
(1, 263, 3),
(1, 265, 2),
(1, 267, 2),
(1, 275, 3),
(1, 276, 3),
(1, 277, 1),
(1, 278, 2),
(1, 279, 2),
(1, 283, 1),
(1, 284, 2),
(1, 285, 2),
(1, 287, 2),
(1, 288, 2),
(1, 289, 2),
(1, 290, 2),
(2, 2, 3),
(2, 3, 4),
(2, 7, 4),
(2, 8, 4),
(2, 9, 5),
(2, 10, 3),
(2, 11, 3),
(2, 12, 4),
(2, 13, 2),
(2, 14, 3),
(2, 15, 4),
(2, 16, 3),
(2, 17, 3),
(2, 18, 2),
(2, 19, 2),
(2, 20, 3),
(2, 21, 4),
(2, 22, 2),
(2, 23, 2),
(2, 24, 2),
(2, 25, 1),
(2, 26, 5),
(2, 71, 4),
(2, 72, 1),
(2, 73, 1),
(2, 77, 2),
(2, 95, 1),
(2, 96, 2),
(2, 97, 1),
(2, 98, 1),
(2, 99, 3),
(2, 100, 2),
(2, 101, 1),
(2, 102, 2),
(2, 103, 2),
(2, 104, 3),
(2, 105, 3),
(2, 106, 3),
(2, 108, 2),
(2, 109, 2),
(2, 110, 2),
(2, 111, 2),
(2, 112, 2),
(2, 113, 3),
(2, 115, 1),
(2, 116, 3),
(2, 117, 1),
(2, 118, 2),
(2, 119, 2),
(2, 120, 2),
(2, 121, 2),
(2, 123, 3),
(2, 124, 2),
(2, 125, 2),
(2, 126, 2),
(2, 127, 2),
(2, 128, 2),
(2, 129, 2),
(2, 130, 1),
(2, 131, 2),
(2, 132, 3),
(2, 133, 2),
(2, 134, 2),
(2, 135, 3),
(2, 136, 2),
(2, 137, 2),
(2, 138, 1),
(2, 139, 2),
(2, 140, 2),
(2, 141, 2),
(2, 142, 3),
(2, 143, -1),
(2, 144, 3),
(2, 145, 3),
(2, 146, 3),
(2, 147, 1),
(2, 148, 3),
(2, 149, 2),
(2, 150, 1),
(2, 151, 3),
(2, 152, 2),
(2, 153, 2),
(2, 154, 2),
(2, 155, 1),
(2, 156, 2),
(2, 157, 3),
(2, 158, 2),
(2, 159, 2),
(2, 160, 2),
(2, 161, 2),
(2, 162, 2),
(2, 163, 2),
(2, 164, 2),
(2, 165, 2),
(2, 166, 2),
(2, 167, 2),
(2, 168, 3),
(2, 169, 2),
(2, 170, -1),
(2, 171, 1),
(2, 172, 3),
(2, 173, 3),
(2, 174, 2),
(2, 175, 3),
(2, 176, 3),
(2, 177, 3),
(2, 178, 1),
(2, 179, 3),
(2, 180, 1),
(2, 181, 3),
(2, 182, 3),
(2, 183, 1),
(2, 184, 1),
(2, 185, 1),
(2, 186, 1),
(2, 187, 2),
(2, 188, 1),
(2, 189, 2),
(2, 190, 2),
(2, 191, 2),
(2, 192, 1),
(2, 193, 2),
(2, 194, 2),
(2, 195, 3),
(2, 196, 3),
(2, 197, 2),
(2, 198, 2),
(2, 199, 3),
(2, 200, 2),
(2, 201, 3),
(2, 202, 2),
(2, 203, 1),
(2, 204, 2),
(2, 205, 2),
(2, 206, 1),
(2, 207, 3),
(2, 208, 2),
(2, 209, 2),
(2, 210, 2),
(2, 211, 2),
(2, 212, 3),
(2, 213, -1),
(2, 214, 2),
(2, 215, 2),
(2, 216, 1),
(2, 217, 3),
(2, 218, 3),
(2, 219, -1),
(2, 220, 2),
(2, 221, 3),
(2, 222, 2),
(2, 223, 1),
(2, 224, 1),
(2, 225, 2),
(2, 226, 3),
(2, 227, 1),
(2, 228, 1),
(2, 230, 2),
(2, 231, 2),
(2, 232, 3),
(2, 233, 2),
(2, 234, 2),
(2, 235, 2),
(2, 236, 2),
(2, 237, 3),
(2, 238, 2),
(2, 239, 2),
(2, 240, 3),
(2, 241, 1),
(2, 242, 2),
(2, 243, 2),
(2, 244, 3),
(2, 245, 3),
(2, 246, 2),
(2, 247, 2),
(2, 248, 1),
(2, 249, 2),
(2, 250, 2),
(2, 251, 2),
(2, 252, 2),
(2, 254, 2),
(2, 256, 2),
(2, 257, 3),
(2, 258, 2),
(2, 259, 2),
(2, 260, 2),
(2, 261, 2),
(2, 263, 3),
(2, 265, 2),
(2, 267, 2),
(2, 275, 3),
(2, 276, 3),
(2, 277, 1),
(2, 278, 2),
(2, 279, 3),
(2, 283, 1),
(2, 284, 3),
(2, 285, 2),
(2, 287, 3),
(2, 288, 2),
(2, 289, 2),
(2, 290, 2),
(3, 2, 4),
(3, 3, 3),
(3, 6, 4),
(3, 7, 2),
(3, 8, 3),
(3, 9, 3),
(3, 10, 4),
(3, 11, 4),
(3, 12, 5),
(3, 13, 3),
(3, 14, 4),
(3, 15, 4),
(3, 16, 2),
(3, 17, 3),
(3, 18, 2),
(3, 19, 2),
(3, 20, 3),
(3, 21, 3),
(3, 22, 2),
(3, 23, 1),
(3, 24, 1),
(3, 25, 1),
(3, 26, 5),
(3, 71, 3),
(3, 72, 1),
(3, 73, 1),
(3, 77, -1),
(3, 95, 1),
(3, 96, 3),
(3, 97, 1),
(3, 98, 1),
(3, 99, 3),
(3, 100, 1),
(3, 101, 1),
(3, 102, 1),
(3, 103, 2),
(3, 104, 3),
(3, 105, 3),
(3, 106, 3),
(3, 108, 3),
(3, 109, 1),
(3, 110, 1),
(3, 111, 3),
(3, 112, 2),
(3, 113, 3),
(3, 115, 2),
(3, 116, 1),
(3, 117, 1),
(3, 118, 1),
(3, 119, 1),
(3, 120, 2),
(3, 121, 2),
(3, 123, 2),
(3, 124, 3),
(3, 125, 2),
(3, 126, 1),
(3, 127, 1),
(3, 128, 2),
(3, 129, 1),
(3, 130, 1),
(3, 131, 2),
(3, 132, 1),
(3, 133, 1),
(3, 134, 1),
(3, 135, 1),
(3, 136, 1),
(3, 137, 2),
(3, 138, 1),
(3, 139, 3),
(3, 140, 3),
(3, 141, 1),
(3, 142, 2),
(3, 143, 2),
(3, 144, 1),
(3, 145, 3),
(3, 146, 3),
(3, 147, 1),
(3, 148, 3),
(3, 149, 1),
(3, 150, 3),
(3, 151, 3),
(3, 152, 3),
(3, 153, 1),
(3, 154, 1),
(3, 155, 1),
(3, 156, 1),
(3, 157, 3),
(3, 158, 1),
(3, 159, 3),
(3, 160, -1),
(3, 161, 1),
(3, 162, 1),
(3, 163, 1),
(3, 164, 3),
(3, 165, 1),
(3, 166, 2),
(3, 167, 3),
(3, 168, 1),
(3, 169, 2),
(3, 170, -1),
(3, 171, 3),
(3, 172, 3),
(3, 173, 3),
(3, 174, 3),
(3, 175, 3),
(3, 176, 1),
(3, 177, 1),
(3, 178, 3),
(3, 179, 3),
(3, 180, 2),
(3, 181, 1),
(3, 182, 3),
(3, 183, 2),
(3, 184, 2),
(3, 185, 1),
(3, 186, 1),
(3, 187, 3),
(3, 188, 1),
(3, 189, 1),
(3, 190, 1),
(3, 191, 1),
(3, 192, 1),
(3, 193, 3),
(3, 194, 3),
(3, 195, 1),
(3, 196, 3),
(3, 197, 1),
(3, 198, 3),
(3, 199, 3),
(3, 200, 2),
(3, 201, 1),
(3, 202, 3),
(3, 203, 3),
(3, 204, 1),
(3, 205, 1),
(3, 206, 1),
(3, 207, 3),
(3, 208, 3),
(3, 209, 1),
(3, 210, 1),
(3, 211, 1),
(3, 212, 3),
(3, 213, -1),
(3, 214, 1),
(3, 215, 1),
(3, 216, 2),
(3, 217, 2),
(3, 218, 1),
(3, 219, -1),
(3, 220, 3),
(3, 221, 1),
(3, 222, 3),
(3, 223, 1),
(3, 224, 1),
(3, 225, 3),
(3, 226, 3),
(3, 227, 1),
(3, 228, 1),
(3, 230, 1),
(3, 231, 3),
(3, 232, 3),
(3, 233, 3),
(3, 234, 2),
(3, 235, 2),
(3, 236, 1),
(3, 237, 2),
(3, 238, 3),
(3, 239, 1),
(3, 240, 1),
(3, 241, 2),
(3, 242, 3),
(3, 243, 1),
(3, 244, 1),
(3, 245, 3),
(3, 246, 2),
(3, 247, 1),
(3, 248, 1),
(3, 249, 3),
(3, 250, 1),
(3, 251, 1),
(3, 252, 3),
(3, 254, 2),
(3, 256, 3),
(3, 257, 3),
(3, 258, 1),
(3, 259, 1),
(3, 260, 3),
(3, 261, 3),
(3, 263, 1),
(3, 265, 2),
(3, 267, 2),
(3, 275, 2),
(3, 276, 1),
(3, 277, 1),
(3, 278, 3),
(3, 279, 2),
(3, 283, 1),
(3, 284, 3),
(3, 285, 1),
(3, 287, 1),
(3, 288, 1),
(3, 289, 2),
(3, 290, 2),
(4, 2, 3),
(4, 3, 4),
(4, 6, 2),
(4, 7, 4),
(4, 8, 4),
(4, 9, 3),
(4, 10, 3),
(4, 11, 3),
(4, 12, 4),
(4, 13, 2),
(4, 14, 3),
(4, 15, 4),
(4, 16, 3),
(4, 17, 3),
(4, 18, 3),
(4, 19, 3),
(4, 20, 3),
(4, 21, 4),
(4, 22, 2),
(4, 23, 2),
(4, 24, 3),
(4, 25, 1),
(4, 26, 5),
(4, 71, 4),
(4, 72, 1),
(4, 73, 1),
(4, 77, 1),
(4, 95, 2),
(4, 96, 2),
(4, 97, 1),
(4, 98, 1),
(4, 99, 2),
(4, 100, 2),
(4, 101, 2),
(4, 102, 2),
(4, 103, 1),
(4, 104, 1),
(4, 105, 1),
(4, 106, 2),
(4, 108, -1),
(4, 109, 2),
(4, 110, 3),
(4, 111, 2),
(4, 112, 1),
(4, 113, 2),
(4, 115, 2),
(4, 116, 3),
(4, 117, 1),
(4, 118, 2),
(4, 119, 2),
(4, 120, 2),
(4, 121, 1),
(4, 123, 3),
(4, 124, 2),
(4, 125, 2),
(4, 126, 1),
(4, 127, 2),
(4, 128, 1),
(4, 129, 2),
(4, 130, 1),
(4, 131, 2),
(4, 132, -1),
(4, 133, 3),
(4, 134, 2),
(4, 135, 2),
(4, 136, 3),
(4, 137, 2),
(4, 138, 1),
(4, 139, 2),
(4, 140, 2),
(4, 141, 1),
(4, 142, 3),
(4, 143, -1),
(4, 144, 2),
(4, 145, 2),
(4, 146, 3),
(4, 147, 2),
(4, 148, -1),
(4, 149, 2),
(4, 150, 2),
(4, 151, 2),
(4, 152, 1),
(4, 153, 2),
(4, 154, 1),
(4, 155, 2),
(4, 156, 2),
(4, 157, 2),
(4, 158, 2),
(4, 159, 2),
(4, 160, 1),
(4, 161, 1),
(4, 162, 1),
(4, 163, 2),
(4, 164, 2),
(4, 165, 2),
(4, 166, 2),
(4, 167, 2),
(4, 168, 2),
(4, 169, 2),
(4, 170, -1),
(4, 171, 2),
(4, 172, 1),
(4, 173, 1),
(4, 174, 2),
(4, 175, 2),
(4, 176, 2),
(4, 177, 3),
(4, 178, 1),
(4, 179, 2),
(4, 180, 3),
(4, 181, 2),
(4, 182, 1),
(4, 183, 1),
(4, 184, 2),
(4, 185, 2),
(4, 186, 2),
(4, 187, 2),
(4, 188, 3),
(4, 189, -1),
(4, 190, 2),
(4, 191, 2),
(4, 192, 1),
(4, 193, 1),
(4, 194, 1),
(4, 195, 3),
(4, 196, 1),
(4, 197, 2),
(4, 198, 2),
(4, 199, 2),
(4, 200, 2),
(4, 201, 2),
(4, 202, 1),
(4, 203, 2),
(4, 204, 1),
(4, 205, 3),
(4, 206, 2),
(4, 207, -1),
(4, 208, 2),
(4, 209, 2),
(4, 210, 1),
(4, 211, -1),
(4, 212, 2),
(4, 213, -1),
(4, 214, 1),
(4, 215, 2),
(4, 216, 2),
(4, 217, 2),
(4, 218, 2),
(4, 219, -1),
(4, 220, 2),
(4, 221, 2),
(4, 222, 2),
(4, 223, 3),
(4, 224, 3),
(4, 225, 2),
(4, 226, 2),
(4, 227, 1),
(4, 228, 2),
(4, 230, 2),
(4, 231, 2),
(4, 232, 2),
(4, 233, 2),
(4, 234, 2),
(4, 235, 2),
(4, 236, 2),
(4, 237, 2),
(4, 238, 2),
(4, 239, 2),
(4, 240, 3),
(4, 241, 3),
(4, 242, 1),
(4, 243, 1),
(4, 244, 1),
(4, 245, 2),
(4, 246, 2),
(4, 247, 3),
(4, 248, -1),
(4, 249, 2),
(4, 250, 2),
(4, 251, 1),
(4, 252, 1),
(4, 254, 2),
(4, 256, 3),
(4, 257, 2),
(4, 258, -1),
(4, 259, 1),
(4, 260, 2),
(4, 261, 2),
(4, 263, 1),
(4, 265, 2),
(4, 267, 2),
(4, 275, 2),
(4, 276, 2),
(4, 277, -1),
(4, 278, 3),
(4, 279, 2),
(4, 283, 1),
(4, 284, 1),
(4, 285, -1),
(4, 287, 2),
(4, 288, 1),
(4, 289, 2),
(4, 290, -1);

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
