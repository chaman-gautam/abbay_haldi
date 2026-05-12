-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Feb 13, 2026 at 07:01 AM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.0.30

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `dbxrv39if77cdt`
--

-- --------------------------------------------------------

--
-- Table structure for table `accounts`
--

CREATE TABLE `accounts` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `type` enum('business','agency') NOT NULL,
  `status` enum('active','trialing','past_due','suspended','cancelled') NOT NULL DEFAULT 'trialing',
  `plan_id` bigint(20) UNSIGNED DEFAULT NULL,
  `timezone` varchar(255) NOT NULL DEFAULT 'UTC',
  `currency` varchar(3) NOT NULL DEFAULT 'USD',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `accounts`
--

INSERT INTO `accounts` (`id`, `type`, `status`, `plan_id`, `timezone`, `currency`, `created_at`, `updated_at`) VALUES
(16, 'business', 'trialing', NULL, 'UTC', 'USD', '2026-02-02 05:23:40', '2026-02-02 05:23:40'),
(17, 'business', 'trialing', NULL, 'UTC', 'USD', '2026-02-02 05:26:06', '2026-02-02 05:26:06'),
(18, 'business', 'trialing', NULL, 'UTC', 'USD', '2026-02-02 05:34:38', '2026-02-02 05:34:38'),
(19, 'business', 'trialing', NULL, 'UTC', 'USD', '2026-02-02 05:39:34', '2026-02-02 05:39:34'),
(20, 'business', 'trialing', NULL, 'UTC', 'USD', '2026-02-02 23:18:13', '2026-02-02 23:18:13'),
(21, 'business', 'trialing', NULL, 'UTC', 'USD', '2026-02-03 23:52:30', '2026-02-03 23:52:30'),
(22, 'business', 'trialing', NULL, 'UTC', 'USD', '2026-02-04 02:10:39', '2026-02-04 02:10:39');

-- --------------------------------------------------------

--
-- Table structure for table `account_branding`
--

CREATE TABLE `account_branding` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `account_id` bigint(20) UNSIGNED NOT NULL,
  `brand_name` varchar(255) DEFAULT NULL,
  `logo_url` varchar(255) DEFAULT NULL,
  `favicon_url` varchar(255) DEFAULT NULL,
  `primary_color` varchar(255) DEFAULT NULL,
  `secondary_color` varchar(255) DEFAULT NULL,
  `email_from_name` varchar(255) DEFAULT NULL,
  `email_from_address` varchar(255) DEFAULT NULL,
  `support_email` varchar(255) DEFAULT NULL,
  `custom_domain` varchar(255) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `account_users`
--

CREATE TABLE `account_users` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `account_id` bigint(20) UNSIGNED NOT NULL,
  `user_id` bigint(20) UNSIGNED NOT NULL,
  `role` enum('owner','billing') NOT NULL DEFAULT 'owner',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `account_users`
--

INSERT INTO `account_users` (`id`, `account_id`, `user_id`, `role`, `created_at`, `updated_at`) VALUES
(16, 16, 62, 'owner', '2026-02-02 05:23:40', '2026-02-02 05:23:40'),
(17, 17, 61, 'owner', '2026-02-02 05:26:06', '2026-02-02 05:26:06'),
(18, 18, 60, 'owner', '2026-02-02 05:34:38', '2026-02-02 05:34:38'),
(19, 19, 63, 'owner', '2026-02-02 05:39:34', '2026-02-02 05:39:34'),
(20, 20, 64, 'owner', '2026-02-02 23:18:13', '2026-02-02 23:18:13'),
(21, 21, 65, 'owner', '2026-02-03 23:52:30', '2026-02-03 23:52:30'),
(22, 22, 66, 'owner', '2026-02-04 02:10:39', '2026-02-04 02:10:39');

-- --------------------------------------------------------

--
-- Table structure for table `activity_logs`
--

CREATE TABLE `activity_logs` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `account_id` bigint(20) UNSIGNED DEFAULT NULL,
  `workspace_id` bigint(20) UNSIGNED DEFAULT NULL,
  `branch_id` bigint(20) UNSIGNED DEFAULT NULL,
  `user_id` bigint(20) UNSIGNED DEFAULT NULL,
  `action` varchar(255) NOT NULL,
  `entity_type` varchar(255) DEFAULT NULL,
  `entity_id` bigint(20) UNSIGNED DEFAULT NULL,
  `metadata` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL CHECK (json_valid(`metadata`)),
  `ip_address` varchar(45) DEFAULT NULL,
  `user_agent` varchar(255) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `branches`
--

CREATE TABLE `branches` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `workspace_id` bigint(20) UNSIGNED NOT NULL,
  `google_location_id` varchar(255) DEFAULT NULL,
  `name` varchar(255) NOT NULL,
  `address_line_1` varchar(255) DEFAULT NULL,
  `address_line_2` varchar(255) DEFAULT NULL,
  `city` varchar(255) DEFAULT NULL,
  `state` varchar(255) DEFAULT NULL,
  `postal_code` varchar(255) DEFAULT NULL,
  `country` varchar(255) DEFAULT NULL,
  `status` enum('active','suspended','disabled') NOT NULL DEFAULT 'active',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `google_account_resource` varchar(255) DEFAULT NULL,
  `primary_category` varchar(255) DEFAULT NULL,
  `additional_categories` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL CHECK (json_valid(`additional_categories`)),
  `gbp_status` enum('ACTIVE','SUSPENDED','UNKNOWN') NOT NULL DEFAULT 'UNKNOWN',
  `is_selected` tinyint(1) NOT NULL DEFAULT 0,
  `last_synced_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `cache`
--

CREATE TABLE `cache` (
  `key` varchar(255) NOT NULL,
  `value` mediumtext NOT NULL,
  `expiration` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `cache_locks`
--

CREATE TABLE `cache_locks` (
  `key` varchar(255) NOT NULL,
  `owner` varchar(255) NOT NULL,
  `expiration` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `failed_jobs`
--

CREATE TABLE `failed_jobs` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `uuid` varchar(255) NOT NULL,
  `connection` text NOT NULL,
  `queue` text NOT NULL,
  `payload` longtext NOT NULL,
  `exception` longtext NOT NULL,
  `failed_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `features`
--

CREATE TABLE `features` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `key` varchar(255) NOT NULL,
  `name` varchar(255) NOT NULL,
  `description` text DEFAULT NULL,
  `is_active` tinyint(1) NOT NULL DEFAULT 1,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `gbp_reviews`
--

CREATE TABLE `gbp_reviews` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `branch_id` bigint(20) UNSIGNED NOT NULL,
  `google_review_id` varchar(255) NOT NULL,
  `rating` tinyint(4) NOT NULL,
  `comment` text DEFAULT NULL,
  `reviewer_name` varchar(255) DEFAULT NULL,
  `review_time` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `google_accounts`
--

