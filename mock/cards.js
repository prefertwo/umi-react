let data = [
  {
    id: 1,
    name: "umi",
    desc: "极快的类 Next.js 的 React 应用框架。",
    url: "https://umijs.org"
  },
  {
    id: 2,
    name: "antd",
    desc: "一个服务于企业级产品的设计体系。",
    url: "https://ant.design/index-cn"
  },
  {
    id: 3,
    name: "antd-pro",
    desc: "一个服务于企业级产品的设计体系。",
    url: "https://ant.design/index-cn"
  }
];

const delay = 250;

export default {
  "get /api/cards": function(req, res, next) {
    setTimeout(() => {
      res.json({
        code: 1008,
        result: data,
        message: "数据获取成功"
      });
    }, delay);
  },

  "delete /api/cards/:id": function(req, res, next) {
    data = data.filter(v => v.id !== parseInt(req.params.id));
    setTimeout(() => {
      res.json({
        code: 1008,
        success: true,
        message: "删除成功"
      });
    }, delay);
  },

  "post /api/cards/add": function(req, res, next) {
    data = [
      ...data,
      {
        ...req.body,
        id: data[data.length - 1].id + 1
      }
    ];

    res.json({
      code: 1008,
      success: true,
      message: "添加成功"
    });
  },

  "get /api/cards/:id/statistic": function(req, res, next) {
    res.json({
      code: 1008,
      result: [
        {
          genre: "Sports",
          sold: 740
        },
        {
          genre: "Strategy",
          sold: 1108
        },
        {
          genre: "Action",
          sold: 120
        },
        {
          genre: "Shooter",
          sold: 350
        },
        {
          genre: "Other",
          sold: 150
        }
      ],
      message: "数据获取成功"
    });
  }
};
