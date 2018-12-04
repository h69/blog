# 选择排序

每一趟从待排序的数据元素中选择最小（或最大）的一个元素与首元素进行交换，直到所有元素排完为止。

```java
public void sort(int a[], int n) {
  for (int i = 0; i < n - 1; i++) {
    int min = i;
    
    for (int j = i + 1; j < n; j++) {
      if (a[j] < a[min]) { 
        min = j;
      }
    }
      
    int t = a[min];
    a[min] = a[i];
    a[i] = t;
  }
}
```