CREATE TABLE `google_accounts` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `account_id` bigint(20) UNSIGNED NOT NULL,
  `google_account_id` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `access_token` text NOT NULL,
  `refresh_token` text DEFAULT NULL,
  `token_expires_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `jobs`
--

CREATE TABLE `jobs` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `queue` varchar(255) NOT NULL,
  `payload` longtext NOT NULL,
  `attempts` tinyint(3) UNSIGNED NOT NULL,
  `reserved_at` int(10) UNSIGNED DEFAULT NULL,
  `available_at` int(10) UNSIGNED NOT NULL,
  `created_at` int(10) UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `job_batches`
--

CREATE TABLE `job_batches` (
  `id` varchar(255) NOT NULL,
  `name` varchar(255) NOT NULL,
  `total_jobs` int(11) NOT NULL,
  `pending_jobs` int(11) NOT NULL,
  `failed_jobs` int(11) NOT NULL,
  `failed_job_ids` longtext NOT NULL,
  `options` mediumtext DEFAULT NULL,
  `cancelled_at` int(11) DEFAULT NULL,
  `created_at` int(11) NOT NULL,
  `finished_at` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `migrations`
--

CREATE TABLE `migrations` (
  `id` int(10) UNSIGNED NOT NULL,
  `migration` varchar(255) NOT NULL,
  `batch` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `migrations`
--

INSERT INTO `migrations` (`id`, `migration`, `batch`) VALUES
(1, '0001_01_01_000000_create_users_table', 1),
(2, '0001_01_01_000001_create_cache_table', 1),
(3, '0001_01_01_000002_create_jobs_table', 1),
(4, '2026_01_23_061009_final_users_table', 1),
(5, '2026_01_23_061010_create_plans_table', 1),
(6, '2026_01_23_061017_create_features_table', 1),
(7, '2026_01_23_061717_create_accounts_table', 1),
(8, '2026_01_23_061904_create_account_users_table', 1),
(9, '2026_01_23_062012_create_account_branding_table', 1),
(10, '2026_01_23_062107_create_workspaces_table', 1),
(11, '2026_01_23_062226_create_workspace_users_table', 1),
(12, '2026_01_23_062325_create_branches_table', 1),
(13, '2026_01_23_062621_create_plan_features_table', 1),
(14, '2026_01_23_062715_create_plan_limits_table', 1),
(15, '2026_01_23_062840_create_subscriptions_table', 1),
(16, '2026_01_23_063759_create_activity_logs_table', 1),
(17, '2026_01_26_051738_create_registration_sessions_table', 1),
(18, '2026_01_27_053715_make_plan_id_nullable_in_registration_sessions', 2),
(19, '2026_02_04_053108_create_google_accounts_table', 3),
(20, '2026_02_04_053456_add_gbp_fields_to_branches_table', 4),
(21, '2026_02_04_053622_create_gbp_reviews_table', 4);

-- --------------------------------------------------------

--
-- Table structure for table `password_reset_tokens`
--

CREATE TABLE `password_reset_tokens` (
  `email` varchar(255) NOT NULL,
  `token` varchar(255) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `plans`
--

CREATE TABLE `plans` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL,
  `slug` varchar(255) NOT NULL,
  `tagline` varchar(255) DEFAULT NULL,
  `monthly_price` decimal(10,2) DEFAULT NULL,
  `yearly_price` decimal(10,2) DEFAULT NULL,
  `yearly_discount_percent` tinyint(3) UNSIGNED DEFAULT NULL,
  `description` text DEFAULT NULL,
  `highlights` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL CHECK (json_valid(`highlights`)),
  `is_featured` tinyint(1) NOT NULL DEFAULT 0,
  `is_public` tinyint(1) NOT NULL DEFAULT 1,
  `sort_order` tinyint(3) UNSIGNED NOT NULL DEFAULT 0,
  `type` enum('free','paid','custom') NOT NULL DEFAULT 'paid',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `plans`
--

INSERT INTO `plans` (`id`, `name`, `slug`, `tagline`, `monthly_price`, `yearly_price`, `yearly_discount_percent`, `description`, `highlights`, `is_featured`, `is_public`, `sort_order`, `type`, `created_at`, `updated_at`) VALUES
(1, 'Agency', 'agency', 'Built for agencies managing multiple clients', 199.00, 1990.00, 17, 'Designed for agencies and consultants managing multiple client businesses with white-label branding and advanced controls.', '[\"Unlimited Workspaces\", \"Unlimited GBP Locations\", \"White-Label Branding\", \"Client Reports\", \"Priority Support\", \"Bulk Actions\"]', 0, 1, 4, 'paid', '2026-01-26 10:27:17', '2026-01-26 10:27:17'),
(2, 'Pro', 'pro', 'Advanced tools for growing businesses', 79.00, 790.00, 17, 'Best for growing businesses managing multiple locations who need automation, insights, and advanced protection.', '[\"3 Workspaces\", \"10 GBP Locations\", \"AI Review Replies\", \"Suspension Risk Score\", \"Competitor Tracking\", \"Advanced Reports\"]', 1, 1, 3, 'paid', '2026-01-26 10:27:18', '2026-01-26 10:27:18'),
(3, 'Starter', 'starter', 'Perfect for small local businesses', 29.00, 290.00, 17, 'Designed for small businesses that want better visibility, review monitoring, and basic protection for their Google Business Profile.', '[\"1 Workspace\", \"3 GBP Locations\", \"Review Monitoring\", \"Suspension Alerts\", \"Basic Reports\"]', 0, 1, 2, 'paid', '2026-01-26 10:27:18', '2026-01-26 10:27:18'),
(4, 'Free', 'free', 'Start monitoring your Google Business Profile', NULL, NULL, NULL, 'Best for individuals and small businesses who want to try basic Google Business Profile monitoring.', '[\"1 Workspace\", \"1 GBP Location\", \"Basic Profile Monitoring\", \"Email Alerts\"]', 0, 1, 1, 'free', '2026-01-26 10:27:18', '2026-01-26 10:27:18');

-- --------------------------------------------------------

--
-- Table structure for table `plan_features`
--

CREATE TABLE `plan_features` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `plan_id` bigint(20) UNSIGNED NOT NULL,
  `feature_id` bigint(20) UNSIGNED NOT NULL,
  `is_enabled` tinyint(1) NOT NULL DEFAULT 1,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `plan_limits`
--

CREATE TABLE `plan_limits` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `plan_id` bigint(20) UNSIGNED NOT NULL,
  `limit_key` varchar(255) NOT NULL,
  `limit_value` int(10) UNSIGNED NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `registration_sessions`
--

CREATE TABLE `registration_sessions` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `session_uuid` char(36) NOT NULL,
  `plan_id` bigint(20) UNSIGNED DEFAULT NULL,
  `role` varchar(255) DEFAULT NULL,
  `source` enum('wordpress','direct') NOT NULL DEFAULT 'wordpress',
  `status` varchar(50) NOT NULL,
  `email` varchar(255) DEFAULT NULL,
  `user_id` bigint(20) UNSIGNED DEFAULT NULL,
  `expires_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `last_step` varchar(50) DEFAULT NULL,
  `abandoned_at` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `registration_sessions`
--

