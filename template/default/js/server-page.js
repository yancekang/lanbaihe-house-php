// 服务内容页面点击左侧导航。动态显示右侧服务内容
$(document).on('click','.server-nav-box li.nav-item',function(){
  // 激活样式
  $(this).addClass('active').siblings('.nav-item').removeClass('active')
  // 判断文字
  var navText = $(this).text()
  console.log(navText)
  if(navText == '保姆'){
    $('.server-title').html('保姆<span class="title-line"></span>')
    $('.server-detail').text(`
    是指能为孕妇、产妇、哺乳期妇女、新生儿不同时期提供生活保健、身体保健、卫生保健等健康管理、保健服务的专业人员。能从保健的角度为孕产妇和新生儿提供常见，熟练掌握母婴护理的基本技能与方法。
    最新统计数字表明，我国每年有接近2000万新妈妈和新生儿，这些产妇中有40%以上需要聘请星级月嫂的高品质照护，母婴保健市场潜力巨大；
    据不完全预测，全国需要月嫂800多万人，而现有实际从业人员——保姆，只能提供普通的生活照护，不能满足新妈妈为追求心身保健而指导与服务的高端需 求；
    在一个中等城市其数量少于5人，95%以上的县级地区专业月嫂数量基本为零，全国母婴保健市场一片空白专业月嫂缺乏，市场需求十分巨大，行业发展后劲无穷。
    基于此，人力资源和社会保障部中国就业促进会，面向全国开展月嫂职业培训。
    `)
    $('#serverImg').removeClass().addClass('server-img baomu')
  }else if(navText == '护工'){
    $('.server-title').html('护工<span class="title-line"></span>')
    $('.server-detail').text(`
    护工一般指家政和医疗行业的特殊专业护理人员。在医院里，受雇用于患者或患者家属方，协助护士对病号进行日常护理和帮助的工作人员，主要的就是伺候病人的吃，喝，拉，撒，到了该吃饭的时候，护工应该根据病人的身体状况，搭配有营养的饭菜，如果是在个人家里，还要掌握病人什么时候喝水吃药，并且辅助其吃药。
    `)
    $('#serverImg').removeClass().addClass('server-img hugong')
  }else if(navText == '保洁'){
    $('.server-title').html('保洁<span class="title-line"></span>')
    $('.server-detail').text(`
    保洁服务更扩展了例如---室内外空气消毒、虫控（害虫的控制）服务、空气净化、河道清洁等等一系列的服务内容，为人类的生存环境和卫生清洁提供着有效的保障。保洁公司的业务范围已经不再限于原来单纯的为顾客清清垃圾、搞搞卫生等，而是为顾客创造一个安全宜居的生活环境。
    `)
    $('#serverImg').removeClass().addClass('server-img baojie')
  }else if(navText == '月嫂'){
    $('.server-title').html('月嫂<span class="title-line"></span>')
    $('.server-detail').text(`
    是指能为孕妇、产妇、哺乳期妇女、新生儿不同时期提供生活保健、身体保健、卫生保健等健康管理、保健服务的专业人员。能从保健的角度为孕产妇和新生儿提供常见，熟练掌握母婴护理的基本技能与方法。
    最新统计数字表明，我国每年有接近2000万新妈妈和新生儿，这些产妇中有40%以上需要聘请星级月嫂的高品质照护，母婴保健市场潜力巨大；
    据不完全预测，全国需要月嫂800多万人，而现有实际从业人员——保姆，只能提供普通的生活照护，不能满足新妈妈为追求心身保健而指导与服务的高端需 求；
    在一个中等城市其数量少于5人，95%以上的县级地区专业月嫂数量基本为零，全国母婴保健市场一片空白专业月嫂缺乏，市场需求十分巨大，行业发展后劲无穷。
    基于此，人力资源和社会保障部中国就业促进会，面向全国开展月嫂职业培训。
    `)
    $('#serverImg').removeClass().addClass('server-img yuesao')
  }else if(navText == '催乳师'){
    $('.server-title').html('催乳师<span class="title-line"></span>')
    $('.server-detail').text(`
    母乳喂养指导师又称催乳师、催奶师，是为产妇产后少乳、无乳、乳房胀痛、乳汁淤积、乳腺管阻塞、急性乳腺炎等哺乳期乳腺症状妇女提供催乳保健服务。催乳师是一个新兴职业，非常具有就业前景。
    催乳师又称催奶师、母乳喂养师。
    ——是为产妇产后少乳、无乳、乳房胀痛、乳汁淤积、乳腺管阻塞、急性乳腺炎等哺乳期乳腺症状妇女提供催乳保健服务的专业人员。
    `)
    $('#serverImg').removeClass().addClass('server-img cuirushi')
  }else if(navText == '育婴师'){
    $('.server-title').html('育婴师<span class="title-line"></span>')
    $('.server-detail').text(`
    小儿推拿保健师是在中医基本理论基础上，根据小儿的生理病理特点，运用小儿推拿疗法在其体表特定的的穴位或部位施以手法推拿的专业护理保健人员。

    小儿推拿疗法是指在小儿体表的特定腧穴或部位施行独特的推拿手法的一种养生保健方法。
    
    调节各脏腑器官的生理功能，达到提高免疫力、增强抗病能力、保健身体及防治少儿亚健康的目的。
    
    
    
    小儿推拿完全符合家长对儿童的健康需求。
    
    近几年来，中国每年新出生人数均在2000万以上，家长对小儿推拿培训服务、上门服务和实体店服务的需求与日俱增。儿推世家小儿推拿创始人黄原溪老先生在推拿和多年实践的基础上独创的“黄氏小儿推拿技法”的效果很不错，得到很多家长的一致推崇，使得我们不仅在当地小有名气，在全国也是屈指可数的。黄老师建议：小儿每周至少接受2次保健推拿，将大大降低小儿生病的几率，每天都做效果更好。国内开展小儿推拿服务的机构，因此，小儿推拿有着巨大的市场需求和发展潜力，是一个新兴的朝阳行业。
    `)
    $('#serverImg').removeClass().addClass('server-img yuyinshi')
  }else if(navText == '全屋整理'){
    $('.server-title').html('全屋整理<span class="title-line"></span>')
    $('.server-detail').text(`
    衣橱整理师行业随着十三亿中国人对提升着装品位及化妆品位有需求的消费群越来越大，衣橱整理师的市场需求将不断扩大，其特点是投资小、收入高、社会地位高、面向高端顾客群体，目前市场需求呈逐渐扩大趋势，而从业专业人员极为紧缺。



    衣橱整理师主要工作和任务就是根据客户情况定制整理方案，协助客户解决收纳整理问题。
    
    
    
    衣橱整理师属自由行业，可全职也可兼职衣橱整理按次收费，根据地域的不同和每次整理衣物数量的多少而异，市场价格在800-3000元/次。著名的职业衣橱整理师一次收费可达2万。
    
    
    
    衣橱整理师是新兴职业现在全国职业从事的人不超过100位，在中国很多地区都是属于空白市场，而在国外早已经是一个成熟的职业，已经细分到时间整理，资料整理，资产整理，杂物整理，并且在国外这样的一个服务基本在每个家庭都是需要的，而在中国大多数人家里都存在布局不合理，杂物泛滥，被恶劣的环境所困扰，所以非常需要这样的一个服务，但是人们都还不知道有这样的一个服务，有专业人士对中国整理市的预估3年后中国的整理师会蓬勃的发展，在走向成熟，所以现在还在萌芽期，现在走在前面的人相对发展机会也比较大。
    
    
    
    我们分为个人体提升班和职业衣橱整理班
    
    个人提升培训一天，职业培训四天！全日制授课，整个培训以落地式，实践式，实操形式一对一指导培训为主哦！
    
    理论与实操相结合，保证您能够学以致用，并且我们提供终身的免费复训服务和终身免费咨询服务，如果您在回去开发客户服务客户或者在做市场遇到什么问题或难题您可以随时跟我们公司哦！我们提供一些列的成熟的指导建议。
    `)
    $('#serverImg').removeClass().addClass('server-img qwzl')
  }else if(navText == '私人订制'){
    $('.server-title').html('私人订制<span class="title-line"></span>')
    $('.server-detail').text(`
    小儿推拿保健师是在中医基本理论基础上，根据小儿的生理病理特点，运用小儿推拿疗法在其体表特定的的穴位或部位施以手法推拿的专业护理保健人员。

    小儿推拿疗法是指在小儿体表的特定腧穴或部位施行独特的推拿手法的一种养生保健方法。
    
    调节各脏腑器官的生理功能，达到提高免疫力、增强抗病能力、保健身体及防治少儿亚健康的目的。
    
    
    
    小儿推拿完全符合家长对儿童的健康需求。
    
    近几年来，中国每年新出生人数均在2000万以上，家长对小儿推拿培训服务、上门服务和实体店服务的需求与日俱增。儿推世家小儿推拿创始人黄原溪老先生在推拿和多年实践的基础上独创的“黄氏小儿推拿技法”的效果很不错，得到很多家长的一致推崇，使得我们不仅在当地小有名气，在全国也是屈指可数的。黄老师建议：小儿每周至少接受2次保健推拿，将大大降低小儿生病的几率，每天都做效果更好。国内开展小儿推拿服务的机构，因此，小儿推拿有着巨大的市场需求和发展潜力，是一个新兴的朝阳行业。
    `)
    $('#serverImg').removeClass().addClass('server-img srdz')
  }else if(navText == '涉外家政'){
    $('.server-title').html('涉外家政<span class="title-line"></span>')
    $('.server-detail').text(`
    小儿推拿保健师是在中医基本理论基础上，根据小儿的生理病理特点，运用小儿推拿疗法在其体表特定的的穴位或部位施以手法推拿的专业护理保健人员。

    小儿推拿疗法是指在小儿体表的特定腧穴或部位施行独特的推拿手法的一种养生保健方法。
    
    调节各脏腑器官的生理功能，达到提高免疫力、增强抗病能力、保健身体及防治少儿亚健康的目的。
    
    
    
    小儿推拿完全符合家长对儿童的健康需求。
    
    近几年来，中国每年新出生人数均在2000万以上，家长对小儿推拿培训服务、上门服务和实体店服务的需求与日俱增。儿推世家小儿推拿创始人黄原溪老先生在推拿和多年实践的基础上独创的“黄氏小儿推拿技法”的效果很不错，得到很多家长的一致推崇，使得我们不仅在当地小有名气，在全国也是屈指可数的。黄老师建议：小儿每周至少接受2次保健推拿，将大大降低小儿生病的几率，每天都做效果更好。国内开展小儿推拿服务的机构，因此，小儿推拿有着巨大的市场需求和发展潜力，是一个新兴的朝阳行业。
    `)
    $('#serverImg').removeClass().addClass('server-img swjz')
  }
})