-- phpMyAdmin SQL Dump
-- version 5.1.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jun 09, 2021 at 11:52 AM
-- Server version: 10.4.19-MariaDB
-- PHP Version: 8.0.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `to-do-list`
--

-- --------------------------------------------------------

--
-- Table structure for table `to-do-list`
--

CREATE TABLE `to-do-list` (
  `id` int(11) NOT NULL,
  `title` varchar(250) NOT NULL,
  `description` varchar(250) NOT NULL,
  `created_at` datetime NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `to-do-list`
--

INSERT INTO `to-do-list` (`id`, `title`, `description`, `created_at`) VALUES
(53, 'dawdawd', 'dawdawdawd', '2021-06-09 10:08:10'),
(54, 'dwadawdawd', 'dawdawdawd', '2021-06-09 10:08:17'),
(55, 'дсдсдсдс', 'дссдсддсдс', '2021-06-09 10:21:11'),
(56, 'давдавд', 'авдавдавд', '2021-06-09 10:43:26'),
(57, 'dadawd', 'awdawdawd', '2021-06-09 10:47:07'),
(58, 'ffddfdfdf', 'fddfdfdfdf', '2021-06-09 10:55:10'),
(59, 'dawdawdawd', 'dawdawdawd', '2021-06-09 11:03:19'),
(60, 'dawdawdawd5557777', 'dawdawdawd55557777', '2021-06-09 11:03:25'),
(61, 'dawdawdawd555', 'dawdawdawd5555', '2021-06-09 11:04:55'),
(63, 'dawdawd3434', 'awdawdawd3434', '2021-06-09 11:05:42'),
(64, 'dawdawdawd', 'dawdawdawdawd', '2021-06-09 11:06:07'),
(65, 'dawdawd8888', '888888', '2021-06-09 11:41:19'),
(66, 'dawdawdawd', 'dawdawdawdawdawd', '2021-06-09 11:44:24'),
(67, 'dwadawd', 'dawdawdawdawd', '2021-06-09 11:47:07');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `to-do-list`
--
ALTER TABLE `to-do-list`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `to-do-list`
--
ALTER TABLE `to-do-list`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=68;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
