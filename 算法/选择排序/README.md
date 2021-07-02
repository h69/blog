# 选择排序

每一趟从待排序的数据元素中选择最小（或最大）的一个元素与首元素进行交换，直到所有元素排完为止。

```c++
#include <iostream>

using namespace std;

void sort(int a[], int n) {
  for (int i = 0; i < n - 1; i++) {
    int min = i;

    for (int j = i + 1; j < n; j++) {
      if (a[j] < a[min]) {
        min = j;
      }
    }

    swap(a[i], a[min]);
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
