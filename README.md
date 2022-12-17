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
// onChange: any;     刻度变化回调方法
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
        onChange={(value) => {
          console.log('value', value);
        }}
      />
    </div>
  );
}

export default App
```