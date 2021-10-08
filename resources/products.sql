-- -------------------------------------------------------------
-- TablePlus 3.12.6(366)
--
-- https://tableplus.com/
--
-- Database: todo
-- Generation Time: 2021-09-17 19:38:50.9610
-- -------------------------------------------------------------


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;


DROP TABLE IF EXISTS `categories`;
CREATE TABLE `categories` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `group_name` varchar(255) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb3;

DROP TABLE IF EXISTS `products`;
CREATE TABLE `products` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `product_name` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `price` double NOT NULL DEFAULT '0',
  `thumbnail` varchar(255) DEFAULT NULL,
  `category_id` int NOT NULL DEFAULT '1',
  PRIMARY KEY (`id`),
  UNIQUE KEY `id` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=19 DEFAULT CHARSET=utf8mb3;

INSERT INTO `categories` (`id`, `group_name`) VALUES
(1, 'Family & Sharing'),
(2, 'Chicken & Fish'),
(3, 'Beef'),
(4, 'Drinks'),
(5, 'Desserts');

INSERT INTO `products` (`id`, `product_name`, `price`, `thumbnail`, `category_id`) VALUES
(1, 'Chicken McPieces - 6pc', 8.7, '1.jpeg', 1),
(2, 'Chicken McNuggets - 10pc', 8.7, '2.jpeg', 1),
(3, 'Chicken McNuggets - 20pc', 14.6, '3.jpeg', 1),
(4, 'McChicken', 7.35, '4.jpeg', 2),
(5, 'Filet-O-Fish', 5.95, '5.jpeg', 2),
(6, 'Chicken \'n\' Cheese', 4.7, '6.jpeg', 2),
(7, 'Double McChicken', 9.3, '7.jpeg', 2),
(8, 'Double Filet-O-Fish', 7.75, '8.jpeg', 2),
(9, 'Big Mac', 7.1, '9.jpeg', 3),
(10, 'Wagyu Beef', 11.05, '10.jpeg', 3),
(11, 'Cheese Burger', 4.35, '11.jpeg', 3),
(12, 'Cappuccino ', 4.3, '12.jpeg', 4),
(13, 'Mocha', 4.9, '13.jpeg', 4),
(14, 'Latte', 4.3, '14.jpeg', 4),
(15, 'Hot Chocolate', 4.3, '15.jpeg', 4),
(16, 'Hot Apple Pie', 3.25, '16.jpeg', 5),
(17, 'Chocolate Mud Muffin', 4, '17.jpeg', 5),
(18, 'Blueberry Muffin', 4, '18.jpeg', 5);



/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;