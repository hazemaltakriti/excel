-- phpMyAdmin SQL Dump
-- version 4.6.5.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: May 31, 2018 at 09:07 AM
-- Server version: 10.1.21-MariaDB
-- PHP Version: 7.1.1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `excel`
--

-- --------------------------------------------------------

--
-- Table structure for table `tbl_users`
--

CREATE TABLE `tbl_users` (
  `id` int(10) NOT NULL,
  `ip` int(10) NOT NULL,
  `username` varchar(50) NOT NULL,
  `email` varchar(100) NOT NULL,
  `password` varchar(50) NOT NULL,
  `validate` tinyint(1) NOT NULL DEFAULT '0',
  `validatecode` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `tbl_users`
--

INSERT INTO `tbl_users` (`id`, `ip`, `username`, `email`, `password`, `validate`, `validatecode`) VALUES
(1, 0, 'hazem', 'hazemaltakriti@hotmail.com', 'a980425fd1e04f86c6f5fc4f400d250e30fa63a7', 0, '4f9d46470ef6176866424259f6b706cda03cba2d'),
(2, 0, 'ahmadof', 'ahmadof@hotmail.com', '977d85fd228f1bf2fcfbe50187f06ebddec69293', 0, '26373d727c84d801094435310675f8e63923a5d5'),
(3, 0, 'hazem', 'hazemof@hotmail.com', 'f39137b99cd137a114af3f9b9ff734087435d966', 0, '22abebeb740e88e56e55ae2c23c991396fef6046'),
(4, 0, 'arrej', 'areej@hotmail.com', '1690a8bdcc13911c2102dd0d40c17f09e539e9ff', 0, '0983ace4f1f054a638844ce889f1462e4201c9b2');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `tbl_users`
--
ALTER TABLE `tbl_users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `email` (`email`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `tbl_users`
--
ALTER TABLE `tbl_users`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
