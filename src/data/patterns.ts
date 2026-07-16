export type SourceType = "official" | "museum" | "paper" | "book" | "media";
export type Confidence = "A" | "B" | "C" | "D";

export type PatternEntry = {
  id: string;
  title: string;
  aliases: string[];
  category: string;
  earliestEra: string;
  activeEras: string[];
  carriers: string[];
  regions: string[];
  summary: string;
  history: string;
  variants: Array<{
    name: string;
    era: string;
    description: string;
    svgAsset: string;
  }>;
  artifacts: Array<{
    title: string;
    era: string;
    institution?: string;
    sourceUrl?: string;
    note: string;
  }>;
  references: Array<{
    title: string;
    url?: string;
    type: SourceType;
    confidence: Confidence;
  }>;
};

const commonRefs = {
  nationalMuseum: {
    title: "中国国家博物馆：馆藏与展览资料入口",
    url: "https://www.chnmuseum.cn/",
    type: "museum" as const,
    confidence: "A" as const
  },
  palaceMuseum: {
    title: "故宫博物院：数字文物库与版权说明",
    url: "https://digicol.dpm.org.cn/",
    type: "museum" as const,
    confidence: "A" as const
  },
  culturalHeritage: {
    title: "国家文物局：文物与考古资讯入口",
    url: "https://www.ncha.gov.cn/",
    type: "official" as const,
    confidence: "A" as const
  },
  ctext: {
    title: "中国哲学书电子化计划：古籍文本检索线索",
    url: "https://ctext.org/zhs",
    type: "book" as const,
    confidence: "B" as const
  }
};

