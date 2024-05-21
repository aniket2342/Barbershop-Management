-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Mar 18, 2024 at 04:16 PM
-- Server version: 10.4.22-MariaDB
-- PHP Version: 7.3.33

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `kesh`
--

-- --------------------------------------------------------

--
-- Table structure for table `admin`
--

CREATE TABLE `admin` (
  `id` int(11) NOT NULL,
  `phoneNumber` int(11) NOT NULL,
  `password` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `admin`
--

INSERT INTO `admin` (`id`, `phoneNumber`, `password`) VALUES
(1, 123456, 'sandeep');

-- --------------------------------------------------------

--
-- Table structure for table `order`
--

CREATE TABLE `order` (
  `id` int(11) NOT NULL,
  `productId` int(11) NOT NULL,
  `date` datetime(3) NOT NULL DEFAULT current_timestamp(3),
  `userNumber` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `order`
--

INSERT INTO `order` (`id`, `productId`, `date`, `userNumber`) VALUES
(1, 4, '2024-03-14 15:15:19.711', 5959),
(2, 3, '2024-03-14 15:22:44.560', 696969),
(3, 3, '2024-03-14 15:23:29.809', 696969),
(4, 4, '2024-03-15 11:16:41.076', 1212);

-- --------------------------------------------------------

--
-- Table structure for table `product`
--

CREATE TABLE `product` (
  `id` int(11) NOT NULL,
  `image` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `name` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `description` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `price` double NOT NULL,
  `show` tinyint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `product`
--

INSERT INTO `product` (`id`, `image`, `name`, `description`, `price`, `show`) VALUES
(3, 'https://www.kerastase.in/dw/image/v2/BJSQ_PRD/on/demandware.static/-/Sites-kerastase-master-catalog/en_IN/dw012fc061/2022/densifique/KER_00029/KER_DENSIFIQUE_3474636403912_PACKSHOT.jpg?sw=465', 'Kérastase Densifique Bodifying Shampoo and Conditioner', 'Kérastase’s indulgent duo tied for best in the GH Beauty Lab’s volumizing shampoos and conditioners test for thickening strands using ingredients like peptides and hyaluronic acid.', 20, 0),
(4, 'https://m.media-amazon.com/images/I/81oiNJ5yagL.jpg', 'OGX Shampoo Fade-Defying +Orchid Oil', 'To keep your shade vibrant, suds up with OGX’s sulfate-free shampoo, a GH Beauty Lab test winner for preserving hair color along with the matching conditioner.', 25, 0),
(5, 'https://keepitanchored.co.nz/cdn/shop/products/KIA_Womens_Essentials.png?v=1588344305', 'KeepItAnchored Essentials Kit for Women', 'A GH Beauty Award winner for its breakthrough technology, this KeepItAnchored shampoo and scalp serum set helps maintain hair’s fullness by improving the scalp’s condition with ingredients li', 25, 0),
(6, 'https://www.kerastase.in/dw/image/v2/BJSQ_PRD/on/demandware.static/-/Sites-kerastase-master-catalog/en_IN/dwf8df9c05/2022/discipline/KER_00036/3474630655201_Fluidissime-Anti-Frizz-Spray-1.jpg', 'Kérastase Discipline Anti Frizz Smoothing Spray', 'Great for anyone averse to heavier styling products, Kérastase, a winner of the GH Beauty Lab’s anti-frizz styling products test, provides potent frizz-fighting power in a lightweight liquid ', 25, 0);

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

CREATE TABLE `user` (
  `id` int(11) NOT NULL,
  `name` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `phoneNumber` int(11) NOT NULL,
  `password` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `address` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`id`, `name`, `phoneNumber`, `password`, `address`) VALUES
(1, 'pndfsdfsdfp', 2147483647, 'sandeep', ' fa sd fa sdfa sdf ad fa sdf asd fa df ad fasd fa sdf '),
(2, 'shakti', 1111, 'dubey', 'fadfasdfa df asdf a f ads fa'),
(3, 'prahlad', 2222, 'singh', 'gsfgsfgsfg s fg sdfgs '),
(4, 'shridhan', 4444, 'chavan', 'dfadfa'),
(5, 'bunty', 696969, 'bunty69', 'bhandup'),
(6, 'wow', 5959, 'wow', 'sdfa'),
(7, 'champa', 4654654, 'champa ', 'asdfas'),
(8, 'ANIKET', 1212, 'aniket', 'ASDF D FA DF ASDF AS DF ASDF A');

-- --------------------------------------------------------

--
-- Table structure for table `_prisma_migrations`
--

CREATE TABLE `_prisma_migrations` (
  `id` varchar(36) COLLATE utf8mb4_unicode_ci NOT NULL,
  `checksum` varchar(64) COLLATE utf8mb4_unicode_ci NOT NULL,
  `finished_at` datetime(3) DEFAULT NULL,
  `migration_name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `logs` text COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `rolled_back_at` datetime(3) DEFAULT NULL,
  `started_at` datetime(3) NOT NULL DEFAULT current_timestamp(3),
  `applied_steps_count` int(10) UNSIGNED NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `_prisma_migrations`
--

INSERT INTO `_prisma_migrations` (`id`, `checksum`, `finished_at`, `migration_name`, `logs`, `rolled_back_at`, `started_at`, `applied_steps_count`) VALUES
('13045c15-0631-4de6-842f-58e2ae9d2497', '92515df2b443e48150268245660abf83f13752c06d60b268f0771609e8b1679b', '2024-03-10 21:49:08.681', '20240310214908_y', NULL, NULL, '2024-03-10 21:49:08.634', 1),
('48589682-dfea-4f0c-a2db-481e898753c4', '4f5130d2b1e43d13bc758418b6c338b5c3b53f92d12f330e51670f95cbe3e272', '2024-03-10 15:18:49.858', '20240310151849_', NULL, NULL, '2024-03-10 15:18:49.821', 1),
('67b5b936-6e1f-4243-9002-06f91853c631', '13d378fb9d77080c1a1f00e958d64c7d32c60f68d6bc08ea668389910f3c01cc', '2024-03-10 18:16:38.798', '20240310181638_', NULL, NULL, '2024-03-10 18:16:38.732', 1),
('cd2f829d-52f6-49ef-b2e8-095cacad0073', '416272699867ef5559b19a054e2d373e2673837fab74da3935162a2b50d0404e', '2024-03-10 15:15:41.112', '20240310113412_', NULL, NULL, '2024-03-10 15:15:41.075', 1),
('e6e47641-97b6-4334-bcf2-2aa5b9c75ed0', '592b2a2810ee52f0186ffffe0f4bd8801f8914375c2bbb166308477e45aeb7e7', '2024-03-14 14:49:00.318', '20240314144900_', NULL, NULL, '2024-03-14 14:49:00.298', 1);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `admin`
--
ALTER TABLE `admin`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `admin_phoneNumber_key` (`phoneNumber`);

--
-- Indexes for table `order`
--
ALTER TABLE `order`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `product`
--
ALTER TABLE `product`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `User_phoneNumber_key` (`phoneNumber`);

--
-- Indexes for table `_prisma_migrations`
--
ALTER TABLE `_prisma_migrations`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `admin`
--
ALTER TABLE `admin`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `order`
--
ALTER TABLE `order`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `product`
--
ALTER TABLE `product`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `user`
--
ALTER TABLE `user`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
