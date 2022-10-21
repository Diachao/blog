/*
 * @Author: your name
 * @Date: 2022-04-09 19:10:15
 * @LastEditTime: 2022-07-16 17:42:31
 * @LastEditors: error: git config user.name && git config user.email & please set dead value or install git
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \blog\modules\moal.config.js
 */
export default {
  'login':  [{
        label: "用户名",
        query: "username",
        type: "text",
        placeholder: "用户名: 6-8位 字母数字"
      },
      {
        label: "密码",
        query: "password",
        type: "password",
        placeholder: "密码: 8-12位 最少包含一位(数字/大小写字母)"
      }
    ],
    
  'register':  [{
        label: "用户名",
        query: "username",
        type: "text",
        placeholder: "用户名: 6-8位 字母数字"
      },
      {
        label: "密码",
        query: "password",
        type: "password",
        placeholder: "密码: 8-12位 最少包含一位(数字/大小写字母)"
      }
    ],
  'postColumn':  [{
      label: "名称",
      query: "name",
      type: "text",
      placeholder: "所填加的名称"
    }],
  'info': [{
        label: "用户名",
        query: "username",
        readonly: true,
        type: "text",
        placeholder: "用户名: 6-8位 字母数字",
        value: "",
      },
      {
        label: "昵称",
        query: "nikname",
        type: "text",
        placeholder: "昵称",
        value: ""
      },{
        label: "头像",
        query: "avatar",
        type: "avatar",
      },
      {
        label: "邮箱",
        query: "email",
        type: "text",
        placeholder: "请输入邮箱地址",
        value: ""
      },
      {
        label: "签名",
        query: "signature",
        type: "text",
        placeholder: "请输入你的个性签名",
        value: ""
      },
    ],
}