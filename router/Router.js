const express = require('express');

const router = express.Router();


//满天星babysbreath
const babysbreath = [{
    url: "https://img.zhichiwangluo.com/zcimgdir/album/file_5b7d0ba92b9a2.jpg",
    CommodityName: "满天星花束",
    price: "268.00"
  },
  {
    url: "https://img.zhichiwangluo.com/zcimgdir/thumb/t_15349217695b7d0c29a17bf.jpg",
    CommodityName: "满天星花束",
    price: "280.00"
  },
  {
    url: "https://img.zhichiwangluo.com/zcimgdir/album/file_5b7d0caf0eaf1.png",
    CommodityName: "满天星花束",
    price: "368.00"
  },
  {
    url: "https://img.zhichiwangluo.com/zcimgdir/album/file_5b7d0ccc08f58.png",
    CommodityName: "满天星花束",
    price: "380.00"
  }
]

//生日花束
const birthday = [{
    url: "https://img.zhichiwangluo.com/zcimgdir/album/file_5b6d2ceb015fa.png",
    CommodityName: "生日花束",
    Price: "268.00"
  },
  {
    url: "https://img.zhichiwangluo.com/zcimgdir/album/file_5b6d2ce0da3d8.png",
    CommodityName: "生日花束",
    Price: "280.00"
  },
  {
    url: "https://img.zhichiwangluo.com/zcimgdir/album/file_5b6d2df3b2d41.png",
    CommodityName: "生日花束",
    Price: "368.00"
  },
  {
    url: "https://img.zhichiwangluo.com/zcimgdir/album/file_5b6d2df8e9a66.png",
    CommodityName: "生日花束",
    Price: "380.00"
  }
]

//开业花束
const BusinessBusiness = [{
    url: "https://img.zhichiwangluo.com/zcimgdir/thumb/t_15349348265b7d3f2a56bbb.jpg",
    CommodityName: "开业商务花束",
    Price: "268.00"
  },
  {
    url: "https://img.zhichiwangluo.com/zcimgdir/album/file_5b6d2cd54d266.png",
    CommodityName: "开业商务花束",
    Price: "280.00"
  },
  {
    url: "https://img.zhichiwangluo.com/zcimgdir/album/file_5b6d2ee453148.png",
    CommodityName: "开业商务花束",
    Price: "368.00"
  },
  {
    url: "https://img.zhichiwangluo.com/zcimgdir/album/file_5b6d2ee0591a3.png",
    CommodityName: "开业商务花束",
    Price: "380.00"
  }
]

//分类花束
const classification = [{
    url: 'https://img.zhichiwangluo.com/zcimgdir/album/file_5b7d02b5d0421.png',
    CommodityName: '玫瑰',
    subName: 'Rose'
  },
  {
    url: 'https://img.zhichiwangluo.com/zcimgdir/album/file_5b7146975b8ea.png',
    CommodityName: '百合',
    subName: 'Lily'
  },
  {
    url: 'https://img.zhichiwangluo.com/zcimgdir/album/file_5b7146996548e.png',
    CommodityName: '满天星',
    subName: 'Babysbreath'
  },
  {
    url: 'https://img.zhichiwangluo.com/zcimgdir/album/file_5b71469b2f1af.png',
    CommodityName: '向日葵',
    subName: 'Sunflower'
  },
  {
    url: 'https://img.zhichiwangluo.com/zcimgdir/album/file_5b7289de14416.png',
    CommodityName: '郁金香',
    subName: 'Tulip'
  },
]

