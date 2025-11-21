# 意象·诗匣 - 部署指南

## 部署方式

### 1. GitHub Pages 部署（推荐）

1. 创建 GitHub 仓库
2. 将代码推送到仓库
3. 在仓库设置中启用 GitHub Pages
4. 选择分支并保存

### 2. 静态文件服务器部署

1. 将以下文件上传到服务器：
   - `index.html`
   - `styles.css`
   - `script.js`
   - `README.md`

2. 配置服务器支持 HTTPS

### 3. Netlify 部署

1. 将代码推送到 GitHub
2. 在 Netlify 中导入项目
3. 配置构建设置：
   - 构建命令：空
   - 发布目录：`/`

## 本地开发

### 快速启动

```bash
# 使用 Python 内置服务器
python -m http.server 8000

# 或使用 Node.js
npx live-server --port=8000
```

### 使用 npm

```bash
npm install
npm start
```

## API 配置

### 智谱AI API 配置

1. 在 `script.js` 中配置 API 密钥：
```javascript
const ZHIPU_API_KEY = '你的API密钥';
```

2. 确保 API 密钥有效
3. 检查 API 调用限制

## 浏览器兼容性

- Chrome 60+
- Firefox 55+
- Safari 12+
- Edge 79+

## 性能优化

### 图片优化
- 使用 WebP 格式
- 实现懒加载
- 压缩图片资源

### 缓存策略
- 设置适当的缓存头
- 使用 Service Worker

## 安全注意事项

1. **API 密钥保护**
   - 不要在客户端暴露敏感密钥
   - 考虑使用代理服务器

2. **CORS 配置**
   - 确保服务器正确配置 CORS
   - 限制允许的域名

3. **HTTPS 要求**
   - 生产环境必须使用 HTTPS
   - 更新 API 调用为 HTTPS

## 故障排除

### 常见问题

1. **API 调用失败**
   - 检查网络连接
   - 验证 API 密钥
   - 查看浏览器控制台错误

2. **样式显示异常**
   - 清除浏览器缓存
   - 检查 CSS 文件路径

3. **移动端适配**
   - 检查响应式设计
   - 测试不同屏幕尺寸

### 日志记录

- 启用浏览器开发者工具
- 查看控制台输出
- 检查网络请求状态

## 更新维护

### 版本管理

- 使用语义化版本控制
- 记录更新日志
- 测试新功能兼容性

### 备份策略

- 定期备份代码
- 保存重要配置
- 维护部署文档

## 联系我们

如有问题，请联系开发团队：
- 邮箱：team@image-poem-box.com
- GitHub：https://github.com/your-username/image-poem-box