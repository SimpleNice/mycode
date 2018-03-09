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


export const MSG = {
    SERVICE_FAIL: '后端接口服务异常，请刷新试试~' // 后端服务异常
}