//主页数据
const homeData = {
  imgUrls: [{
      url: 'https://img.zhichiwangluo.com/zcimgdir/album/file_5b6bf89c6233c.png'
    },
    {
      url: 'https://img.zhichiwangluo.com/zcimgdir/album/file_5b739eb8778a9.png'
    }
  ],
  //特价
  tejia: [{
      url: "https://img.zhichiwangluo.com/zcimgdir/album/file_5b7d1429e9592.png",
      CommodityName: "永生花盒",
      actEndTime: '2018-05-01 10:00:43',
      PresentPrice: "258.00",
      OriginalPrice: "368.00",
      Sold: "20"
    },
    {
      url: "https://img.zhichiwangluo.com/zcimgdir/album/file_5b6c0277624db.png",
      CommodityName: "永生花盒",
      actEndTime: '2018-05-01 10:00:43',
      PresentPrice: "258.00",
      OriginalPrice: "368.00",
      Sold: "10"
    },
    {
      url: "https://img.zhichiwangluo.com/zcimgdir/album/file_5b84b29796789.png",
      CommodityName: "永生花礼盒",
      actEndTime: '2018-05-01 10:00:43',
      PresentPrice: "258.00",
      OriginalPrice: "0.01",
      Sold: "30"
    }
  ],
  //拼团专区
  pintuan: [{
      url: "http://img.zhichiwangluo.com/zcimgdir/album/file_5b56f53009690.png",
      CommodityName: 'Smart系列',
      price: '220'
    },
    {
      url: "http://img.zhichiwangluo.com/zcimgdir/album/file_5b56f52cdd4ab.png",
      CommodityName: 'Smarts系列',
      price: '128.00'
    },
    {
      url: "http://img.zhichiwangluo.com/zcimgdir/album/file_5b56f53009690.png",
      CommodityName: 'Smart系列混合版',
      price: '136.00'
    },
    {
      url: "http://img.zhichiwangluo.com/zcimgdir/album/file_5b56f52cdd4ab.png",
      CommodityName: 'Nsmarts系列',
      price: '308.00'
    }
  ],
  //礼盒
  lihe: [{
      url: "https://img.zhichiwangluo.com/zcimgdir/thumb/t_15338078935b6c0d1560946.png",
      CommodityName: '宠爱宝贝礼盒系列',
      price: '126.00'
    },
    {
      url: "https://img.zhichiwangluo.com/zcimgdir/thumb/t_15338078485b6c0ce819ebe.png",
      CommodityName: 'Smarts礼盒系列',
      price: '128.00'
    },
    {
      url: "https://img.zhichiwangluo.com/zcimgdir/thumb/t_15338078935b6c0d1560946.png",
      CommodityName: '宠爱宝贝礼盒系列',
      price: '136.00'
    },
    {
      url: "https://img.zhichiwangluo.com/zcimgdir/thumb/t_15338078485b6c0ce819ebe.png",
      CommodityName: 'Nsmarts礼盒系列',
      price: '308.00'
    }
  ],
  //新品专区
  newproduct: [{
      url: "http://img.zhichiwangluo.com/zcimgdir/album/file_5b4f0b61a357e.png",
      CommodityName: "蓝玫瑰花束",
      price: "280.00"
    },
    {
      url: "http://img.zhichiwangluo.com/zcimgdir/album/file_5b4f0b5d8b631.png",
      CommodityName: "芍药郁金香混搭",
      price: "468.00"
    },
    {
      url: "https://img.zhichiwangluo.com/zcimgdir/album/file_5b7d280260f5e.png",
      CommodityName: "Smarts韩国创意",
      price: "280.00"
    }
  ],
  //奢宠专区
  shechong: [{
      url: "https://img.zhichiwangluo.com/zcimgdir/album/file_5b7d280260f5e.png",
      CommodityName: "Smarts韩国创意",
      price: "280.00"
    },
    {
      url: "https://img.zhichiwangluo.com/zcimgdir/album/file_5b7d2831aeb03.png",
      CommodityName: "DIY韩国创意",
      price: "468.00"
    },
    {
      url: "https://img.zhichiwangluo.com/zcimgdir/album/file_5b7d280260f5e.png",
      CommodityName: "Smarts韩国创意",
      price: "280.00"
    },
    {
      url: "https://img.zhichiwangluo.com/zcimgdir/album/file_5b7d2831aeb03.png",
      CommodityName: "DIY韩国创意",
      price: "468.00"
    }
  ],
}

