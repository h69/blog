# SUM 与 GROUP BY 的一些坑
`SUM` 通常需要与 `GROUP BY` 一起用在求和语句中，如果不使用`GROUP BY` 将会出现一些坑。

## 例子
| f_month | f_name | f_income |
| ------- | ------ | -------- |
| 201701  | Adam   | 10000    |
| 201702  | Adam   | 10000    |
| 201703  | Adam   | 10000    |
| 201704  | Adam   | 10000    |
| 201705  | Adam   | 10000    |
| 201706  | Adam   | 10000    |
| 201707  | Adam   | 10000    |
| 201708  | Adam   | 10000    |
| 201709  | Adam   | 10000    |
| 201710  | Adam   | 10000    |
| 201711  | Adam   | 10000    |
| 201712  | Adam   | 10000    |

比如，查询 Adam 的 2017 年收入和是多少，可以写成以下两条 SQL：

```sql
SELECT SUM(f_income) FROM t_emplyee WHERE f_name = 'Adam' AND f_month >= 201701 AND f_month <= 201712;
```

```sql
SELECT SUM(f_income) FROM t_emplyee WHERE f_name = 'Adam' AND f_month >= 201701 AND f_month <= 201712 GROUP BY f_name;
```

## 正常情况
如果对应的查询语句有数据的话，那么，这两条查询语句的结果是一致的：

| SUM(f_income) |
| ------------- |  
| 120000        | 

```
1 row in set (0.00 sec)
```
## 异常情况
如果对应的查询语句没有数据的话，比如查询的名字不是 Adam，那么，
* 不带 `GROUP BY` 的语句将会返回一条空记录，记录数是 1：

| SUM(f_income) |
| ------------- |  
| NULL          | 

```
1 row in set (0.00 sec)
```

* 而带了 `GROUP BY` 的查询语句则返回空，记录数是 0：

| SUM(f_income) |
| ------------- |  

```
Empty set (0.00 sec)
```

## 结论
在 `SUM` 的时候，只有带了 `GROUP BY` 才是正确符合逻辑的。
