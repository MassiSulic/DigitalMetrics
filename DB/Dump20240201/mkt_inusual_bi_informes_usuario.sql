-- MySQL dump 10.13  Distrib 8.0.34, for macos13 (arm64)
--
-- Host: 216.246.46.146    Database: mkt_inusual_bi
-- ------------------------------------------------------
-- Server version	5.5.5-10.6.16-MariaDB-cll-lve

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `informes_usuario`
--

DROP TABLE IF EXISTS `informes_usuario`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `informes_usuario` (
  `user_id` int(11) NOT NULL,
  `informe_id` int(11) NOT NULL,
  PRIMARY KEY (`user_id`,`informe_id`),
  KEY `FKtf12ijiol6j15uag6oq2p9sni` (`informe_id`),
  CONSTRAINT `FKlpvf62q3pdh024pwfqwe9qm2i` FOREIGN KEY (`user_id`) REFERENCES `usuarios` (`id`),
  CONSTRAINT `FKtf12ijiol6j15uag6oq2p9sni` FOREIGN KEY (`informe_id`) REFERENCES `informes` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `informes_usuario`
--

LOCK TABLES `informes_usuario` WRITE;
/*!40000 ALTER TABLE `informes_usuario` DISABLE KEYS */;
INSERT INTO `informes_usuario` VALUES (6,2),(6,3),(6,4),(6,5),(7,20),(7,21),(7,33),(7,34),(7,35),(8,2),(8,3),(8,4),(8,5),(9,20),(9,21),(9,33),(9,34),(9,35),(12,7),(12,8),(12,9),(12,16),(12,18),(12,19),(12,36),(12,37),(13,6),(13,8),(13,9),(13,16),(13,18),(13,19),(13,31),(13,36),(13,37),(15,3),(15,8),(15,9),(15,10),(15,14),(15,19),(15,24),(15,30),(15,32),(15,33),(15,35),(15,37),(15,38),(15,40),(15,41),(15,42),(15,43),(15,44),(16,10),(16,11),(16,12),(16,30),(17,24),(17,25),(17,26),(17,27),(21,6),(21,8),(21,9),(21,16),(21,18),(21,19),(21,31),(21,36),(21,37),(24,40),(24,41),(24,42),(24,43),(24,44),(25,45),(27,2),(27,3),(27,4),(27,5),(27,6),(27,7),(27,8),(27,9),(27,10),(27,11),(27,12),(27,13),(27,14),(27,15),(27,16),(27,17),(27,18),(27,19),(27,20),(27,21),(27,22),(27,23),(27,24),(27,25),(27,26),(27,27),(27,28),(27,29),(27,30),(27,31),(27,32),(27,33),(27,34),(27,35),(27,36),(27,37),(27,38),(27,39),(27,40),(27,41),(27,42),(27,43),(27,44),(27,45),(28,46),(28,47),(31,24),(31,25),(31,27),(32,57),(32,58),(32,59),(32,61);
/*!40000 ALTER TABLE `informes_usuario` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-02-01 11:02:47
