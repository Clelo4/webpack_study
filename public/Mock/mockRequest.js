// Mock.mock( rurl?, rtype?, template|function( options ) )

// Mock.mock(/\/article\/getList/, {
//'list|1-10': [{
//'id|+1': 1,
//'email':'@EMAIL'
//   }]
// });
let ArticleList = [{
    id: 1,
    img: '/static/img/ai-kp.jpg',
    title: 'AI智能上阵 看这些新技术助力防疫复产',
    time: Mock.Random.date('yyyy/MM/dd'),
    content: '伴随新型冠状病毒肺炎疫情的变化，企事业单位复工复产成为当前新的工作重点。近期，北京市内各行业利用多项创新技术，有序实现复工复产和安全生产，有效防止疫情扩散。来自AI机器人的排查电话 “您好， 我是海淀区西三旗街道疫情防控的智能机器人。”',
    tag: ['AI', '防疫'],
    sources: ['光明网', '界面新闻']
  },
  {
    id: 2,
    img: '/static/img/2.jpg',
    title: '棕树和它的房客蝙蝠',
    time: '2020-03-20',
    content: '1913年，当法国植物学家埃尔马诺·来翁在古巴首先发现栖满蝙蝠的棕树时，植物学家为这种棕树拟定了学名，当地人则形象地称这种棕树为“蝙蝠棕”。记得有媒体报道过，在我国晋江市永和镇旦厝村一处普通的民宅前，也有两棵十余米高的“蝙蝠棕”，树上栖息的蝙蝠多达上千只。每到夜幕降临，这些小家伙便像一个个优雅的滑翔伞运动员，展开双翅，在空中划出优雅的弧线。',
    tag: ['蝙蝠', '自然'],
    sources: ['科普中国']
  },
  {
    id: 3,
    img: '/static/img/3.jpg',
    title: '澳洲野犬祖先竟是 9900年前来自中国南方的家犬',
    time: '2020-03-20',
    content: '近日，中国科学院昆明动物研究所张亚平院士、毛炳宇研究员和瑞典皇家理工学院的彼得·萨沃莱宁教授团队合作，对澳洲野犬的起源和野化过程进行了深入研究，由此揭示了其起源和野化机制，以及一段古代人类迁移的历史。',
    tag: ['自然'],
    sources: ['科普中国']
  },
  {
    id: 4,
    img: '/static/img/news-1.jpg',
    title: '我国将于今年7月发射火星探测器',
    time: '2020-03-21',
    content: ' 3月12日，英国首相鲍里斯·约翰逊在新闻发布会上宣布，英国已经进入疫情的第二阶段“延缓”（DELAY），将以“群体免疫”的方法对抗疫情发展。随后，英国首席科学顾问帕特里克·瓦兰斯爵士也为政府的抗疫政策进行辩护，他指出英国“群体免疫”的方法是为了减缓疫情发展的速度，并使人群的免疫力得到增强。',
    tag: ['资讯'],
    sources: ['科普中国']
  }, {
    id: 5,
    img: '/static/img/news-2.jpg',
    title: '“中国经验”可助全球抗疫少走弯路',
    time: '2020-03-21',
    content: '目前，新冠肺炎已经是全球大流行。世界卫生组织统计最新数据显示，全球确诊新冠肺炎病例累计超20万例，涉及166个国家和地区，至少35个国家进入紧急状态。对于疫情全球蔓延现状，怎样看待疫情未来发展走向和趋势、针对新冠病毒的疫苗研发等大众关心的问题，清华大学医学院的两位专家程功和丁强向媒体进行了解答。',
    tag: ['资讯'],
    sources: ['科普中国']
  }, {
    id: 6,
    img: '/static/img/news-3.jpg',
    title: '科技创新支撑复工复产！科技部推出九大“硬核”举措',
    time: '2020-03-21',
    content: '科技部发布《关于科技创新支撑复工复产和经济平稳运行的若干措施》',
    tag: ['资讯'],
    sources: ['科普中国']
  }
];

