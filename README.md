# 消息框的东西

------


### 1. 使用方法

- [x] cnpm install message-box-qm --save

### 2. 代码使用eg

```
...
import MessageBoxQm from 'message-box-qm';
this.refs.message.open(time)
time:消息框多久自动消失
eg:this.refs.message.open(1000)

<MessageBoxQm ref="message">
  ...
    内容区域
  ...
</MessageBoxQm>
...
```
### 3. 参数说明

| 参数        | 格式   |  说明  |  是否必填  |
| --------   | -----:  | :----:  |  |
| time     | number |   多久自动消失     |非必填,默认为500ms|


---

**LICENSE**

MIT