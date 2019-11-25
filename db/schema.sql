DROP DATABASE IF EXISTS "sequelize_classicPart";
CREATE DATABASE "sequelize_classicPart";






/* DROP DATABASE IF EXISTS classicPart;

CREATE DATABASE classicPart;
USE classicPart; */

-- CREATE TABLE Parts (
--   id INT NOT NULL AUTO_INCREMENT,
--   partName VARCHAR(100) NOT NULL,
--   department VARCHAR(50) NOT NULL,
--   partCondition VARCHAR(200) NOT NULL,
--   price DECIMAL(10, 2) NOT NULL,
      description VARCHAR(100) NOT NULL,
      phone VARCHAR (20),
      photo VARCHAR(50),
      createdAt TIMESTAMP NOT NULL DEFAULT now(),
      updatedAt TIMESTAMP NOT NULL DEFAULT now(),
      UserId INT(255) DEFAULT NULL,

--   PRIMARY KEY (id)
-- );

CREATE DATABASE userId;
USE userId;

CREATE TABLE users (

  id INT NOT NULL AUTO_INCREMENT,
  Email VARCHAR(100) NOT NULL,
  password VARCHAR(150),
  PRIMARY KEY(id)
); 

