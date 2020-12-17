# 插入排序

每一趟将一个待排序的元素，插入到前面已经排好序的有序序列中去，直到所有元素排完为止。

```java
public void sort(int a[], int n) {
  for (int i = 0; i < n; i++) {
    int t = a[i];

    for (int j = i; j > 0 && t < a[j - 1]; j--) {
      a[j] = a[j - 1];
    }

    a[j] = t;
  }
}
```