//百合花束
const Lily = [{
    url: "https://img.zhichiwangluo.com/zcimgdir/album/file_5b7d05b5363b5.png",
    CommodityName: "百合花尤加利叶",
    price: "268.00"
  },
  {
    url: "https://img.zhichiwangluo.com/zcimgdir/album/file_5b7d07a95245a.png",
    CommodityName: "百合花尤加利叶",
    price: "280.00"
  },
  {
    url: "https://img.zhichiwangluo.com/zcimgdir/album/file_5b7d09e41eb83.jpg",
    CommodityName: "百合花尤加利叶",
    price: "368.00"
  },
  {
    url: "https://img.zhichiwangluo.com/zcimgdir/album/file_5b7d09a91b51d.png",
    CommodityName: "百合花尤加利叶",
    price: "380.00"
  }
]

//玫瑰花束
const rose = {
  one: [{
      url: "https://img.zhichiwangluo.com/zcimgdir/thumb/t_15341561475b715d730ae09.png",
      CommodityName: "玫瑰灰小兔",
      Price: "268.00"
    },
    {
      url: "https://img.zhichiwangluo.com/zcimgdir/album/file_5b7d1121316f9.png",
      CommodityName: "玫瑰红小兔",
      Price: "280.00"
    },
    {
      url: "https://img.zhichiwangluo.com/zcimgdir/album/file_5b715ee5e7d86.png",
      CommodityName: "玫瑰小灰兔",
      Price: "368.00"
    },
    {
      url: "https://img.zhichiwangluo.com/zcimgdir/album/file_5b6d316ccaff0.png",
      CommodityName: "永生花告白兔",
      Price: "380.00"
    }
  ],
  tow: [{
      url: "https://img.zhichiwangluo.com/zcimgdir/album/file_5b7cffd121386.png",
      CommodityName: "玫瑰灰小兔",
      price: "268.00"
    },
    {
      url: "https://img.zhichiwangluo.com/zcimgdir/album/file_5b7cffc3c5f74.png",
      CommodityName: "玫瑰红小兔",
      price: "280.00"
    },
    {
      url: "https://img.zhichiwangluo.com/zcimgdir/album/file_5b7cffca34672.png",
      CommodityName: "玫瑰小灰兔",
      price: "368.00"
    },
    {
      url: "https://img.zhichiwangluo.com/zcimgdir/album/file_5b7cfff57cd01.png",
      CommodityName: "永生花告白兔",
      price: "380.00"
    }
  ],
}

//向日葵花束
const Sunflower = [{
    url: "https://img.zhichiwangluo.com/zcimgdir/album/file_5b7d3a1c6efe0.png",
    CommodityName: "向日葵",
    price: "268.00"
  },
  {
    url: "https://img.zhichiwangluo.com/zcimgdir/album/file_5b7d3a7053bc2.png",
    CommodityName: "向日葵",
    price: "280.00"
  },
  {
    url: "https://img.zhichiwangluo.com/zcimgdir/album/file_5b7d391d89efe.png",
    CommodityName: "向日葵",
    price: "368.00"
  },
  {
    url: "https://img.zhichiwangluo.com/zcimgdir/album/file_5b7d365b5e3e0.png",
    CommodityName: "向日葵",
    price: "380.00"
  }
]

//郁金香花束
const tulips = [{
    url: "https://img.zhichiwangluo.com/zcimgdir/album/file_5b7d3c1ebf727.png",
    CommodityName: "粉白色郁金香",
    price: "268.00"
  },
  {
    url: "https://img.zhichiwangluo.com/zcimgdir/album/file_5b7d3cc1345f6.png",
    CommodityName: "粉白色郁金香",
    price: "280.00"
  },
  {
    url: "https://img.zhichiwangluo.com/zcimgdir/album/file_5b7d3d0581a22.png",
    CommodityName: "粉白色郁金香",
    price: "368.00"
  },
  {
    url: "https://img.zhichiwangluo.com/zcimgdir/album/file_5b7d3c1ebf727.png",
    CommodityName: "粉白色郁金香",
    price: "380.00"
  }
]