let hotList = [{
    id: 1,
    img: '/static/img/ai-kp.jpg',
    title: 'AI智能上阵 看这些新技术助力防疫复产AI智能上阵',
    time: Mock.Random.date('yyyy/MM/dd'),
    content: '伴随新型冠状病毒肺炎疫情的变化，企事业单位复工复产成为当前新的工作重点。近期，北京市内各行业利用多项创新技术，有序实现复工复产和安全生产，有效防止疫情扩散。来自AI机器人的排查电话 “您好， 我是海淀区西三旗街道疫情防控的智能机器人。”',
    tag: ['AI', '防疫'],
    sources: ['光明网', '界面新闻']
  },
  {
    id: 2,
    img: '/static/img/2.jpg',
    title: '棕树和它的房客蝙蝠',
    time: '2020-03-20',
    content: '1913年，当法国植物学家埃尔马诺·来翁在古巴首先发现栖满蝙蝠的棕树时，植物学家为这种棕树拟定了学名，当地人则形象地称这种棕树为“蝙蝠棕”。记得有媒体报道过，在我国晋江市永和镇旦厝村一处普通的民宅前，也有两棵十余米高的“蝙蝠棕”，树上栖息的蝙蝠多达上千只。每到夜幕降临，这些小家伙便像一个个优雅的滑翔伞运动员，展开双翅，在空中划出优雅的弧线。',
    tag: ['蝙蝠', '自然'],
    sources: ['科普中国']
  },
  {
    id: 3,
    img: '/static/img/3.jpg',
    title: '澳洲野犬祖先竟是 9900年前来自中国南方的家犬',
    time: '2020-03-20',
    content: '近日，中国科学院昆明动物研究所张亚平院士、毛炳宇研究员和瑞典皇家理工学院的彼得·萨沃莱宁教授团队合作，对澳洲野犬的起源和野化过程进行了深入研究，由此揭示了其起源和野化机制，以及一段古代人类迁移的历史。',
    tag: ['自然'],
    sources: ['科普中国']
  },
  {
    id: 4,
    img: '/static/img/news-2.jpg',
    title: '“中国经验”可助全球抗疫少走弯路',
    time: '2020-03-21',
    content: '目前，新冠肺炎已经是全球大流行。世界卫生组织统计最新数据显示，全球确诊新冠肺炎病例累计超20万例，涉及166个国家和地区，至少35个国家进入紧急状态。对于疫情全球蔓延现状，怎样看待疫情未来发展走向和趋势、针对新冠病毒的疫苗研发等大众关心的问题，清华大学医学院的两位专家程功和丁强向媒体进行了解答。',
    tag: ['资讯'],
    sources: ['科普中国']
  }
];

let newsTechList = [{
  id: 1,
  img: '/static/img/news-1.jpg',
  title: '我国将于今年7月发射火星探测器',
  time: '2020-03-21',
  content: ' 3月12日，英国首相鲍里斯·约翰逊在新闻发布会上宣布，英国已经进入疫情的第二阶段“延缓”（DELAY），将以“群体免疫”的方法对抗疫情发展。随后，英国首席科学顾问帕特里克·瓦兰斯爵士也为政府的抗疫政策进行辩护，他指出英国“群体免疫”的方法是为了减缓疫情发展的速度，并使人群的免疫力得到增强。',
  tag: ['资讯'],
  sources: ['科普中国']
}];

let categoryList = {
  '动态新闻': [{
      name: '科技新闻',
      eng: 'tech'
    },
    {
      name: '政策速递',
      eng: 'politics'
    },
    {
      name: '学术资讯',
      eng: 'academic'
    }
  ],
  '科普知识': [{
      name: '生活',
      eng: 'live'
    },
    {
      name: '生命',
      eng: 'anima'
    },
    {
      name: '自然',
      eng: 'natural'
    },
    {
      name: '科技',
      eng: 'technology'
    },
    {
      name: '人文',
      eng: 'humanities'
    },
    {
      name: '宇宙',
      eng: 'universe'
    }
  ],
  '数字资源': [{
      name: '科普视频',
      eng: 'vedio'
    },
    {
      name: '百科图集',
      eng: 'image'
    },
    {
      name: '科普书籍',
      eng: 'book'
    },
    {
      name: '科普视界',
      eng: 'view'
    },
    {
      name: '3D虚拟',
      eng: '3D'
    },
    {
      name: '互动游戏',
      eng: 'game'
    },
    {
      name: '相关网站',
      eng: 'site'
    }
  ],
  '学生专区': [{
      name: '课外充电站',
      eng: 'classroom'
    },
    {
      name: '比赛资讯',
      eng: 'competitionInfo'
    },
    {
      name: '创意互动',
      eng: 'creativeCommunication'
    },
    {
      name: '笔记分享',
      eng: 'note'
    }
  ]
};


