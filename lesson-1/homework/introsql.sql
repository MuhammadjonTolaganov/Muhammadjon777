EASY 1 )
  Here are the definitions for each of the terms:

Data:
Data refers to raw facts, figures, or information that are collected and stored, often in digital form. It can be numbers, text, images, or other forms of input that, by themselves, may not carry meaning until processed or organized.

Database:
A database is an organized collection of data that is stored and accessed electronically. It allows for efficient retrieval, insertion, and management of data, often using software known as a Database Management System (DBMS).

Relational Database:
A relational database is a type of database that stores data in a structured format using rows and columns. The data is organized into tables, and relationships between the data are established using keys (e.g., primary and foreign keys). It follows the relational model proposed by E.F. Codd.

Table:
A table is a set of data elements (values) that are organized using a model of vertical columns (fields) and horizontal rows (records). Each table in a relational database typically represents one entity or concept, with each row representing a single record and each column representing an attribute of that record.


---------------------------------------------------------

Easy 2)
  Data Security and Encryption:
SQL Server provides robust security features including authentication, authorization, Transparent Data Encryption (TDE), and Always Encrypted to protect data at rest and in transit.

High Availability and Disaster Recovery (HADR):
Features like Always On Availability Groups, database mirroring, failover clustering, and backup/restore support ensure continuous availability and data protection.

Scalability and Performance:
SQL Server supports in-memory processing (via In-Memory OLTP), indexing, query optimization, and parallel execution to enhance speed and handle large-scale data workloads.

Advanced Analytics and Integration:
SQL Server includes integration with R and Python, built-in machine learning services, and SQL Server Integration Services (SSIS) for ETL (Extract, Transform, Load) operations.

Management Tools and Monitoring:
Tools like SQL Server Management Studio (SSMS) and SQL Server Profiler make it easier to manage databases, monitor performance, and troubleshoot issues.


  -------------------------------------------------------

  Essy 3)
  Windows Authentication:
This mode uses the Windows operating system credentials of the user to authenticate access to SQL Server. It's considered more secure because it leverages Active Directory for centralized credential management and supports features like Kerberos.

SQL Server Authentication:
This mode requires users to provide a SQL Server–specific username and password created and managed within SQL Server. It is useful in environments where Windows Authentication is not possible (e.g., cross-platform access).

  -------------------------------------------------------

 Medium )
  create database SchoolDB

Create Table Students( 
  StudentID INT PRIMARY Key ,
  Name Varchar (50),
  Age int 
  );

  -------------------------------------------------------

  SQL Server is DATABASE  where we keep datas and control them 
  SSMS is program interface and we can work with it with SQL easily 
  SQL is program language and we use it to give command and control and change and for etc ...

-----------------------------------------------------------


Hard --
  1. DDL - Data Definition language (Malumotlar Tar'ifi Tili )

Maqsadi: Ma’lumotlar bazasi strukturasini yaratish va o‘zgartirish.

Asosiy buyruqlar:

CREATE: Yangi obyekt (jadval, indeks, view) yaratish.

ALTER: Mavjud obyektni o‘zgartirish (ustun qo‘shish, o‘chirish).

DROP: Obyektni butunlay o‘chirish.

TRUNCATE: Jadvaldagi barcha ma’lumotlarni o‘chirish, lekin strukturani saqlab qolish.

RENAME: Obyekt nomini o‘zgartirish.

CREATE TABLE Students (
    StudentID INT PRIMARY KEY,
    Name VARCHAR(50),
    Age INT
);

✍️ 2. DML – Data Manipulation Language (Ma’lumotlar Bilan Ishlash Tili)
Maqsadi: Jadvaldagi ma’lumotlarni qo‘shish, o‘zgartirish yoki o‘chirish.

Asosiy buyruqlar:

INSERT: Yangi ma’lumot qo‘shish.

UPDATE: Mavjud ma’lumotni o‘zgartirish.

DELETE: Ma’lumotni o‘chirish.

MISOL SQL 

INSERT INTO Students (StudentID, Name, Age)
VALUES (1, 'Ali', 20);


3. DQL - Data Quert Language (Malumotlarni Sorash TIli )
Maqsadi: Ma’lumotlarni so‘rash va olish.

Asosiy buyruq:

SELECT: Jadvaldan ma’lumotlarni tanlash.

SELECT * FROM Students WHERE Age > 18;


🔐 4. DCL – Data Control Language (Ma’lumotlarga Kirishni Boshqarish Tili)
Maqsadi: Foydalanuvchilarning ma’lumotlarga kirish huquqlarini boshqarish.

Asosiy buyruqlar:

GRANT: Foydalanuvchiga huquq berish.

REVOKE: Foydalanuvchidan huquqni olib tashlash.

GRANT SELECT ON Students TO user1;

  
🔄 5. TCL – Transaction Control Language (Tranzaksiyalarni Boshqarish Tili)
Maqsadi: Tranzaksiyalarni boshqarish, ya’ni bir nechta buyruqlarni bir butun sifatida bajarish yoki bekor qilish.

Asosiy buyruqlar:

BEGIN TRANSACTION: Tranzaksiyani boshlash.

COMMIT: O‘zgarishlarni saqlash.

ROLLBACK: O‘zgarishlarni bekor qilish.


BEGIN TRANSACTION;
UPDATE Students SET Age = 21 WHERE StudentID = 1;
COMMIT;

2) query inster three records into the Students Table ;


INSERT INTO Students (StudentID, Name, Age)
VALUES
    (1, 'Ali', 20),
    (2, 'Laylo', 22),
    (3, 'Bekzod', 19);

