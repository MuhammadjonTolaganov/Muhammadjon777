1 ) SELECT Category, COUNT(*) AS TotalProducts
FROM Products
GROUP BY Category;
2) SELECT AVG(Price) AS AvgPriceElectronics
FROM Products
WHERE Category = 'Electronics';
3) SELECT *
FROM Customers
WHERE City LIKE 'L%';
4) SELECT ProductName
FROM Products
WHERE ProductName LIKE '%er';
5) SELECT *
FROM Customers
WHERE Country LIKE '%a';
6) SELECT MAX(Price) AS HighestPrice
FROM Products;
7) SELECT ProductName, StockQuantity,
       CASE 
           WHEN StockQuantity < 30 THEN 'Low Stock'
           ELSE 'Sufficient'
       END AS StockStatus
FROM Products;
8) SELECT Country, COUNT(*) AS TotalCustomers
FROM Customers
GROUP BY Country;
9) SELECT MIN(Quantity) AS MinQuantity,
       MAX(Quantity) AS MaxQuantity
FROM Orders;
10) SELECT DISTINCT o.CustomerID
FROM Orders o
LEFT JOIN Invoices i ON o.OrderID = i.OrderID
WHERE o.OrderDate >= '2023-01-01' AND o.OrderDate < '2023-02-01'
  AND i.OrderID IS NULL;
11) SELECT ProductName FROM Products
UNION ALL
SELECT ProductName FROM Products_Discounted;
12) SELECT ProductName FROM Products
UNION
SELECT ProductName FROM Products_Discounted;
13) SELECT YEAR(OrderDate) AS OrderYear, AVG(OrderAmount) AS AvgOrderAmount
FROM Orders
GROUP BY YEAR(OrderDate);
14) SELECT ProductName,
       CASE 
         WHEN Price < 100 THEN 'Low'
         WHEN Price BETWEEN 100 AND 500 THEN 'Mid'
         ELSE 'High'
       END AS PriceGroup
FROM Products;
15) -- Create new table with pivoted data
SELECT City,
       [2012],
       [2013]
INTO Population_Each_Year
FROM (
    SELECT City, Year, Population
    FROM City_Population
) AS SourceTable
PIVOT (
    SUM(Population)
    FOR Year IN ([2012], [2013])
) AS PivotTable;
16) SELECT ProductID, SUM(SaleAmount) AS TotalSales
FROM Sales
GROUP BY ProductID;
17) SELECT ProductName
FROM Products
WHERE ProductName LIKE '%oo%';
18) -- Create new table with pivoted data
SELECT Year,
       [Bektemir],
       [Chilonzor],
       [Yakkasaroy]
INTO Population_Each_City
FROM (
    SELECT Year, City, Population
    FROM City_Population
) AS SourceTable
PIVOT (
    SUM(Population)
    FOR City IN ([Bektemir], [Chilonzor], [Yakkasaroy])
) AS PivotTable;

19) SELECT TOP 3 CustomerID, SUM(InvoiceAmount) AS TotalSpent
FROM Invoices
GROUP BY CustomerID
ORDER BY TotalSpent DESC;
20) SELECT City, 2012 AS Year, [2012] AS Population FROM Population_Each_Year
UNION ALL
SELECT City, 2013 AS Year, [2013] AS Population FROM Population_Each_Year;
21) SELECT p.ProductName, COUNT(s.ProductID) AS TimesSold
FROM Products p
LEFT JOIN Sales s ON p.ProductID = s.ProductID
GROUP BY p.ProductName;
22) SELECT Year, 'Bektemir' AS City, Bektemir AS Population FROM Population_Each_City
UNION ALL
SELECT Year, 'Chilonzor' AS City, Chilonzor AS Population FROM Population_Each_City
UNION ALL
SELECT Year, 'Yakkasaroy' AS City, Yakkasaroy AS Population FROM Population_Each_City;



