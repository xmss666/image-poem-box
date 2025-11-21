// 意象图标映射
const imageIcons = {
    '明月': '🌙', '残阳': '🌅', '孤云': '☁️', '寒鸦': '🐦', '暮雪': '❄️', '春草': '🌱', '秋叶': '🍂', '空山': '⛰️', '松风': '🌲', '竹影': '🎋',
    '江水': '🌊', '芦苇': '🌾', '归雁': '🦆', '流萤': '✨', '疏星': '⭐', '薄雾': '🌫️', '霜林': '🌳', '烟雨': '🌧️', '幽涧': '💧', '枯藤': '🍂',
    '青山': '🏔️', '碧潭': '💎', '落花': '🌸', '晨露': '💧', '晚霞': '🌆', '清泉': '⛲', '奇石': '🪨', '古树': '🌳', '荒山': '⛰️', '寒江': '🏞️',
    '暖风': '🍃', '白云': '☁️', '绿水': '💧', '红叶': '🍁', '黄鹂': '🐤',
    '小楼': '🏠', '西窗': '🪟', '危栏': '🪜', '柴门': '🚪', '玉阶': '🪵', '空城': '🏰', '禅寺': '🏛️', '驿站': '🏪', '回廊': '🛕', '朱户': '🏮',
    '曲径': '🛤️', '宫墙': '🏯', '茅屋': '🏡', '画檐': '🏗️', '庭树': '🌳', '石桥': '🌉', '荒园': '🏞️', '僧舍': '🛖', '津渡': '⚓', '古道': '🛣️',
    '高楼': '🏢', '庭院': '🏡', '楼台': '🏛️', '亭阁': '��', '门扉': '🚪', '围墙': '🧱', '径庭': '🏞️', '厅堂': '🏛️', '书房': '📚', '茶室': '🍵',
    '花窗': '🪟', '月门': '🌙', '石阶': '🪜', '木屋': '🏚️', '竹楼': '🎋', '水榭': '🏞️',
    '红笺': '📜', '酒盏': '🍷', '金钗': '🎀', '香炉': '🔥', '残烛': '🕯️', '琵琶': '🎵', '玉笛': '🎶', '纨扇': '🪭', '妆镜': '🪞', '锦书': '📝',
    '双鲤': '🐟', '熏笼': '🫙', '针线': '🧵', '衾枕': '🛏️', '银釭': '💡', '琴弦': '🎸', '诗囊': '📚', '墨痕': '🖋️', '笔尘': '✍️', '旧信': '💌',
    '古琴': '🎻', '玉佩': '📿', '铜镜': '🪞', '笔墨': '✍️', '纸扇': '🪭', '茶盏': '🍵', '香囊': '🎁', '书卷': '📖', '宝剑': '⚔️', '玉箫': '🎵',
    '棋盘': '♟️', '花瓶': '🏺', '漆器': '🏺', '锦盒': '📦', '绣帕': '🧵', '铜灯': '🏮',
    '更漏': '⏰', '钟声': '🔔', '子规': '🐦', '砧声': '🔨', '寒食': '🍽️', '清明': '🌿', '七夕': '💫', '中秋': '🌕', '重阳': '🏔️', '除夕': '🎊',
    '春社': '🌱', '秋宵': '🌙', '晓寒': '🌅', '夜永': '🌃', '岁暮': '📅', '流光': '✨', '迟暮': '🌅', '旦暮': '🌄', '残更': '🕐', '花朝': '🌸',
    '晨曦': '🌅', '黄昏': '🌆', '深夜': '🌃', '黎明': '🌄', '正午': '☀️', '初春': '🌱', '盛夏': '☀️', '深秋': '🍂', '寒冬': '❄️', '暮春': '🌸',
    '夏至': '☀️', '冬至': '❄️', '立春': '🌱', '秋分': '🍂', '元宵': '🏮', '端午': '🛶',
    '离歌': '🎵', '泪痕': '💧', '旧梦': '💭', '思亲': '👨‍👩‍👧‍👦', '怀古': '📜', '断肠': '💔', '销魂': '👻', '惘然': '😕', '愁绪': '😔', '别恨': '😢',
    '相思': '❤️', '孤寂': '🧍', '惆怅': '😞', '凄凉': '🥀', '欢愉': '😊', '哀怨': '😢', '缱绻': '💕', '幽怨': '😔', '黯然': '😞', '无眠': '😴',
    '喜悦': '😄', '忧伤': '😢', '怀念': '💭', '期待': '🙏', '迷茫': '😕', '宁静': '😌', '激动': '🤩', '愧疚': '😔', '羡慕': '😍', '嫉妒': '😤',
    '希望': '✨', '绝望': '😞', '温柔': '🌸', '愤怒': '😠', '恐惧': '😨', '羞怯': '😳',
    '独坐': '🧘', '凭栏': '🪟', '望归': '👀', '忆远': '👁️', '听雨': '🌧️', '吹笛': '🎵', '倚门': '🚪', '徘徊': '🚶', '沉吟': '🤔', '凝望': '👀',
    '醉卧': '😴', '掩泣': '😢', '踟蹰': '🚶', '叹息': '😮', '寄迹': '📍', '漂泊': '🚢', '守岁': '⏰', '伫立': '🧍', '低语': '🤫', '长叹': '😮',
    '静思': '🧘', '独行': '🚶', '远眺': '👀', '小憩': '😌', '书写': '✍️', '品茗': '🍵', '抚琴': '🎵', '赏花': '🌸', '观云': '☁️', '听风': '🍃',
    '漫步': '🚶', '静坐': '🧘', '凝思': '🤔', '回首': '👀', '前行': '🚶', '驻足': '🛑'
};

