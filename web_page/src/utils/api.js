//接口入口地址:避免更改域名后多处修改请求地址
export const IP = "http://192.168.0.112:80"
//首页
export const INDEX = IP + ''      
//病友                      
export const PATIENTS = IP + ''   
//专家
export const EXPERT = IP + ''
/**
 * 治疗
 * SEARCH                             搜索
 * BROWSE                             浏览列表
 * OVERVIEW                           概观
 * OVERVIEW_LIKETYPE                  最受欢迎类型
 * OVERVIEW_EFFECTIVENESS             有效性
 * OVERVIEW_SIDEEFFECT_SYMPTOM        副作用相关症状
 * OVERVIEW_DOSE                      剂量
 * **/                      
export const TREATMENT = {                              
    SEARCH : IP + '',                         
    BROWSE : IP + '',                          
    OVERVIEW : IP + '',                       
    OVERVIEW_LIKETYPE : IP + '',              
    OVERVIEW_EFFECTIVENESS : IP +'',          
    OVERVIEW_SIDEEFFECT_SYMPTOM : IP + '',    
    OVERVIEW_DOSE : IP + ''                   
}

//登录
export const LOGIN = IP + '/account/login/username'

//检测用户名
export const USERNAME = IP + '/account/check/username'
//获取验证码
export const GETCODE = IP + '/account/sms/vcode'
//检测验证码
export const CHECKEDCODE = IP + '/account/check/vcode'
//注册账号
export const REGUSER = IP + '/account/register/mobile'
//找回密码
export const RECOVERPWD = IP + '/account/reset/password'
export const MSG = {
    SERVICE_FAIL: '后端接口服务异常，请刷新试试~' // 后端服务异常
}
//用户信息
export const USER = {
    PROFILE: IP + '/account/user/profile', //获取用户资料
    PERFECT: IP + '/account/user/perfect', //编辑用户资料
}
//省市县
export const ADDRESS={
    PROV: IP + '/account/province/list/',
    CITY: IP + '/account/city/list',
    AREA: IP + '/account/area/list',
}