let policyList = [{
  id: 1,
  img: '/static/img/news-3.jpg',
  title: '科技创新支撑复工复产！科技部推出九大“硬核”举措',
  time: '2020-03-21',
  content: '科技部发布《关于科技创新支撑复工复产和经济平稳运行的若干措施》',
  tag: ['资讯'],
  sources: ['科普中国']
}];

let naturalList = [{
  id: 1,
  img: '/static/img/3.jpg',
  title: '澳洲野犬祖先竟是 9900年前来自中国南方的家犬',
  time: '2020-03-20',
  content: '近日，中国科学院昆明动物研究所张亚平院士、毛炳宇研究员和瑞典皇家理工学院的彼得·萨沃莱宁教授团队合作，对澳洲野犬的起源和野化过程进行了深入研究，由此揭示了其起源和野化机制，以及一段古代人类迁移的历史。',
  tag: ['自然'],
  sources: ['科普中国']
}, {
  id: 2,
  img: '/static/img/2.jpg',
  title: '棕树和它的房客蝙蝠',
  time: '2020-03-20',
  content: '1913年，当法国植物学家埃尔马诺·来翁在古巴首先发现栖满蝙蝠的棕树时，植物学家为这种棕树拟定了学名，当地人则形象地称这种棕树为“蝙蝠棕”。记得有媒体报道过，在我国晋江市永和镇旦厝村一处普通的民宅前，也有两棵十余米高的“蝙蝠棕”，树上栖息的蝙蝠多达上千只。每到夜幕降临，这些小家伙便像一个个优雅的滑翔伞运动员，展开双翅，在空中划出优雅的弧线。',
  tag: ['蝙蝠', '自然'],
  sources: ['科普中国']
}];

let liveList = [];

let animaList = [];

let everyoneList = [];

let universeList = [{
  id: 1,
  img: '/static/img/news-1.jpg',
  title: '我国将于今年7月发射火星探测器',
  time: '2020-03-21',
  content: ' 3月12日，英国首相鲍里斯·约翰逊在新闻发布会上宣布，英国已经进入疫情的第二阶段“延缓”（DELAY），将以“群体免疫”的方法对抗疫情发展。随后，英国首席科学顾问帕特里克·瓦兰斯爵士也为政府的抗疫政策进行辩护，他指出英国“群体免疫”的方法是为了减缓疫情发展的速度，并使人群的免疫力得到增强。',
  tag: ['资讯'],
  sources: ['科普中国']
}];

let xueshuList = [{
  id: 1,
  img: '/static/img/xueshu-1.jpg',
  title: '关于举行香港城市大学杨彤院士学术报告会的通知',
  time: '2020-03-21',
  content: '杨彤，香港城市大学讲席教授(Chair Professor)，欧洲科学院院士。目前担任香港数学会主席(2016-)。主持的科研项目“守恒律组和玻尔兹曼方程的一些数学理论”获得2012年度国家自然科学奖二等奖；1998年获得首届国际华人数学家大会晨兴数学奖银奖；2011年获得香港裘槎基金会高级研究成就奖(Croucher Senior Research Fellowship 2011/2012)。曾担任SCI杂志Analysis and Applications (2013-2017)副主编，以及作为SCI杂志Kinetic and Related Models的创刊副主编之一。',
  tag: ['学术'],
  sources: ['华南理工大学']
}];