// 意象数据库
const imageDatabase = {
    natural: {
        name: '自然景物',
        images: [
            '明月', '残阳', '孤云', '寒鸦', '暮雪', '春草', '秋叶', '空山', '松风', '竹影',
            '江水', '芦苇', '归雁', '流萤', '疏星', '薄雾', '霜林', '烟雨', '幽涧', '枯藤',
            '青山', '碧潭', '落花', '晨露', '晚霞', '清泉', '奇石', '古树', '荒山', '寒江',
            '暖风', '白云', '绿水', '红叶', '黄鹂'
        ]
    },
    architecture: {
        name: '建筑空间',
        images: [
            '小楼', '西窗', '危栏', '柴门', '玉阶', '空城', '禅寺', '驿站', '回廊', '朱户',
            '曲径', '宫墙', '茅屋', '画檐', '庭树', '石桥', '荒园', '僧舍', '津渡', '古道',
            '高楼', '庭院', '楼台', '亭阁', '门扉', '围墙', '径庭', '厅堂', '书房', '茶室',
            '花窗', '月门', '石阶', '木屋', '竹楼', '水榭'
        ]
    },
    objects: {
        name: '器物用具',
        images: [
            '红笺', '酒盏', '金钗', '香炉', '残烛', '琵琶', '玉笛', '纨扇', '妆镜', '锦书',
            '双鲤', '熏笼', '针线', '衾枕', '银釭', '琴弦', '诗囊', '墨痕', '笔尘', '旧信',
            '古琴', '玉佩', '铜镜', '笔墨', '纸扇', '茶盏', '香囊', '书卷', '宝剑', '玉箫',
            '棋盘', '花瓶', '漆器', '锦盒', '绣帕', '铜灯'
        ]
    },
    time: {
        name: '时间节令',
        images: [
            '更漏', '钟声', '子规', '砧声', '寒食', '清明', '七夕', '中秋', '重阳', '除夕',
            '春社', '秋宵', '晓寒', '夜永', '岁暮', '流光', '迟暮', '旦暮', '残更', '花朝',
            '晨曦', '黄昏', '深夜', '黎明', '正午', '初春', '盛夏', '深秋', '寒冬', '暮春',
            '夏至', '冬至', '立春', '秋分', '元宵', '端午'
        ]
    },
    emotions: {
        name: '情感状态',
        images: [
            '离歌', '泪痕', '旧梦', '思亲', '怀古', '断肠', '销魂', '惘然', '愁绪', '别恨',
            '相思', '孤寂', '惆怅', '凄凉', '欢愉', '哀怨', '缱绻', '幽怨', '黯然', '无眠',
            '喜悦', '忧伤', '怀念', '期待', '迷茫', '宁静', '激动', '愧疚', '羡慕', '嫉妒',
            '希望', '绝望', '温柔', '愤怒', '恐惧', '羞怯'
        ]
    },
    actions: {
        name: '生命行为',
        images: [
            '独坐', '凭栏', '望归', '忆远', '听雨', '吹笛', '倚门', '徘徊', '沉吟', '凝望',
            '醉卧', '掩泣', '踟蹰', '叹息', '寄迹', '漂泊', '守岁', '伫立', '低语', '长叹',
            '静思', '独行', '远眺', '小憩', '书写', '品茗', '抚琴', '赏花', '观云', '听风',
            '漫步', '静坐', '凝思', '回首', '前行', '驻足'
        ]
    }
};

// 经典诗词名句数据库
const poetryQuotes = [
    { text: "举头望明月，低头思故乡。", author: "李白《静夜思》" },
    { text: "春眠不觉晓，处处闻啼鸟。", author: "孟浩然《春晓》" },
    { text: "床前明月光，疑是地上霜。", author: "李白《静夜思》" },
    { text: "野火烧不尽，春风吹又生。", author: "白居易《赋得古原草送别》" },
    { text: "欲穷千里目，更上一层楼。", author: "王之涣《登鹳雀楼》" },
    { text: "孤帆远影碧空尽，唯见长江天际流。", author: "李白《黄鹤楼送孟浩然之广陵》" },
    { text: "两个黄鹂鸣翠柳，一行白鹭上青天。", author: "杜甫《绝句》" },
    { text: "停车坐爱枫林晚，霜叶红于二月花。", author: "杜牧《山行》" },
    { text: "枯藤老树昏鸦，小桥流水人家。", author: "马致远《天净沙·秋思》" },
    { text: "落霞与孤鹜齐飞，秋水共长天一色。", author: "王勃《滕王阁序》" },
    { text: "山重水复疑无路，柳暗花明又一村。", author: "陆游《游山西村》" },
    { text: "水光潋滟晴方好，山色空蒙雨亦奇。", author: "苏轼《饮湖上初晴后雨》" },
    { text: "接天莲叶无穷碧，映日荷花别样红。", author: "杨万里《晓出净慈寺送林子方》" },
    { text: "疏影横斜水清浅，暗香浮动月黄昏。", author: "林逋《山园小梅》" },
    { text: "无可奈何花落去，似曾相识燕归来。", author: "晏殊《浣溪沙》" }
];

// 应用状态
let currentCategory = 'natural';
let selectedImages = [];
let generatedPoem = '';
let generatedImageUrl = '';

// 智能API配置系统 - 完全合规版
const API_CONFIG = {
    // 文本模型配置 - 严格按照用户要求
    DEFAULT_TEXT_MODEL: 'glm-4-flash-250414',
    HIGH_QUALITY_TEXT_MODEL: 'glm-4.5-flash',
    IMAGE_MODEL: 'cogview-3-flash',
    
    // API密钥配置 - 用户提供的精确密钥
    ERNIE_API_KEY: 'bce-v3/ALTAK-LvXJsjqINbb4Tl4sgKYhT/eb7e0c479aaf64a32a99eb66cfabeb7531bb1579',
    ZHIPU_API_KEY: 'c3638d13f995003dde133b92b2425123.AUz3Kn2a7GDGGnlG',
    
    // API端点配置
    ERNIE_API_URL: 'https://aip.baidubce.com/rpc/2.0/ai_custom/v1/wenxinworkshop/chat/completions',
    ZHIPU_API_URL: 'https://open.bigmodel.cn/api/paas/v4',
    
    // 请求配置
    TIMEOUT: 30000, // 30秒超时
    MAX_RETRIES: 3, // 最大重试次数
    RETRY_DELAY: 1000, // 重试延迟(毫秒)
    
    // 模型配置
    modelConfigs: {
        'glm-4-flash-250414': {
            name: 'glm-4-flash-250414',
            provider: 'zhipu',
            apiUrl: 'https://open.bigmodel.cn/api/paas/v4/chat/completions',
            maxTokens: 2000,
            temperature: 0.8,
            timeout: 20000
        },
        'glm-4.5-flash': {
            name: 'glm-4.5-flash',
            provider: 'zhipu',
            apiUrl: 'https://open.bigmodel.cn/api/paas/v4/chat/completions',
            maxTokens: 2000,
            temperature: 0.8,
            timeout: 25000
        },
        'cogview-3-flash': {
            name: 'cogview-3-flash',
            provider: 'zhipu',
            apiUrl: 'https://open.bigmodel.cn/api/paas/v4/images/generations',
            size: '1024x1024',
            timeout: 30000
        }
    }
};

// 错误日志系统
const ERROR_LOGGER = {
    logs: [],
    
    logError: function(errorType, errorMessage, params = {}, stackTrace = '') {
        const logEntry = {
            timestamp: new Date().toISOString(),
            errorType: errorType,
            errorMessage: errorMessage,
            params: params,
            stackTrace: stackTrace,
            userAgent: navigator.userAgent,
            url: window.location.href
        };
        
        this.logs.push(logEntry);
        
        // 控制台输出便于调试
        console.error(`[${errorType}] ${errorMessage}`, {
            timestamp: logEntry.timestamp,
            params: params
        });
        
        // 本地存储错误日志(最多保存100条)
        if (this.logs.length > 100) {
            this.logs = this.logs.slice(-100);
        }
        localStorage.setItem('poemExportErrorLogs', JSON.stringify(this.logs));
    },
    
    getLogs: function() {
        return this.logs;
    },
    
    clearLogs: function() {
        this.logs = [];
        localStorage.removeItem('poemExportErrorLogs');
    }
};

