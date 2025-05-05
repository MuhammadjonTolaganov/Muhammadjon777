1) BULK INSERT Products
FROM 'C:\Data\products.csv'
WITH (
    FIELDTERMINATOR = ',',
    ROWTERMINATOR = '\n',
    FIRSTROW = 2
);

2) CREATE TABLE Products (
    ProductID INT PRIMARY KEY,
    ProductName VARCHAR(50),
    Price DECIMAL(10,2)
);
3. Create a table Products 
CREATE TABLE Products (
    ProductID INT PRIMARY KEY,
    ProductName VARCHAR(50),
    Price DECIMAL(10,2)
);
4. Insert three records into Products
INSERT INTO Products (ProductID, ProductName, Price)
VALUES 
(1, 'Laptop', 1200.00),
(2, 'Mouse', 25.50),
(3, 'Keyboard', 45.00);

5. Explain the difference between NULL and NOT NULL

ALTER TABLE Products
ADD CONSTRAINT UQ_ProductName UNIQUE (ProductName);

6. Add a UNIQUE constraint to the ProductName column
ALTER TABLE Products
ADD CONSTRAINT UQ_ProductName UNIQUE (ProductName);

7. Write a comment in a SQL query explaining its purpose

-- This query retrieves all products with price greater than 100
SELECT * FROM Products
WHERE Price > 100;

8. Create a table Categories with constraints

CREATE TABLE Categories (
    CategoryID INT PRIMARY KEY,
    CategoryName VARCHAR(50) UNIQUE
);

9. Explain the purpose of the IDENTITY column in SQL Server

ProductID INT IDENTITY(1,1) PRIMARY KEY

10. Use BULK INSERT to import data from a text file into the Products table

BULK INSERT Products
FROM 'C:\Data\products.txt'
WITH (
    FIELDTERMINATOR = ',',
    ROWTERMINATOR = '\n',
    FIRSTROW = 2
);


11. Create a FOREIGN KEY in Products table referencing Categories
ALTER TABLE Products
ADD CategoryID INT;

ALTER TABLE Products
ADD CONSTRAINT FK_Products_Categories FOREIGN KEY (CategoryID)
REFERENCES Categories(CategoryID);

12. Differences between PRIMARY KEY and UNIQUE KEY

| Feature             | PRIMARY KEY           | UNIQUE KEY                  |
| ------------------- | --------------------- | --------------------------- |
| Null values allowed | No (must be NOT NULL) | Yes (only one NULL allowed) |
| Uniqueness          | Must be unique        | Must be unique              |
| Number per table    | One                   | Multiple                    |
| Main purpose        | Row identification    | Enforce uniqueness          |


13. Add a CHECK constraint to ensure Price > 0
ALTER TABLE Products
ADD CONSTRAINT CK_Products_Price CHECK (Price > 0);

14. Modify the Products table to add Stock column (NOT NULL)

ALTER TABLE Products
ADD Stock INT NOT NULL DEFAULT 0;

15. Use ISNULL to replace NULL values in Price with 0
SELECT ProductID, ProductName, ISNULL(Price, 0) AS Price
FROM Products;


16. Purpose and usage of FOREIGN KEY constraints in SQL Server

A FOREIGN KEY enforces referential integrity by linking a column in one table to the PRIMARY KEY of another.
It ensures that a value in the child table must exist in the parent table.

Example usage:

Prevents inserting a CategoryID in Products if it doesn't exist in Categories.

Automatically blocks deletion of a referenced CategoryID.


17. Create a Customers table with a CHECK constraint (Age >= 18)
CREATE TABLE Customers (
    CustomerID INT PRIMARY KEY,
    Name VARCHAR(100),
    Age INT CHECK (Age >= 18)
);

18. Create a table with an IDENTITY column starting at 100 and incrementing by 10
CREATE TABLE InvoiceNumbers (
    InvoiceID INT IDENTITY(100, 10) PRIMARY KEY,
    Description VARCHAR(100)
);

19. Create a table OrderDetails with a composite PRIMARY KEY (OrderID, ProductID)
CREATE TABLE OrderDetails (
    OrderID INT,
    ProductID INT,
    Quantity INT,
    PRIMARY KEY (OrderID, ProductID)
);

20. Explain COALESCE vs. ISNULL

| Feature       | COALESCE()                                | ISNULL()                          |
| ------------- | ------------------------------------------- | ----------------------------------- |
| Purpose       | Returns first non-NULL from multiple values | Replaces NULL with a specific value |
| Parameters    | Accepts 2 or more arguments                 | Accepts exactly 2 arguments         |
| ANSI Standard | Yes                                         | No (SQL Server-specific)            |
| Example       | COALESCE(Price, Discount, 0)              | ISNULL(Price, 0)                  |

Summary:

Use COALESCE for multiple fallback options.

Use ISNULL for simple default replacements.

21. Create Employees table with PRIMARY KEY on EmpID and UNIQUE constraint on Email
CREATE TABLE Employees (
    EmpID INT PRIMARY KEY,
    Name VARCHAR(100),
    Email VARCHAR(100) UNIQUE
);


22. Create a FOREIGN KEY with ON DELETE CASCADE and ON UPDATE CASCADE

CREATE TABLE Orders (
    OrderID INT PRIMARY KEY,
    CustomerID INT,
    OrderDate DATE,
    CONSTRAINT FK_Orders_Customers FOREIGN KEY (CustomerID)
        REFERENCES Customers(CustomerID)
        ON DELETE CASCADE
        ON UPDATE CASCADE
);



































