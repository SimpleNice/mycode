// 应用前缀名：避免同一个IP:PORT下，LocalStorage Key 同名造成冲突
const prefix = 'APP_'

export const STORAGE_KEY = {
  ACCOUNT: prefix + 'ACCOUNT_KEY', // 账户名 字段名
  TOKEN: prefix + 'SESSION_KEY',  // TOKEN 字段名
  'LAST_LOGIN_TIME': prefix + 'LAST_LOGIN_TIME', // 最近一次登陆成功的时间戳 字段名
  'ADDRESSLIST': prefix+'ADDRESSLIST'//存储省市区信息
}
// //控制页面TABS状态防止刷新后TABS页显示错误
// export const PAGE_STATUS = {
//   TREATMENT_STATUS:prefix　+ 'TREATMENT_STATUS', //治疗页面TABS显示状态
// }
export const ADDRESSLIST = []
export const MAX_LOGIN_AGE = 7.2 * 1000 * 1000
//个人中心标签标识
export const PERSONAL = {
  PANEL:'PERSONAL_PANEL'
}