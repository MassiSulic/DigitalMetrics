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
-- Table structure for table `usuarios`
--

DROP TABLE IF EXISTS `usuarios`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `usuarios` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(255) DEFAULT NULL,
  `username` varchar(45) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `puesto` varchar(255) DEFAULT NULL,
  `token_password` varchar(255) DEFAULT NULL,
  `empresa_id` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FK9v93lqnass5yqhhsyprr9fdv2` (`empresa_id`),
  CONSTRAINT `FK9v93lqnass5yqhhsyprr9fdv2` FOREIGN KEY (`empresa_id`) REFERENCES `empresas` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=33 DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `usuarios`
--

LOCK TABLES `usuarios` WRITE;
/*!40000 ALTER TABLE `usuarios` DISABLE KEYS */;
INSERT INTO `usuarios` VALUES (1,'administrador','admin1','admin@mail.com','$2a$12$Cos6pyt.gYvBKN/ZjQ1IOOtIrHw48syu/aueJ91AMy.E0Lx87mkSG',NULL,NULL,NULL),(2,'Ezequiel Javega','ezejavega','ejavega@inusual.com.ar','$2a$10$6vz4jrXyql6xIdJJS8nVA.rt2FMYvp27txsGK9XBgmx.bAJDXkebS',NULL,NULL,NULL),(5,'Patxi Fernadez','patxi.fz','patxifz@inusual.com.ar','$2a$10$1NVo4LKW0VJbCfZxfKS/JOPZ2OsQBvRpB2lYou75wKKGxvfgQzJke','CEO',NULL,1),(6,'Gonzalo Rodriguez','grodriguez','gonzalo.rodriguez@fianiautomotores.com.ar','$2a$10$mb1w82FklfQwRtzu09zwluqoWZb9wwZmTpbA4ijtc7laAIZKkJdvi','',NULL,3),(7,'Pablo Gomez','p.gomez','pgomezt@gomezroco.com.ar','$2a$10$V07158/DtMqgsNWJriHvreq2T485FAFR1PYQC3xoEL10XHXiHoSWu','','b8782752-f4f0-401d-b9c4-b474b3f945a8',6),(8,'Pablo Ferreyra','p.ferreyra','pablo.ferreyra@jalilautomotores.com.ar','$2a$10$EXm0HzUwz.96VgF98o/51uI90AwVfH85GYDOhOXRbtU/fPPUKKnBS','',NULL,3),(9,'Alejandra Gomez','a.gomez','alejandragomez@gomezroco.com.ar','$2a$10$6HNlRTZjHmFfJMFIzMTnFOxdmC2IFO4olMfbq/cpf1QL7FLfjZPee','',NULL,6),(10,'Pablo Peon','p.peon','pabloignaciopeon@gmail.com','$2a$10$uifLuurpYT8scGsA5GPxBO.lOn/pJcsHOSPfSVCq0bCZ2z7gN5PFy','',NULL,10),(11,'Mariano Bambossi','m.bambossi','mariano.bambossi@fianiautomotores.com.ar','$2a$10$vwU5Dfdth/.xmlEOEw0gQe6opPsSaCmrYKT4f9GgXWyXY93qyteq6','',NULL,7),(12,'Grupo Agnaum','grupo.agnaum','ventas@agnoa.com.ar','$2a$10$szV.ck6FwEFD3Eoy6HQsUe73edi4Q59JAw876InOk8rBgDVumH1X.','',NULL,4),(13,'Isaac Gargui','i.gargui','isaac@leonalperovich.com.ar','$2a$10$vdlcjgUeI7oYVTx1p/50gOM4jHCEXT.4RjtzfFECKZIE2y6pNYbrS','',NULL,4),(14,'Caterina Menta','c.menta','Info@blueblockersantoo.com','$2a$10$GwsaXXvx9VKTM9Yhcxzd5eqen.CMslPyxJqoc2h8G3mCIQXqbH2Je','',NULL,8),(15,'Rodrigo Mattio','r.mattio','rmattio@inusual.com.ar','$2a$10$aJ1KoCqF9/x2a.kEGL1PoegQD0E3sBpSQv4ylT9.cbW7wmOY8F/Dy','',NULL,1),(16,'Patricio Pereyra','p.pereyra','Patriciopereyra@prozynergies.com','$2a$10$tucmo8Iq3nCtXOv5KNj6Ru2P.oLzqPdYpRN3ljx631jpPXrG4umou','',NULL,5),(17,'Fernando Jalil','f.jalil','fer-jalil@hotmail.com','$2a$10$185E9Po6fH3YgnpZNeF5IedlgIU7OnWdb0lRGY6Ur5HFNAHPpwbDK','',NULL,11),(21,'Micaela Alperovich','m.alperovich','micaelaalperovich@gmail.com','$2a$10$sC8glG0lrKHycHiXZ1QMAOlavmgBTq2UOde4cDbMoPStpQ.2VzB/6','CEO',NULL,4),(23,'Prueba','prueba','franco.ortiz2001@gmail.com','$2a$10$9VE9UDEVrBDcGKrRPLjkqucYFCDmjP2VLwiQJY68EGe10G3lYJaJ2','',NULL,NULL),(24,'Vitruve.fit','vitruve.fit','marketing@vitruve.fit','$2a$10$UnAXEUTZwClsq80H6/1FF.GC68zdC/2Xthg8nr6R0ztwWqJ7nK9G2','Manager',NULL,16),(25,'Nissan Fiani','a.alvarez','fianinissan@gmail.com','$2a$10$/NpLXUAhxQNS2U3r0.gvCOBk6XU6NePr.hvssjKYNYd8ioeff/kuO','Administracion',NULL,7),(26,'Franco','franki','fortiz@inusual.com.ar','$2a$10$Uffw7/Na0bEf5z17h59y5.3thG4NKC.iJXyuKJOiD60QaKgZmVSm6','',NULL,NULL),(27,'Marketing','mkt.inusual','info@inusual.com.ar','$2a$10$nZeD3WiXgc8xmj/a5DgXq.Hh1xGufM8nliL0osGsHaKWCFBpSLtgy','Manager',NULL,1),(28,'Las Juanas','las.juanas','adrperez2814@gmail.com','$2a$10$21Jn7aQRiQaYnZP0L.Np6O.E8VCvW6T22o1V5uOCQZtpNbrjKIl.C','Manager',NULL,17),(29,'prueba','bi','bi@inusual.com.ar','$2a$10$0YXUTHQNhRNVEuR/zp7fdei8J3zAk4O73fyXrvhN8p7SIr3cOA1NG','',NULL,1),(31,'Lucas Jalil','l.jalil','Lucas_Jalilg@outlook.com','$2a$10$BSrnaChhJj5bxTOFaf.Nh.Kv9XUHIStdvR5V8Xt4qB6Yt02R9D8Vm','Manager',NULL,11),(32,'David Fridrij','d.fridrij','credipana2@gmail.com','$2a$10$q8/FXWJ580AY6WG4Hnj33eSWXldRmQXcSlflLv6k.bHllpzxS9GFS','Manager',NULL,19);
/*!40000 ALTER TABLE `usuarios` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-02-01 11:02:32