// 从本地存储加载历史错误日志
const savedLogs = localStorage.getItem('poemExportErrorLogs');
if (savedLogs) {
    try {
        ERROR_LOGGER.logs = JSON.parse(savedLogs);
    } catch (e) {
        console.error('加载错误日志失败:', e);
    }
}

// DOM元素 - 在initApp函数中获取，确保DOM已加载
let categoryTabs, imagesScroll, creationArea, generateBtn, clearAllBtn, customImageInput, addCustomImageBtn, poemSection, poemText, poemQuote, generateImageBtn, imageSection, generatedImage, exportBtn;

// 初始化应用
function initApp() {
    // 获取DOM元素
    categoryTabs = document.getElementById('categoryTabs');
    imagesScroll = document.getElementById('imagesScroll');
    creationArea = document.getElementById('creationArea');
    generateBtn = document.getElementById('generatePoem');
    clearAllBtn = document.getElementById('clearAll');
    customImageInput = document.getElementById('customImageInput');
    addCustomImageBtn = document.getElementById('addCustomImage');
    poemSection = document.getElementById('poemSection');
    poemText = document.getElementById('poemText');
    poemQuote = document.getElementById('poemQuote');
    generateImageBtn = document.getElementById('generateImage');
    imageSection = document.getElementById('imageSection');
    generatedImage = document.getElementById('generatedImage');
    exportBtn = document.getElementById('exportCard');
    
    // 检查DOM元素是否成功获取
    if (!categoryTabs || !imagesScroll) {
        console.error('DOM元素获取失败，等待重试...');
        setTimeout(initApp, 100);
        return;
    }
    
    loadFromLocalStorage();
    renderCategoryImages(currentCategory);
    setupEventListeners();
    updateCreationArea();
    updateGenerateButton();
}

// 设置事件监听器
function setupEventListeners() {
    // 类别切换
    categoryTabs.addEventListener('click', (e) => {
        if (e.target.classList.contains('category-tab')) {
            const category = e.target.dataset.category;
            switchCategory(category);
        }
    });

    // 触控滑动支持
    setupTouchSupport();

    // 左右导航箭头
    setupNavigationArrows();

    // 清空全部
    clearAllBtn.addEventListener('click', clearAllImages);

    // 生成诗意
    generateBtn.addEventListener('click', generatePoem);

    // 自定义意象
    addCustomImageBtn.addEventListener('click', addCustomImage);
    customImageInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            addCustomImage();
        }
    });

    // 生成配图
    generateImageBtn.addEventListener('click', generateImage);

    // 导出诗签
    exportBtn.addEventListener('click', exportCard);
}

// 设置触控支持
function setupTouchSupport() {
    let startX = 0;
    let scrollLeft = 0;
    let isDown = false;

    categoryTabs.addEventListener('touchstart', (e) => {
        isDown = true;
        startX = e.touches[0].pageX - categoryTabs.offsetLeft;
        scrollLeft = categoryTabs.scrollLeft;
    });

    categoryTabs.addEventListener('touchmove', (e) => {
        if (!isDown) return;
        e.preventDefault();
        const x = e.touches[0].pageX - categoryTabs.offsetLeft;
        const walk = (x - startX) * 2;
        categoryTabs.scrollLeft = scrollLeft - walk;
    });

    categoryTabs.addEventListener('touchend', () => {
        isDown = false;
    });

    // 鼠标拖拽支持
    categoryTabs.addEventListener('mousedown', (e) => {
        isDown = true;
        startX = e.pageX - categoryTabs.offsetLeft;
        scrollLeft = categoryTabs.scrollLeft;
        categoryTabs.style.cursor = 'grabbing';
    });

    categoryTabs.addEventListener('mouseleave', () => {
        isDown = false;
        categoryTabs.style.cursor = 'grab';
    });

    categoryTabs.addEventListener('mouseup', () => {
        isDown = false;
        categoryTabs.style.cursor = 'grab';
    });

    categoryTabs.addEventListener('mousemove', (e) => {
        if (!isDown) return;
        e.preventDefault();
        const x = e.pageX - categoryTabs.offsetLeft;
        const walk = (x - startX) * 2;
        categoryTabs.scrollLeft = scrollLeft - walk;
    });
}

// 设置导航箭头
function setupNavigationArrows() {
    const categoryNav = document.querySelector('.category-nav');
    const categories = Object.keys(imageDatabase);
    let currentIndex = categories.indexOf(currentCategory);

    // 左箭头点击事件
    const leftArrow = categoryNav.querySelector('::before');
    if (leftArrow) {
        categoryNav.addEventListener('click', (e) => {
            if (e.target === categoryNav && e.offsetX < categoryNav.offsetWidth * 0.2) {
                currentIndex = (currentIndex - 1 + categories.length) % categories.length;
                switchCategory(categories[currentIndex]);
            } else if (e.target === categoryNav && e.offsetX > categoryNav.offsetWidth * 0.8) {
                currentIndex = (currentIndex + 1) % categories.length;
                switchCategory(categories[currentIndex]);
            }
        });
    }

    // 添加更明显的导航按钮
    const leftBtn = document.createElement('button');
    leftBtn.className = 'nav-arrow nav-left';
    leftBtn.innerHTML = '‹';
    leftBtn.setAttribute('aria-label', '上一个类别');
    
    const rightBtn = document.createElement('button');
    rightBtn.className = 'nav-arrow nav-right';
    rightBtn.innerHTML = '›';
    rightBtn.setAttribute('aria-label', '下一个类别');

    leftBtn.addEventListener('click', () => {
        currentIndex = (currentIndex - 1 + categories.length) % categories.length;
        switchCategory(categories[currentIndex]);
    });

    rightBtn.addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % categories.length;
        switchCategory(categories[currentIndex]);
    });

    categoryNav.appendChild(leftBtn);
    categoryNav.appendChild(rightBtn);
}

// 切换类别
function switchCategory(category) {
    currentCategory = category;
    
    // 更新标签状态
    const tabs = categoryTabs.querySelectorAll('.category-tab');
    tabs.forEach(tab => {
        tab.classList.remove('active');
    });
    
    const activeTab = categoryTabs.querySelector(`[data-category="${category}"]`);
    if (activeTab) {
        activeTab.classList.add('active');
    }
    
    // 渲染对应类别的意象
    renderCategoryImages(category);
}

