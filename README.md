# Vue 3 Todo List

這是一個使用 Vue 3、Vite、Tailwind CSS 以及多個插件的 Todo List 前端專案。它連接到 Django REST Framework 提供的後端 API。

![todolist首頁](/public/image/todolist.jpg)

[專案演示影片](https://youtu.be/ywlRd4iCQX0)

## 後端專案連結

[後端專案連結](https://github.com/chenstephen0501/todo_list_backend)

## 專案功能

- **CRUD 操作**：透過與後端 API 的整合，實現 Todo 項目的新增、修改、刪除與查詢操作，以及用戶的註冊、登入、登出功能。
- **加載動畫**：使用 `vue-loading-overlay` 插件顯示數據加載過程中的動畫。
- **通知提示**：集成 `vue-toastification` 插件，提供用戶操作的即時通知提示。
- **HTTP 請求**：使用 `axios` 進行 API 請求，以實現前後端的數據交互。

### 前端依賴

- autoprefixer 10.4.20 
- axios 1.7.5 
- vue 3.4.29
- vue-loading-overlay 6.0.5
- vue-router 4.4.3 
- vue-toastification 2.0.0-rc.5 

### 開發環境依賴

- vitejs/plugin-vue 5.0.5 
- eslin 8.57.0 
- eslint-plugin-vu 9.23.0 
- prettie 3.3.3 
- prettier-plugin-vu 1.1.6 
- tailwindcs 3.4.10 
- vit 5.3.1 
- vite-plugin-vue-devtool 7.3.1 

## 安裝與設定

### 1. 克隆專案，將專案克隆至本地：

```bash
$ git clone git@github.com:chenstephen0501/todo_list_front_end.git
$ cd todo_list_front_end
```

### 2. 安裝依賴
```bash
$ npm install
```

### 3. 設定環境變數
- VITE_API_BASE_URL=http://your-backend-api-url.com

### 4. 啟動開發伺服器
```bash
$ npm run dev
```