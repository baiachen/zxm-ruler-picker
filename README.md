# react 滑动刻度尺组件
----

## 效果


## 安装
```yarn add zxm-ruler-picker```


## 使用

```javascript
import Ruler from 'zxm-ruler-picker'

function App() {
  return (
    <div className="App">
      <div>
        <Ruler minScale={0} maxScale={100} initScale={80} onChange={() => {}} />
      </div>
    </div>
  );
}

export default App
```