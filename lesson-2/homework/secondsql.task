1. Create the Employees Table

CREATE TABLE Employees (
    EmpID INT,
    Name VARCHAR(50),
    Salary DECIMAL(10,2)
);

2. Insert Records into Employees Table
a. Single-row Insert:
    INSERT INTO Employees (EmpID, Name, Salary)
     VALUES (1, 'John Doe', 5000.00);

b. Multiple-row Insert:
INSERT INTO Employees (EmpID, Name, Salary)
VALUES 
    (2, 'Jane Smith', 6000.00),
    (3, 'Alice Johnson', 5500.00);

3. Update Salary for Employee with EmpID = 1
   UPDATE Employees
   SET Salary = 7000.00
   WHERE EmpID = 1;

4. Delete Record Where EmpID = 2
   DELETE FROM Employees
   WHERE EmpID = 2;


DELETE: Allows conditional deletion and can be rolled back if within a transaction.

TRUNCATE: Quickly removes all records; in SQL Server, it can be rolled back if used within a transaction.

DROP: Permanently deletes the table structure and data; cannot be rolled back.

6. Modify Name Column to VARCHAR(100)
ALTER TABLE Employees
ALTER COLUMN Name VARCHAR(100);


 7. Add New Column Department to Employees Table
ALTER TABLE Employees
ADD Department VARCHAR(50);

8. Change Data Type of Salary Column to FLOAT

ALTER TABLE Employees
ALTER COLUMN Salary FLOAT;


9. Create Departments Table
CREATE TABLE Departments (
    DepartmentID INT PRIMARY KEY,
    DepartmentName VARCHAR(50)
);

10. Remove All Records from Employees Table Without Deleting Its Structure
TRUNCATE TABLE Employees;





--------------------------------------------------------------
-- 1. Insert five records into the Departments table using INSERT INTO ... SELECT
-- Step 1.1: Create a temporary table with example department names
CREATE TABLE TempDepartments (
    DepartmentName VARCHAR(50)
);

INSERT INTO TempDepartments (DepartmentName)
VALUES 
('Finance'),
('Human Resources'),
('IT'),
('Logistics'),
('Customer Service');

-- Step 1.2: Insert into Departments from TempDepartments
INSERT INTO Departments (DepartmentName)
SELECT DepartmentName FROM TempDepartments;

-- Optional: Drop the temporary table
DROP TABLE TempDepartments;


-- 2. Update the Department of all employees where Salary > 5000 to 'Management'
UPDATE Employees
SET Department = 'Management'
WHERE Salary > 5000;


-- 3. Remove all employees but keep the table structure intact
DELETE FROM Employees;


-- 4. Drop the Department column from the Employees table
ALTER TABLE Employees
DROP COLUMN Department;


-- 5. Rename the Employees table to StaffMembers
ALTER TABLE Employees
RENAME TO StaffMembers;  -- SQL Server uses: EXEC sp_rename 'Employees', 'StaffMembers';

-- For SQL Server, use this instead:
-- EXEC sp_rename 'Employees', 'StaffMembers';


-- 6. Remove the Departments table completely
DROP TABLE Departments;

---------------------------------------------------------------


-- 1. Create the Products table
CREATE TABLE Products (
    ProductID INT PRIMARY KEY,
    ProductName VARCHAR(100),
    Category VARCHAR(50),
    Price DECIMAL(10,2) CHECK (Price > 0),
    Description TEXT
);

-- 2. Modify the table to add StockQuantity with default value 50
ALTER TABLE Products
ADD StockQuantity INT DEFAULT 50;

-- 3. Rename Category to ProductCategory
EXEC sp_rename 'Products.Category', 'ProductCategory', 'COLUMN';

-- 4. Insert 5 records into Products table
INSERT INTO Products (ProductID, ProductName, ProductCategory, Price, Description)
VALUES 
(1, 'Laptop', 'Electronics', 999.99, 'High-performance laptop'),
(2, 'Office Chair', 'Furniture', 150.00, 'Ergonomic office chair'),
(3, 'Bluetooth Speaker', 'Electronics', 45.50, 'Portable speaker with Bluetooth'),
(4, 'Notebook', 'Stationery', 2.99, 'A5 lined notebook'),
(5, 'Desk Lamp', 'Furniture', 25.00, 'LED desk lamp with adjustable neck');

-- 5. Create a backup table using SELECT INTO
SELECT * INTO Products_Backup
FROM Products;

-- 6. Rename Products table to Inventory
EXEC sp_rename 'Products', 'Inventory';

-- 7. Change the data type of Price to FLOAT
ALTER TABLE Inventory
ALTER COLUMN Price FLOAT;

-- 8. Add an IDENTITY column ProductCode starting from 1000, increment by 5
ALTER TABLE Inventory
ADD ProductCode INT IDENTITY(1000, 5);