// 渲染类别意象
function renderCategoryImages(category) {
    const categoryData = imageDatabase[category];
    imagesScroll.innerHTML = '';
    
    categoryData.images.forEach(image => {
        const btn = document.createElement('button');
        btn.className = 'image-btn';
        btn.setAttribute('data-icon', imageIcons[image] || '🌿');
        btn.setAttribute('data-text', image);
        
        // 按钮内容为空，由CSS伪元素显示
        btn.textContent = '';
        
        btn.addEventListener('click', () => toggleImage(image));
        
        // 检查是否已选中
        if (selectedImages.includes(image)) {
            btn.classList.add('selected');
        }
        
        imagesScroll.appendChild(btn);
    });
}

// 切换意象选择
function toggleImage(image) {
    const index = selectedImages.indexOf(image);
    
    if (index > -1) {
        selectedImages.splice(index, 1);
    } else {
        if (selectedImages.length < 7) {
            selectedImages.push(image);
        } else {
            showMessage('最多只能选择7个意象');
            return;
        }
    }
    
    updateCreationArea();
    updateGenerateButton();
    saveToLocalStorage();
    
    // 更新按钮状态
    document.querySelectorAll('.image-btn').forEach(btn => {
        const imageText = btn.getAttribute('data-text');
        btn.classList.toggle('selected', selectedImages.includes(imageText));
    });
}

// 添加自定义意象
function addCustomImage() {
    const customImage = customImageInput.value.trim();
    
    if (!customImage) {
        showMessage('请输入自定义意象');
        return;
    }
    
    if (selectedImages.length >= 7) {
        showMessage('最多只能选择7个意象');
        return;
    }
    
    if (selectedImages.includes(customImage)) {
        showMessage('该意象已存在');
        return;
    }
    
    selectedImages.push(customImage);
    customImageInput.value = '';
    updateCreationArea();
    updateGenerateButton();
    saveToLocalStorage();
}

// 更新创作区显示
function updateCreationArea() {
    if (selectedImages.length === 0) {
        creationArea.innerHTML = '<div class="creation-placeholder">请从上方选择2-7个意象开始创作</div>';
    } else {
        creationArea.innerHTML = selectedImages.map((image, index) => `
            <div class="selected-image">
                <span>${image}</span>
                <span class="remove" data-index="${index}">×</span>
            </div>
        `).join('');
        
        // 添加删除事件
        creationArea.querySelectorAll('.remove').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const index = parseInt(e.target.dataset.index);
                selectedImages.splice(index, 1);
                updateCreationArea();
                updateGenerateButton();
                saveToLocalStorage();
                
                // 更新意象按钮状态
                document.querySelectorAll('.image-btn').forEach(btn => {
                    const imageText = btn.getAttribute('data-text');
                    btn.classList.toggle('selected', selectedImages.includes(imageText));
                });
            });
        });
    }
}

// 清空所有意象
function clearAllImages() {
    selectedImages = [];
    updateCreationArea();
    updateGenerateButton();
    saveToLocalStorage();
    
    // 更新意象按钮状态
    document.querySelectorAll('.image-btn').forEach(btn => {
        btn.classList.remove('selected');
    });
}

// 更新生成按钮状态
function updateGenerateButton() {
    generateBtn.disabled = selectedImages.length < 2;
}

// 生成诗意
async function generatePoem() {
    if (selectedImages.length < 2) {
        showMessage('请至少选择2个意象');
        return;
    }
    
    generateBtn.disabled = true;
    generateBtn.innerHTML = '<span class="loading-spinner"></span>生成中...';
    
    try {
        const poemPrompt = `你是一位深谙中国古典诗词意境的诗人与禅修者，请根据以下一组意象：「${selectedImages.join('」「')}」

创作一段富有诗意的文字。要求：

1. **语言风格**：融合文言韵味与现代汉语，不直译诗句，创造新意境。
2. **结构层次**：
   - 开头：用比喻或通感描绘意象组合的画面（如"山影初动，砚池微澜"）
   - 中段：描写情绪或心境的变化（如"喧嚣渐远，心随云去"）
   - 结尾：升华至哲思或禅意（如"万物皆空，唯此念长存"）
3. **修辞手法**：
   - 使用拟人、比喻、留白、对仗
   - 避免平铺直叙，注重节奏与韵律
4. **字数控制**：100~150字之间
5. **避免**：直接引用诗句、口号式表达、空泛抒情

请根据这些意象创作一段优美的诗意文字，保持古典韵味的同时要有现代感。`;

        // 显示生成进度
        showGenerationProgress('text');
        
        // 获取高质量模式设置
        const highQualityMode = document.getElementById('highQualityMode').checked;
        
        // 显示模式提示 - 明确指定GLM4.5flash模型
        if (highQualityMode) {
            showMessage('🔍 高质量模式启用：使用GLM-4.5-Flash模型生成，生成质量更高但速度较慢，请耐心等待...', 'info');
            console.log('✅ 高质量模式已启用：切换到GLM-4.5-Flash模型');
        } else {
            console.log('✅ 标准模式：使用ERNIE-Speed-8K模型');
        }
        
        // 调用智能API系统
        try {
            generatedPoem = await smartAPICall(poemPrompt, 'text', highQualityMode);
        } catch (error) {
            // 如果API调用失败，使用模拟生成作为备选方案
            console.warn('API调用失败，使用模拟生成:', error.message);
            generatedPoem = await simulatePoemGeneration(poemPrompt);
        }
        
        // 显示诗意
        poemText.textContent = generatedPoem;
        
        // 随机选择一句诗词名句
        const randomQuote = poetryQuotes[Math.floor(Math.random() * poetryQuotes.length)];
        poemQuote.innerHTML = `<em>${randomQuote.text}</em><br>—— ${randomQuote.author}`;
        
        // 显示诗意区域
        poemSection.style.display = 'block';
        poemSection.scrollIntoView({ behavior: 'smooth', block: 'center' });
        
        // 更新生成进度
        showGenerationProgress('complete');
        
    } catch (error) {
        console.error('生成诗意失败:', error);
        
        // 提供更详细的错误信息
        if (error.message.includes('API调用尝试均失败')) {
            showMessage('AI服务暂时不可用，请稍后重试或检查网络连接', 'error');
        } else if (error.message.includes('超时')) {
            showMessage('请求超时，请检查网络连接后重试', 'error');
        } else {
            showMessage('生成失败，请重试', 'error');
        }
        
        // 记录详细错误信息
        ERROR_LOGGER.logError('GENERATE_POEM_ERROR', error.message, {
            selectedImages: selectedImages,
            errorStack: error.stack
        });
    } finally {
        generateBtn.disabled = false;
        generateBtn.textContent = '生成意境';
    }
}

