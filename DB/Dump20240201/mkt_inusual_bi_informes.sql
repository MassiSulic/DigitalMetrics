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
-- Table structure for table `informes`
--

DROP TABLE IF EXISTS `informes`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `informes` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `link` varchar(300) DEFAULT NULL,
  `nombre` varchar(100) DEFAULT NULL,
  `departamento_id` int(11) DEFAULT NULL,
  `empresa_id` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FKqocv9r62424r075wkoy42l66a` (`departamento_id`),
  KEY `FK92d1yk4ctjl1hgaoaoxs4tojt` (`empresa_id`),
  CONSTRAINT `FK92d1yk4ctjl1hgaoaoxs4tojt` FOREIGN KEY (`empresa_id`) REFERENCES `empresas` (`id`),
  CONSTRAINT `FKqocv9r62424r075wkoy42l66a` FOREIGN KEY (`departamento_id`) REFERENCES `departamentos` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=62 DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `informes`
--

LOCK TABLES `informes` WRITE;
/*!40000 ALTER TABLE `informes` DISABLE KEYS */;
INSERT INTO `informes` VALUES (2,'https://app.powerbi.com/view?r=eyJrIjoiYzIyMTc5NzEtM2U0Ni00NzVhLWIyMTYtMjk1YWEzNmM5ZTVhIiwidCI6IjBkNDMxNDZjLTJlMGYtNDIxYS1hNmRiLWVhZTg3YmM1NGNhMiJ9','Marketshare',NULL,3),(3,'https://app.powerbi.com/view?r=eyJrIjoiMWUyOGFlYjAtMmU2Ni00MTZhLTg4ODctODA2MjlmYTI2ZTZiIiwidCI6IjBkNDMxNDZjLTJlMGYtNDIxYS1hNmRiLWVhZTg3YmM1NGNhMiJ9','CRM',NULL,3),(4,'https://app.powerbi.com/view?r=eyJrIjoiNDFhZjk2MjYtNzUzMy00ZDljLWFiYjUtYjk0MzRkYjIzMTQ3IiwidCI6IjBkNDMxNDZjLTJlMGYtNDIxYS1hNmRiLWVhZTg3YmM1NGNhMiJ9','Quick VOC',NULL,7),(5,'https://app.powerbi.com/view?r=eyJrIjoiY2RkMGYwNWUtY2EwMC00OTdkLThkNjQtMzExNjMzNWRlMmQ3IiwidCI6IjBkNDMxNDZjLTJlMGYtNDIxYS1hNmRiLWVhZTg3YmM1NGNhMiJ9','Guideline',NULL,12),(6,'https://app.powerbi.com/view?r=eyJrIjoiMmM4ZWVjMDQtYTA2NS00OTA1LTk0MTEtNmUxOTQ2MThmNjZkIiwidCI6IjBkNDMxNDZjLTJlMGYtNDIxYS1hNmRiLWVhZTg3YmM1NGNhMiJ9','CRM',NULL,4),(7,'https://app.powerbi.com/view?r=eyJrIjoiYzI4OGRiMjctZDkyMy00ZTY1LTk0OTQtOTIxMTY5ZWMxMWFhIiwidCI6IjBkNDMxNDZjLTJlMGYtNDIxYS1hNmRiLWVhZTg3YmM1NGNhMiJ9','CRM | Gerencia',NULL,4),(8,'https://lookerstudio.google.com/embed/reporting/df2b6805-e4cf-4d01-9ad8-95de67657111/page/RWYzB','Meta Ads',NULL,14),(9,'https://lookerstudio.google.com/embed/reporting/a57343fb-02f5-4484-9a7f-19f811998287/page/OG3rC','Google Analytics',NULL,14),(10,'https://lookerstudio.google.com/embed/reporting/2b42ac84-22f3-4a32-98be-2020868d36d4/page/zyGOC','Meta Ads',NULL,5),(11,'https://lookerstudio.google.com/embed/reporting/5a0b095a-6b24-4eba-b313-ecd9f68b1d09/page/suWzB','Performance Redes',NULL,5),(12,'https://lookerstudio.google.com/embed/reporting/4ea23f41-f7d1-4d8f-8858-56c9dcfe1dee/page/OG3rC','Google Ads',NULL,5),(13,'https://lookerstudio.google.com/embed/reporting/ffc34a89-71a1-4942-ae88-00aa6c0b328d/page/OG3rC','Google Ads | Jalil Catamarca',NULL,12),(14,'https://lookerstudio.google.com/embed/reporting/9c9da970-6285-4b25-8a63-40fb4c76ca5d/page/OG3rC','Google Analytics',NULL,8),(15,'https://docs.google.com/spreadsheets/d/e/2PACX-1vR_bn42jnxWXBzOjkow_uwBvLTQ26bNvVNI-PMauBH4TCKDsQrPBih2pzIilIN5P4Wto6s4zBbTRDe2/pubhtml?gid=505181869&single=true','Gantt | Gestión de Procesos',NULL,3),(16,'https://lookerstudio.google.com/embed/reporting/0d921fa6-c115-4a71-b313-ea3773f5b573/page/6zXD','SEO',NULL,14),(17,'https://lookerstudio.google.com/embed/reporting/02736535-a49f-40e6-9b91-bed88a89a895/page/OG3rC','Google Ads | Jalil Salta',NULL,12),(18,'https://lookerstudio.google.com/embed/reporting/901296ab-a3c9-4965-b977-fb28178f8590/page/OG3rC','Google Ads',NULL,14),(19,'https://lookerstudio.google.com/embed/reporting/7432ae74-c748-4341-9fa4-fa3f7f5aa40e/page/OG3rC','Google Analytics',NULL,13),(20,'https://lookerstudio.google.com/embed/reporting/9ac2c39f-50e0-4269-ac0b-8c2c9328ebe2/page/suWzB','Performance Redes',NULL,6),(21,'https://lookerstudio.google.com/embed/reporting/d1c711f4-597f-415d-a27d-fcf3807e9955/page/OG3rC','Google Ads',NULL,6),(22,'https://lookerstudio.google.com/embed/reporting/de182136-65b2-4210-8a92-c17c31925fcd/page/suWzB','Performance Redes',NULL,7),(23,'https://lookerstudio.google.com/embed/reporting/9b4f3ae7-b3bc-4213-b983-ce0ec41e4ea0/page/OG3rC','Google Analytics',NULL,15),(24,'https://lookerstudio.google.com/embed/reporting/7f3d9f4d-ba05-41d1-9b19-c4005ad52f40/page/OG3rC','Google Analytics',NULL,11),(25,'https://lookerstudio.google.com/embed/reporting/a040cc71-1e9b-403f-8ae3-ce120b860154/page/OG3rC','Google Ads',NULL,11),(26,'https://docs.google.com/spreadsheets/d/e/2PACX-1vRyib05KGWPhJxXgttQ6JtAV7rAEZz8QhfX9lZnw7_N1UEMnqMBPU7u3lxbDCoxKdzvcMj1uhZEesy3/pubhtml','Grilla de Gestión',NULL,11),(27,'https://lookerstudio.google.com/embed/reporting/578f8673-cc0d-4368-9ef6-6a9e5a3b5467/page/jCWzB','Performance de Redes',NULL,11),(28,'https://lookerstudio.google.com/embed/reporting/ab2f7799-f786-4f65-b20e-ab4145f7174f/page/suWzB','Performance de Redes',NULL,15),(29,'https://lookerstudio.google.com/embed/reporting/6b806279-86d5-4ba4-b398-ebede2e09959/page/zyGOC','Meta Ads',NULL,15),(30,'https://lookerstudio.google.com/embed/reporting/8f5bead4-fd20-497e-a5d3-6b0940e3aa03/page/OG3rC','Google Analytics',NULL,5),(31,'https://app.powerbi.com/view?r=eyJrIjoiNTIxNmM0MTItOGRhMS00ZmYxLTk2ZTEtZmJhZTUyNjU2OWUyIiwidCI6IjBkNDMxNDZjLTJlMGYtNDIxYS1hNmRiLWVhZTg3YmM1NGNhMiJ9','Marketshare',NULL,4),(32,'https://lookerstudio.google.com/embed/reporting/98bc13d5-d93e-4d58-abc1-28be0f810bcf/page/zyGOC','Meta Ads',NULL,7),(33,'https://lookerstudio.google.com/embed/reporting/edd76ca7-ac44-4027-88ff-c91d48fa39e0/page/zyGOC','Meta Ads',NULL,6),(34,'https://lookerstudio.google.com/embed/reporting/5c993173-a416-441f-a036-5101231f1da1/page/6zXD','SEO',NULL,6),(35,'https://lookerstudio.google.com/embed/reporting/b584cda0-e2e7-487d-887c-d41ff1e6ec57/page/p_h8k72aoe1c','Google Analytics',NULL,6),(36,'https://lookerstudio.google.com/embed/reporting/ec02995b-6b8f-4075-8738-e0705d7be97a/page/OG3rC','Google Ads',NULL,13),(37,'https://lookerstudio.google.com/embed/reporting/9189e9c9-f1d0-43d2-8995-d1ee3d9b4d9d/page/RWYzB','Meta Ads',NULL,13),(38,'https://lookerstudio.google.com/embed/reporting/63b175b8-3fe6-4d02-8d2c-34233e6f4441/page/zyGOC','Meta Ads',NULL,12),(39,'<iframe width=\"600\" height=\"717\" src=\"https://lookerstudio.google.com/embed/reporting/81c20416-73e9-436f-acac-1d1065eaed23/page/OG3rC\" frameborder=\"0\" style=\"border:0\" allowfullscreen></iframe>','Google Analytics | Jalil Catamarca',NULL,12),(40,'https://lookerstudio.google.com/embed/reporting/efc6008d-18d2-4bf6-b11c-251e144d9f0f/page/OG3rC','Google Ads',NULL,16),(41,'https://lookerstudio.google.com/embed/reporting/be43bb6c-4133-4439-9ab7-f90eb2f5af09/page/OG3rC','Google Analytics',NULL,16),(42,'https://lookerstudio.google.com/embed/reporting/c07d0f13-e388-4fd9-8662-b8d138fa29d4/page/suWzB','Performance Redes',NULL,16),(43,'https://lookerstudio.google.com/embed/reporting/e0f343eb-1cfd-4491-a73a-1a816c969d1f/page/6zXD','SEO',NULL,16),(44,'https://lookerstudio.google.com/embed/reporting/d68d6415-4047-4df2-9261-a811e1a8becb/page/zyGOC','Meta Ads',NULL,16),(45,'https://app.powerbi.com/view?r=eyJrIjoiMWUyOGFlYjAtMmU2Ni00MTZhLTg4ODctODA2MjlmYTI2ZTZiIiwidCI6IjBkNDMxNDZjLTJlMGYtNDIxYS1hNmRiLWVhZTg3YmM1NGNhMiJ9','CRM',NULL,7),(46,'https://lookerstudio.google.com/embed/reporting/605b839e-d658-44d3-90e8-972e5b36479a/page/OG3rC','Google Analytics',NULL,17),(47,'https://lookerstudio.google.com/embed/reporting/80a19ef0-0db8-478e-9aa4-c40f8497eea6/page/zyGOC','Meta Ads',NULL,17),(48,'https://lookerstudio.google.com/embed/reporting/8b39d59c-66b4-48e8-aed1-65778b664e24/page/p_d3ox8mvy6c','Performance Redes',NULL,18),(57,'https://lookerstudio.google.com/embed/reporting/2ed1e48d-97ee-4afd-9f5e-0fb7a6f89093/page/OG3rC','Google Analytics',NULL,19),(58,'https://lookerstudio.google.com/embed/reporting/aa13f349-8461-4fec-8741-4ae63c5d4431/page/p_fboovowy6c','Performance Redes',NULL,19),(59,'https://lookerstudio.google.com/embed/reporting/6ca4209e-3670-4869-9fd7-08e87771d95c/page/OG3rC','Google Ads',NULL,19),(61,'https://lookerstudio.google.com/embed/reporting/a10631a9-c978-47c3-9b1a-e1b240d666a5/page/zyGOC','Meta Ads',NULL,19);
/*!40000 ALTER TABLE `informes` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-02-01 11:03:01
