import Mock from 'mockjs'// es6语法引入mock模块

export default Mock.mock('http://test.cn', {// 输出数据
  code: 200,
  data: {
    'N|1-10': 10, // 随机生成姓名
    'M|1-10': 10
  }
})