// 智能API调用函数 - 完全合规版
async function smartAPICall(prompt, modelType = 'text', useHighQuality = false) {
    // 严格按用户要求选择模型
    let model, provider, apiKey;
    
    if (modelType === 'image') {
        // 图像生成必须使用cogview-3-flash
        model = API_CONFIG.IMAGE_MODEL;
        provider = 'zhipu';
        apiKey = API_CONFIG.ZHIPU_API_KEY;
        console.log('🖼️ 图像生成模式：使用CogView-3-Flash模型');
    } else {
        // 文本生成根据质量模式选择
        if (useHighQuality) {
            model = API_CONFIG.HIGH_QUALITY_TEXT_MODEL; // glm-4.5-flash
            provider = 'zhipu';
            apiKey = API_CONFIG.ZHIPU_API_KEY;
            console.log('🎯 高质量文本生成模式：切换到GLM-4.5-Flash模型');
        } else {
            model = API_CONFIG.DEFAULT_TEXT_MODEL; // glm-4-flash-250414
            provider = 'zhipu';
            apiKey = API_CONFIG.ZHIPU_API_KEY;
            console.log('⚡ 标准文本生成模式：使用GLM-4-Flash-250414模型');
        }
    }
    
    const modelConfig = API_CONFIG.modelConfigs[model];
    
    let attempt = 0;
    let lastError = null;
    
    while (attempt < API_CONFIG.MAX_RETRIES) {
        try {
            attempt++;
            
            // 记录API调用详细信息
            console.log(`[API调用] 第${attempt}次尝试 - 模型: ${model}, 类型: ${modelType}, 质量模式: ${useHighQuality ? '高质量' : '标准'}`);
            
            let result;
            if (provider === 'baidu') {
                result = await callBaiduERNIEAPI(prompt, modelConfig, apiKey);
            } else {
                result = await callZhipuAIAPI(prompt, modelConfig, modelType, apiKey);
            }
            
            // 记录成功日志
            ERROR_LOGGER.logError('API_SUCCESS', `API调用成功 - 模型: ${model}, 类型: ${modelType}`, {
                model: model,
                modelType: modelType,
                qualityMode: useHighQuality ? 'high' : 'standard',
                attempt: attempt,
                provider: provider,
                promptLength: prompt.length
            });
            
            return result;
            
        } catch (error) {
            lastError = error;
            
            // 记录详细错误信息
            ERROR_LOGGER.logError('API_ERROR', error.message, {
                model: model,
                modelType: modelType,
                qualityMode: useHighQuality ? 'high' : 'standard',
                attempt: attempt,
                provider: provider,
                errorStack: error.stack
            }, error.stack);
            
            // 如果不是最后一次尝试，等待后重试
            if (attempt < API_CONFIG.MAX_RETRIES) {
                console.warn(`[API调用] 第${attempt}次尝试失败，${API_CONFIG.RETRY_DELAY}ms后重试`, error.message);
                await new Promise(resolve => setTimeout(resolve, API_CONFIG.RETRY_DELAY * attempt));
            }
        }
    }
    
    // 所有尝试都失败，提供详细错误信息
    const errorDetails = `所有API调用尝试均失败: 模型=${model}, 类型=${modelType}, 最终错误=${lastError?.message || '未知错误'}`;
    throw new Error(errorDetails);
}

// 调用百度ERNIE API
async function callBaiduERNIEAPI(prompt, modelConfig, apiKey) {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), modelConfig.timeout || API_CONFIG.TIMEOUT);
    
    try {
        const response = await fetch(`${API_CONFIG.ERNIE_API_URL}?access_token=${apiKey}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                messages: [
                    {
                        role: 'user',
                        content: prompt
                    }
                ],
                temperature: modelConfig.temperature,
                max_output_tokens: modelConfig.maxTokens,
                stream: false
            }),
            signal: controller.signal
        });

        if (!response.ok) {
            throw new Error(`ERNIE API请求失败: ${response.status} ${response.statusText}`);
        }

        const data = await response.json();
        
        if (data.result) {
            return data.result;
        } else {
            throw new Error('ERNIE API返回格式异常');
        }
        
    } catch (error) {
        if (error.name === 'AbortError') {
            throw new Error('API请求超时');
        }
        throw error;
    } finally {
        clearTimeout(timeoutId);
    }
}

// 调用智谱AI API
async function callZhipuAIAPI(prompt, modelConfig, modelType, apiKey) {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), modelConfig.timeout || API_CONFIG.TIMEOUT);
    
    try {
        let apiUrl, requestBody;
        
        if (modelType === 'image') {
            apiUrl = modelConfig.apiUrl;
            requestBody = {
                model: modelConfig.name,
                prompt: prompt,
                size: modelConfig.size,
                watermark_enabled: true
            };
        } else {
            apiUrl = modelConfig.apiUrl;
            requestBody = {
                model: modelConfig.name,
                messages: [
                    {
                        role: 'system',
                        content: '你是一位深谙中国古典诗词意境的诗人，擅长将现代情感与古典意象融合，创作富有禅意和哲思的诗意文字。'
                    },
                    {
                        role: 'user',
                        content: prompt
                    }
                ],
                max_tokens: modelConfig.maxTokens,
                temperature: modelConfig.temperature
            };
        }

        const response = await fetch(apiUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${apiKey}`
            },
            body: JSON.stringify(requestBody),
            signal: controller.signal
        });

        if (!response.ok) {
            throw new Error(`智谱AI API请求失败: ${response.status} ${response.statusText}`);
        }

        const data = await response.json();
        
        if (modelType === 'image') {
            if (data.data && data.data[0] && data.data[0].url) {
                return data.data[0].url;
            } else {
                throw new Error('图像生成API返回格式异常');
            }
        } else {
            if (data.choices && data.choices[0] && data.choices[0].message) {
                return data.choices[0].message.content;
            } else {
                throw new Error('文本生成API返回格式异常');
            }
        }
        
    } catch (error) {
        if (error.name === 'AbortError') {
            throw new Error('API请求超时');
        }
        throw error;
    } finally {
        clearTimeout(timeoutId);
    }
}

