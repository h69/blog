# dp 与 px 之间的转换
一般设计师都会按照某个分辨率下进行素材大小与位置的设计，但是在 Android 上是需要用 dp 表示这些参数以保证不同分辨率下的适配。

## 计算公式
px = dp * 像素密度 / 160

## 快速查询
| 名称    | 分辨率                                          | 像素密度 | dp | px   | 
| ------- | ----------------------------------------------- | -------- | -- | ---- | 
| ldpi    | QVGA（320×240）                                 | 120      | 1  | 0.75 | 
| mdpi    | HVGA（480×320）                                 | 160      | 1  | 1    | 
| hdpi    | WVGA（800×480）、FWVGA（854×480)、QHD（960×540）| 240      | 1  | 1.5  | 
| xhdpi   | 720P（1280×720）                                | 320      | 1  | 2    | 
| xxhdpi  | 1080P（1920×1080）                              | 480      | 1  | 3    | 
| xxxhdpi | 4K（3840×2160）                                 | 640      | 1  | 4    | 

## 应用场景
假设设计师给了你一个在 1080P 下的图标大小：60px * 60px，为了保证适配不同的分辨率机型，那么你在 Android 中使用它的时候有以下方法：
* 可以直接把图标放在 xxhdpi 文件夹中。
* 可以用 dp 表示成 20dp * 20dp。
* 可以使用代码进行转换。

## 代码转换
```java
public int dp2px(Context context, float dpValue) {  
    final float scale = context.getResources().getDisplayMetrics().density;  
    return (int) (dpValue * scale + 0.5f);  
}  
   
public int px2dp(Context context, float pxValue) {  
    final float scale = context.getResources().getDisplayMetrics().density;  
    return (int) (pxValue / scale + 0.5f);  
}
```