let jixuanList = [{
  id: 1,
  img: '/static/img/jx-1.jpg',
  title: '打卡国际空间站 游客不仅身体素质要好还需进行半年训练',
  time: '2020-03-21',
  content: '近日，美国阿克肖姆航天公司发布公报称，该公司已与美国太空探索技术公司（SpaceX）达成协议，准备借助后者的载人“龙”飞船。',
  tag: ['科幻'],
  sources: ['科普中国']
}, {
  id: 2,
  img: '/static/img/jx-2.jpg',
  title: '科幻文学如何帮助孩子理解灾难',
  time: '2020-03-21',
  content: '科幻文学作为涵盖两者的特殊文学种类，便被放到聚光灯下进行检视。比如王晋康老师在他2009年出版的长篇科幻小说《十字》中提出一种“低烈度纵火”理论，科学狂人培养低毒性天花病毒，任其在人类中传播，让它们成为病毒世界的强势种群，以这种极端方法持续化解危险的临界状态。这也是在科幻小说中才能出现的思想实验，借此探讨一系列非常态下的科技与伦理问题。',
  tag: ['科幻'],
  sources: ['科普中国']
}, {
  id: 3,
  img: '/static/img/jx-3.jpg',
  title: '郭帆表示《流浪地球2》至少再等4年',
  time: '2020-03-21',
  content: '《流浪地球》在今年的金鸡奖有五项提名，包括最佳故事片、最佳导演、最佳摄影、最佳美术和最佳录音。',
  tag: ['科幻'],
  sources: ['科普中国']
}];

let dongtaiList = [{
  id: 1,
  img: '/static/img/news-1.jpg',
  title: '我国将于今年7月发射火星探测器',
  time: '2020-03-21',
  content: ' 3月12日，英国首相鲍里斯·约翰逊在新闻发布会上宣布，英国已经进入疫情的第二阶段“延缓”（DELAY），将以“群体免疫”的方法对抗疫情发展。随后，英国首席科学顾问帕特里克·瓦兰斯爵士也为政府的抗疫政策进行辩护，他指出英国“群体免疫”的方法是为了减缓疫情发展的速度，并使人群的免疫力得到增强。',
  tag: ['资讯'],
  sources: ['科普中国']
}, {
  id: 2,
  img: '/static/img/news-3.jpg',
  title: '科技创新支撑复工复产！科技部推出九大“硬核”举措',
  time: '2020-03-21',
  content: '科技部发布《关于科技创新支撑复工复产和经济平稳运行的若干措施》',
  tag: ['资讯'],
  sources: ['科普中国']
}, {
  id: 3,
  img: '/static/img/ai-kp.jpg',
  title: 'AI智能上阵 看这些新技术助力防疫复产AI智能上阵',
  time: Mock.Random.date('yyyy/MM/dd'),
  content: '伴随新型冠状病毒肺炎疫情的变化，企事业单位复工复产成为当前新的工作重点。近期，北京市内各行业利用多项创新技术，有序实现复工复产和安全生产，有效防止疫情扩散。来自AI机器人的排查电话 “您好， 我是海淀区西三旗街道疫情防控的智能机器人。”',
  tag: ['AI', '防疫'],
  sources: ['光明网', '界面新闻']
}];

