# 冒泡排序

对相邻的元素进行两两比较，顺序相反则进行交换，这样，每一趟会将最大（或最小）的元素浮到顶端，直到所有元素排完为止。

```java
public void sort(int a[], int n) {
  for (int i = 0; i < n - 1; i++) {
    boolean sorted = true;
      
    for (int j = 0; j < n - 1 - i; j++) {
        if (a[j] > a[j + 1]) {
            int t = a[j];
            a[j] = a[j + 1];
            a[j + 1] = t;
            
            sorted = false;
        }
    }

    if (sorted) break;
  }
}
```