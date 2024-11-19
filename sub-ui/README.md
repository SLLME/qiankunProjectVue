# sub-ui

注意事项

1. package.json里项目name名字需要与主应用注册时配置的name一致 ———— sub-ui;
2. vite.config.js里publicPath字段值： ———— /sub-ui/;
- 需要和主应用注册子应用时配置的entry端口后路径一致 ———— //localhost:8080/sub-ui
- 需要和主应用注册子应用时配置的activeRule一致 ———— #/sub-ui
- 需要和子应用里public-path.js文件里拼接的静态文件地址一致 ———— sub-ui/
- 需要和子应用里router里所有路由配置的前缀一致 ———— /sub-ui


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

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).