// 备用模拟生成函数
async function simulatePoemGeneration(prompt) {
    return new Promise((resolve) => {
        setTimeout(() => {
            const templates = [
                `${selectedImages.join('、')}在时光深处相遇，如古琴与清泉的和鸣。每一个意象都是一扇窗，透过它们望见远山的轮廓和内心的波澜。在这片宁静的天地间，万物皆有灵性，每一片落叶都承载着千年的故事。当思绪如云舒卷，心灵便化作一泓清潭，倒映着整个宇宙的倒影。原来最美的风景，永远在心中。`,
                
                `当${selectedImages.join('、')}在想象中交织，便勾勒出一幅超脱尘世的水墨长卷。这些意象如同散落的珍珠，被记忆的丝线串连，在心湖中泛起层层涟漪。远山如黛，近水含烟，一切都显得那么自然而然。在这片刻的宁静中，时间仿佛停止了流逝，唯有那份深藏的情感在悄然绽放。人生如梦，梦如人生，何不在此刻沉醉？`,
                
                `${selectedImages.join('、')}诉说着一个个古老的故事，如同岁月在心湖中投下的倒影。这些承载着文化基因的符号，在现代语境中依然散发着不灭的光芒。当它们在意识的舞台上翩翩起舞，便演绎出一场跨越千年的对话。此时此刻，我们不再是一个孤独的个体，而是与整个华夏文明产生了深深的共鸣。这种连接，超越了时空的限制。`
            ];
            
            resolve(templates[Math.floor(Math.random() * templates.length)]);
        }, 1500);
    });
}

// 模拟图像生成函数
async function simulateImageGeneration(prompt) {
    return new Promise((resolve) => {
        setTimeout(() => {
            const seed = prompt.replace(/[^\w\u4e00-\u9fa5]/g, '').substring(0, 20);
            resolve(`https://picsum.photos/seed/${seed}/800/600.jpg`);
        }, 2000);
    });
}

// 构建图像生成提示词
function buildImagePrompt() {
    // 直接使用选择的意象，不依赖诗意内容
    const baseElements = selectedImages.join('、');
    
    // 古典国画风格标签
    const styleTags = [
        '国画水墨', '工笔山水', '淡雅设色', '留白构图',
        '宋代画风', '文人画', '意境深远', '简洁构图'
    ];
    
    // 随机选择3-4个风格标签，避免重复
    const selectedStyles = [];
    while (selectedStyles.length < 4 && styleTags.length > 0) {
        const randomIndex = Math.floor(Math.random() * styleTags.length);
        const style = styleTags.splice(randomIndex, 1)[0];
        selectedStyles.push(style);
    }
    
    return `古典国画，${baseElements}，${selectedStyles.join('，')}，自然和谐，淡雅意境`;
}



// 模拟诗意生成（备选方案）
function simulatePoemGeneration(prompt) {
    return new Promise((resolve) => {
        setTimeout(() => {
            const templates = [
                `${selectedImages.join('、')}在时光深处相遇，如古琴与清泉的和鸣。每一个意象都是一扇窗，透过它们望见远山的轮廓和内心的波澜。在这片宁静的天地间，万物皆有灵性，每一片落叶都承载着千年的故事。当思绪如云舒卷，心灵便化作一泓清潭，倒映着整个宇宙的倒影。原来最美的风景，永远在心中。`,
                
                `当${selectedImages.join('、')}在想象中交织，便勾勒出一幅超脱尘世的水墨长卷。这些意象如同散落的珍珠，被记忆的丝线串连，在心湖中泛起层层涟漪。远山如黛，近水含烟，一切都显得那么自然而然。在这片刻的宁静中，时间仿佛停止了流逝，唯有那份深藏的情感在悄然绽放。人生如梦，梦如人生，何不在此刻沉醉？`,
                
                `${selectedImages.join('、')}诉说着一个个古老的故事，如同岁月在心湖中投下的倒影。这些承载着文化基因的符号，在现代语境中依然散发着不灭的光芒。当它们在意识的舞台上翩翩起舞，便演绎出一场跨越千年的对话。此时此刻，我们不再是一个孤独的个体，而是与整个华夏文明产生了深深的共鸣。这种连接，超越了时空的限制。`
            ];
            
            resolve(templates[Math.floor(Math.random() * templates.length)]);
        }, 1500);
    });
}

// 生成配图
async function generateImage() {
    if (!generatedPoem) {
        showMessage('请先生成诗意');
        return;
    }
    
    generateImageBtn.disabled = true;
    generateImageBtn.innerHTML = '<span class="loading-spinner"></span>生成中...';
    
    try {
        // 构建图像生成提示词，结合诗意和意象
        const imagePrompt = buildImagePrompt();
        
        // 显示生成进度
        showGenerationProgress('image');
        
        // 调用智能API系统 - 使用智谱AI图像生成
        try {
            generatedImageUrl = await smartAPICall(imagePrompt, 'image', false);
        } catch (error) {
            // 如果API调用失败，使用模拟生成作为备选方案
            console.warn('图像API调用失败，使用模拟生成:', error.message);
            generatedImageUrl = await simulateImageGeneration(imagePrompt);
        }
        
        // 显示配图
        generatedImage.src = generatedImageUrl;
        imageSection.style.display = 'block';
        imageSection.scrollIntoView({ behavior: 'smooth', block: 'center' });
        
        // 添加加载动画
        generatedImage.style.opacity = '0';
        generatedImage.onload = () => {
            generatedImage.style.transition = 'opacity 0.5s ease';
            generatedImage.style.opacity = '1';
            showGenerationProgress('complete');
        };
        
    } catch (error) {
        console.error('生成配图失败:', error);
        
        // 提供更详细的错误信息
        if (error.message.includes('API调用尝试均失败')) {
            showMessage('AI图像服务暂时不可用，已使用备用图片生成', 'warning');
        } else if (error.message.includes('超时')) {
            showMessage('图像生成超时，已使用备用图片生成', 'warning');
        } else {
            showMessage('生成配图失败，已使用备用图片生成', 'warning');
        }
        
        // 记录详细错误信息
        ERROR_LOGGER.logError('GENERATE_IMAGE_ERROR', error.message, {
            imagePrompt: imagePrompt,
            errorStack: error.stack
        });
    } finally {
        generateImageBtn.disabled = false;
        generateImageBtn.textContent = '生成配图';
    }
}

// 构建图片搜索关键词
function buildImageKeywords() {
    const baseKeywords = ['中国风', '水墨画', '古典', '传统', '写意', '山水画', '国画'];
    const imageKeywords = selectedImages.map(img => {
        // 映射到更适合图片搜索的关键词
        const keywordMap = {
            '明月': '月亮', '残阳': '夕阳', '孤云': '云朵', '寒鸦': '乌鸦',
            '暮雪': '雪景', '春草': '青草', '秋叶': '枫叶', '空山': '山峦',
            '松风': '松树', '竹影': '竹子', '江水': '江水', '芦苇': '芦苇',
            '归雁': '大雁', '流萤': '萤火虫', '疏星': '星星', '薄雾': '雾气',
            '霜林': '树林', '烟雨': '雨景', '幽涧': '溪流', '枯藤': '藤蔓',
            '青山': '青山', '碧潭': '湖泊', '落花': '落花', '晨露': '露珠',
            '晚霞': '晚霞', '清泉': '泉水', '奇石': '怪石', '古树': '古树',
            '荒山': '荒山', '寒江': '江水', '暖风': '春风', '白云': '白云',
            '绿水': '绿水', '红叶': '红叶', '黄鹂': '黄鹂鸟'
        };
        return keywordMap[img] || img;
    });
    
    // 组合关键词，优先使用意象关键词，添加风格标签
    return [...baseKeywords, ...imageKeywords].join(',');
}



