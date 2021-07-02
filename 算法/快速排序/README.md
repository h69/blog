# 快速排序

先从数列中取出一个数作为基准数，把比这个数小的全放到它的左边（从右往左找），把比这个数大的全放到它的右边（从左往右找），最后形成左右两个区间，然后对这左右两个区间重复这个过程，直到各区间只有一个数。

```c++
#include <iostream>

using namespace std;

void sort(int a[], int l, int r) {
  if (l < r) {
    int i = l, j = r, t = a[i];

    while (i < j) {
      while (i < j && a[j] >= t) {
        j--;
      }

      if (i < j) {
        a[i] = a[j];
        i++;
      }

      while (i < j && a[i] <= t) {
        i++;
      }

      if (i < j) {
        a[j] = a[i];
        j--;
      }
    }

    a[i] = t;

    sort(a, l, i - 1);
    sort(a, i + 1, r);
  }
}

int main() {
  int a[] = {1, 5, 4, 3, 2};

  sort(a, 0, 5);

  for (int i = 0; i < 5; i++) {
    cout << a[i] << endl;
  }
}
```
