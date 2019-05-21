# 堆排序
将待排序的序列构造成一个最大堆（最小堆），把堆顶元素与末尾元素进行交换，然后对剩余元素重复操作直到有序。

```java
public class Heap {

  public static void main(String []args) {
    int []a = { 4, 6, 8, 5, 9 };
    
    sort(a, 5);
    
    System.out.println(Arrays.toString(a));
  }
  
  // 堆排序
  public static void sort(int a[], n) {
      
    // 将待排序的序列构造成一个最大堆
    for (int i = n / 2 - 1; i >= 0; i--) {
      adjustHeap(a, i, n);
    }
    
    // 把堆顶元素与末尾元素进行交换，然后对剩余元素重复操作直到有序。
    for (int j = n - 1; j > 0; j--) {
      swap(a, 0, j);
      adjustHeap(a, 0, j);
    }
  }

  // 构建最大堆
  public static void adjustHeap(int a[], int i, int n) {
    int t = a[i];                                   
    
    for (int j = 2 * i + 1; j < n; j = 2 * j + 1) { 
    
      // 如果左子结点小于右子结点，j指向右子结点
      if (j + 1 < n && a[j] < a[j + 1]) {         
        j = j + 1;
      }
      
      // 如果子结点大于父结点，将子结点的值赋值给父节点
      if (a[j] > t) {
        a[i] = a[j];
        i = j;
          
      } else {
        break;
      }
    }
    
    a[i] = t;
  }

  // 交换
  public static void swap(int a[], int i, int j) {
    int t = a[i];
    a[i] = a[j];
    a[j] = t;
  }
}
```
