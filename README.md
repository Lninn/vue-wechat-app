# frontend

## Project setup

```
npm install
```

### Compiles and hot-reloads for development

```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your tests
```
npm run test
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).


### Pages

- Home
  - DeviceList
  - Maintain
- WorkOrder
  - List
  - Item
- HomePage
  - Home
  - Profile

### API

- account
  - /users/login
  - /users/register
  - /users/profile
- device
  - /devices
  - /devices/id
  - /devices/maintain/id
- workorder
  - /workorders
  - /workorders/id

### WorkOrder Detail

#### 工单

    创建 被接收 反馈 结束

#### 维护人员

    确认接收、反馈、完成

#### 普通客户

    创建 评价

#### TODO 

维护设备的时候刷新页面数据会消失

设备报修 -> 接受工单？