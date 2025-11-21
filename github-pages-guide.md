# GitHub Pages 部署指南

## 🚀 快速部署（5分钟完成）

### 方法一：直接上传（最简单）
1. 创建 GitHub 仓库
2. 将所有文件上传到仓库根目录
3. 在仓库设置中启用 GitHub Pages
4. 选择分支并保存

### 方法二：使用 Git 命令（推荐）
```bash
# 1. 初始化 Git 仓库
git init
git add .
git commit -m "Initial commit: 意象·诗匣应用"

# 2. 创建 GitHub 仓库（在网页端操作）
# 3. 关联远程仓库
git remote add origin https://github.com/您的用户名/您的仓库名.git

# 4. 推送代码
git branch -M main
git push -u origin main

# 5. 启用 GitHub Pages
# 进入仓库设置 → Pages → 选择 main 分支 → 保存
```

## 📁 部署文件结构

确保您的仓库包含以下文件：
```
根目录/
├── index.html          # 主页面
├── styles.css          # 样式文件
├── script.js           # 功能脚本
├── CNAME              # 自定义域名（可选）
├── README.md          # 项目说明
├── package.json       # 项目配置
└── deploy-guide.md    # 部署指南
```

## ⚙️ GitHub Pages 设置

### 1. 基础设置
- **分支**: 选择 `main` 分支
- **目录**: 选择 `/` (根目录)
- **主题**: 保持默认（无需设置）

### 2. 自定义域名（可选）
1. 在 `CNAME` 文件中写入您的域名
2. 在域名服务商处添加 CNAME 记录
3. 在 GitHub Pages 设置中勾选"强制 HTTPS"

### 3. 环境变量配置
由于 GitHub Pages 是静态网站，API 密钥需要通过以下方式处理：
- 使用环境变量（在构建时注入）
- 或使用客户端安全的方式调用 API

## 🔧 本地测试

### 使用本地服务器测试
```bash
# 方法一：使用 Python
python -m http.server 8000

# 方法二：使用 Node.js
npx live-server --port=8000

# 方法三：使用 VS Code 插件
# 安装 "Live Server" 插件，右键 index.html 选择 "Open with Live Server"
```

### 测试要点
1. ✅ 页面正常加载
2. ✅ 意象选择功能正常
3. ✅ 诗意生成功能正常
4. ✅ 响应式布局适配
5. ✅ API 调用正常

## 🎯 部署后检查清单

- [ ] 页面可以正常访问
- [ ] 所有功能正常工作
- [ ] 移动端适配良好
- [ ] 加载速度正常
- [ ] 没有控制台错误
- [ ] SEO 信息完整

## 📊 监控和分析

### 1. GitHub Pages 统计
- 访问 GitHub 仓库的 Insights → Traffic
- 查看页面访问量
- 分析用户来源

### 2. Google Analytics（可选）
在 `index.html` 中添加 Google Analytics 代码：
```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

## 🚨 常见问题解决

### Q: 页面显示 404 错误
**解决**: 
- 检查文件路径是否正确
- 确保 index.html 在根目录
- 清除浏览器缓存

### Q: CSS/JS 文件无法加载
**解决**:
- 检查文件路径大小写
- 确保文件已上传
- 检查网络连接

### Q: API 调用失败
**解决**:
- 检查 API 密钥配置
- 确认网络连接
- 查看浏览器控制台错误信息

### Q: 移动端显示异常
**解决**:
- 检查响应式 CSS 代码
- 测试不同屏幕尺寸
- 使用浏览器开发者工具模拟移动设备

## 🔄 更新部署

### 常规更新流程
```bash
# 1. 修改代码
git add .
git commit -m "更新描述"

# 2. 推送到 GitHub
git push origin main

# 3. 等待 GitHub Pages 自动部署（约1-2分钟）
```

### 强制刷新缓存
如果用户看到的是旧版本：
- 在 URL 后添加参数：`?v=版本号`
- 或手动清除浏览器缓存

## 🌐 自定义域名设置

### 步骤 1：添加 CNAME 文件
在根目录创建 `CNAME` 文件，内容为：
```
您的域名.com
```

### 步骤 2：DNS 配置
在域名服务商处添加 CNAME 记录：
```
类型: CNAME
名称: www 或 @
值: 您的用户名.github.io
TTL: 3600
```

### 步骤 3：启用 HTTPS
在 GitHub Pages 设置中勾选"强制 HTTPS"。

## 📞 技术支持

如果遇到问题：
1. 查看 GitHub Pages 文档
2. 检查浏览器控制台错误
3. 查看 GitHub Actions 日志
4. 在 GitHub Issues 中提问

---

**部署完成！** 您的应用现在可以通过以下地址访问：
- `https://您的用户名.github.io/您的仓库名`
- 或您的自定义域名

祝您部署顺利！🎉