//购物车数据
const cart = [{
    url: "http://img.zhichiwangluo.com/zcimgdir/album/file_5b4f0b5d8b631.png",
    CommodityName: "芍药郁金香混搭",
    price: "468.00",
    amount: 2,
    checked: false
  },
  {
    url: "https://img.zhichiwangluo.com/zcimgdir/album/file_5b7d1429e9592.png",
    CommodityName: "永生花盒",
    price: "158.00",
    amount: 1,
    checked: false
  }
]

//homeIcon
const homeIcon = [{
    url: 'https://img.zhichiwangluo.com/zcimgdir/album/file_5b71390a0f5b0.png',
    content: '七夕特惠'
  },
  {
    url: 'https://img.zhichiwangluo.com/zcimgdir/album/file_5b71390c6645e.png',
    content: '生日鲜花'
  },
  {
    url: 'https://img.zhichiwangluo.com/zcimgdir/album/file_5b71390f1bfe5.png',
    content: '送父母'
  },
  {
    url: 'https://img.zhichiwangluo.com/zcimgdir/album/file_5b713911989e0.png',
    content: '开业商务'
  },
]

//home七夕特惠图
const homePreferential = [{
    url: 'https://img.zhichiwangluo.com/zcimgdir/album/file_5b715ee5e7d86.png'
  },
  {
    url: 'https://img.zhichiwangluo.com/zcimgdir/album/file_5b715d04bc78e.png'
  },
  {
    url: 'https://img.zhichiwangluo.com/zcimgdir/thumb/t_15341561475b715d730ae09.png'
  }
]


// //优惠券计算方式
// const coupon = [{
//     name: "不使用优惠",
//     AmountMoney: 0,
//     tiaojian: 0
//   },
//   {
//     name: "50元代金券(抵扣50元)",
//     AmountMoney: 50,
//     tiaojian: 0
//   },
//   {
//     name: "倾城花艺会员卡(打8.5折)",
//     AmountMoney: 0.85,
//     tiaojian: 0
//   }
// ]

//优惠券折扣
const couponDiscount = [{
    url: 'https://img.zhichiwangluo.com/zcimgdir/thumb/t_15341543225b715652321b5.png',
    price: 20,
    satisfyPrice: 88,
    title: '满88抵扣20元'
  },
  {
    url: 'https://img.zhichiwangluo.com/zcimgdir/thumb/t_15341543225b715652321b5.png',
    price: 50,
    satisfyPrice: 128,
    title: '满128抵扣50元'
  },
  {
    url: 'https://img.zhichiwangluo.com/zcimgdir/thumb/t_15341543225b715652321b5.png',
    price: 80,
    satisfyPrice: 188,
    title: '满188抵扣80元'
  }
]

//店铺信息图片
const shopImg = [{
    url: 'https://img.zhichiwangluo.com/zcimgdir/album/file_5b6d70f344b69.png'
  },
  {
    url: 'https://img.zhichiwangluo.com/zcimgdir/album/file_5b6d7120bc440.png'
  }
]
//店铺地址
const shopAddress = {
  src: 'https://img.zhichiwangluo.com/zcimgdir/album/file_5b7143fa5b9e9.png',
  src1: 'https://img.zhichiwangluo.com/zcimgdir/album/file_5b7147f866ba0.png',
  address: '四川省成都市高新区天府大道北段1700号天府软件园A1栋',
  name: '倾城花艺'
}

//店铺电话
const shoptel = {
  src: 'https://img.zhichiwangluo.com/zcimgdir/album/file_5b714435a7458.png',
  tel: '400-078-9990'
}

//店铺信息
const shopInfo = {
  content: '倾城花店于2015年成立，创造了“线上订阅+产地直送+增值服务”的日常鲜花订阅模式，推出99元鲜花包月套餐（每周送1次，一个月送4次）。从鲜花供应链的下游做起，    逐步渗透到中游的分拣、上游的采购种植等环节，并自建花田，鲜花的质量和价格有了可靠的保障。',
  worker: '营业时间：周一至周日  09:00-22:00'
}


//首页轮播下icon合集
const Collection = [{
    name: '七夕特惠',
    data: rose.one
  },
  {
    name: '生日鲜花',
    data: birthday
  },
  {
    name: '送父母',
    data: birthday
  },
  {
    name: '开业商务',
    data: BusinessBusiness
  }
]

