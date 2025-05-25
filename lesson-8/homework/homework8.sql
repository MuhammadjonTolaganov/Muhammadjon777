1)SELECT p.ProductName, s.SupplierName
FROM Products p
CROSS JOIN Suppliers s;
2)SELECT d.DepartmentName, e.EmployeeName
FROM Departments d
CROSS JOIN Employees e;
3)SELECT s.SupplierName, p.ProductName
FROM Products p
INNER JOIN Suppliers s ON p.SupplierID = s.SupplierID;
4)SELECT c.CustomerName, o.OrderID
FROM Orders o
INNER JOIN Customers c ON o.CustomerID = c.CustomerID;
5)SELECT s.StudentName, c.CourseName
FROM Students s
CROSS JOIN Courses c;
6)SELECT p.ProductName, o.OrderID
FROM Orders o
INNER JOIN Products p ON o.ProductID = p.ProductID;
7)SELECT e.EmployeeName, d.DepartmentName
FROM Employees e
INNER JOIN Departments d ON e.DepartmentID = d.DepartmentID;
8)SELECT s.StudentName, e.CourseID
FROM Enrollments e
INNER JOIN Students s ON e.StudentID = s.StudentID;
9)SELECT o.OrderID, p.PaymentID, p.Amount
FROM Orders o
INNER JOIN Payments p ON o.OrderID = p.OrderID;
10)SELECT o.OrderID, p.ProductName, p.Price
FROM Orders o
INNER JOIN Products p ON o.ProductID = p.ProductID
WHERE p.Price > 100;

11)SELECT e.EmployeeName, d.DepartmentName
FROM Employees e
CROSS JOIN Departments d
WHERE e.DepartmentID <> d.DepartmentID;
12)SELECT o.OrderID, p.ProductName, o.Quantity, p.StockQuantity
FROM Orders o
JOIN Products p ON o.ProductID = p.ProductID
WHERE o.Quantity > p.StockQuantity;
13)SELECT c.CustomerName, s.ProductID, s.SaleAmount
FROM Sales s
JOIN Customers c ON s.CustomerID = c.CustomerID
WHERE s.SaleAmount >= 500;
14)SELECT s.StudentName, c.CourseName
FROM Enrollments e
JOIN Students s ON e.StudentID = s.StudentID
JOIN Courses c ON e.CourseID = c.CourseID;
15)SELECT p.ProductName, s.SupplierName
FROM Products p
JOIN Suppliers s ON p.SupplierID = s.SupplierID
WHERE s.SupplierName LIKE '%Tech%';
16) SELECT o.OrderID, o.TotalAmount, p.Amount AS PaymentAmount
FROM Orders o
JOIN Payments p ON o.OrderID = p.OrderID
WHERE p.Amount < o.TotalAmount;
17)SELECT e.EmployeeName, d.DepartmentName
FROM Employees e
JOIN Departments d ON e.DepartmentID = d.DepartmentID;
18)SELECT p.ProductName, c.CategoryName
FROM Products p
JOIN Categories c ON p.CategoryID = c.CategoryID
WHERE c.CategoryName IN ('Electronics', 'Furniture');
19)SELECT s.SaleID, c.CustomerName, s.SaleAmount
FROM Sales s
JOIN Customers c ON s.CustomerID = c.CustomerID
WHERE c.Country = 'USA';
20)SELECT o.OrderID, c.CustomerName, o.TotalAmount
FROM Orders o
JOIN Customers c ON o.CustomerID = c.CustomerID
WHERE c.Country = 'Germany' AND o.TotalAmount > 100;

21)SELECT E1.EmployeeName AS Employee1,
E2.EmployeeName AS Employee2,
E1.DepartmentID AS Dept1,
E2.DepartmentID AS Dept2
FROM Employees E1
JOIN Employees E2 ON E1.EmployeeID < E2.EmployeeID
WHERE E1.DepartmentID <> E2.DepartmentID;
22)SELECT p.PaymentID, o.OrderID, o.Quantity, pr.Price, p.Amount
FROM Payments p
JOIN Orders o ON p.OrderID = o.OrderID
JOIN Products pr ON o.ProductID = pr.ProductID
WHERE p.Amount <> (o.Quantity * pr.Price);
23)SELECT s.StudentID, s.StudentName
FROM Students s
LEFT JOIN Enrollments e ON s.StudentID = e.StudentID
WHERE e.CourseID IS NULL;


24)SELECT m.EmployeeName AS Manager,
e.EmployeeName AS Employee,
m.Salary AS ManagerSalary,
e.Salary AS EmployeeSalary
FROM Employees m
JOIN Employees e ON m.EmployeeID = e.ManagerID
WHERE m.Salary <= e.Salary;

25)SELECT DISTINCT c.CustomerID, c.CustomerName
FROM Orders o
JOIN Customers c ON o.CustomerID = c.CustomerID
LEFT JOIN Payments p ON o.OrderID = p.OrderID
WHERE p.PaymentID IS NULL;

