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

// 智谱AI API配置
const ZHIPU_API_KEY = 'c3638d13f995003dde133b92b2425123.AUz3Kn2a7GDGGnlG';
const TEXT_MODEL = 'glm-4.5-flash';
const IMAGE_MODEL = 'cogview-3-flash';

// API基础URL
const API_BASE_URL = 'https://open.bigmodel.cn/api';

// 模型配置
const modelConfigs = {
    'glm-4.5-flash': {
        name: 'GLM-4.5-Flash',
        apiUrl: `${API_BASE_URL}/paas/v4/chat/completions`,
        maxTokens: 2000,
        temperature: 0.8
    },
    'cogview-3-flash': {
        name: 'CogView-3-Flash',
        apiUrl: `${API_BASE_URL}/paas/v4/images/generations`,
        size: '1024x1024'
    }
};

// DOM元素
const categoryTabs = document.getElementById('categoryTabs');
const imagesScroll = document.getElementById('imagesScroll');
const creationArea = document.getElementById('creationArea');
const generateBtn = document.getElementById('generatePoem');
const clearAllBtn = document.getElementById('clearAll');
const customImageInput = document.getElementById('customImageInput');
const addCustomImageBtn = document.getElementById('addCustomImage');
const poemSection = document.getElementById('poemSection');
const poemText = document.getElementById('poemText');
const poemQuote = document.getElementById('poemQuote');
const generateImageBtn = document.getElementById('generateImage');
const imageSection = document.getElementById('imageSection');
const generatedImage = document.getElementById('generatedImage');
const exportBtn = document.getElementById('exportCard');

// 初始化应用
function initApp() {
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
    document.querySelectorAll('.category-tab').forEach(tab => {
        tab.classList.remove('active');
    });
    document.querySelector(`[data-category="${category}"]`).classList.add('active');
    
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
        btn.classList.toggle('selected', selectedImages.includes(btn.textContent));
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
                    btn.classList.toggle('selected', selectedImages.includes(btn.textContent));
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
        
        // 调用智谱AI文本生成API
        generatedPoem = await callGLMTextGeneration(poemPrompt);
        
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
        showMessage('生成诗意失败，请重试');
    } finally {
        generateBtn.disabled = false;
        generateBtn.textContent = '生成意境';
    }
}

// 调用智谱AI文本生成API
async function callGLMTextGeneration(prompt) {
    try {
        const response = await fetch(`${API_BASE_URL}/paas/v4/chat/completions`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${ZHIPU_API_KEY}`
            },
            body: JSON.stringify({
                model: TEXT_MODEL,
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
                max_tokens: modelConfigs[TEXT_MODEL].maxTokens,
                temperature: modelConfigs[TEXT_MODEL].temperature,
                thinking: {
                    type: 'enabled'
                }
            })
        });

        if (!response.ok) {
            throw new Error(`API请求失败: ${response.status}`);
        }

        const data = await response.json();
        
        if (data.choices && data.choices[0] && data.choices[0].message) {
            return data.choices[0].message.content;
        } else {
            throw new Error('API返回格式异常');
        }
        
    } catch (error) {
        console.error('文本生成API调用失败:', error);
        // 如果API调用失败，使用模拟生成作为备选方案
        return await simulatePoemGeneration(prompt);
    }
}

// 调用智谱AI图像生成API
async function callGLMImageGeneration(prompt) {
    try {
        const response = await fetch(`${API_BASE_URL}/paas/v4/images/generations`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${ZHIPU_API_KEY}`
            },
            body: JSON.stringify({
                model: IMAGE_MODEL,
                prompt: prompt,
                size: modelConfigs[IMAGE_MODEL].size,
                watermark_enabled: true
            })
        });

        if (!response.ok) {
            throw new Error(`图像生成API请求失败: ${response.status}`);
        }

        const data = await response.json();
        
        if (data.data && data.data[0] && data.data[0].url) {
            return data.data[0].url;
        } else {
            throw new Error('图像生成API返回格式异常');
        }
        
    } catch (error) {
        console.error('图像生成API调用失败:', error);
        // 如果API调用失败，使用模拟生成作为备选方案
        return await simulateImageGeneration(prompt);
    }
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
        
        // 调用智谱AI图像生成API
        generatedImageUrl = await callGLMImageGeneration(imagePrompt);
        
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
        showMessage('生成配图失败，请重试');
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

// 模拟配图生成（实际应用中应调用真实API）
function simulateImageGeneration(keywords) {
    return new Promise((resolve) => {
        setTimeout(() => {
            // 使用关键词创建更合适的占位图片
            const width = 800;
            const height = 600;
            const seed = keywords.replace(/[^\w\u4e00-\u9fa5]/g, '').substring(0, 20);
            resolve(`https://picsum.photos/seed/${seed}/${width}/${height}.jpg`);
        }, 2000);
    });
}

