# react 滑动刻度尺组件
----

## 效果
<img src="https://s1.ax1x.com/2022/12/18/zbJIBV.png" style="width: 375px" />

## 安装
```yarn add zxm-ruler-picker```


## 使用

```javascript
// minScale: number;  最小刻度
// maxScale: number;  最大刻度
// initScale: number; 初始刻度
// defScale: number;  默认刻度（没有设initScale，会使用defScale）
// unit: string;      单位显示
// onChange: any;     刻度变化回调方法

// 注意 如果项目里使用了 postcss 需要忽略转换 zxm_rs 开头的css类名
```



```javascript
import { Ruler } from 'zxm-ruler-picker'

function App() {
  return (
    <div>
      <Ruler
        minScale={0}
        maxScale={100}
        initScale={50}
        unit={'cm'}
        onChange={(value) => {
          console.log('value', value);
        }}
      />
    </div>
  );
}

export default App
```