export const patterns: PatternEntry[] = [
  {
    id: "taotie",
    title: "兽面纹",
    aliases: ["饕餮纹", "兽面", "青铜兽面"],
    category: "神兽与礼制",
    earliestEra: "商代前后成熟",
    activeEras: ["商", "西周", "春秋", "后世仿古"],
    carriers: ["青铜器", "玉器", "建筑装饰", "仿古器物"],
    regions: ["黄河流域", "中原", "长江流域青铜文化圈"],
    summary: "以正面对称兽首为核心的礼器纹样，是商周青铜礼制视觉系统中最具识别度的母题之一。",
    history: "兽面纹在商代青铜礼器上高度成熟，常围绕器物腹部、颈部和足部展开。其典型结构强调中轴、双目、角、鼻梁和卷曲附肢，既服务礼器的威仪感，也形成后世仿古纹饰的重要来源。",
    variants: [
      {
        name: "中轴兽面",
        era: "商至西周",
        description: "以双目和鼻梁建立中轴，左右卷曲构件形成强对称。",
        svgAsset: "/patterns/taotie.svg"
      }
    ],
    artifacts: [
      {
        title: "商周青铜礼器群",
        era: "商至西周",
        institution: "中国国家博物馆、故宫博物院等",
        sourceUrl: "https://www.chnmuseum.cn/",
        note: "可作为兽面纹形制、器类和礼制语境的基础线索。"
      }
    ],
    references: [
      commonRefs.nationalMuseum,
      commonRefs.palaceMuseum,
      commonRefs.culturalHeritage
    ]
  },
  {
    id: "dragon",
    title: "龙纹",
    aliases: ["夔龙纹", "蟠龙纹", "团龙", "行龙"],
    category: "神兽与权力象征",
    earliestEra: "新石器时代至商周持续演化",
    activeEras: ["新石器", "商周", "秦汉", "唐宋", "明清"],
    carriers: ["玉器", "青铜器", "陶瓷", "织绣", "建筑"],
    regions: ["辽河流域", "黄河流域", "长江流域", "全国"],
    summary: "龙纹是跨时代演化最久的中华图像母题之一，从玉器、青铜到宫廷服饰和建筑持续变形。",
    history: "早期龙形图像多与玉器、陶器和区域性礼仪有关。商周以后，龙纹在青铜器和礼制图像中系统化，秦汉至明清不断吸收云气、火焰、海水江崖等构件，逐渐成为权力、祥瑞与身份秩序的复合符号。",
    variants: [
      {
        name: "卷体龙纹",
        era: "商周至汉",
        description: "身体盘曲，首尾呼应，强调运动感和神异性。",
        svgAsset: "/patterns/dragon.svg"
      }
    ],
    artifacts: [
      {
        title: "红山文化玉龙及历代龙纹器物",
        era: "新石器至明清",
        institution: "多地博物馆",
        sourceUrl: "https://www.ncha.gov.cn/",
        note: "用于追踪龙形母题从区域礼仪图像到国家礼制符号的演化。"
      }
    ],
    references: [
      commonRefs.culturalHeritage,
      commonRefs.nationalMuseum,
      commonRefs.palaceMuseum
    ]
  },
  {
    id: "phoenix",
    title: "凤鸟纹",
    aliases: ["凤纹", "鸟纹", "鸾鸟纹"],
    category: "祥瑞与礼制",
    earliestEra: "商周时期常见",
    activeEras: ["商周", "战国", "汉", "唐宋", "明清"],
    carriers: ["青铜器", "漆器", "织物", "陶瓷", "建筑彩画"],
    regions: ["中原", "楚文化区域", "江汉地区", "全国"],
    summary: "凤鸟纹以长尾、冠羽、展翼为视觉特征，长期承担祥瑞、礼仪和装饰秩序功能。",
    history: "凤鸟纹在商周青铜与玉器中已有重要位置，战国至汉代在楚系漆器、帛画和铜镜中表现活跃。唐宋以后逐渐与花草、云气、缠枝等组合，成为织绣、陶瓷和建筑装饰中的核心祥瑞纹样。",
    variants: [
      {
        name: "展翼凤鸟",
        era: "战国至汉",
        description: "以冠羽、长尾和对称翼形构成轻盈的祥瑞鸟形。",
        svgAsset: "/patterns/phoenix.svg"
      }
    ],
    artifacts: [
      {
        title: "楚系漆器与汉代铜镜凤鸟题材",
        era: "战国至汉",
        institution: "地方博物馆与国家级馆藏",
        sourceUrl: "https://www.ncha.gov.cn/",
        note: "可用于观察凤鸟纹与楚文化、汉代祥瑞图像的关系。"
      }
    ],
    references: [
      commonRefs.culturalHeritage,
      commonRefs.nationalMuseum,
      commonRefs.palaceMuseum
    ]
  },
  {
    id: "yunlei",
    title: "云雷纹",
    aliases: ["雷纹", "云纹", "回旋雷纹"],
    category: "几何与自然",
    earliestEra: "新石器晚期至商周成熟",
    activeEras: ["新石器", "商", "西周", "战国", "汉"],
    carriers: ["陶器", "青铜器", "玉器", "织物"],
    regions: ["黄河流域", "长江流域", "中原"],
    summary: "云雷纹以连续回旋线构成，是青铜器底纹和边饰中常见的基础几何系统。",
    history: "云雷纹可追溯到早期陶器和几何装饰传统，在商周青铜器上大量用作地纹、边饰或主体纹样的组织结构。其连续折线与回旋单元便于扩展，后世发展出回纹、勾连纹等多种几何变体。",
    variants: [
      {
        name: "连续雷纹",
        era: "商周",
        description: "折线回旋单元连续铺排，形成稳定的边饰节奏。",
        svgAsset: "/patterns/yunlei.svg"
      }
    ],
    artifacts: [
      {
        title: "商周青铜器地纹和边饰",
        era: "商至西周",
        institution: "中国国家博物馆等",
        sourceUrl: "https://www.chnmuseum.cn/",
        note: "作为云雷纹在礼器表面组织中的主要证据类型。"
      }
    ],
    references: [
      commonRefs.nationalMuseum,
      commonRefs.culturalHeritage,
      commonRefs.palaceMuseum
    ]
  },
  {
    id: "huiwen",
    title: "回纹",
    aliases: ["回字纹", "方折纹", "万不断"],
    category: "几何与秩序",
    earliestEra: "商周几何传统，汉以后广泛流行",
    activeEras: ["商周", "汉", "唐宋", "明清", "近现代"],
    carriers: ["青铜器", "陶瓷", "织物", "建筑", "家具"],
    regions: ["全国"],
    summary: "回纹由方折连续线构成，因可无限延展，常用于边饰、铺地和器物口沿装饰。",
    history: "回纹承接早期云雷、方折几何装饰传统，在陶瓷、家具、建筑和织物中长期使用。它的价值在于结构稳定、可连续扩展、易与其他纹样组合，是传统装饰中最基础的秩序型纹样之一。",
    variants: [
      {
        name: "连续回字边饰",
        era: "汉以后",
        description: "方折线连续转折，构成可无限延展的边框系统。",
        svgAsset: "/patterns/huiwen.svg"
      }
    ],
    artifacts: [
      {
        title: "历代陶瓷、家具与建筑边饰",
        era: "汉至近现代",
        institution: "故宫博物院等",
        sourceUrl: "https://digicol.dpm.org.cn/",
        note: "可观察回纹在不同材料和尺度中的连续使用。"
      }
    ],
    references: [
      commonRefs.palaceMuseum,
      commonRefs.nationalMuseum,
      commonRefs.culturalHeritage
    ]
  },
  {
    id: "shidi",
    title: "柿蒂纹／四瓣花纹",
    aliases: ["四叶纹", "四瓣花", "柿蒂形纹", "四出花"],
    category: "花叶与公共文化符号",
    earliestEra: "战国至汉代高度流行，前身可上溯早期花瓣纹传统",
    activeEras: ["战国", "汉", "唐", "宋元", "明清", "当代讨论"],
    carriers: ["铜镜", "玉器", "漆器", "织物", "陶瓷", "建筑装饰"],
    regions: ["中原", "岭南", "长江流域", "全国"],
    summary: "四瓣对称花形是中国古代公共文化图样的重要谱系，常被称为柿蒂纹或四瓣花纹。",
    history: "柿蒂纹因形似柿子花蒂而得名，在战国至汉代铜镜、玉器和漆器中尤其常见。相关研究也常把它放入更长的四瓣花、莲花、天象和中心对称装饰传统中理解。近年围绕商业图样边界的讨论，使它成为说明公共文化符号保护必要性的代表案例。",
    variants: [
      {
        name: "中心四瓣花",
        era: "战国至汉",
        description: "四瓣围绕中心点展开，强调中轴、四方和花形秩序。",
        svgAsset: "/patterns/shidi.svg"
      }
    ],
    artifacts: [
      {
        title: "十字形龙凤纹镜",
        era: "西汉",
        institution: "南越王博物院",
        sourceUrl: "https://ycpai.ycwb.com/ycppad/content/2019-11/05/content_541990.html",
        note: "报道说明该铜镜背面柿蒂纹又被称为十字形四叶纹。"
      },
      {
        title: "汉代铜镜柿蒂纹研究线索",
        era: "汉",
        institution: "中国人民大学文学院论文线索",
        sourceUrl: "https://wenxueyuan.ruc.edu.cn/UploadFile/20170331/20170331103508389.pdf",
        note: "可用于追踪柿蒂纹与四瓣花、莲花解释之间的学术讨论。"
      }
    ],
    references: [
      {
        title: "“方华蔓长，名此曰昌”：汉代铜镜柿蒂纹论文线索",
        url: "https://wenxueyuan.ruc.edu.cn/UploadFile/20170331/20170331103508389.pdf",
        type: "paper",
        confidence: "A"
      },
      {
        title: "央视网：百家讲坛 “柿蒂纹”的文化内涵",
        url: "https://tv.cctv.com/2023/09/30/VIDEi83fwqi34MLvtTgqBaLg230930.shtml",
        type: "media",
        confidence: "C"
      },
      {
        title: "羊城派：西汉南越王博物馆柿蒂纹科普",
        url: "https://ycpai.ycwb.com/ycppad/content/2019-11/05/content_541990.html",
        type: "media",
        confidence: "C"
      }
    ]
  },
  {
    id: "lotus",
    title: "莲花纹",
    aliases: ["莲瓣纹", "荷花纹", "仰覆莲"],
    category: "花叶与宗教艺术",
    earliestEra: "战国秦汉已有花叶传统，魏晋南北朝以后高度发展",
    activeEras: ["汉", "魏晋南北朝", "隋唐", "宋元", "明清"],
    carriers: ["佛教造像", "建筑构件", "陶瓷", "织物", "金银器"],
    regions: ["丝绸之路", "中原", "江南", "全国"],
    summary: "莲花纹兼具本土花叶装饰和佛教象征，是石窟、造像、陶瓷与织物中的核心纹样。",
    history: "莲花纹在佛教艺术传入与本土化过程中迅速扩展，常见于莲座、藻井、瓦当、陶瓷和织物。它既指向清净、再生等宗教意义，也作为花叶装饰系统与宝相花、缠枝花形成连续谱系。",
    variants: [
      {
        name: "仰覆莲瓣",
        era: "魏晋南北朝至唐",
        description: "莲瓣围绕中心展开，常用于佛座、藻井和器物腹部。",
        svgAsset: "/patterns/lotus.svg"
      }
    ],
    artifacts: [
      {
        title: "石窟莲花藻井与佛座",
        era: "魏晋南北朝至唐",
        institution: "敦煌研究院等",
        sourceUrl: "https://www.dha.ac.cn/",
        note: "可观察莲花纹在佛教艺术空间中的构图方式。"
      }
    ],
    references: [
      {
        title: "敦煌研究院：石窟艺术资料入口",
        url: "https://www.dha.ac.cn/",
        type: "museum",
        confidence: "A"
      },
      commonRefs.culturalHeritage,
      commonRefs.nationalMuseum
    ]
  },
  {
    id: "rendong",
    title: "忍冬纹",
    aliases: ["忍冬草纹", "卷草纹", "西番莲前身线索"],
    category: "花叶与丝路交流",
    earliestEra: "魏晋南北朝至隋唐流行",
    activeEras: ["魏晋南北朝", "隋", "唐", "宋元"],
    carriers: ["石窟装饰", "瓦当", "金银器", "织物", "陶瓷"],
    regions: ["丝绸之路", "敦煌", "中原", "江南"],
    summary: "忍冬纹以卷曲叶片和连续藤蔓为特征，是丝路艺术交流与本土花草纹演化的重要节点。",
    history: "忍冬纹在魏晋南北朝至隋唐的佛教艺术、建筑构件和工艺美术中广泛出现。它吸收外来卷草样式，又与本土云气、莲花和缠枝系统结合，成为唐以后花草纹扩展的重要基础。",
    variants: [
      {
        name: "卷叶忍冬",
        era: "魏晋南北朝至唐",
        description: "卷曲叶片沿藤蔓连续生长，适合边饰和铺陈。",
        svgAsset: "/patterns/rendong.svg"
      }
    ],
    artifacts: [
      {
        title: "敦煌石窟边饰与藻井卷草",
        era: "魏晋南北朝至唐",
        institution: "敦煌研究院",
        sourceUrl: "https://www.dha.ac.cn/",
        note: "用于观察忍冬、卷草与佛教装饰系统的关系。"
      }
    ],
    references: [
      {
        title: "敦煌研究院：数字敦煌与研究资料入口",
        url: "https://www.dha.ac.cn/",
        type: "museum",
        confidence: "A"
      },
      commonRefs.culturalHeritage,
      commonRefs.nationalMuseum
    ]
  },
  {
    id: "baoxianghua",
    title: "宝相花纹",
    aliases: ["宝花", "团花", "复合莲花纹"],
    category: "花叶与盛唐装饰",
    earliestEra: "隋唐时期成熟",
    activeEras: ["隋", "唐", "宋元", "明清"],
    carriers: ["金银器", "织锦", "陶瓷", "建筑", "佛教装饰"],
    regions: ["长安", "洛阳", "丝绸之路", "全国"],
    summary: "宝相花是融合莲花、忍冬、卷草和外来花叶元素的复合花形，体现唐代装饰的开放结构。",
    history: "宝相花纹在隋唐工艺美术中成熟，常以中心团花形式出现，也可与缠枝、团窠和联珠系统组合。其特点不是单一植物写生，而是多种花叶符号的理想化综合。",
    variants: [
      {
        name: "中心团花",
        era: "隋唐",
        description: "多层花瓣围绕中心展开，兼具莲花、忍冬和装饰性叶片。",
        svgAsset: "/patterns/baoxianghua.svg"
      }
    ],
    artifacts: [
      {
        title: "唐代金银器与织锦团花装饰",
        era: "唐",
        institution: "国家级与地方博物馆",
        sourceUrl: "https://www.ncha.gov.cn/",
        note: "作为宝相花复合花形和盛唐装饰系统的主要观察对象。"
      }
    ],
    references: [
      commonRefs.culturalHeritage,
      commonRefs.nationalMuseum,
      commonRefs.palaceMuseum
    ]
  },
  {
    id: "chanzhi",
    title: "缠枝花纹",
    aliases: ["缠枝纹", "缠枝莲", "卷草缠枝"],
    category: "花叶与连续构图",
    earliestEra: "唐宋以后广泛成熟",
    activeEras: ["唐", "宋", "元", "明", "清"],
    carriers: ["陶瓷", "织物", "建筑", "家具", "金银器"],
    regions: ["景德镇", "江南", "中原", "全国"],
    summary: "缠枝花纹以连续藤蔓串联花叶，适合覆盖器物表面，是陶瓷和织物中极常见的装饰系统。",
    history: "缠枝花纹从卷草、忍冬、莲花等连续花叶传统中发展而来，在宋元明清陶瓷和织物中高度成熟。其核心是藤蔓连续、花叶交替、可无限延展，能适配盘、瓶、碗、织锦等不同载体。",
    variants: [
      {
        name: "缠枝莲",
        era: "元明清",
        description: "藤蔓形成连续波形，花朵在节奏点开放。",
        svgAsset: "/patterns/chanzhi.svg"
      }
    ],
    artifacts: [
      {
        title: "元明清青花缠枝莲瓷器",
        era: "元至清",
        institution: "故宫博物院等",
        sourceUrl: "https://digicol.dpm.org.cn/",
        note: "用于观察缠枝纹在陶瓷表面的连续组织方式。"
      }
    ],
    references: [
      commonRefs.palaceMuseum,
      commonRefs.nationalMuseum,
      commonRefs.culturalHeritage
    ]
  },
  {
    id: "bajixiang",
    title: "八吉祥纹",
    aliases: ["八宝纹", "藏传佛教八吉祥", "吉祥八宝"],
    category: "宗教与吉祥符号",
    earliestEra: "元明清宫廷和藏传佛教艺术中系统流行",
    activeEras: ["元", "明", "清", "近现代"],
    carriers: ["法器", "织物", "陶瓷", "建筑彩画", "宫廷陈设"],
    regions: ["西藏", "北京宫廷", "蒙古地区", "全国"],
    summary: "八吉祥纹由法螺、法轮、宝伞、白盖、莲花、宝瓶、金鱼、盘长等符号组成，是宗教与宫廷装饰的重要系统。",
    history: "八吉祥纹源于佛教吉祥符号体系，在元明清宫廷艺术、藏传佛教法器、织物、陶瓷和建筑装饰中常成组出现。它的关键不是单个图形，而是成套符号的组合秩序和宗教语义。",
    variants: [
      {
        name: "八宝组合",
        era: "明清",
        description: "以八个吉祥符号围绕中心排列，形成成套装饰系统。",
        svgAsset: "/patterns/bajixiang.svg"
      }
    ],
    artifacts: [
      {
        title: "明清宫廷八宝纹器物与织物",
        era: "明清",
        institution: "故宫博物院",
        sourceUrl: "https://digicol.dpm.org.cn/",
        note: "可观察八吉祥作为成套符号在宫廷器物中的使用。"
      }
    ],
    references: [
      commonRefs.palaceMuseum,
      commonRefs.culturalHeritage,
      commonRefs.nationalMuseum
    ]
  },
  {
    id: "bat-shou",
    title: "蝙蝠寿字纹",
    aliases: ["五福捧寿", "福寿纹", "蝠寿纹"],
    category: "谐音与民俗吉祥",
    earliestEra: "明清时期广泛流行",
    activeEras: ["明", "清", "近现代"],
    carriers: ["瓷器", "织绣", "家具", "建筑", "年画"],
    regions: ["全国"],
    summary: "蝙蝠取“福”谐音，寿字表达长寿愿望，二者组合成明清以来最常见的民俗吉祥纹样之一。",
    history: "蝙蝠寿字纹体现汉语谐音与视觉吉祥系统的结合。明清时期，蝙蝠、寿字、云纹、团花常组合为五福捧寿、福寿双全等构图，广泛用于瓷器、织绣、家具和民居装饰。",
    variants: [
      {
        name: "五福捧寿",
        era: "明清",
        description: "蝙蝠围绕寿字展开，形成谐音与文字图形结合的祝福图像。",
        svgAsset: "/patterns/bat-shou.svg"
      }
    ],
    artifacts: [
      {
        title: "清代福寿题材瓷器、织绣和家具",
        era: "清",
        institution: "故宫博物院等",
        sourceUrl: "https://digicol.dpm.org.cn/",
        note: "用于观察民俗吉祥语义在宫廷和民间器物中的共同使用。"
      }
    ],
    references: [
      commonRefs.palaceMuseum,
      commonRefs.nationalMuseum,
      commonRefs.ctext
    ]
  }
];

export function getPatternById(id: string) {
  return patterns.find((pattern) => pattern.id === id);
}

export const sourceLegend = {
  A: "博物馆、考古机构、政府文化机构、学术论文",
  B: "高校、出版社、专业数据库",
  C: "主流媒体文化报道",
  D: "社交平台、二手整理，仅作线索"
} satisfies Record<Confidence, string>;
