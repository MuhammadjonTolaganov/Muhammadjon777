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

