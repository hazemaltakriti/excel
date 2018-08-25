CREATE database excel ; 
use excel;

CREATE TABLE `tbl_users` (
  `id` int(10) NOT NULL primary key auto_increment ,
  `ip` int(10) NOT NULL,
  `username` varchar(50) NOT NULL,
  `email` varchar(100) NOT NULL,
  `password` varchar(50) NOT NULL,
  `validate` tinyint(1) NOT NULL DEFAULT '0',
  `validatecode` varchar(50) NOT NULL
) ;