INSERT INTO `registration_sessions` (`id`, `session_uuid`, `plan_id`, `role`, `source`, `status`, `email`, `user_id`, `expires_at`, `created_at`, `updated_at`, `last_step`, `abandoned_at`) VALUES
(418, '7105e683-d5f1-424e-a541-c4f575421c74', 2, 'business', 'direct', 'COMPLETED', 'chaman12gautam12@gmail.com', 60, '2026-02-02 11:04:38', '2026-02-02 04:41:10', '2026-02-02 05:34:38', NULL, NULL),
(419, '8dcf885d-104a-4ae6-bf3c-2a0d95092879', NULL, NULL, 'direct', 'INITIATED', NULL, NULL, '2026-02-02 04:56:46', '2026-02-02 04:41:46', '2026-02-02 04:41:46', NULL, NULL),
(420, '0a41e2c0-f069-47c7-8ec2-7110b1ab41e3', 4, 'business', 'direct', 'COMPLETED', 'chaman112gautam12@gmail.com', 61, '2026-02-02 10:56:06', '2026-02-02 04:43:35', '2026-02-02 05:26:06', NULL, NULL),
(421, '90d96441-8ba7-45e9-b4e7-5e2a5945064c', 4, 'business', 'direct', 'COMPLETED', 'chaman122gautam12@gmail.com', 62, '2026-02-02 10:53:40', '2026-02-02 04:45:52', '2026-02-02 05:23:40', NULL, NULL),
(422, 'ca9232bd-6098-4d23-beb0-0b6d2f887f5c', 3, 'business', 'direct', 'COMPLETED', 'dev@gmail.com', 63, '2026-02-02 11:09:34', '2026-02-02 05:38:44', '2026-02-02 05:39:34', NULL, NULL),
(423, '173896e9-1e01-4bd4-a666-6d841957f5fb', 4, 'business', 'direct', 'COMPLETED', 'fear4you@gmail.com', 64, '2026-02-03 04:48:13', '2026-02-02 23:12:15', '2026-02-02 23:18:13', NULL, NULL),
(424, '2c1e9dea-406f-4e35-aab7-5f2dbe1643d7', NULL, NULL, 'direct', 'OAUTH_STARTED', NULL, NULL, '2026-02-03 04:52:26', '2026-02-02 23:21:58', '2026-02-02 23:22:26', NULL, NULL),
(425, 'd1317959-899c-4d9f-89e5-dd566ff1a044', NULL, NULL, 'direct', 'OAUTH_STARTED', NULL, NULL, '2026-02-03 04:56:59', '2026-02-02 23:26:30', '2026-02-02 23:26:59', NULL, NULL),
(426, '4d42368b-be38-4494-a1ca-74f5b624bf13', 2, 'business', 'direct', 'COMPLETED', 'akash@gmail.com', 65, '2026-02-04 05:22:30', '2026-02-03 23:50:07', '2026-02-03 23:52:30', NULL, NULL),
(427, '63fcb323-344b-4d4a-9f88-aed2ef42bd13', 2, 'business', 'direct', 'COMPLETED', 'asd@gmail.com', 66, '2026-02-04 07:40:39', '2026-02-04 02:09:02', '2026-02-04 02:10:39', NULL, NULL),
(428, '06fdb7af-8424-4ad0-884c-9a2dc5a25462', NULL, NULL, 'direct', 'INITIATED', NULL, NULL, '2026-02-04 02:26:34', '2026-02-04 02:11:34', '2026-02-04 02:11:34', NULL, NULL),
(429, 'bd48325b-be2a-4c24-9720-baf2ebb2bd69', NULL, NULL, 'direct', 'INITIATED', NULL, NULL, '2026-02-04 04:22:03', '2026-02-04 04:07:03', '2026-02-04 04:07:03', NULL, NULL),
(430, 'dfd370ff-5d21-4a4d-a8b7-212bbef841f1', NULL, NULL, 'direct', 'INITIATED', NULL, NULL, '2026-02-09 01:27:10', '2026-02-09 01:12:11', '2026-02-09 01:12:11', NULL, NULL),
(431, '8ff7fd59-5e23-4740-8403-c8bd18b9973c', NULL, NULL, 'direct', 'INITIATED', NULL, NULL, '2026-02-09 01:30:13', '2026-02-09 01:15:13', '2026-02-09 01:15:13', NULL, NULL),
(432, '62c1c57f-c435-40c9-a544-226295c83fa1', NULL, NULL, 'direct', 'INITIATED', NULL, NULL, '2026-02-09 02:04:39', '2026-02-09 01:49:39', '2026-02-09 01:49:39', NULL, NULL),
(433, '6539a0bf-8caf-4701-af3b-c6c6d540cfef', NULL, NULL, 'direct', 'INITIATED', NULL, NULL, '2026-02-09 02:04:56', '2026-02-09 01:49:56', '2026-02-09 01:49:56', NULL, NULL),
(434, '3d4fd2e0-71a7-416f-a68d-b2082875164e', NULL, NULL, 'direct', 'INITIATED', NULL, NULL, '2026-02-09 02:24:13', '2026-02-09 02:09:13', '2026-02-09 02:09:13', NULL, NULL),
(435, '77d4a783-9353-48b0-ac84-6a23c1b1e690', NULL, NULL, 'direct', 'INITIATED', NULL, NULL, '2026-02-09 02:24:25', '2026-02-09 02:09:25', '2026-02-09 02:09:25', NULL, NULL),
(436, 'af7f76c9-8eb2-415f-b4af-9cb9463b6155', NULL, NULL, 'direct', 'INITIATED', NULL, NULL, '2026-02-09 02:24:53', '2026-02-09 02:09:53', '2026-02-09 02:09:53', NULL, NULL),
(437, '96405e48-411f-4f41-9d92-69eb9fc79b0f', NULL, NULL, 'direct', 'INITIATED', NULL, NULL, '2026-02-09 02:25:09', '2026-02-09 02:10:09', '2026-02-09 02:10:09', NULL, NULL),
(438, '4cf3fed7-6ced-464d-ab55-2ea38dc90989', NULL, NULL, 'direct', 'INITIATED', NULL, NULL, '2026-02-09 02:25:09', '2026-02-09 02:10:09', '2026-02-09 02:10:09', NULL, NULL),
(439, '793ea13c-8b4d-4d76-ae7e-5b0d231d0f0a', NULL, NULL, 'direct', 'INITIATED', NULL, NULL, '2026-02-09 02:25:11', '2026-02-09 02:10:11', '2026-02-09 02:10:11', NULL, NULL),
(440, '71a0b695-11ee-440d-902d-9dcc59c5b9df', NULL, NULL, 'direct', 'OAUTH_STARTED', NULL, NULL, '2026-02-09 07:40:40', '2026-02-09 02:10:23', '2026-02-09 02:10:40', NULL, NULL),
(441, 'f1bbf1c2-1187-4ad2-9a79-5e7c75bbb259', NULL, NULL, 'direct', 'OAUTH_STARTED', NULL, NULL, '2026-02-09 07:58:26', '2026-02-09 02:22:26', '2026-02-09 02:28:26', NULL, NULL),
(442, '55ba70c4-4ca9-4905-84fb-94f255289b7f', NULL, NULL, 'direct', 'INITIATED', NULL, NULL, '2026-02-09 02:39:32', '2026-02-09 02:24:32', '2026-02-09 02:24:32', NULL, NULL),
(443, '722e1c80-c5ab-467e-b42d-fc8b536e7304', NULL, NULL, 'direct', 'INITIATED', NULL, NULL, '2026-02-09 02:42:52', '2026-02-09 02:27:52', '2026-02-09 02:27:52', NULL, NULL),
(444, '1864b110-4b47-4b35-8b0e-5a3a534efc86', NULL, NULL, 'direct', 'INITIATED', NULL, NULL, '2026-02-09 02:56:27', '2026-02-09 02:41:27', '2026-02-09 02:41:27', NULL, NULL),
(445, '57cb58db-1106-4c1b-ad81-c3d19f4c4c97', NULL, NULL, 'direct', 'INITIATED', NULL, NULL, '2026-02-09 02:56:59', '2026-02-09 02:41:59', '2026-02-09 02:41:59', NULL, NULL),
(446, '87802744-4211-45dc-bcbe-1dc0c1b548d1', NULL, NULL, 'direct', 'INITIATED', NULL, NULL, '2026-02-09 03:38:49', '2026-02-09 03:23:50', '2026-02-09 03:23:50', NULL, NULL),
(447, '32a86018-07bd-4144-841c-b011a81f02ae', NULL, NULL, 'direct', 'INITIATED', NULL, NULL, '2026-02-09 04:58:15', '2026-02-09 04:43:15', '2026-02-09 04:43:15', NULL, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `sessions`
--

CREATE TABLE `sessions` (
  `id` varchar(255) NOT NULL,
  `user_id` bigint(20) UNSIGNED DEFAULT NULL,
  `ip_address` varchar(45) DEFAULT NULL,
  `user_agent` text DEFAULT NULL,
  `payload` longtext NOT NULL,
  `last_activity` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `sessions`
--

INSERT INTO `sessions` (`id`, `user_id`, `ip_address`, `user_agent`, `payload`, `last_activity`) VALUES
('0uYsn4llePWcoLrHoZjW6wHjdykzcZrgARO1psfG', NULL, '127.0.0.1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/144.0.0.0 Safari/537.36', 'YTozOntzOjY6Il90b2tlbiI7czo0MDoiRDBHWFFjZ1psaFZiVU5oaHVBWmFCRFlkNmhYd0FZOUV1ODF4VVl2MCI7czo5OiJfcHJldmlvdXMiO2E6Mjp7czozOiJ1cmwiO3M6NjI6Imh0dHA6Ly9lbmdpbmUtcHJlc3NpbmctaW5zdHJ1bWVudGF0aW9uLXZvY2FsLnRyeWNsb3VkZmxhcmUuY29tIjtzOjU6InJvdXRlIjtOO31zOjY6Il9mbGFzaCI7YToyOntzOjM6Im9sZCI7YTowOnt9czozOiJuZXciO2E6MDp7fX19', 1770619312),
('1Ah6qJYOzxtUy6ENkjlh3MyBLOzICOE2mbmohPJA', NULL, '127.0.0.1', 'Mozilla/5.0 (Windows NT 6.1; WOW64) SkypeUriPreview Preview/0.5 skype-url-preview@microsoft.com', 'YTozOntzOjY6Il90b2tlbiI7czo0MDoiQ1lSaXlKM1ZDa29VM2FxOGpUMkVOalA4S0p2RUdUWXRhOGl0UkhBbiI7czo5OiJfcHJldmlvdXMiO2E6Mjp7czozOiJ1cmwiO3M6NTQ6Imh0dHA6Ly9wYWQtbXlzcGFjZS13cmVzdGxpbmctd2l0aG91dC50cnljbG91ZGZsYXJlLmNvbSI7czo1OiJyb3V0ZSI7Tjt9czo2OiJfZmxhc2giO2E6Mjp7czozOiJvbGQiO2E6MDp7fXM6MzoibmV3IjthOjA6e319fQ==', 1770623855),
('2Ti24RriiH5w7mbmYtGLknKcbxsV639CGrizFpEM', NULL, '127.0.0.1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/144.0.0.0 Safari/537.36', 'YTo0OntzOjY6Il90b2tlbiI7czo0MDoiZUV3QjE4eTN6YmY5NFR4TUZ5Nmw0UFBKTW5KYWFva1IzaURZRXhPUyI7czoyNToicmVnaXN0cmF0aW9uX3Nlc3Npb25fdXVpZCI7TzozNToiUmFtc2V5XFV1aWRcTGF6eVxMYXp5VXVpZEZyb21TdHJpbmciOjE6e3M6Njoic3RyaW5nIjtzOjM2OiI4ZmY3ZmQ1OS01ZTIzLTQ3NDAtODQwMy1jOGJkMThiOTk3M2MiO31zOjk6Il9wcmV2aW91cyI7YToyOntzOjM6InVybCI7czo3MToiaHR0cDovL2VuZ2luZS1wcmVzc2luZy1pbnN0cnVtZW50YXRpb24tdm9jYWwudHJ5Y2xvdWRmbGFyZS5jb20vcmVnaXN0ZXIiO3M6NToicm91dGUiO3M6ODoicmVnaXN0ZXIiO31zOjY6Il9mbGFzaCI7YToyOntzOjM6Im9sZCI7YTowOnt9czozOiJuZXciO2E6MDp7fX19', 1770619513),
('7WvoWzfubXsgOKF0SOSinEEc9UijtmYio776CLsK', NULL, '127.0.0.1', '', 'YTozOntzOjY6Il90b2tlbiI7czo0MDoiWmVWRTBkd1hVS3dnbW1rTlZoMGs4bmhNMElYTlV4RmcyUTNDY1g3YSI7czo5OiJfcHJldmlvdXMiO2E6Mjp7czozOiJ1cmwiO3M6Njk6Imh0dHA6Ly9jb2FjaGluZy10cm91Ymxlc2hvb3RpbmctdWx0aW1hdGVseS1jb21tZW50cy50cnljbG91ZGZsYXJlLmNvbSI7czo1OiJyb3V0ZSI7Tjt9czo2OiJfZmxhc2giO2E6Mjp7czozOiJvbGQiO2E6MDp7fXM6MzoibmV3IjthOjA6e319fQ==', 1770631928),
('8ky8eUpKIUhrotubfbHeek3XAbb1gyDDDxL8v7YV', NULL, '127.0.0.1', '', 'YTo0OntzOjY6Il90b2tlbiI7czo0MDoiQVA1Y3BiSjc1MER3eG9kWURodjZJbHlSREdZa1VsalFhVzI5ZkZ3YiI7czoyNToicmVnaXN0cmF0aW9uX3Nlc3Npb25fdXVpZCI7TzozNToiUmFtc2V5XFV1aWRcTGF6eVxMYXp5VXVpZEZyb21TdHJpbmciOjE6e3M6Njoic3RyaW5nIjtzOjM2OiI3OTNlYTEzYy04YjRkLTRkNzYtYWU3ZS01YjBkMjMxZDBmMGEiO31zOjk6Il9wcmV2aW91cyI7YToyOntzOjM6InVybCI7czo2MjoiaHR0cDovL2hpZ2hlc3QtY3VtdWxhdGl2ZS1nc20tb3hpZGUudHJ5Y2xvdWRmbGFyZS5jb20vcmVnaXN0ZXIiO3M6NToicm91dGUiO3M6ODoicmVnaXN0ZXIiO31zOjY6Il9mbGFzaCI7YToyOntzOjM6Im9sZCI7YTowOnt9czozOiJuZXciO2E6MDp7fX19', 1770622811),
('9akzndXuGliurDMn8aknNBef6WNlwsAyJ7IsoQsn', NULL, '127.0.0.1', 'Mozilla/5.0 (Windows NT 6.1; WOW64) SkypeUriPreview Preview/0.5 skype-url-preview@microsoft.com', 'YTo0OntzOjY6Il90b2tlbiI7czo0MDoiWU9QYklHMFhaaUFBdVZBVVhHZ1NrdERtMjlyc1JONDZsZjVOWHoydCI7czoyNToicmVnaXN0cmF0aW9uX3Nlc3Npb25fdXVpZCI7TzozNToiUmFtc2V5XFV1aWRcTGF6eVxMYXp5VXVpZEZyb21TdHJpbmciOjE6e3M6Njoic3RyaW5nIjtzOjM2OiI5NjQwNWU0OC00MTFmLTRmNDEtOWQ5Mi02OWViOWZjNzliMGYiO31zOjk6Il9wcmV2aW91cyI7YToyOntzOjM6InVybCI7czo2MjoiaHR0cDovL2hpZ2hlc3QtY3VtdWxhdGl2ZS1nc20tb3hpZGUudHJ5Y2xvdWRmbGFyZS5jb20vcmVnaXN0ZXIiO3M6NToicm91dGUiO3M6ODoicmVnaXN0ZXIiO31zOjY6Il9mbGFzaCI7YToyOntzOjM6Im9sZCI7YTowOnt9czozOiJuZXciO2E6MDp7fX19', 1770622809),
('a3s9YalMDjmcu7LdIWKilObgEbxbYD62YApIktmD', NULL, '127.0.0.1', 'Slackbot-LinkExpanding 1.0 (+https://api.slack.com/robots)', 'YTozOntzOjY6Il90b2tlbiI7czo0MDoiUjdqSmQzc01lRG5sNUhNdUxNWlRNdmNqZ3JmTHVpdVV1cWNKV1pvNCI7czo5OiJfcHJldmlvdXMiO2E6Mjp7czozOiJ1cmwiO3M6NjA6Imh0dHA6Ly9wYWQtbXlzcGFjZS13cmVzdGxpbmctd2l0aG91dC50cnljbG91ZGZsYXJlLmNvbS9sb2dpbiI7czo1OiJyb3V0ZSI7czo1OiJsb2dpbiI7fXM6NjoiX2ZsYXNoIjthOjI6e3M6Mzoib2xkIjthOjA6e31zOjM6Im5ldyI7YTowOnt9fX0=', 1770624712),
('abVxIhlvAQ7noD1GfPjpiHi27VTYkK7PugjCj7wo', NULL, '127.0.0.1', 'WhatsApp/2.2587.10 W', 'YTozOntzOjY6Il90b2tlbiI7czo0MDoidE9nR0c1RFpXVTBhdjJFOTkwcnZ5RzR5MGM1UjNCeWpORGNJV3Y2VCI7czo5OiJfcHJldmlvdXMiO2E6Mjp7czozOiJ1cmwiO3M6NTM6Imh0dHA6Ly9oaWdoZXN0LWN1bXVsYXRpdmUtZ3NtLW94aWRlLnRyeWNsb3VkZmxhcmUuY29tIjtzOjU6InJvdXRlIjtOO31zOjY6Il9mbGFzaCI7YToyOntzOjM6Im9sZCI7YTowOnt9czozOiJuZXciO2E6MDp7fX19', 1770622689),
('axcJTkdpnCC5BUwfEn4vwSPDYJxYCWTrkWbvZRy8', NULL, '127.0.0.1', 'Mozilla/5.0 (Windows NT 6.1; WOW64) SkypeUriPreview Preview/0.5 skype-url-preview@microsoft.com', 'YTo0OntzOjY6Il90b2tlbiI7czo0MDoiMG81UmFTb0MwUTNneFBrMXBSREFOVXI3R0Q2cGtwaXR3ZXlsZHhKRiI7czoyNToicmVnaXN0cmF0aW9uX3Nlc3Npb25fdXVpZCI7TzozNToiUmFtc2V5XFV1aWRcTGF6eVxMYXp5VXVpZEZyb21TdHJpbmciOjE6e3M6Njoic3RyaW5nIjtzOjM2OiI0Y2YzZmVkNy02Y2VkLTQ2NGQtYWI1NS0yZWEzOGRjOTA5ODkiO31zOjk6Il9wcmV2aW91cyI7YToyOntzOjM6InVybCI7czo2MjoiaHR0cDovL2hpZ2hlc3QtY3VtdWxhdGl2ZS1nc20tb3hpZGUudHJ5Y2xvdWRmbGFyZS5jb20vcmVnaXN0ZXIiO3M6NToicm91dGUiO3M6ODoicmVnaXN0ZXIiO31zOjY6Il9mbGFzaCI7YToyOntzOjM6Im9sZCI7YTowOnt9czozOiJuZXciO2E6MDp7fX19', 1770622809),
('efokkXSf0SeKSlbRt5IMJyUJb1BPWu4rhN6jjRlS', NULL, '127.0.0.1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/144.0.0.0 Safari/537.36', 'YTo0OntzOjY6Il90b2tlbiI7czo0MDoiZW1rNDVISGZyN2I0QjFqMllBYWpxd3ZSRmpMS1J5SjlwS0pqSlVicSI7czo5OiJfcHJldmlvdXMiO2E6Mjp7czozOiJ1cmwiO3M6NzE6Imh0dHA6Ly9lbmdpbmUtcHJlc3NpbmctaW5zdHJ1bWVudGF0aW9uLXZvY2FsLnRyeWNsb3VkZmxhcmUuY29tL3JlZ2lzdGVyIjtzOjU6InJvdXRlIjtzOjg6InJlZ2lzdGVyIjt9czo2OiJfZmxhc2giO2E6Mjp7czozOiJvbGQiO2E6MDp7fXM6MzoibmV3IjthOjA6e319czoyNToicmVnaXN0cmF0aW9uX3Nlc3Npb25fdXVpZCI7czozNjoiNjJjMWM1N2YtYzQzNS00MGM5LWE1NDQtMjI2Mjk1YzgzZmExIjt9', 1770621886),
('hHbU2ULGLVo2ePU6iNZk4cYlwRb24LyJQsK14FZ5', NULL, '127.0.0.1', 'Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/144.0.0.0 Mobile Safari/537.36', 'YTozOntzOjY6Il90b2tlbiI7czo0MDoiUFN4WGM0ZnJZRk1zMkVLaHdLZmdrVlh0blpBZndQd2tsSTEwazdLaSI7czo5OiJfcHJldmlvdXMiO2E6Mjp7czozOiJ1cmwiO3M6NTM6Imh0dHA6Ly9oaWdoZXN0LWN1bXVsYXRpdmUtZ3NtLW94aWRlLnRyeWNsb3VkZmxhcmUuY29tIjtzOjU6InJvdXRlIjtOO31zOjY6Il9mbGFzaCI7YToyOntzOjM6Im9sZCI7YTowOnt9czozOiJuZXciO2E6MDp7fX19', 1770622769),
('hZCFDcnblowlt0VF9c8uI0F7itTVj1cmHYuYjlny', NULL, '127.0.0.1', 'WhatsApp/2.2587.10 W', 'YTozOntzOjY6Il90b2tlbiI7czo0MDoiQ1lyNzhjckpaTkJlNGlBNFA2T0I2dHJEcnlBTWRMeVBwVkkyc1FzaiI7czo5OiJfcHJldmlvdXMiO2E6Mjp7czozOiJ1cmwiO3M6NjI6Imh0dHA6Ly9lbmdpbmUtcHJlc3NpbmctaW5zdHJ1bWVudGF0aW9uLXZvY2FsLnRyeWNsb3VkZmxhcmUuY29tIjtzOjU6InJvdXRlIjtOO31zOjY6Il9mbGFzaCI7YToyOntzOjM6Im9sZCI7YTowOnt9czozOiJuZXciO2E6MDp7fX19', 1770619543),
('kgQbIoefi58yvmhMg2zMJG7ODP5RtXwSnskhB7k8', NULL, '127.0.0.1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/144.0.0.0 Safari/537.36', 'YTo0OntzOjY6Il90b2tlbiI7czo0MDoiYWxKVlUwV2NnSG05OXZ0RGJtdUMxSnNRYWM4MHZoUkE2bFBKOFNIZyI7czo5OiJfcHJldmlvdXMiO2E6Mjp7czozOiJ1cmwiO3M6NjM6Imh0dHA6Ly9wYWQtbXlzcGFjZS13cmVzdGxpbmctd2l0aG91dC50cnljbG91ZGZsYXJlLmNvbS9yZWdpc3RlciI7czo1OiJyb3V0ZSI7czo4OiJyZWdpc3RlciI7fXM6NjoiX2ZsYXNoIjthOjI6e3M6Mzoib2xkIjthOjA6e31zOjM6Im5ldyI7YTowOnt9fXM6MjU6InJlZ2lzdHJhdGlvbl9zZXNzaW9uX3V1aWQiO086MzU6IlJhbXNleVxVdWlkXExhenlcTGF6eVV1aWRGcm9tU3RyaW5nIjoxOntzOjY6InN0cmluZyI7czozNjoiNzIyZTFjODAtYzVhYi00NjdlLWI0MmQtZmM4YjUzNmU3MzA0Ijt9fQ==', 1770623872),
('KiL9YlFC2lZwYnD3aGAfcX7BtHOoImXuW2sxGKFc', NULL, '127.0.0.1', 'Slackbot-LinkExpanding 1.0 (+https://api.slack.com/robots)', 'YTo0OntzOjY6Il90b2tlbiI7czo0MDoidXdXWnBjSmxpSW1tTjlvdkExU01NSTN2MXNiejNVNTBGc2pKcHVHRyI7czoyNToicmVnaXN0cmF0aW9uX3Nlc3Npb25fdXVpZCI7TzozNToiUmFtc2V5XFV1aWRcTGF6eVxMYXp5VXVpZEZyb21TdHJpbmciOjE6e3M6Njoic3RyaW5nIjtzOjM2OiI1N2NiNThkYi0xMTA2LTRjMWItYWQ4MS1jM2QxOWY0YzRjOTciO31zOjk6Il9wcmV2aW91cyI7YToyOntzOjM6InVybCI7czo2MzoiaHR0cDovL3BhZC1teXNwYWNlLXdyZXN0bGluZy13aXRob3V0LnRyeWNsb3VkZmxhcmUuY29tL3JlZ2lzdGVyIjtzOjU6InJvdXRlIjtzOjg6InJlZ2lzdGVyIjt9czo2OiJfZmxhc2giO2E6Mjp7czozOiJvbGQiO2E6MDp7fXM6MzoibmV3IjthOjA6e319fQ==', 1770624719),
('kUlWmJsCLraWSJTzxYBXw99sINfKg7kX2oWXTbVa', NULL, '127.0.0.1', 'WhatsApp/2.2587.10 W', 'YTozOntzOjY6Il90b2tlbiI7czo0MDoiWXVjNWtXVjZoRndDNXVjUzl5SjVoYnVoOUN3eDdqWkZKa2o4VFYzTyI7czo5OiJfcHJldmlvdXMiO2E6Mjp7czozOiJ1cmwiO3M6Njk6Imh0dHA6Ly9jb2FjaGluZy10cm91Ymxlc2hvb3RpbmctdWx0aW1hdGVseS1jb21tZW50cy50cnljbG91ZGZsYXJlLmNvbSI7czo1OiJyb3V0ZSI7Tjt9czo2OiJfZmxhc2giO2E6Mjp7czozOiJvbGQiO2E6MDp7fXM6MzoibmV3IjthOjA6e319fQ==', 1770626175),
('lpaHp8JHRGX2TS4GniTLNJVvNrFmjHSgsysxTnyq', NULL, '127.0.0.1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/144.0.0.0 Safari/537.36', 'YTo0OntzOjY6Il90b2tlbiI7czo0MDoiQzRoMlNNdnRxZTZDYjQ2eDRDamJYZjU0d3ExUUVjZzF0M0o4bm1ZZSI7czo5OiJfcHJldmlvdXMiO2E6Mjp7czozOiJ1cmwiO3M6NjI6Imh0dHA6Ly9oaWdoZXN0LWN1bXVsYXRpdmUtZ3NtLW94aWRlLnRyeWNsb3VkZmxhcmUuY29tL3JlZ2lzdGVyIjtzOjU6InJvdXRlIjtzOjg6InJlZ2lzdGVyIjt9czo2OiJfZmxhc2giO2E6Mjp7czozOiJvbGQiO2E6MDp7fXM6MzoibmV3IjthOjA6e319czoyNToicmVnaXN0cmF0aW9uX3Nlc3Npb25fdXVpZCI7TzozNToiUmFtc2V5XFV1aWRcTGF6eVxMYXp5VXVpZEZyb21TdHJpbmciOjE6e3M6Njoic3RyaW5nIjtzOjM2OiJhZjdmNzZjOS04ZWIyLTQxNWYtYjRhZi05Y2I5NDYzYjYxNTUiO319', 1770622793),
('m7Cav7GpnTcLbIZS2JKj6x7ubYLkhuIWP1kEZOLH', NULL, '127.0.0.1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/144.0.0.0 Safari/537.36', 'YTo0OntzOjY6Il90b2tlbiI7czo0MDoiVmVuVjRUYktDNnFMaGdJcEwxVWk1TGVqc0ZKckhtUXVLYjFaUm13QyI7czo5OiJfcHJldmlvdXMiO2E6Mjp7czozOiJ1cmwiO3M6MzA6Imh0dHA6Ly8xMjcuMC4wLjE6ODAwMC9yZWdpc3RlciI7czo1OiJyb3V0ZSI7czo4OiJyZWdpc3RlciI7fXM6NjoiX2ZsYXNoIjthOjI6e3M6Mzoib2xkIjthOjA6e31zOjM6Im5ldyI7YTowOnt9fXM6MjU6InJlZ2lzdHJhdGlvbl9zZXNzaW9uX3V1aWQiO086MzU6IlJhbXNleVxVdWlkXExhenlcTGF6eVV1aWRGcm9tU3RyaW5nIjoxOntzOjY6InN0cmluZyI7czozNjoiNzdkNGE3ODMtOTM1My00OGIwLWFjODQtNmEyM2MxYjFlNjkwIjt9fQ==', 1770622765),
('MDZJKFVMaHh93QBJS4HJ1O3eB5mjLowxT2TnmRWd', NULL, '127.0.0.1', '', 'YTozOntzOjY6Il90b2tlbiI7czo0MDoieGNnVnRmVU5IRE5QMlhhVzk3WVVJUVBkSm5tMkF1UHJ6TmJSZ0I0QyI7czo5OiJfcHJldmlvdXMiO2E6Mjp7czozOiJ1cmwiO3M6NTQ6Imh0dHA6Ly9wYWQtbXlzcGFjZS13cmVzdGxpbmctd2l0aG91dC50cnljbG91ZGZsYXJlLmNvbSI7czo1OiJyb3V0ZSI7Tjt9czo2OiJfZmxhc2giO2E6Mjp7czozOiJvbGQiO2E6MDp7fXM6MzoibmV3IjthOjA6e319fQ==', 1770623858),
('nErJ0ru9xol1cU26Rq6oHz41Gex3DN7qjOkCkVqf', NULL, '127.0.0.1', '', 'YTozOntzOjY6Il90b2tlbiI7czo0MDoianIyUHoxdFdWUkxsZWxuRG1qZmhYMVhQVjZWY0p3bk5WVnJwdGp2WiI7czo5OiJfcHJldmlvdXMiO2E6Mjp7czozOiJ1cmwiO3M6NTQ6Imh0dHA6Ly9wYWQtbXlzcGFjZS13cmVzdGxpbmctd2l0aG91dC50cnljbG91ZGZsYXJlLmNvbSI7czo1OiJyb3V0ZSI7Tjt9czo2OiJfZmxhc2giO2E6Mjp7czozOiJvbGQiO2E6MDp7fXM6MzoibmV3IjthOjA6e319fQ==', 1770623860),
('o9gJbM55Yy84WjfJbPDs7nZdecl55Yxv4AxBJHDK', NULL, '127.0.0.1', 'Mozilla/5.0 (Windows NT 6.1; WOW64) SkypeUriPreview Preview/0.5 skype-url-preview@microsoft.com', 'YTozOntzOjY6Il90b2tlbiI7czo0MDoiWGdDekFJc216ekw5ZFZLbEh2bldmMG1UTHE1V3QzUWs0Q0dvUXhtdiI7czo5OiJfcHJldmlvdXMiO2E6Mjp7czozOiJ1cmwiO3M6NjI6Imh0dHA6Ly9lbmdpbmUtcHJlc3NpbmctaW5zdHJ1bWVudGF0aW9uLXZvY2FsLnRyeWNsb3VkZmxhcmUuY29tIjtzOjU6InJvdXRlIjtOO31zOjY6Il9mbGFzaCI7YToyOntzOjM6Im9sZCI7YTowOnt9czozOiJuZXciO2E6MDp7fX19', 1770619292),
('Ojtfk92rULr9eLVHIf5sk3AzXb9svjHg2v22XVjt', NULL, '127.0.0.1', 'Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/144.0.0.0 Mobile Safari/537.36', 'YTo2OntzOjY6Il90b2tlbiI7czo0MDoiSk5TTFF2WlpiRDhza250MUoyUWs5R2NpZDYyY2ZjU1ZqSWFNMnc2SCI7czo5OiJfcHJldmlvdXMiO2E6Mjp7czozOiJ1cmwiO3M6MTAzOiJodHRwOi8vcGFkLW15c3BhY2Utd3Jlc3RsaW5nLXdpdGhvdXQudHJ5Y2xvdWRmbGFyZS5jb20vYXV0aC9nb29nbGUvZjFiYmYxYzItMTE4Ny00YWQyLTlhNzktNWU3Yzc1YmJiMjU5IjtzOjU6InJvdXRlIjtzOjEyOiJnb29nbGUubG9naW4iO31zOjY6Il9mbGFzaCI7YToyOntzOjM6Im9sZCI7YTowOnt9czozOiJuZXciO2E6MDp7fX1zOjI1OiJyZWdpc3RyYXRpb25fc2Vzc2lvbl91dWlkIjtzOjM2OiJmMWJiZjFjMi0xMTg3LTRhZDItOWE3OS01ZTdjNzViYmIyNTkiO3M6MjU6Imdvb2dsZV9vYXV0aF9zZXNzaW9uX3V1aWQiO3M6MzY6ImYxYmJmMWMyLTExODctNGFkMi05YTc5LTVlN2M3NWJiYjI1OSI7czo1OiJzdGF0ZSI7czo0MDoiUFFja09JeXVBRWJ1eU5yTFZrWTJESEJUMXlBM0xJSGNOdUJ1QzJoRyI7fQ==', 1770623906),
('Ph1F4G6oxwqZE58JwEmSWETJUOVDyTmFYwXT8442', NULL, '127.0.0.1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/144.0.0.0 Safari/537.36', 'YTo0OntzOjY6Il90b2tlbiI7czo0MDoibHk3ZGRqT256SkRqR05vaVJFZk45b2tOdVFPanZhRHVPd2l6MDBhTiI7czo5OiJfcHJldmlvdXMiO2E6Mjp7czozOiJ1cmwiO3M6MzA6Imh0dHA6Ly8xMjcuMC4wLjE6ODAwMC9yZWdpc3RlciI7czo1OiJyb3V0ZSI7czo4OiJyZWdpc3RlciI7fXM6NjoiX2ZsYXNoIjthOjI6e3M6Mzoib2xkIjthOjA6e31zOjM6Im5ldyI7YTowOnt9fXM6MjU6InJlZ2lzdHJhdGlvbl9zZXNzaW9uX3V1aWQiO3M6MzY6IjU1YmE3MGM0LTRjYTktNDkwNS04NGZiLTk0ZjI1NTI4OWI3ZiI7fQ==', 1770623718),
('Px6b9tUBxhakL4vng1VTW18so6ftUqqPd1dLT2Kh', NULL, '127.0.0.1', '', 'YTozOntzOjY6Il90b2tlbiI7czo0MDoiRlFqR2lWSm0xWUduMHJLU01iU1J1OFBlejlURTRYZ21pWTB0Mzc1MSI7czo5OiJfcHJldmlvdXMiO2E6Mjp7czozOiJ1cmwiO3M6NjI6Imh0dHA6Ly9lbmdpbmUtcHJlc3NpbmctaW5zdHJ1bWVudGF0aW9uLXZvY2FsLnRyeWNsb3VkZmxhcmUuY29tIjtzOjU6InJvdXRlIjtOO31zOjY6Il9mbGFzaCI7YToyOntzOjM6Im9sZCI7YTowOnt9czozOiJuZXciO2E6MDp7fX19', 1770619303),
('qlBViW4Ln9mvV5bdK6kZ26gdiludlwg6XFBYSCgz', NULL, '127.0.0.1', '', 'YTozOntzOjY6Il90b2tlbiI7czo0MDoiNjNsQUdkOUVPTk9jUE55cXZIT3lrZExXbkhSR2F6YnN2UWE0cXZCMiI7czo5OiJfcHJldmlvdXMiO2E6Mjp7czozOiJ1cmwiO3M6NjI6Imh0dHA6Ly9lbmdpbmUtcHJlc3NpbmctaW5zdHJ1bWVudGF0aW9uLXZvY2FsLnRyeWNsb3VkZmxhcmUuY29tIjtzOjU6InJvdXRlIjtOO31zOjY6Il9mbGFzaCI7YToyOntzOjM6Im9sZCI7YTowOnt9czozOiJuZXciO2E6MDp7fX19', 1770619302),
('QT4uXGOQQqmH8F9pzYtChEskO2THJyDDd15Bq4Mf', NULL, '127.0.0.1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/144.0.0.0 Safari/537.36', 'YTo2OntzOjY6Il90b2tlbiI7czo0MDoiRzNaRmh2OGZ3SUxuVkoxZ2RHRW8yNkZvcTR6NEZXc0ZZMGRBZWM1biI7czoyNToicmVnaXN0cmF0aW9uX3Nlc3Npb25fdXVpZCI7TzozNToiUmFtc2V5XFV1aWRcTGF6eVxMYXp5VXVpZEZyb21TdHJpbmciOjE6e3M6Njoic3RyaW5nIjtzOjM2OiI3MWEwYjY5NS0xMWVlLTQ0MGQtOTAyZC05ZGNjNTljNWI5ZGYiO31zOjk6Il9wcmV2aW91cyI7YToyOntzOjM6InVybCI7czoxMDI6Imh0dHA6Ly9oaWdoZXN0LWN1bXVsYXRpdmUtZ3NtLW94aWRlLnRyeWNsb3VkZmxhcmUuY29tL2F1dGgvZ29vZ2xlLzcxYTBiNjk1LTExZWUtNDQwZC05MDJkLTlkY2M1OWM1YjlkZiI7czo1OiJyb3V0ZSI7czoxMjoiZ29vZ2xlLmxvZ2luIjt9czo2OiJfZmxhc2giO2E6Mjp7czozOiJvbGQiO2E6MDp7fXM6MzoibmV3IjthOjA6e319czoyNToiZ29vZ2xlX29hdXRoX3Nlc3Npb25fdXVpZCI7czozNjoiNzFhMGI2OTUtMTFlZS00NDBkLTkwMmQtOWRjYzU5YzViOWRmIjtzOjU6InN0YXRlIjtzOjQwOiJrQWRDSFJIWG1WSEYxMVFIWlJBOWowaHhic1hrdFBsSlI4R2NOeVB6Ijt9', 1770622841),
('Qty569VI6gn3UjLIcKvcO35byZT9VbnYKZdVo1Zz', NULL, '127.0.0.1', '', 'YTozOntzOjY6Il90b2tlbiI7czo0MDoiRHlLWU1FMTR4empCMml4dHVVUDR3cndVOHV5V2pNSU5WRGtnODhaYyI7czo5OiJfcHJldmlvdXMiO2E6Mjp7czozOiJ1cmwiO3M6Njk6Imh0dHA6Ly9jb2FjaGluZy10cm91Ymxlc2hvb3RpbmctdWx0aW1hdGVseS1jb21tZW50cy50cnljbG91ZGZsYXJlLmNvbSI7czo1OiJyb3V0ZSI7Tjt9czo2OiJfZmxhc2giO2E6Mjp7czozOiJvbGQiO2E6MDp7fXM6MzoibmV3IjthOjA6e319fQ==', 1770626163),
('r2f6EnCQGZ0WBLh17LfyXGnX5SFUsD6Ts4VYywzc', NULL, '127.0.0.1', 'Mozilla/5.0 (Windows NT 6.1; WOW64) SkypeUriPreview Preview/0.5 skype-url-preview@microsoft.com', 'YTozOntzOjY6Il90b2tlbiI7czo0MDoiNlA2d3FGaHNzbUlmU05FWjdBOWowMThQVFZxWDVNY3l4dDA4TVd2eiI7czo5OiJfcHJldmlvdXMiO2E6Mjp7czozOiJ1cmwiO3M6Njk6Imh0dHA6Ly9jb2FjaGluZy10cm91Ymxlc2hvb3RpbmctdWx0aW1hdGVseS1jb21tZW50cy50cnljbG91ZGZsYXJlLmNvbSI7czo1OiJyb3V0ZSI7Tjt9czo2OiJfZmxhc2giO2E6Mjp7czozOiJvbGQiO2E6MDp7fXM6MzoibmV3IjthOjA6e319fQ==', 1770626145),
('TWg48drfx8f4XO89m9oFbTGAWZJtnM2pEVFipllT', NULL, '127.0.0.1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/144.0.0.0 Safari/537.36', 'YTo0OntzOjY6Il90b2tlbiI7czo0MDoiUEFtVkZaTFppV1VTcUlzaHo3alVwUktWMkJmYktCNG9NS2ppdnVSTCI7czo5OiJfcHJldmlvdXMiO2E6Mjp7czozOiJ1cmwiO3M6NjM6Imh0dHA6Ly9wYWQtbXlzcGFjZS13cmVzdGxpbmctd2l0aG91dC50cnljbG91ZGZsYXJlLmNvbS9yZWdpc3RlciI7czo1OiJyb3V0ZSI7czo4OiJyZWdpc3RlciI7fXM6NjoiX2ZsYXNoIjthOjI6e3M6Mzoib2xkIjthOjA6e31zOjM6Im5ldyI7YTowOnt9fXM6MjU6InJlZ2lzdHJhdGlvbl9zZXNzaW9uX3V1aWQiO3M6MzY6IjE4NjRiMTEwLTRiNDctNGIzNS04YjBlLTVhM2E1MzRlZmM4NiI7fQ==', 1770624699),
('uFAphCXr0ijNh40kwlj2WOejUrzhavWw1nmzaOzL', NULL, '127.0.0.1', 'WhatsApp/2.2587.10 W', 'YTozOntzOjY6Il90b2tlbiI7czo0MDoiQkNueEpUaGNNQWtNZkZVOWJTUFNvMWxRdXZVVkZXVVB0NlpNb3FHaCI7czo5OiJfcHJldmlvdXMiO2E6Mjp7czozOiJ1cmwiO3M6NTQ6Imh0dHA6Ly9wYWQtbXlzcGFjZS13cmVzdGxpbmctd2l0aG91dC50cnljbG91ZGZsYXJlLmNvbSI7czo1OiJyb3V0ZSI7Tjt9czo2OiJfZmxhc2giO2E6Mjp7czozOiJvbGQiO2E6MDp7fXM6MzoibmV3IjthOjA6e319fQ==', 1770623020),
('uKaW9gKnkl0Uy4B6lWEm4Z4Q19PmhuEawvOPD7tQ', NULL, '127.0.0.1', 'Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/144.0.0.0 Mobile Safari/537.36', 'YTo0OntzOjY6Il90b2tlbiI7czo0MDoiQ2VPYktvMWtBU2JVT1A1SVNlUkw1UXV6dXowZHFQaGtCa2hFSWRUNyI7czo5OiJfcHJldmlvdXMiO2E6Mjp7czozOiJ1cmwiO3M6Nzg6Imh0dHA6Ly9jb2FjaGluZy10cm91Ymxlc2hvb3RpbmctdWx0aW1hdGVseS1jb21tZW50cy50cnljbG91ZGZsYXJlLmNvbS9yZWdpc3RlciI7czo1OiJyb3V0ZSI7czo4OiJyZWdpc3RlciI7fXM6NjoiX2ZsYXNoIjthOjI6e3M6Mzoib2xkIjthOjA6e31zOjM6Im5ldyI7YTowOnt9fXM6MjU6InJlZ2lzdHJhdGlvbl9zZXNzaW9uX3V1aWQiO086MzU6IlJhbXNleVxVdWlkXExhenlcTGF6eVV1aWRGcm9tU3RyaW5nIjoxOntzOjY6InN0cmluZyI7czozNjoiMzJhODYwMTgtMDdiZC00MTQ0LTg0MWMtYjAxMWE4MWYwMmFlIjt9fQ==', 1770631995),
('UyJ6lpigREyP14IfEV5PkTS3SkJp22tnDnI3Oxj3', NULL, '127.0.0.1', '', 'YTozOntzOjY6Il90b2tlbiI7czo0MDoiNm91OHRYSzhybzYxTXpHQ1o4Y2ZUejRDQXhhaU05TFNqZllSQXdSbSI7czo5OiJfcHJldmlvdXMiO2E6Mjp7czozOiJ1cmwiO3M6Njk6Imh0dHA6Ly9jb2FjaGluZy10cm91Ymxlc2hvb3RpbmctdWx0aW1hdGVseS1jb21tZW50cy50cnljbG91ZGZsYXJlLmNvbSI7czo1OiJyb3V0ZSI7Tjt9czo2OiJfZmxhc2giO2E6Mjp7czozOiJvbGQiO2E6MDp7fXM6MzoibmV3IjthOjA6e319fQ==', 1770626163),
('vzLUNXve4bHVbX21FbYUbk1ySbdfHbwwf0IHV8T9', NULL, '127.0.0.1', '', 'YTozOntzOjY6Il90b2tlbiI7czo0MDoiblZqaXdoNU5Ic0ZPTzh4VnZVZ0ZCQkNlTGlmR3hkODlSM0Y0RThDViI7czo5OiJfcHJldmlvdXMiO2E6Mjp7czozOiJ1cmwiO3M6NTQ6Imh0dHA6Ly9wYWQtbXlzcGFjZS13cmVzdGxpbmctd2l0aG91dC50cnljbG91ZGZsYXJlLmNvbSI7czo1OiJyb3V0ZSI7Tjt9czo2OiJfZmxhc2giO2E6Mjp7czozOiJvbGQiO2E6MDp7fXM6MzoibmV3IjthOjA6e319fQ==', 1770623858),
('wARzKLd1E0mnK4ZtwB1itkBsiQDueZgg9cIEvv6m', NULL, '127.0.0.1', 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/144.0.0.0 Safari/537.36', 'YTo0OntzOjY6Il90b2tlbiI7czo0MDoidG9BZUt3RDlCWHV3M0V2ZlBOeEtPTHZUZXhmZ1puTTZTbWF5WnNDeiI7czo5OiJfcHJldmlvdXMiO2E6Mjp7czozOiJ1cmwiO3M6NzE6Imh0dHA6Ly9lbmdpbmUtcHJlc3NpbmctaW5zdHJ1bWVudGF0aW9uLXZvY2FsLnRyeWNsb3VkZmxhcmUuY29tL3JlZ2lzdGVyIjtzOjU6InJvdXRlIjtzOjg6InJlZ2lzdGVyIjt9czo2OiJfZmxhc2giO2E6Mjp7czozOiJvbGQiO2E6MDp7fXM6MzoibmV3IjthOjA6e319czoyNToicmVnaXN0cmF0aW9uX3Nlc3Npb25fdXVpZCI7czozNjoiNjUzOWEwYmYtOGNhZi00NzAxLWFmM2ItYzZjNmQ1NDBjZmVmIjt9', 1770622434),
('XrxP00QbbGCo6cKgKLTx8MKaeu94oixBCxvlSqed', NULL, '127.0.0.1', '', 'YTozOntzOjY6Il90b2tlbiI7czo0MDoibUlCek5Hc1hMVDN5eVozcm5WV012a2hzREk4b2JZMlZINDd1cUsxMSI7czo5OiJfcHJldmlvdXMiO2E6Mjp7czozOiJ1cmwiO3M6NTQ6Imh0dHA6Ly9wYWQtbXlzcGFjZS13cmVzdGxpbmctd2l0aG91dC50cnljbG91ZGZsYXJlLmNvbSI7czo1OiJyb3V0ZSI7Tjt9czo2OiJfZmxhc2giO2E6Mjp7czozOiJvbGQiO2E6MDp7fXM6MzoibmV3IjthOjA6e319fQ==', 1770623860);

-- --------------------------------------------------------

--
-- Table structure for table `subscriptions`
--

CREATE TABLE `subscriptions` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `account_id` bigint(20) UNSIGNED NOT NULL,
  `plan_id` bigint(20) UNSIGNED NOT NULL,
  `provider` enum('stripe','razorpay','manual') NOT NULL DEFAULT 'stripe',
  `provider_subscription_id` varchar(255) DEFAULT NULL,
  `billing_cycle` enum('monthly','yearly') NOT NULL,
  `status` enum('trialing','active','past_due','cancelled','expired') NOT NULL DEFAULT 'trialing',
  `starts_at` timestamp NULL DEFAULT NULL,
  `ends_at` timestamp NULL DEFAULT NULL,
  `trial_ends_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `subscriptions`
--

INSERT INTO `subscriptions` (`id`, `account_id`, `plan_id`, `provider`, `provider_subscription_id`, `billing_cycle`, `status`, `starts_at`, `ends_at`, `trial_ends_at`, `created_at`, `updated_at`) VALUES
(19, 16, 4, 'stripe', NULL, 'monthly', 'active', '2026-02-02 05:23:40', '2026-03-04 05:23:40', NULL, '2026-02-02 05:23:40', '2026-02-02 05:23:40'),
(20, 17, 4, 'stripe', NULL, 'monthly', 'active', '2026-02-02 05:26:06', '2026-03-04 05:26:06', NULL, '2026-02-02 05:26:06', '2026-02-02 05:26:06'),
(21, 18, 2, 'stripe', NULL, 'monthly', 'active', '2026-02-02 05:34:38', '2026-03-04 05:34:38', NULL, '2026-02-02 05:34:38', '2026-02-02 05:34:38'),
(22, 19, 3, 'stripe', NULL, 'monthly', 'active', '2026-02-02 05:39:34', '2026-03-04 05:39:34', NULL, '2026-02-02 05:39:34', '2026-02-02 05:39:34'),
(23, 20, 4, 'stripe', NULL, 'monthly', 'active', '2026-02-02 23:18:13', '2026-03-04 23:18:13', NULL, '2026-02-02 23:18:13', '2026-02-02 23:18:13'),
(24, 21, 2, 'stripe', NULL, 'monthly', 'active', '2026-02-03 23:52:30', '2026-03-05 23:52:30', NULL, '2026-02-03 23:52:30', '2026-02-03 23:52:30'),
(25, 22, 2, 'stripe', NULL, 'monthly', 'active', '2026-02-04 02:10:39', '2026-03-06 02:10:39', NULL, '2026-02-04 02:10:39', '2026-02-04 02:10:39');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `email_verified_at` timestamp NULL DEFAULT NULL,
  `password` varchar(255) NOT NULL,
  `business_name` varchar(255) DEFAULT NULL,
  `auth_provider` enum('EMAIL','GOOGLE') NOT NULL DEFAULT 'EMAIL',
  `google_id` varchar(255) DEFAULT NULL,
  `role` enum('business','agency','admin') NOT NULL,
  `last_login_at` timestamp NULL DEFAULT NULL,
  `last_login_ip` varchar(255) DEFAULT NULL,
  `timezone` varchar(255) NOT NULL DEFAULT 'UTC',
  `language` varchar(255) NOT NULL DEFAULT 'en',
  `notification_email` tinyint(1) NOT NULL DEFAULT 1,
  `notification_sms` tinyint(1) NOT NULL DEFAULT 0,
  `two_factor_enabled` tinyint(1) NOT NULL DEFAULT 0,
  `failed_login_attempts` int(10) UNSIGNED NOT NULL DEFAULT 0,
  `locked_until` timestamp NULL DEFAULT NULL,
  `phone` varchar(255) DEFAULT NULL,
  `status` enum('active','suspended','deleted') NOT NULL DEFAULT 'active',
  `remember_token` varchar(100) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `name`, `email`, `email_verified_at`, `password`, `business_name`, `auth_provider`, `google_id`, `role`, `last_login_at`, `last_login_ip`, `timezone`, `language`, `notification_email`, `notification_sms`, `two_factor_enabled`, `failed_login_attempts`, `locked_until`, `phone`, `status`, `remember_token`, `created_at`, `updated_at`) VALUES
(60, 'Chaman Gautam', 'chaman12gautam12@gmail.com', '2026-02-02 05:34:27', '$2y$12$OKQEwNDV3vOj/RE7S3lzS.S.gtPDaNKZfZLdh6n8sQYToNlfuzjX2', 'diwconsultix', 'EMAIL', NULL, 'business', NULL, NULL, 'UTC', 'en', 1, 0, 0, 0, NULL, '+917452056492', 'active', '0eMaQJS3iJPyifQwvVN7KFOI4COouTfFR212OVLJJ66wlmWz5iRcyM2tNP2s', '2026-02-02 04:41:45', '2026-02-02 05:34:27'),
(61, 'Chaman Gautam', 'chaman112gautam12@gmail.com', '2026-02-02 04:45:07', '$2y$12$XxLIW3vAvFDCFDh5n5OwS.PenHIqQdb7A1CobQnojQtRoV/DD1O8a', 'diwconsultix', 'EMAIL', NULL, 'business', NULL, NULL, 'UTC', 'en', 1, 0, 0, 0, NULL, '+917452056492', 'active', NULL, '2026-02-02 04:44:34', '2026-02-02 04:45:07'),
(62, 'Chaman Gautam', 'chaman122gautam12@gmail.com', '2026-02-02 04:46:24', '$2y$12$kLvKam6vKwDZTqQkFDu/8Oas7p.AvEGBDvpsnN6YE1nGOVY7dD1GC', 'diwconsultix', 'EMAIL', NULL, 'business', NULL, NULL, 'UTC', 'en', 1, 0, 0, 0, NULL, '+917452056492', 'active', NULL, '2026-02-02 04:46:14', '2026-02-02 04:46:24'),
(63, 'dev gautam', 'dev@gmail.com', '2026-02-02 05:39:26', '$2y$12$uZWSHZrVe7JCdOQNOurk9OwDscqkv8ilIIYi33VcSMeHKsHaK5jIi', 'devtech', 'EMAIL', NULL, 'business', NULL, NULL, 'UTC', 'en', 1, 0, 0, 0, NULL, NULL, 'active', NULL, '2026-02-02 05:39:16', '2026-02-02 05:39:26'),
(64, 'Chaman Gautam', 'fear4you@gmail.com', '2026-02-02 23:15:48', '$2y$12$smasNZ9sjV4HS8DKkw0Y5.YDUmk3EZSKUflikgfjK1c9ftaAWyp7a', 'riyarays', 'EMAIL', NULL, 'business', '2026-02-02 23:26:21', NULL, 'UTC', 'en', 1, 0, 0, 0, NULL, '+917452056492', 'active', 'wWEyZm4AM2XRInyy6PZLWSSzpqUY3dG55Xra54X4Q8XbJJYQV224aKIHIVVl', '2026-02-02 23:14:23', '2026-02-02 23:26:21'),
(65, 'akash', 'akash@gmail.com', '2026-02-03 23:51:26', '$2y$12$d3rlbdmgT0lSv9wZ67twbus3IPXLcZHaqDjwWPImLJCf317vZadVS', 'akashcreator', 'EMAIL', NULL, 'business', NULL, NULL, 'UTC', 'en', 1, 0, 0, 0, NULL, NULL, 'active', NULL, '2026-02-03 23:51:00', '2026-02-03 23:51:26'),
(66, 'asdf', 'asd@gmail.com', '2026-02-04 02:10:25', '$2y$12$soql8zgQYKw7tyr7lFtUq.xoXx5abWida25O/YOdHu/byh4Z4h3Ca', 'asdf', 'EMAIL', NULL, 'business', NULL, NULL, 'UTC', 'en', 1, 0, 0, 0, NULL, NULL, 'active', NULL, '2026-02-04 02:09:48', '2026-02-04 02:10:25');

-- --------------------------------------------------------

--
-- Table structure for table `workspaces`
--

CREATE TABLE `workspaces` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `account_id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL,
  `industry` varchar(255) DEFAULT NULL,
  `status` enum('active','suspended') NOT NULL DEFAULT 'active',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `workspaces`
--

INSERT INTO `workspaces` (`id`, `account_id`, `name`, `industry`, `status`, `created_at`, `updated_at`) VALUES
(15, 16, 'diwconsultix', NULL, 'active', '2026-02-02 05:23:40', '2026-02-02 05:23:40'),
(16, 17, 'diwconsultix', NULL, 'active', '2026-02-02 05:26:06', '2026-02-02 05:26:06'),
(17, 18, 'diwconsultix', NULL, 'active', '2026-02-02 05:34:38', '2026-02-02 05:34:38'),
(18, 19, 'devtech', NULL, 'active', '2026-02-02 05:39:34', '2026-02-02 05:39:34'),
(19, 20, 'riyarays', NULL, 'active', '2026-02-02 23:18:13', '2026-02-02 23:18:13'),
(20, 21, 'akashcreator', NULL, 'active', '2026-02-03 23:52:30', '2026-02-03 23:52:30'),
(21, 22, 'asdf', NULL, 'active', '2026-02-04 02:10:39', '2026-02-04 02:10:39');

-- --------------------------------------------------------

--
-- Table structure for table `workspace_users`
--

CREATE TABLE `workspace_users` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `workspace_id` bigint(20) UNSIGNED NOT NULL,
  `user_id` bigint(20) UNSIGNED NOT NULL,
  `role` enum('owner','manager','staff') NOT NULL DEFAULT 'manager',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `workspace_users`
--

INSERT INTO `workspace_users` (`id`, `workspace_id`, `user_id`, `role`, `created_at`, `updated_at`) VALUES
(15, 15, 62, 'owner', '2026-02-02 05:23:40', '2026-02-02 05:23:40'),
(16, 16, 61, 'owner', '2026-02-02 05:26:06', '2026-02-02 05:26:06'),
(17, 17, 60, 'owner', '2026-02-02 05:34:38', '2026-02-02 05:34:38'),
(18, 18, 63, 'owner', '2026-02-02 05:39:34', '2026-02-02 05:39:34'),
(19, 19, 64, 'owner', '2026-02-02 23:18:13', '2026-02-02 23:18:13'),
(20, 20, 65, 'owner', '2026-02-03 23:52:30', '2026-02-03 23:52:30'),
(21, 21, 66, 'owner', '2026-02-04 02:10:39', '2026-02-04 02:10:39');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `accounts`
--
ALTER TABLE `accounts`
  ADD PRIMARY KEY (`id`),
  ADD KEY `accounts_plan_id_foreign` (`plan_id`);

--
-- Indexes for table `account_branding`
--
ALTER TABLE `account_branding`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `account_branding_account_id_unique` (`account_id`);

--
-- Indexes for table `account_users`
--
ALTER TABLE `account_users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `account_users_account_id_user_id_unique` (`account_id`,`user_id`),
  ADD KEY `account_users_user_id_foreign` (`user_id`);

--
-- Indexes for table `activity_logs`
--
ALTER TABLE `activity_logs`
  ADD PRIMARY KEY (`id`),
  ADD KEY `activity_logs_user_id_foreign` (`user_id`),
  ADD KEY `activity_logs_account_id_created_at_index` (`account_id`,`created_at`),
  ADD KEY `activity_logs_workspace_id_created_at_index` (`workspace_id`,`created_at`),
  ADD KEY `activity_logs_branch_id_created_at_index` (`branch_id`,`created_at`),
  ADD KEY `activity_logs_action_index` (`action`);

--
-- Indexes for table `branches`
--
ALTER TABLE `branches`
  ADD PRIMARY KEY (`id`),
  ADD KEY `branches_workspace_id_foreign` (`workspace_id`),
  ADD KEY `branches_google_location_id_index` (`google_location_id`);

--
-- Indexes for table `cache`
--
ALTER TABLE `cache`
  ADD PRIMARY KEY (`key`);

--
-- Indexes for table `cache_locks`
--
ALTER TABLE `cache_locks`
  ADD PRIMARY KEY (`key`);

--
-- Indexes for table `failed_jobs`
--
ALTER TABLE `failed_jobs`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `failed_jobs_uuid_unique` (`uuid`);

--
-- Indexes for table `features`
--
ALTER TABLE `features`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `features_key_unique` (`key`);

--
-- Indexes for table `gbp_reviews`
--
ALTER TABLE `gbp_reviews`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `gbp_reviews_google_review_id_unique` (`google_review_id`),
  ADD KEY `gbp_reviews_branch_id_foreign` (`branch_id`);

--
-- Indexes for table `google_accounts`
--
ALTER TABLE `google_accounts`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `google_accounts_account_id_unique` (`account_id`);

--
-- Indexes for table `jobs`
--
ALTER TABLE `jobs`
  ADD PRIMARY KEY (`id`),
  ADD KEY `jobs_queue_index` (`queue`);

--
-- Indexes for table `job_batches`
--
ALTER TABLE `job_batches`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `migrations`
--
ALTER TABLE `migrations`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `password_reset_tokens`
--
ALTER TABLE `password_reset_tokens`
  ADD PRIMARY KEY (`email`);

--
-- Indexes for table `plans`
--
ALTER TABLE `plans`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `plans_slug_unique` (`slug`);

--
-- Indexes for table `plan_features`
--
ALTER TABLE `plan_features`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `plan_features_plan_id_feature_id_unique` (`plan_id`,`feature_id`),
  ADD KEY `plan_features_feature_id_foreign` (`feature_id`);

--
-- Indexes for table `plan_limits`
--
ALTER TABLE `plan_limits`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `plan_limits_plan_id_limit_key_unique` (`plan_id`,`limit_key`);

--
-- Indexes for table `registration_sessions`
--
ALTER TABLE `registration_sessions`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `registration_sessions_session_uuid_unique` (`session_uuid`),
  ADD KEY `registration_sessions_plan_id_role_index` (`plan_id`,`role`),
  ADD KEY `registration_sessions_status_index` (`status`),
  ADD KEY `registration_sessions_expires_at_index` (`expires_at`);

--
-- Indexes for table `sessions`
--
ALTER TABLE `sessions`
  ADD PRIMARY KEY (`id`),
  ADD KEY `sessions_user_id_index` (`user_id`),
  ADD KEY `sessions_last_activity_index` (`last_activity`);

--
-- Indexes for table `subscriptions`
--
ALTER TABLE `subscriptions`
  ADD PRIMARY KEY (`id`),
  ADD KEY `subscriptions_plan_id_foreign` (`plan_id`),
  ADD KEY `subscriptions_account_id_status_index` (`account_id`,`status`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `users_email_unique` (`email`);

--
-- Indexes for table `workspaces`
--
ALTER TABLE `workspaces`
  ADD PRIMARY KEY (`id`),
  ADD KEY `workspaces_account_id_foreign` (`account_id`);

--
-- Indexes for table `workspace_users`
--
ALTER TABLE `workspace_users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `workspace_users_workspace_id_user_id_unique` (`workspace_id`,`user_id`),
  ADD KEY `workspace_users_user_id_foreign` (`user_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `accounts`
--
ALTER TABLE `accounts`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=23;

--
-- AUTO_INCREMENT for table `account_branding`
--
ALTER TABLE `account_branding`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `account_users`
--
ALTER TABLE `account_users`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=23;

--
-- AUTO_INCREMENT for table `activity_logs`
--
ALTER TABLE `activity_logs`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `branches`
--
ALTER TABLE `branches`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `failed_jobs`
--
ALTER TABLE `failed_jobs`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `features`
--
ALTER TABLE `features`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `gbp_reviews`
--
ALTER TABLE `gbp_reviews`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `google_accounts`
--
ALTER TABLE `google_accounts`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `jobs`
--
ALTER TABLE `jobs`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `migrations`
--
ALTER TABLE `migrations`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=22;

--
-- AUTO_INCREMENT for table `plans`
--
ALTER TABLE `plans`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `plan_features`
--
ALTER TABLE `plan_features`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `plan_limits`
--
ALTER TABLE `plan_limits`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `registration_sessions`
--
ALTER TABLE `registration_sessions`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=448;

--
-- AUTO_INCREMENT for table `subscriptions`
--
ALTER TABLE `subscriptions`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=26;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=67;

--
-- AUTO_INCREMENT for table `workspaces`
--
ALTER TABLE `workspaces`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=22;

--
-- AUTO_INCREMENT for table `workspace_users`
--
ALTER TABLE `workspace_users`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=22;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `accounts`
--
ALTER TABLE `accounts`
  ADD CONSTRAINT `accounts_plan_id_foreign` FOREIGN KEY (`plan_id`) REFERENCES `plans` (`id`) ON DELETE SET NULL;

--
-- Constraints for table `account_branding`
--
ALTER TABLE `account_branding`
  ADD CONSTRAINT `account_branding_account_id_foreign` FOREIGN KEY (`account_id`) REFERENCES `accounts` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `account_users`
--
ALTER TABLE `account_users`
  ADD CONSTRAINT `account_users_account_id_foreign` FOREIGN KEY (`account_id`) REFERENCES `accounts` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `account_users_user_id_foreign` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `activity_logs`
--
ALTER TABLE `activity_logs`
  ADD CONSTRAINT `activity_logs_account_id_foreign` FOREIGN KEY (`account_id`) REFERENCES `accounts` (`id`) ON DELETE SET NULL,
  ADD CONSTRAINT `activity_logs_branch_id_foreign` FOREIGN KEY (`branch_id`) REFERENCES `branches` (`id`) ON DELETE SET NULL,
  ADD CONSTRAINT `activity_logs_user_id_foreign` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE SET NULL,
  ADD CONSTRAINT `activity_logs_workspace_id_foreign` FOREIGN KEY (`workspace_id`) REFERENCES `workspaces` (`id`) ON DELETE SET NULL;

--
-- Constraints for table `branches`
--
ALTER TABLE `branches`
  ADD CONSTRAINT `branches_workspace_id_foreign` FOREIGN KEY (`workspace_id`) REFERENCES `workspaces` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `gbp_reviews`
--
ALTER TABLE `gbp_reviews`
  ADD CONSTRAINT `gbp_reviews_branch_id_foreign` FOREIGN KEY (`branch_id`) REFERENCES `branches` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `google_accounts`
--
ALTER TABLE `google_accounts`
  ADD CONSTRAINT `google_accounts_account_id_foreign` FOREIGN KEY (`account_id`) REFERENCES `accounts` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `plan_features`
--
ALTER TABLE `plan_features`
  ADD CONSTRAINT `plan_features_feature_id_foreign` FOREIGN KEY (`feature_id`) REFERENCES `features` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `plan_features_plan_id_foreign` FOREIGN KEY (`plan_id`) REFERENCES `plans` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `plan_limits`
--
ALTER TABLE `plan_limits`
  ADD CONSTRAINT `plan_limits_plan_id_foreign` FOREIGN KEY (`plan_id`) REFERENCES `plans` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `subscriptions`
--
ALTER TABLE `subscriptions`
  ADD CONSTRAINT `subscriptions_account_id_foreign` FOREIGN KEY (`account_id`) REFERENCES `accounts` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `subscriptions_plan_id_foreign` FOREIGN KEY (`plan_id`) REFERENCES `plans` (`id`);

--
-- Constraints for table `workspaces`
--
ALTER TABLE `workspaces`
  ADD CONSTRAINT `workspaces_account_id_foreign` FOREIGN KEY (`account_id`) REFERENCES `accounts` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `workspace_users`
--
ALTER TABLE `workspace_users`
  ADD CONSTRAINT `workspace_users_user_id_foreign` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `workspace_users_workspace_id_foreign` FOREIGN KEY (`workspace_id`) REFERENCES `workspaces` (`id`) ON DELETE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
