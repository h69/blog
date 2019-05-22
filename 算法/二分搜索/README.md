# 二分搜索

也叫做二分查找，要求元素已是有序排列。

```java
// 递归法
public int search(int a[], int x, int l, int r) {
  if (l > r) return -1;

  int m = (l + r) / 2;

  if (x == a[m]) {
    return m;
  } else if (x < a[m]) {
    return search(a, x, l, m - 1);
  } else {
    return search(a, x, m + 1, r);
  }
}
```

```java
// 递推法
public int search(int a[], int x, int l, int r) {
  while (l <= r) {
    int m = (l + r) / 2;

    if (x == a[m]) {
      return m;
    } else if (x < a[m]) {
      r = m - 1;
    } else {
      l = m + 1;
    }
  }

  return -1;
}
```