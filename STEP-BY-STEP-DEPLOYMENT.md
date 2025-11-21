# 意象·诗匣 - GitHub Pages 部署指南

## 🚀 快速部署（5分钟完成）

### 第一步：创建 GitHub 仓库
1. 访问 [GitHub.com](https://github.com)
2. 点击右上角 "+" → "New repository"
3. 填写仓库信息：
   - **Repository name**: `image-poem-box` (推荐)
   - **Description**: `意象·诗匣 - 古典诗词意境探索Web应用`
   - **Public** (公开)
   - ☑️ Add a README file
4. 点击 "Create repository"

### 第二步：上传项目文件
选择以下任一方法：

#### 方法A：拖拽上传（最简单）
1. 在仓库页面点击 "Add file" → "Upload files"
2. 将项目文件夹中的所有文件拖拽到上传区域
3. 填写提交信息：`Initial commit: 意象·诗匣应用`
4. 点击 "Commit changes"

#### 方法B：使用 Git 命令（推荐）
```bash
# 1. 打开终端/命令提示符，进入项目目录
cd c:/Users/huawei/CodeBuddy/20251120220704

# 2. 初始化 Git
git init

# 3. 添加所有文件
git add .

# 4. 提交更改
git commit -m "Initial commit: 意象·诗匣应用"

# 5. 关联远程仓库（替换为你的用户名和仓库名）
git remote add origin https://github.com/你的用户名/image-poem-box.git

# 6. 推送代码
git branch -M main
git push -u origin main
```

### 第三步：启用 GitHub Pages
1. 进入仓库页面
2. 点击 "Settings" 标签
3. 左侧菜单选择 "Pages"
4. 在 "Source" 部分选择：
   - **Branch**: `main`
   - **Folder**: `/` (根目录)
5. 点击 "Save"

### 第四步：访问你的应用
等待1-2分钟，然后访问：
- `https://你的用户名.github.io/image-poem-box`

## 📁 部署文件清单

确保以下文件已上传：
```
├── index.html          # 主页面
├── styles.css          # 样式文件
├── script.js           # 功能脚本
├── package.json        # 项目配置
├── README.md           # 项目说明
├── CNAME              # 自定义域名（可选）
├── deploy-guide.md     # 部署指南
├── github-pages-guide.md # GitHub Pages 指南
└── deploy-script.bat   # 本地测试脚本
```

## 🔧 本地测试

在部署前，建议先进行本地测试：

### 方法一：使用部署脚本
双击运行 `deploy-script.bat` 文件

### 方法二：手动启动服务器
```bash
# 进入项目目录
cd c:/Users/huawei/CodeBuddy/20251120220704

# 启动本地服务器
python -m http.server 8000

# 或使用 Node.js
npx live-server --port=8000
```

然后在浏览器访问：`http://localhost:8000`

## ✅ 测试清单

部署前请测试以下功能：

- [ ] 页面正常加载
- [ ] 意象分类标签切换正常
- [ ] 意象选择功能正常（点击选择）
- [ ] 创作区显示已选意象
- [ ] 生成意境按钮可点击（选择2个以上意象后）
- [ ] 诗意生成功能正常
- [ ] 移动端响应式布局正常

## 🐛 常见问题解决

### Q: 页面显示 404 错误
- 检查仓库名称是否正确
- 确保文件在根目录下
- 等待 GitHub Pages 完成部署（通常1-2分钟）

### Q: 样式或功能异常
- 检查浏览器控制台是否有错误
- 确保所有文件已正确上传
- 清除浏览器缓存后重试

### Q: API 调用失败
- GitHub Pages 是静态网站，某些 API 可能需要配置 CORS
- 可以联系 API 服务商配置允许的域名

## 📊 部署状态检查

部署完成后，检查以下内容：

1. **GitHub Pages 状态**：在仓库 Settings → Pages 查看部署状态
2. **功能测试**：在不同设备上测试应用功能
3. **性能检查**：使用浏览器开发者工具检查加载性能

## 🔄 更新部署

当需要更新应用时：

1. 修改本地代码
2. 提交并推送到 GitHub：
```bash
git add .
git commit -m "更新描述"
git push origin main
```
3. GitHub Pages 会自动重新部署

## 🌐 自定义域名（可选）

如需使用自定义域名：

1. 在项目根目录创建 `CNAME` 文件，内容为你的域名
2. 在域名服务商处配置 CNAME 记录指向 GitHub Pages
3. 在 GitHub Pages 设置中启用 HTTPS

---

**恭喜！** 你的应用已经成功部署到 GitHub Pages！🎉

访问地址：`https://你的用户名.github.io/image-poem-box`