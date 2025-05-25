1) SELECT DISTINCT
    CASE WHEN col1 < col2 THEN col1 ELSE col2 END AS colA,
    CASE WHEN col1 < col2 THEN col2 ELSE col1 END AS colB
FROM InputTbl;
2) SELECT * FROM TestMultipleZero
WHERE A <> 0 OR B <> 0 OR C <> 0 OR D <> 0;
3) SELECT * FROM section1
WHERE id % 2 = 1;
4) SELECT TOP 1 * FROM section1
ORDER BY id ASC;
5) SELECT TOP 1 * FROM section1
ORDER BY id DESC;
6) SELECT * FROM section1
WHERE name LIKE 'B%';
 7) SELECT * FROM ProductCodes
WHERE Code LIKE '%@_%' ESCAPE '@';
