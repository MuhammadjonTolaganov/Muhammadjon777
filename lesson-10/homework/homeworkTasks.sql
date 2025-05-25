1)SELECT 
    O.OrderID,
    CONCAT(C.FirstName, ' ', C.LastName) AS CustomerName,
    O.OrderDate
FROM 
    Orders O
JOIN 
    Customers C ON O.CustomerID = C.CustomerID
WHERE 
    O.OrderDate > '2022-12-31';
2)SELECT 
    E.EmployeeName,
    D.DepartmentName
FROM 
    Employees E
JOIN 
    Departments D ON E.DepartmentID = D.DepartmentID
WHERE 
    D.DepartmentName IN ('Sales', 'Marketing');
3)SELECT 
    D.DepartmentName,
    MAX(E.Salary) AS MaxSalary
FROM 
    Departments D
JOIN 
    Employees E ON D.DepartmentID = E.DepartmentID
GROUP BY 
    D.DepartmentName;
4)SELECT 
    CONCAT(C.FirstName, ' ', C.LastName) AS CustomerName,
    O.OrderID,
    O.OrderDate
FROM 
    Customers C
JOIN 
    Orders O ON C.CustomerID = O.CustomerID
WHERE 
    C.Country = 'USA'
    AND YEAR(O.OrderDate) = 2023;

5)SELECT 
    CONCAT(C.FirstName, ' ', C.LastName) AS CustomerName,
    COUNT(O.OrderID) AS TotalOrders
FROM 
    Customers C
LEFT JOIN 
    Orders O ON C.CustomerID = O.CustomerID
GROUP BY 
    C.FirstName, C.LastName;

6)SELECT 
    P.ProductName,
    S.SupplierName
FROM 
    Products P
JOIN 
    Suppliers S ON P.SupplierID = S.SupplierID
WHERE 
    S.SupplierName IN ('Gadget Supplies', 'Clothing Mart');

7)SELECT 
    CONCAT(C.FirstName, ' ', C.LastName) AS CustomerName,
    MAX(O.OrderDate) AS MostRecentOrderDate
FROM 
    Customers C
LEFT JOIN 
    Orders O ON C.CustomerID = O.CustomerID
GROUP BY 
    C.FirstName, C.LastName;


8)SELECT 
    CONCAT(C.FirstName, ' ', C.LastName) AS CustomerName,
    O.TotalAmount AS OrderTotal
FROM 
    Orders O
JOIN 
    Customers C ON O.CustomerID = C.CustomerID
WHERE 
    O.TotalAmount > 500;

9)SELECT 
    P.ProductName,
    S.SaleDate,
    S.SaleAmount
FROM 
    Sales S
JOIN 
    Products P ON S.ProductID = P.ProductID
WHERE 
    YEAR(S.SaleDate) = 2022 OR S.SaleAmount > 400;

10)SELECT 
    P.ProductName,
    SUM(S.SaleAmount) AS TotalSalesAmount
FROM 
    Sales S
JOIN 
    Products P ON S.ProductID = P.ProductID
GROUP BY 
    P.ProductName;

11)SELECT 
    E.EmployeeName,
    D.DepartmentName,
    E.Salary
FROM 
    Employees E
JOIN 
    Departments D ON E.DepartmentID = D.DepartmentID
WHERE 
    D.DepartmentName = 'HR'
    AND E.Salary > 60000;
12)SELECT 
    P.ProductName,
    S.SaleDate,
    S.StockQuantity
FROM 
    Sales S
JOIN 
    Products P ON S.ProductID = P.ProductID
WHERE 
    YEAR(S.SaleDate) = 2023
    AND S.StockQuantity > 100;
13)SELECT 
    E.EmployeeName,
    D.DepartmentName,
    E.HireDate
FROM 
    Employees E
JOIN 
    Departments D ON E.DepartmentID = D.DepartmentID
WHERE 
    D.DepartmentName = 'Sales'
    OR E.HireDate > '2020-12-31';


14)SELECT 
    CONCAT(C.FirstName, ' ', C.LastName) AS CustomerName,
    O.OrderID,
    C.Address,
    O.OrderDate
FROM 
    Customers C
JOIN 
    Orders O ON C.CustomerID = O.CustomerID
WHERE 
    C.Country = 'USA'
    AND C.Address REGEXP '^[0-9]{4}';

15)SELECT 
    P.ProductName,
    C.CategoryName AS Category,
    S.SaleAmount
FROM 
    Sales S
JOIN 
    Products P ON S.ProductID = P.ProductID
JOIN 
    Categories C ON P.CategoryID = C.CategoryID
WHERE 
    C.CategoryName = 'Electronics'
    OR S.SaleAmount > 350;

16)SELECT 
    C.CategoryName,
    COUNT(P.ProductID) AS ProductCount
FROM 
    Categories C
LEFT JOIN 
    Products P ON C.CategoryID = P.CategoryID
GROUP BY 
    C.CategoryName;

17)SELECT 
    CONCAT(C.FirstName, ' ', C.LastName) AS CustomerName,
    C.City,
    O.OrderID,
    O.TotalAmount AS Amount
FROM 
    Customers C
JOIN 
    Orders O ON C.CustomerID = O.CustomerID
WHERE 
    C.City = 'Los Angeles'
    AND O.TotalAmount > 300;

18)SELECT 
    E.EmployeeName,
    D.DepartmentName
FROM 
    Employees E
JOIN 
    Departments D ON E.DepartmentID = D.DepartmentID
WHERE 
    D.DepartmentName IN ('HR', 'Finance')
    OR (
        LENGTH(E.EmployeeName)
        - LENGTH(REPLACE(LOWER(E.EmployeeName), 'a', ''))
        + LENGTH(E.EmployeeName)
        - LENGTH(REPLACE(LOWER(E.EmployeeName), 'e', ''))
        + LENGTH(E.EmployeeName)
        - LENGTH(REPLACE(LOWER(E.EmployeeName), 'i', ''))
        + LENGTH(E.EmployeeName)
        - LENGTH(REPLACE(LOWER(E.EmployeeName), 'o', ''))
        + LENGTH(E.EmployeeName)
        - LENGTH(REPLACE(LOWER(E.EmployeeName), 'u', ''))
    ) >= 4;


19)SELECT 
    E.EmployeeName,
    D.DepartmentName,
    E.Salary
FROM 
    Employees E
JOIN 
    Departments D ON E.DepartmentID = D.DepartmentID
WHERE 
    D.DepartmentName IN ('Sales', 'Marketing')
    AND E.Salary > 60000;


