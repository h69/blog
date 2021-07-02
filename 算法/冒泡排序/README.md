# 冒泡排序

对相邻的元素进行两两比较，顺序相反则进行交换，这样，每一趟会将最大（或最小）的元素浮到顶端，直到所有元素排完为止。

```cpp
#include <iostream>

using namespace std;

void sort(int a[], int n) {
  for (int i = 0; i < n - 1; i++) {
    for (int j = 0; j < n - i - 1; j++) {
      if (a[j] > a[j + 1]) {
        swap(a[j], a[j + 1]);
      }
    }
  }
}

int main() {
  int a[] = {1, 5, 4, 3, 2};

  sort(a, 5);

  for (int i = 0; i < 5; i++) {
    cout << a[i] << endl;
  }
}
```