// 导出诗签
function exportCard() {
    if (!generatedPoem || !generatedImageUrl) {
        showMessage('请先生成意境和配图');
        return;
    }
    
    // 创建canvas
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    
    canvas.width = 1200;
    canvas.height = 1600;
    
    // 设置背景 - 素雅宣纸色
    ctx.fillStyle = '#F9F4E6';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    
    // 添加古典边框 - 淡雅褐色
    ctx.strokeStyle = '#8B4513';
    ctx.lineWidth = 8;
    ctx.strokeRect(40, 40, canvas.width - 80, canvas.height - 80);
    
    // 添加内边框 - 细线装饰
    ctx.strokeStyle = '#A0522D';
    ctx.lineWidth = 2;
    ctx.strokeRect(60, 60, canvas.width - 120, canvas.height - 120);
    
    // 加载图片
    const img = new Image();
    img.crossOrigin = 'anonymous';
    img.onload = () => {
        // 绘制配图 - 居中显示，适当留白
        const imgY = 120;
        const imgHeight = 500;
        const imgWidth = (img.width / img.height) * imgHeight;
        const imgX = (canvas.width - imgWidth) / 2;
        
        // 添加图片阴影效果
        ctx.shadowColor = 'rgba(0, 0, 0, 0.2)';
        ctx.shadowBlur = 10;
        ctx.shadowOffsetX = 5;
        ctx.shadowOffsetY = 5;
        
        ctx.drawImage(img, imgX, imgY, imgWidth, imgHeight);
        
        // 重置阴影
        ctx.shadowColor = 'transparent';
        ctx.shadowBlur = 0;
        ctx.shadowOffsetX = 0;
        ctx.shadowOffsetY = 0;
        
        // 绘制标题 - 使用宋体，典雅庄重
        ctx.fillStyle = '#2F4F4F';
        ctx.font = 'bold 48px "SimSun", "宋体", serif';
        ctx.textAlign = 'center';
        ctx.fillText('意象·诗匣', canvas.width / 2, 80);
        
        // 绘制副标题 - 使用楷体，优雅流畅
        ctx.font = 'italic 24px "KaiTi", "楷体", serif';
        ctx.fillStyle = '#696969';
        ctx.fillText('古典诗词意境探索', canvas.width / 2, 110);
        
        // 绘制诗意文本 - 使用楷体，优雅排版
        ctx.font = '28px "KaiTi", "楷体", serif';
        ctx.fillStyle = '#2F4F4F';
        
        const textY = imgY + imgHeight + 80;
        const lineHeight = 45;
        const maxLineWidth = canvas.width - 160;
        
        // 文本分行处理
        const lines = wrapText(generatedPoem, maxLineWidth, ctx);
        
        // 计算文本区域高度，确保居中显示
        const totalTextHeight = lines.length * lineHeight;
        const startY = textY;
        
        // 绘制诗意文本 - 优雅居中排版
        lines.forEach((line, index) => {
            ctx.fillText(line, canvas.width / 2, startY + index * lineHeight);
        });
        
        // 绘制分隔线 - 典雅细线
        const separatorY = startY + totalTextHeight + 30;
        ctx.strokeStyle = '#A0522D';
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.moveTo(canvas.width / 2 - 100, separatorY);
        ctx.lineTo(canvas.width / 2 + 100, separatorY);
        ctx.stroke();
        
        // 绘制意象标签 - 使用宋体，典雅庄重
        ctx.font = 'italic 20px "SimSun", "宋体", serif';
        ctx.fillStyle = '#696969';
        ctx.fillText(`意象：${selectedImages.join(' · ')}`, canvas.width / 2, separatorY + 30);
        
        // 绘制时间戳 - 使用楷体，优雅流畅
        ctx.font = '16px "KaiTi", "楷体", serif';
        ctx.fillStyle = '#8B4513';
        const date = new Date().toLocaleDateString('zh-CN');
        ctx.fillText(date, canvas.width / 2, canvas.height - 80);
        
        // 绘制版权信息 - 使用宋体，简洁典雅
        ctx.font = '14px "SimSun", "宋体", serif';
        ctx.fillStyle = '#808080';
        ctx.fillText('© 意象·诗匣 - 让古典诗词在数字时代焕发新生', canvas.width / 2, canvas.height - 40);
        
        // 下载图片 - 高清PNG格式
        canvas.toBlob((blob) => {
            const url = URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = url;
            a.download = `意象诗匣_${selectedImages.join('_')}_${Date.now()}.png`;
            a.click();
            URL.revokeObjectURL(url);
            showMessage('诗签导出成功！');
        }, 'image/png', 1.0);
    };
    
    img.src = generatedImageUrl;
}

// 文本分行处理
function wrapText(text, maxWidth, ctx) {
    const words = text.split('');
    const lines = [];
    let currentLine = '';
    
    for (let word of words) {
        const testLine = currentLine + word;
        const metrics = ctx.measureText(testLine);
        
        if (metrics.width > maxWidth && currentLine !== '') {
            lines.push(currentLine);
            currentLine = word;
        } else {
            currentLine = testLine;
        }
    }
    
    if (currentLine !== '') {
        lines.push(currentLine);
    }
    
    return lines;
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



// 启动应用
document.addEventListener('DOMContentLoaded', () => {
    initApp();

    checkAPIStatus();
    
    // 每5分钟检查一次API状态
    setInterval(checkAPIStatus, 5 * 60 * 1000);
});