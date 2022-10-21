/*
 * @Author: error: git config user.name && git config user.email & please set dead value or install git
 * @Date: 2022-07-12 00:33:04
 * @LastEditors: error: git config user.name && git config user.email & please set dead value or install git
 * @LastEditTime: 2022-07-26 16:58:10
 * @FilePath: \Vue第二十七天 Vue高级  Vue  vue-blog forceUpdate nextTick $set 分类添加 细节优化\司文超--vue---第二十六天\vue-blog\src\config\validate.config.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
export default {
  username: [
    { pattern: /^(?!\d+$)(?![a-zA-Z]+$)[a-zA-Z0-9]{6,8}$/, message: '账号格式 数字+字母 6-8位', trigger: 'blur' },
    { required: true, message: '账号必填', trigger: 'blur' }
],
  email: [
    { required: true, message: '邮箱必填', trigger: 'blur' },
    { type: 'email', message: '请输入正确的邮箱格式', trigger: 'blur' }],
  password: [
    { required: true, message: '密码必填', trigger: 'blur' },
    { pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d!.#*?&]{8,12}$/, message: '密码格式 至少包含大写字母+小写字母+数字 8-12位', trigger: 'blur' },
],
    name: [
      { required: true, message: '分类必填', trigger: 'blur' }],
}