let piyaoList = [{
  id: 1,
  img: '/static/img/py-1.jpg',
  title: '新冠病毒比非典更容易传染吗？可以从这个角度来讨论',
  time: Mock.Random.date('yyyy/MM/dd'),
  content: '2019 新型冠状病毒（2019-nCov），与之前的非典病毒（SARS）、中东呼吸综合症冠状病毒（MERS）都属于冠状病毒。目前，已知能够感染人类的冠状病毒有 7 种，上述 3 种可以引起致命的呼吸系统疾病，剩下的 4 种则是人类感冒的常见病原体。冠状病毒是一类 RNA 病毒的总称，这类病毒的遗传物质为 RNA。之所以叫做“冠状病毒”，是因为在电子显微镜下，病毒边缘上的突起——刺突蛋白(S)看上去就像皇冠一样。',
  tag: ['科普', '辟谣'],
  sources: ['果壳网']
}, {
  id: 2,
  img: '/static/img/py-2.jpg',
  title: '辟谣来了！这7个预防肺炎的方法不靠谱！',
  time: Mock.Random.date('yyyy/MM/dd'),
  content: '①吸烟不仅不能预防病毒感染，还会降低身体抵抗力；②吸烟时，手反复触碰口鼻，病毒反而可能因此进入身体；③吸烟时不能带口罩，会因此降低对自己的保护。',
  tag: ['科普', '辟谣'],
  sources: ['果壳网']
}, {
  id: 3,
  img: '/static/img/py-3.jpg',
  title: '谣言:降压药一旦开始吃，就得吃一辈子',
  time: Mock.Random.date('yyyy/MM/dd'),
  content: '高血压的风险与血压关系密切，因此维持血压正常是最重要的，如果改善生活方式不能让血压降下来，就需要同时服用降压药物。不吃药，血压高高在上，那么脑出血、脑梗死、心衰、心肌梗死、房颤、肾衰、主动脉夹层，等等恶性疾病都会找上门！在每天按时吃降压药，和高血压导致的疾病之间，我选择积极有效正规的控制高血压，包括按时服用降压药！最最关键：害怕吃降压药得吃一辈子，就不吃药，本身就是自残行为，也是掩耳盗铃的行为！不正规控制高血压，只能加速心脑肾等脏器的损害！',
  tag: ['科普', '辟谣'],
  sources: ['果壳网']
}, {
  id: 4,
  img: '/static/img/py-4.jpg',
  title: '谣言:淡水鱼能传播新冠肺炎',
  time: Mock.Random.date('yyyy/MM/dd'),
  content: '最近有传言称由于有些地方“厕所搭在鱼塘上或者在流经鱼塘的水中清洗便桶”，所以养出来的淡水鱼可能感染新冠病毒甚至通过餐桌传染给食用者。我们考虑最极端情况：首先，有携带病毒的粪便被排放到鱼塘中，一部分留在水中，一部分被鱼吸收。存于水的部分因目前没有研究表明是否还存在感染能力，而且不会直接接触到消费者，因此不做讨论。其次，被鱼吸收的病毒是否能通过鱼传染给人呢？病毒的感染通常有一定宿主范围和需要一定的温度范围。新型冠状病毒是乙型冠状病毒属的种类，乙型冠状病毒成员主要感染人类及其他哺乳纲的动物，为恒温动物。淡水鱼类属于鱼纲的动物，为变温动物。鱼类和人类在分类地位上差异很大，而且体温差异也很大。人类的正常体温是36 ℃左右，新型冠状病毒已经适应这个温度进行感染和繁殖。但是在36 ℃水温下，很多淡水鱼都无法生存。因此，淡水鱼类不会感染新型冠状病毒。在食用淡水鱼时，推荐高温蒸煮，因为新冠病毒经56°C高温蒸煮30分钟即可灭活，所以即使鱼体或表面仍有病毒，经过最后的烹饪步骤也可以“高枕无忧”了。',
  tag: ['科普', '辟谣'],
  sources: ['果壳网']
}];

let tjList = [{
    id: 1,
    img: '/static/img/3.jpg',
    title: '澳洲野犬祖先竟是 9900年前来自中国南方的家犬',
    time: '2020-03-20',
    content: '近日，中国科学院昆明动物研究所张亚平院士、毛炳宇研究员和瑞典皇家理工学院的彼得·萨沃莱宁教授团队合作，对澳洲野犬的起源和野化过程进行了深入研究，由此揭示了其起源和野化机制，以及一段古代人类迁移的历史。',
    tag: ['自然'],
    sources: ['科普中国']
  }, {
    id: 2,
    img: '/static/img/news-1.jpg',
    title: '我国将于今年7月发射火星探测器',
    time: '2020-03-21',
    content: ' 3月12日，英国首相鲍里斯·约翰逊在新闻发布会上宣布，英国已经进入疫情的第二阶段“延缓”（DELAY），将以“群体免疫”的方法对抗疫情发展。随后，英国首席科学顾问帕特里克·瓦兰斯爵士也为政府的抗疫政策进行辩护，他指出英国“群体免疫”的方法是为了减缓疫情发展的速度，并使人群的免疫力得到增强。',
    tag: ['资讯'],
    sources: ['科普中国']
  },
  {
    id: 3,
    img: '/static/img/news-2.jpg',
    title: '“中国经验”可助全球抗疫少走弯路',
    time: '2020-03-21',
    content: '目前，新冠肺炎已经是全球大流行。世界卫生组织统计最新数据显示，全球确诊新冠肺炎病例累计超20万例，涉及166个国家和地区，至少35个国家进入紧急状态。对于疫情全球蔓延现状，怎样看待疫情未来发展走向和趋势、针对新冠病毒的疫苗研发等大众关心的问题，清华大学医学院的两位专家程功和丁强向媒体进行了解答。',
    tag: ['资讯'],
    sources: ['科普中国']
  },
  {
    id: 4,
    img: '/static/img/ai-kp.jpg',
    title: 'AI智能上阵 看这些新技术助力防疫复产AI智能上阵',
    time: Mock.Random.date('yyyy/MM/dd'),
    content: '伴随新型冠状病毒肺炎疫情的变化，企事业单位复工复产成为当前新的工作重点。近期，北京市内各行业利用多项创新技术，有序实现复工复产和安全生产，有效防止疫情扩散。来自AI机器人的排查电话 “您好， 我是海淀区西三旗街道疫情防控的智能机器人。”',
    tag: ['AI', '防疫'],
    sources: ['光明网', '界面新闻']
  }
];

