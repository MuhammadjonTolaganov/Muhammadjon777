1) Select ProductName AS Name
From Products ; 

2) SelectCustomers Table AS Client 
From Customers;
3) SELECT ProductName FROM Products
UNION
SELECT ProductName FROM Products_Discounted;
4 ) SELECT ProductName FROM Products
INTERSECT
SELECT ProductName FROM Products_Discounted;

5) Select Distinct CustomerName , Country from Customer ;
6) Select Price, ProductID, 
   Case 
      When Price > 1000 then 'High'
      When Price <= 1000 then 'Low'
 End as PriceStatus 
From Products ;
7 ) Select StockQuantity  , 
   IIF (StockQuantity>100, 'Yes' , 'No') As StockStatus 
  from Products_Discounted ; 
8 ) SELECT ProductName FROM Products
UNION
SELECT ProductName FROM Products_Discounted;

9) SELECT ProductName FROM Products
   EXCEPT
   SELECT ProductName FROM Products_Discounted;

10) Select Price , 
 IIF (Price>10000 , 'Expensive' , 'Affordable') As PriceForCunsomer
From Products 
 11) SELECT   EmployeesName,  EmployeesAge,  EmployeesSalary FROM Employees
WHERE    EmployeesAge < 25 OR EmployeesSalary > 60000;
 12) SELECT Salary, Department, EmployeeID,
    CASE 
        WHEN Department = 'HR' OR EmployeeID = 5 THEN Salary * 1.10
        ELSE Salary
    END AS AdjustSalary
FROM Employees;

13) SELECT SaleAmount,
    CASE 
        WHEN SaleAmount > 500 THEN 'Top Tier'
        WHEN SaleAmount BETWEEN 200 AND 500 THEN 'Mid Tier'
        ELSE 'Low Tier'
    END AS SaleTier
FROM Sales;
14) SELECT CustomerID FROM Orders
EXCEPT
SELECT CustomerID FROM Sales;
15) SELECT CustomerID, Quantity,
    CASE
        WHEN Quantity = 1 THEN 0.03
        WHEN Quantity BETWEEN 1 AND 3 THEN 0.05
        ELSE 0.07
    END AS DiscountPercentage
FROM Orders;


