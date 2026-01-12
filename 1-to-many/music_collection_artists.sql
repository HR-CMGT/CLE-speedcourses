-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jan 06, 2025 at 10:33 AM
-- Server version: 8.0.33
-- PHP Version: 8.3.15

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `music_collection_artists`
--
CREATE DATABASE IF NOT EXISTS `music_collection_artists` DEFAULT CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci;
USE `music_collection_artists`;

-- --------------------------------------------------------

--
-- Table structure for table `albums`
--

DROP TABLE IF EXISTS `albums`;
CREATE TABLE `albums` (
  `id` int UNSIGNED NOT NULL,
  `name` varchar(50) NOT NULL,
  `year` varchar(4) NOT NULL,
  `tracks` int NOT NULL,
  `genre` varchar(30) NOT NULL,
  `artist_id` int UNSIGNED DEFAULT NULL,
  `image` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;

--
-- Dumping data for table `albums`
--

INSERT INTO `albums` (`id`, `name`, `year`, `tracks`, `genre`, `artist_id`, `image`) VALUES
(1, 'Live At Rome Olympic Stadium', '2013', 14, 'Rock', 1, 'live_at_rome_olympic_stadium.jpg'),
(2, 'Systematic Chaos', '2007', 8, 'Progressive Rock', 4, 'systematic_chaos.jpg'),
(3, 'United We Are', '2015', 14, 'House', 1, 'united_we_are.jpg'),
(4, 'Greatest Hits', '2010', 57, 'Pop', 5, 'greatest_hits.jpg'),
(5, 'Gold Cobra', '2011', 16, 'Rock / Rap', 3, 'gold_cobra.jpg'),
(6, 'Mijn Ikken', '2005', 12, 'Nederpop', 11, 'mijn_ikken.jpg'),
(7, 'Love Part 1', '2011', 11, 'Rock', 7, 'love_part_1.jpg'),
(8, 'Unstoppable Momentum', '2013', 11, 'Rock', 6, 'unstoppable_momentum.jpg'),
(9, 'Cut Your Teeth', '2014', 3, 'Chillstep', 8, 'cut_your_teeth.jpg'),
(10, 'This Is War', '2009', 15, 'Rock', 9, 'this_is_war.jpg'),
(11, 'Legend (Remastered)', '2002', 16, 'Pop', 10, 'legend.jpg'),
(12, 'Piet Veerman', '1987', 10, 'Nederlandstalig', 12, 'piet_veerman.jpg'),
(13, 'Love songs', '2003', 15, 'Pop', NULL, '');

-- --------------------------------------------------------

--
-- Table structure for table `artists`
--

DROP TABLE IF EXISTS `artists`;
CREATE TABLE `artists` (
  `id` int UNSIGNED NOT NULL,
  `name` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;

--
-- Dumping data for table `artists`
--

INSERT INTO `artists` (`id`, `name`) VALUES
(1, 'Muse'),
(2, 'Hardwell'),
(3, 'Limp Bizkit'),
(4, 'Dream Theater'),
(5, 'Robbie Williams'),
(6, 'Joe Satriani'),
(7, 'Angels & Airwaves'),
(8, 'Kygo'),
(9, '30 Seconds To Mars'),
(10, 'Bob Marley & The Wailers'),
(11, 'Harrie Jekkers'),
(12, 'Piet Veerman'),
(13, 'Michael Jackson');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `albums`
--
ALTER TABLE `albums`
  ADD PRIMARY KEY (`id`),
  ADD KEY `artist_id` (`artist_id`);

--
-- Indexes for table `artists`
--
ALTER TABLE `artists`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `albums`
--
ALTER TABLE `albums`
  MODIFY `id` int UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;

--
-- AUTO_INCREMENT for table `artists`
--
ALTER TABLE `artists`
  MODIFY `id` int UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `albums`
--
ALTER TABLE `albums`
  ADD CONSTRAINT `albums_ibfk_1` FOREIGN KEY (`artist_id`) REFERENCES `artists` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
