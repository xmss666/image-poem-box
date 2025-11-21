@echo off
echo ======================================
echo  意象·诗匣 GitHub Pages 部署脚本
echo ======================================
echo.

echo 1. 检查项目文件结构...
if not exist "index.html" (
    echo ❌ 错误: index.html 文件不存在
    pause
    exit /b 1
)

if not exist "styles.css" (
    echo ❌ 错误: styles.css 文件不存在
    pause
    exit /b 1
)

if not exist "script.js" (
    echo ❌ 错误: script.js 文件不存在
    pause
    exit /b 1
)

echo ✅ 项目文件结构检查通过

echo.
echo 2. 启动本地测试服务器...
echo 应用将在 http://localhost:8000 启动
python -m http.server 8000

pause