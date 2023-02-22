-- phpMyAdmin SQL Dump
-- version 4.8.4
-- https://www.phpmyadmin.net/
--
-- Host: bovhyu3fbj2zfh1xjwu2-mysql.services.clever-cloud.com:3306
-- Generation Time: Feb 22, 2023 at 04:49 PM
-- Server version: 8.0.22-13
-- PHP Version: 7.2.34

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `bovhyu3fbj2zfh1xjwu2`
--

-- --------------------------------------------------------

--
-- Table structure for table `Album`
--

CREATE TABLE `Album` (
  `id` int UNSIGNED NOT NULL,
  `title` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `user_id` int UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `Album`
--

INSERT INTO `Album` (`id`, `title`, `user_id`) VALUES
(1, 'Cattos', 1),
(3, 'Wild & Free', 2);

-- --------------------------------------------------------

--
-- Table structure for table `Photo`
--

CREATE TABLE `Photo` (
  `id` int UNSIGNED NOT NULL,
  `title` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `url` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `comment` mediumtext COLLATE utf8mb4_unicode_ci,
  `user_id` int UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `Photo`
--

INSERT INTO `Photo` (`id`, `title`, `url`, `comment`, `user_id`) VALUES
(1, 'Beautiful catto', 'https://unsplash.com/photos/KGiQFgF7dkc', 'A beautiful siamese cat', 1),
(2, 'Chicks', 'https://unsplash.com/photos/LAVcmB1Gli0', 'Chicks with their mama', 2),
(3, 'Funny Doggy', 'https://unsplash.com/photos/wOHH-NUTvVc', 'A funny doggy', 2),
(4, 'Cool dolphin', 'https://unsplash.com/photos/UaaHbkk40Ow', NULL, 2),
(5, 'Bunny', 'https://unsplash.com/photos/u_kMWN-BWyU', 'Follow the white bunny down the rabbit hole', 2),
(6, 'Fox', 'https://unsplash.com/photos/xUUZcpQlqpM', 'A very distinguished mister fox in the snow', 2),
(7, 'Pug', 'https://unsplash.com/photos/Mv9hjnEUHR4', 'Puuuuuuuggyyyyy', 2),
(8, 'Cat', 'https://unsplash.com/photos/Qtg_270Aa_I', 'A cat mister who is very pleased', 1);

-- --------------------------------------------------------

--
-- Table structure for table `User`
--

CREATE TABLE `User` (
  `id` int UNSIGNED NOT NULL,
  `email` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `password` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `first_name` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `last_name` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `User`
--

INSERT INTO `User` (`id`, `email`, `password`, `first_name`, `last_name`) VALUES
(1, 'bernilla.bengtsson@gmail.com', '$2b$10$c5QHg26XgxTSCcU3KfxxbuzqDx3w1ChJfsCQNJeGUZLxhWwKq3I1i', 'Bernilla', 'Bengtsson'),
(2, 'gustav.gunnarsson@gmail.com', '$2b$10$Ac9hr4UsJhRwmzrBLyycUOZ7e4ELQJnWVSjPYTrpKnelO21lIMQby', 'Gustav', 'Gunnarsson');

-- --------------------------------------------------------

--
-- Table structure for table `_AlbumToPhoto`
--

CREATE TABLE `_AlbumToPhoto` (
  `A` int UNSIGNED NOT NULL,
  `B` int UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `_AlbumToPhoto`
--

INSERT INTO `_AlbumToPhoto` (`A`, `B`) VALUES
(1, 1),
(3, 4),
(3, 5),
(3, 6);

-- --------------------------------------------------------

--
-- Table structure for table `_prisma_migrations`
--

CREATE TABLE `_prisma_migrations` (
  `id` varchar(36) COLLATE utf8mb4_unicode_ci NOT NULL,
  `checksum` varchar(64) COLLATE utf8mb4_unicode_ci NOT NULL,
  `finished_at` datetime(3) DEFAULT NULL,
  `migration_name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `logs` text COLLATE utf8mb4_unicode_ci,
  `rolled_back_at` datetime(3) DEFAULT NULL,
  `started_at` datetime(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
  `applied_steps_count` int UNSIGNED NOT NULL DEFAULT '0'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `_prisma_migrations`
--

INSERT INTO `_prisma_migrations` (`id`, `checksum`, `finished_at`, `migration_name`, `logs`, `rolled_back_at`, `applied_steps_count`) VALUES
('1c8f8702-e35e-4048-a10f-643dcba732d9', 'fd1c379c0a8af40d7e0eca0441c63dedfdacb6babc7b6022426428acbdcc8d0d', '2023-02-20 10:18:31.548', '20230213103715_init', NULL, NULL, 1);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `Album`
--
ALTER TABLE `Album`
  ADD PRIMARY KEY (`id`),
  ADD KEY `Album_user_id_fkey` (`user_id`);

--
-- Indexes for table `Photo`
--
ALTER TABLE `Photo`
  ADD PRIMARY KEY (`id`),
  ADD KEY `Photo_user_id_fkey` (`user_id`);

--
-- Indexes for table `User`
--
ALTER TABLE `User`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `User_email_key` (`email`);

--
-- Indexes for table `_AlbumToPhoto`
--
ALTER TABLE `_AlbumToPhoto`
  ADD UNIQUE KEY `_AlbumToPhoto_AB_unique` (`A`,`B`),
  ADD KEY `_AlbumToPhoto_B_index` (`B`);

--
-- Indexes for table `_prisma_migrations`
--
ALTER TABLE `_prisma_migrations`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `Album`
--
ALTER TABLE `Album`
  MODIFY `id` int UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `Photo`
--
ALTER TABLE `Photo`
  MODIFY `id` int UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT for table `User`
--
ALTER TABLE `User`
  MODIFY `id` int UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `Album`
--
ALTER TABLE `Album`
  ADD CONSTRAINT `Album_user_id_fkey` FOREIGN KEY (`user_id`) REFERENCES `User` (`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

--
-- Constraints for table `Photo`
--
ALTER TABLE `Photo`
  ADD CONSTRAINT `Photo_user_id_fkey` FOREIGN KEY (`user_id`) REFERENCES `User` (`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

--
-- Constraints for table `_AlbumToPhoto`
--
ALTER TABLE `_AlbumToPhoto`
  ADD CONSTRAINT `_AlbumToPhoto_A_fkey` FOREIGN KEY (`A`) REFERENCES `Album` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `_AlbumToPhoto_B_fkey` FOREIGN KEY (`B`) REFERENCES `Photo` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
