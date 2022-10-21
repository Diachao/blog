/*
 * @Author: your name
 * @Date: 2022-04-09 19:10:15
 * @LastEditTime: 2022-07-15 15:28:20
 * @LastEditors: error: git config user.name && git config user.email & please set dead value or install git
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \blog\modules\moal.config.js
 */
export default {
  'login': {
    title: '登录',
    id: 'form',
    updated:false,
    formType: "login",
    btns: [{
        targetName: 'close',
        name: '取消'
      },
      {
        isSubmit: true,
        targetName: 'confirm',
        name: '提交'
      }
    ]
  },
  'register': {
    title: '注册',
    id: 'form',
    updated:false,
    formType: "register",
    btns: [{
        targetName: 'close',
        name: '取消'
      },
      {
        isSubmit: true,
        targetName: 'confirm',
        name: '提交'
      }
    ]
  },
  'postColumn': {
    title: '添加分类',
    updated:true,
    formType: "postColumn",
    id: 'form',
    btns: [{
        targetName: 'close',
        name: '取消'
      },
      {
        isSubmit: true,
        targetName: 'confirm',
        name: '提交'
      }
    ]
  },
  'info': {
    title: '个人信息',
    id: 'form',
    formType: "info",
    btns: [{
        targetName: 'close',
        name: '取消'
      },
      {
        isSubmit: true,
        targetName: 'confirm',
        name: '提交'
      }
    ]
  },
}