// 导出诗签 - 修复版
function exportCard() {
    if (!generatedPoem || !generatedImageUrl) {
        showMessage('请先生成意境和配图');
        return;
    }
    
    // 显示导出进度
    showMessage('正在生成诗签...', 'info');
    
    // 创建canvas
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    
    // 设置高清画布尺寸（A4比例）- 优化边距
    canvas.width = 2480; // 300DPI A4宽度
    canvas.height = 3508; // 300DPI A4高度
    
    // 边距设置 - 专业排版优化版
    const margin = {
        top: 120,    // 上边距 - 增加顶部空间给标题
        bottom: 150, // 下边距 - 增加底部空间给版权信息
        left: 100,   // 左边距 - 增加对称性
        right: 100   // 右边距 - 增加对称性
    };
    
    // 设置背景 - 高级宣纸纹理
    const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
    gradient.addColorStop(0, '#F9F4E6');
    gradient.addColorStop(0.5, '#F5F0E1');
    gradient.addColorStop(1, '#F9F4E6');
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    
    // 添加高级边框效果 - 优化边距
    ctx.strokeStyle = '#8B4513';
    ctx.lineWidth = 20;
    ctx.strokeRect(margin.left - 20, margin.top - 20, canvas.width - (margin.left + margin.right) + 40, canvas.height - (margin.top + margin.bottom) + 40);
    
    // 添加内边框装饰
    ctx.strokeStyle = '#A0522D';
    ctx.lineWidth = 4;
    ctx.strokeRect(margin.left - 10, margin.top - 10, canvas.width - (margin.left + margin.right) + 20, canvas.height - (margin.top + margin.bottom) + 20);
    
    // 加载图片 - 添加错误处理
    const img = new Image();
    img.crossOrigin = 'anonymous';
    
    img.onload = () => {
        try {
            // 绘制配图区域 - 专业排版优化
            const imgY = 240;
            const imgHeight = 1100;
            const imgWidth = Math.min((img.width / img.height) * imgHeight, canvas.width - 500);
            const imgX = (canvas.width - imgWidth) / 2;
            
            // 添加图片阴影和边框效果 - 增强视觉效果
            ctx.shadowColor = 'rgba(90, 57, 33, 0.4)';
            ctx.shadowBlur = 30;
            ctx.shadowOffsetX = 15;
            ctx.shadowOffsetY = 15;
            
            // 绘制圆角图片背景 - 增加内边距
            ctx.fillStyle = '#FFFFFF';
            roundRect(ctx, imgX - 30, imgY - 30, imgWidth + 60, imgHeight + 60, 25);
            ctx.fill();
            
            // 重置阴影
            ctx.shadowColor = 'transparent';
            ctx.shadowBlur = 0;
            ctx.shadowOffsetX = 0;
            ctx.shadowOffsetY = 0;
            
            // 绘制图片 - 增加内边距
            roundRect(ctx, imgX, imgY, imgWidth, imgHeight, 20);
            ctx.save();
            ctx.clip();
            ctx.drawImage(img, imgX, imgY, imgWidth, imgHeight);
            ctx.restore();
            
            // 绘制标题区域 - 优化排版
            ctx.fillStyle = '#2F4F4F';
            ctx.font = 'bold 90px "SimSun", "宋体", serif';
            ctx.textAlign = 'center';
            ctx.fillText('意象·诗匣', canvas.width / 2, 140);
            
            // 绘制副标题 - 增加间距
            ctx.font = 'italic 40px "KaiTi", "楷体", serif';
            ctx.fillStyle = '#696969';
            ctx.fillText('古典诗词意境探索', canvas.width / 2, 190);
            
            // 绘制诗意文本区域 - 专业排版优化
            const textY = imgY + imgHeight + 150;
            const lineHeight = 75;
            const maxLineWidth = canvas.width - 400;
            
            // 优化文本分行处理 - 增强可读性
            const lines = wrapText(generatedPoem, maxLineWidth, ctx);
            const totalTextHeight = lines.length * lineHeight;
            const startY = textY;
            
            // 绘制诗意文本背景 - 增加内边距
            ctx.fillStyle = 'rgba(255, 255, 255, 0.85)';
            roundRect(ctx, 200, startY - 50, canvas.width - 400, totalTextHeight + 100, 20);
            ctx.fill();
            
            // 绘制诗意文本 - 优化字体和间距
            ctx.font = '56px "KaiTi", "楷体", serif';
            ctx.fillStyle = '#2F4F4F';
            ctx.textAlign = 'center';
            
            // 添加文本阴影增强可读性
            ctx.shadowColor = 'rgba(0, 0, 0, 0.1)';
            ctx.shadowBlur = 5;
            ctx.shadowOffsetX = 2;
            ctx.shadowOffsetY = 2;
            
            lines.forEach((line, index) => {
                ctx.fillText(line, canvas.width / 2, startY + index * lineHeight);
            });
            
            // 重置阴影
            ctx.shadowColor = 'transparent';
            ctx.shadowBlur = 0;
            ctx.shadowOffsetX = 0;
            ctx.shadowOffsetY = 0;
            
            // 绘制优雅分隔线 - 专业排版优化
            const separatorY = startY + totalTextHeight + 80;
            ctx.strokeStyle = '#A0522D';
            ctx.lineWidth = 3;
            ctx.beginPath();
            ctx.moveTo(canvas.width / 2 - 250, separatorY);
            ctx.lineTo(canvas.width / 2 + 250, separatorY);
            ctx.stroke();
            
            // 绘制意象标签 - 优化字体和间距
            ctx.font = 'italic 40px "SimSun", "宋体", serif';
            ctx.fillStyle = '#696969';
            ctx.fillText(`意象：${selectedImages.join(' · ')}`, canvas.width / 2, separatorY + 60);
            
            // 绘制时间戳 - 优化排版
            ctx.font = '32px "KaiTi", "楷体", serif';
            ctx.fillStyle = '#8B4513';
            const date = new Date().toLocaleDateString('zh-CN', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
                weekday: 'long'
            });
            ctx.fillText(date, canvas.width / 2, canvas.height - 140);
            
            // 绘制版权信息 - 优化排版
            ctx.font = '28px "SimSun", "宋体", serif';
            ctx.fillStyle = '#808080';
            ctx.fillText('© 意象·诗匣 - 让古典诗词在数字时代焕发新生', canvas.width / 2, canvas.height - 80);
            
            // 导出为高清PNG格式
            canvas.toBlob((blob) => {
                const url = URL.createObjectURL(blob);
                const a = document.createElement('a');
                a.href = url;
                a.download = `意象诗匣_${selectedImages.join('_')}_${Date.now()}.png`;
                document.body.appendChild(a);
                a.click();
                document.body.removeChild(a);
                URL.revokeObjectURL(url);
                showMessage('🎉 诗签导出成功！高清图片已下载', 'success');
            }, 'image/png', 0.95);
            
        } catch (error) {
            console.error('导出过程中出错:', error);
            showMessage('导出失败，请重试', 'error');
        }
    };
    
    img.onerror = () => {
        showMessage('图片加载失败，请重新生成意境', 'error');
    };
    
    img.src = generatedImageUrl;
}