function parseUrlParam(urlPath, key) {
  const queryString = urlPath.substring(urlPath.indexOf('?'));
  const searchParams = new URLSearchParams(queryString);
  return searchParams.get(key);
}

Mock.mock(/\/article\/getList/, function (options) {
  let articleType = parseUrlParam(options.url, 'articleType');
  let pageSize = parseUrlParam(options.url, 'pageSize');
  let pageNumber = parseUrlParam(options.url, 'pageNumber');
  let result = [];
  switch (articleType) {
    case '热点专题':
      result = hotList;
      break;
    case '科技新闻':
      result = newsTechList;
      break;
    case '政策速递':
      result = policyList;
      break;
    case '学术资讯':
      result = xueshuList;
      break;
    case '生活':
      result = liveList;
      break;
    case '生命':
      result = animaList;
      break;
    case '自然':
      result = naturalList;
      break;
    case '科技':
      result = techList;
      break;
    case '人文':
      result = humanList;
      break;
    case '宇宙':
      result = universeList;
      break;
    case '科普大家':
      result = everyoneList;
      break;
    case '动态新闻':
      result = dongtaiList;
      break;
    case '精选文章':
      result = jixuanList;
      break;
    case '谣言粉碎':
      result = piyaoList;
      break;
    case '推荐文章':
      result = tjList;
      break;
    default:
      result = [];
      break;
  }
  if (result.length >= pageSize) {
    result.length = pageSize;
  }

  return {
    success: true,
    data: {
      total: 100,
      list: result,
      categoryName: articleType
    },
    message: 'success'
  };
});

Mock.mock(/\/article\/get/, function (options) {
  let articleId = parseUrlParam(options.url, 'articleId');
  let articleType = parseUrlParam(options.url, 'articleType');

  let resultList = [];
  switch (articleType) {
    case '热点专题':
      resultList = hotList;
      break;
    case '科技新闻':
      resultList = newsTechList;
      break;
    case '政策速递':
      resultList = policyList;
      break;
    case '学术资讯':
      resultList = xueshuList;
      break;
    case '生活':
      resultList = liveList;
      break;
    case '生命':
      resultList = animaList;
      break;
    case '自然':
      resultList = naturalList;
      break;
    case '科技':
      resultList = techList;
      break;
    case '人文':
      resultList = humanList;
      break;
    case '宇宙':
      resultList = universeList;
      break;
    case '科普大家':
      resultList = everyoneList;
      break;
    case '动态新闻':
      resultList = dongtaiList;
      break;
    case '精选文章':
      resultList = jixuanList;
      break;
    case '谣言粉碎':
      resultList = piyaoList;
      break;
    case '推荐文章':
      resultList = tjList;
      break;
    default:
      resultList = [];
      break;
  }
  let article = resultList[articleId - 1];
  return {
    success: article ? true : false,
    data: article,
    message: 'success'
  };
});

Mock.mock(/\/category\/get/, function (options) {
  let categoryType = parseUrlParam(options.url, 'categoryType');
  return {
    success: true,
    data: {
      categoryList: categoryList[categoryType]
    },
    message: 'success'
  };
});
