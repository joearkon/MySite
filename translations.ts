import { Language } from "./types";

export const translations: Record<Language, Record<string, string>> = {
  en: {
    // Nav
    "nav.home": "Home",
    "nav.showcase": "Passion & Value",
    "nav.life": "Life Moments",
    "nav.resume": "Resume",
    
    // Hero
    "hero.name": "Joe Chen (Chen Zizhuoye)",
    "hero.title": "From Tech Implementation to",
    "hero.titleHighlight": "Brand Growth",
    "hero.subtitle_extra": "— Cross-disciplinary Practice of a Business Key Account Manager",
    "hero.desc": "Joe Chen (JOE CHEN), a Business Key Account Manager transformed from a technical background, specializing in the implementation and operation of chain catering brands. Expert in bridging the gap between technical implementation and customer growth.",
    "hero.desc_extended": "I've been deep in the project sites of chain brands and guarded the wing on the 5/8-a-side football field; I am a 'Commander' of my Gundam collection and a creator of life-vlog short videos; I also use Gemini AI to build practical tools—turning both technology and passion into tangible daily value.",
    
    "hero.btn.resume": "View Career Journey",
    "hero.btn.tools": "My Work",
    "hero.btn.contact": "Contact Me",

    // Hero Tags
    "tag.identity.label": "Identity",
    "tag.identity.val": "Tech-to-Business KAM | Chain Catering Ops Expert",
    "tag.ability.label": "Capabilities",
    "tag.ability.val": "Tech × Growth Linkage | Full Project Lifecycle Management",
    "tag.passion.label": "Passion",
    "tag.passion.val": "Gundam Collector | Football Winger | Short Video Creator",
    "tag.ai.label": "AI Practice",
    "tag.ai.val": "Gemini Tool Dev | Efficiency Optimizer",

    // Showcase (Merged Projects & Interests)
    "showcase.title": "Value & Passion",
    "showcase.subtitle": "Where digital innovation meets real-world dedication.",
    
    "showcase.tool.smartprice": "Smart Price AI",
    "showcase.tool.smartprice.desc": "Intelligent pricing engine. Data-driven value optimization.",
    
    "showcase.tool.omnisales": "OmniSales",
    "showcase.tool.omnisales.desc": "Comprehensive sales dashboard for seamless ops.",
    
    "showcase.tool.resume": "My Resume",
    "showcase.tool.resume.desc": "The professional journey.",

    "showcase.hobby.gundam": "Mecha Craft",
    "showcase.hobby.gundam.desc": "Precision modeling. Patience & detail.",
    
    "showcase.hobby.football": "Team Spirit",
    "showcase.hobby.football.desc": "Tactics and brotherhood on the field.",

    // Lifestyle
    "lifestyle.title": "Life Fragments",
    "lifestyle.subtitle": "Exploring the world, recording moments, one frame at a time.",
    "lifestyle.card.nio.title": "NIO ET5T Journey",
    "lifestyle.card.nio.loc": "Road Trip Story",
    "lifestyle.card.camping.title": "Weekend Camping",
    "lifestyle.card.camping.loc": "Anji, Zhejiang",
    
    "lifestyle.card.jp1.title": "Kyoto Vibes",
    "lifestyle.card.jp1.loc": "Kyoto, Japan",
    "lifestyle.card.jp2.title": "Osaka Streets",
    "lifestyle.card.jp2.loc": "Osaka, Japan",
    "lifestyle.card.jp3.title": "Scenic Views",
    "lifestyle.card.jp3.loc": "Japan Trip",

    // Footer
    "footer.title": "Let's build value together.",
    "footer.desc": "Whether discussing the business logic of architecture and strategy, or sharing insights on the precision of Gundam modeling and football tactics, I am always open to connecting.",
    "footer.copyright": "Joe Chen. Powered by Gemini.",
    "footer.icp": "ICP No. XXXXXXXX-1",
    "footer.wechat": "WeChat",
    "footer.douyin": "Douyin",
    "footer.location": "Shanghai",
    
    "footer.easterEgg.pets": "Living with a 'Cross-species Family': An 8-year-old 'Veteran' British Shorthair + A Clingy Lorikeet + A Golden Hamster (The Escape Artist) ✨",
    "footer.easterEgg.lifestyle": "Business at work, Fluff-therapy + Gundam + Football after hours. Boosting life with AI~",

    // Chat
    "chat.welcome": "Hi! I'm Joe's AI Digital Twin. Ask me about my transition from tech to business or my work with Heytea/DQ!",
    "chat.placeholder": "Ask about my skills...",
    "chat.online": "Online",
    "chat.title": "Joe's AI Twin",
  },
  zh: {
    // Nav
    "nav.home": "首页",
    "nav.showcase": "价值与热爱",
    "nav.life": "生活碎片",
    "nav.resume": "简历",

    // Hero
    "hero.name": "陈子卓野 (Joe Chen)",
    "hero.title": "从技术落地到",
    "hero.titleHighlight": "品牌增长",
    "hero.subtitle_extra": "—— 业务大客户经理的跨界实践",
    "hero.desc": "陈子卓野（JOE CHEN）从技术岗转型的业务大客户经理，深耕连锁餐饮品牌的实施与运营，擅长打通技术落地与客户增长的链路。",
    "hero.desc_extended": "既泡过连锁品牌的项目现场，也守过 5/8 人制足球的边路；是高达收藏架的“指挥官”，也爱用短视频剪生活碎片；更靠 AI Gemini 捣鼓出不少工作生活的实用小工具 —— 让技术与热爱，都落地成日常的实在价值。",
    
    "hero.btn.resume": "查看个人履历生涯",
    "hero.btn.tools": "我的作品",
    "hero.btn.contact": "联系我",

    // Hero Tags
    "tag.identity.label": "身份",
    "tag.identity.val": "技术转业务大客户经理 | 连锁餐饮品牌运营专家",
    "tag.ability.label": "能力",
    "tag.ability.val": "技术×业务链路打通 | 餐饮项目全操盘",
    "tag.passion.label": "热爱",
    "tag.passion.val": "高达粉 | 足球边路 | 短视频创作者",
    "tag.ai.label": "AI玩咖",
    "tag.ai.val": "Gemini工具开发者 | 用AI提效",

    // Showcase
    "showcase.title": "价值与热爱",
    "showcase.subtitle": "数字化创新与生活激情的融合。",

    "showcase.tool.smartprice": "智能定价 AI",
    "showcase.tool.smartprice.desc": "数据驱动的智能定价引擎，优化商业价值。",

    "showcase.tool.omnisales": "全渠道销售 (OmniSales)",
    "showcase.tool.omnisales.desc": "无缝运营的综合销售管理仪表板。",

    "showcase.tool.resume": "个人简历",
    "showcase.tool.resume.desc": "职业旅程可视化。",

    "showcase.hobby.gundam": "高达模型",
    "showcase.hobby.gundam.desc": "精密与耐心。打磨细节，构建机甲。",

    "showcase.hobby.football": "足球战术",
    "showcase.hobby.football.desc": "绿茵场上的团队协作与战术执行。",

    // Lifestyle
    "lifestyle.title": "生活碎片",
    "lifestyle.subtitle": "丈量世界，记录瞬间。工作之外的鲜活时刻。",
    "lifestyle.card.nio.title": "蔚来 ET5T 游记",
    "lifestyle.card.nio.loc": "自驾·旅途",
    "lifestyle.card.camping.title": "周末露营",
    "lifestyle.card.camping.loc": "浙江·安吉",
    
    "lifestyle.card.jp1.title": "京都古韵",
    "lifestyle.card.jp1.loc": "日本·京都",
    "lifestyle.card.jp2.title": "大阪街头",
    "lifestyle.card.jp2.loc": "日本·大阪",
    "lifestyle.card.jp3.title": "旅途风景",
    "lifestyle.card.jp3.loc": "日本·旅行",

    // Footer
    "footer.title": "让我们共创价值",
    "footer.desc": "无论是探讨底层架构与战略运营的商业逻辑，还是交流高达模型的精细打磨与足球战术的排兵布阵，都欢迎随时与我联系。",
    "footer.copyright": "陈子卓野. Powered by Gemini.",
    "footer.icp": "沪ICP备XXXXXXXX号-1",
    "footer.wechat": "微信",
    "footer.douyin": "抖音",
    "footer.location": "居住地：上海",

    "footer.easterEgg.pets": "养着 “跨物种家庭成员”：8 岁蓝猫老干部 + 粘人吸蜜鹦鹉 + 金丝熊越狱小能手 ✨",
    "footer.easterEgg.lifestyle": "工作搞业务，下班撸毛 + 拼高达 + 踢足球，用 AI 给生活加 buff～",

    // Chat
    "chat.welcome": "你好！我是陈子卓野的 AI 数字分身。你可以问我关于技术转业务的经历、在喜茶/DQ 的项目经验，或者我的兴趣爱好！",
    "chat.placeholder": "问问我的技能...",
    "chat.online": "在线",
    "chat.title": "数字分身",
  }
};