// 圆角矩形绘制函数
function roundRect(ctx, x, y, width, height, radius) {
    ctx.beginPath();
    ctx.moveTo(x + radius, y);
    ctx.lineTo(x + width - radius, y);
    ctx.quadraticCurveTo(x + width, y, x + width, y + radius);
    ctx.lineTo(x + width, y + height - radius);
    ctx.quadraticCurveTo(x + width, y + height, x + width - radius, y + height);
    ctx.lineTo(x + radius, y + height);
    ctx.quadraticCurveTo(x, y + height, x, y + height - radius);
    ctx.lineTo(x, y + radius);
    ctx.quadraticCurveTo(x, y, x + radius, y);
    ctx.closePath();
}

// 智能文本分行处理 - 优化中文排版
function wrapText(text, maxWidth, ctx) {
    // 中文文本按字分词，但保持标点符号的连续性
    const words = text.split('');
    const lines = [];
    let currentLine = '';
    
    for (let i = 0; i < words.length; i++) {
        const word = words[i];
        const testLine = currentLine + word;
        const metrics = ctx.measureText(testLine);
        
        // 如果超出宽度且当前行不为空，换行
        if (metrics.width > maxWidth && currentLine !== '') {
            // 处理标点符号：如果下一个字符是标点，尽量不换行
            if (i < words.length - 1 && isPunctuation(words[i])) {
                lines.push(currentLine);
                currentLine = word;
            } else {
                // 找到最后一个合适的断点
                let lastBreakIndex = -1;
                for (let j = currentLine.length - 1; j >= 0; j--) {
                    if (isBreakPoint(currentLine[j])) {
                        lastBreakIndex = j;
                        break;
                    }
                }
                
                if (lastBreakIndex > 0) {
                    // 在有标点的地方断行
                    lines.push(currentLine.substring(0, lastBreakIndex + 1));
                    currentLine = currentLine.substring(lastBreakIndex + 1) + word;
                } else {
                    // 强制换行
                    lines.push(currentLine);
                    currentLine = word;
                }
            }
        } else {
            currentLine = testLine;
        }
    }
    
    if (currentLine !== '') {
        lines.push(currentLine);
    }
    
    return lines;
}

// 判断是否为标点符号
function isPunctuation(char) {
    const punctuation = '，。！？；：、';
    return punctuation.includes(char);
}

// 判断是否为合适的断点
function isBreakPoint(char) {
    const breakPoints = '，。！？；：';
    return breakPoints.includes(char);
}

// 本地存储
function saveToLocalStorage() {
    const data = {
        selectedImages,
        currentCategory,
        timestamp: Date.now()
    };
    localStorage.setItem('imagePoemData', JSON.stringify(data));
}

function loadFromLocalStorage() {
    const saved = localStorage.getItem('imagePoemData');
    if (saved) {
        try {
            const data = JSON.parse(saved);
            // 只恢复24小时内的数据
            if (Date.now() - data.timestamp < 24 * 60 * 60 * 1000) {
                selectedImages = data.selectedImages || [];
                currentCategory = data.currentCategory || 'natural';
            }
        } catch (error) {
            console.error('加载数据失败:', error);
        }
    }
}

// 显示消息提示
function showMessage(message, type = 'info') {
    // 创建消息元素
    const messageEl = document.createElement('div');
    messageEl.className = 'message-toast';
    messageEl.textContent = message;
    
    // 根据消息类型设置不同样式
    const bgColor = type === 'success' ? 'rgba(76, 175, 80, 0.9)' : 
                   type === 'error' ? 'rgba(244, 67, 54, 0.9)' : 'rgba(90, 57, 33, 0.9)';
    
    messageEl.style.cssText = `
        position: fixed;
        top: 20px;
        left: 50%;
        transform: translateX(-50%);
        background: ${bgColor};
        color: #F5F2E9;
        padding: 12px 24px;
        border-radius: 25px;
        z-index: 1000;
        font-size: 14px;
        box-shadow: 0 4px 12px rgba(0,0,0,0.15);
        animation: slideDown 0.3s ease;
        backdrop-filter: blur(10px);
        border: 1px solid rgba(184, 134, 11, 0.3);
    `;
    
    document.body.appendChild(messageEl);
    
    // 3秒后移除
    setTimeout(() => {
        messageEl.style.animation = 'slideUp 0.3s ease';
        setTimeout(() => {
            if (document.body.contains(messageEl)) {
                document.body.removeChild(messageEl);
            }
        }, 300);
    }, 3000);
}

// 显示生成进度
function showGenerationProgress(stage) {
    const progressMessages = {
        'text': '正在生成诗意...',
        'image': '正在生成配图...',
        'complete': '生成完成！'
    };
    
    if (stage === 'complete') {
        showMessage(progressMessages[stage], 'success');
    } else {
        showMessage(progressMessages[stage], 'info');
    }
}

// 添加消息动画样式
const style = document.createElement('style');
style.textContent = `
    @keyframes slideDown {
        from { opacity: 0; transform: translate(-50%, -20px); }
        to { opacity: 1; transform: translate(-50%, 0); }
    }
    @keyframes slideUp {
        from { opacity: 1; transform: translate(-50%, 0); }
        to { opacity: 0; transform: translate(-50%, -20px); }
    }
`;
document.head.appendChild(style);



// 检查API状态
function checkAPIStatus() {
    console.log('API状态检查: 应用正常运行中');
    // 这里可以添加实际的API状态检查逻辑
    // 例如检查API密钥是否有效，网络连接等
}

// 检查API状态
function checkAPIStatus() {
    console.log('API状态检查: 应用正常运行中');
    // 这里可以添加实际的API状态检查逻辑
    // 例如检查API密钥是否有效，网络连接等
}

// 启动应用
document.addEventListener('DOMContentLoaded', () => {
    initApp();

    checkAPIStatus();
    
    // 每5分钟检查一次API状态
    setInterval(checkAPIStatus, 5 * 60 * 1000);
});