//分类数据合集
const Classification = [{
    name: 'Rose',
    data: rose.tow
  },
  {
    name: 'Lily',
    data: Lily
  },
  {
    name: 'Babysbreath',
    data: babysbreath
  },
  {
    name: 'Sunflower',
    data: Sunflower
  },
  {
    name: 'Tulip',
    data: tulips
  }
]

//首页标题两旁icon
const titleIcon = 'https://img.zhichiwangluo.com/zcimgdir/album/file_5b725daedef81.png'

//用户地址信息
const userinfo = [{
    name: '小小天艺',
    tel: 17396213562,
    address: '四川省成都市高新区天府大道北段1700号天府软件园A1栋',
  },
  {
    name: '茶白',
    tel: 17396213562,
    address: '四川省成都市高新区天府大道北段1700号天府软件园A1栋',
  }
]

//待发货订单 
const waitSendOder = [{
    name: '小小天艺',
    tel: 17396213562,
    address: '四川省成都市高新区天府大道北段1700号天府软件园A1栋',
    time: '2018-12-12 22:17:17',
  },
  [{
    CommodityName: "芍药郁金香混搭",
    amount: 1,
    checked: true,
    price: "468.00",
    url: "http://img.zhichiwangluo.com/zcimgdir/album/file_5b4f0b5d8b631.png"
  }],
  {
    price: 0,
    title: "不使用优惠券"
  }
]

// //获取当前系统时间
// const getTime = () => {
//   let date = new Date();
//   let year = date.getFullYear();
//   let month = date.getMonth() + 1;
//   let day = date.getDate();
//   let hour = date.getHours();
//   let minute = date.getMinutes();
//   let second = date.getSeconds();
//   return year + '-' + month + '-' + day + ' ' + hour + ':' + minute + ':' + second;
// }
// console.log(getTime());




//获取man天星babysbreath
router.get('/babysbreath', (req, res) => {
  res.send(babysbreath);
});

//获取轮播图
router.get('/getRotation', (req, res) => {
  res.send(homeData.imgUrls);
})

//获取首页Icon图标
router.get('/homeIcon', (req, res) => {
  res.send(homeIcon);
})

//获取首页title图标
router.get('/titleIcon', (req, res) => {
  res.send(titleIcon);
});

//获取首页七夕特惠图
router.get('/homePreferential', (req, res) => {
  res.send(homePreferential);
});

//获取优惠券折扣
router.get('/couponDiscount', (req, res) => {
  res.send(couponDiscount);
});

//获取特价商品
router.get('/specialOffer', (req, res) => {
  res.send(homeData.tejia);
});

//获取拼团专区
router.get('/groupBuying', (req, res) => {
  res.send(homeData.pintuan);
});

//获取新品专区
router.get('/newGoods', (req, res) => {
  res.send(homeData.newproduct);
});

//获取礼盒专区
router.get('/giftBox', (req, res) => {
  res.send(homeData.lihe);
});

//获取奢宠专区
router.get('/extravagant', (req, res) => {
  res.send(homeData.shechong);
});

//获取分类专区
router.get('/classification', (req, res) => {
  res.send(classification);
});

//获取店铺信息
router.get('/shopInfo', (req, res) => {
  res.send([shopInfo, shopImg, shopAddress, shoptel]);
});

//获取购物车
router.get('/shopCar', (req, res) => {
  res.send(cart);
});
//获取轮播下icon列表详细信息
router.get('/gotexplicit', (req, res) => {
  const reqs = req.query.data;
  const record = Collection.find(item => item.name === reqs);
  res.send(record.data);
})

//获取分类页数据
router.get('/classificationData', (req, res) => {
  const {
    name
  } = req.query;
  const record = Classification.find(item => item.name === name);
  res.send(record.data);
});

//获取用户信息
router.get('/userinfo', (req, res) => {
  res.send(userinfo);
});

//获取待发货订单
router.get('/waitSendOder', (req, res) => {
  res.send(waitSendOder);
});









module.exports = router;