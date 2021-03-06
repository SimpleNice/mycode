// 应用前缀名：避免同一个IP:PORT下，LocalStorage Key 同名造成冲突
const prefix = 'APP_'

export const STORAGE_KEY = {
  ACCOUNT: prefix + 'ACCOUNT_KEY', // 账户名 字段名
  TOKEN: prefix + 'SESSION_KEY',  // TOKEN 字段名
  'LAST_LOGIN_TIME': prefix + 'LAST_LOGIN_TIME', // 最近一次登陆成功的时间戳 字段名
  'ADDRESS': prefix+'ADDRESS'//存储省市区信息
}
export const ADDRESSLIST = []
export const MAX_LOGIN_AGE = 7.2 * 1000 * 1000