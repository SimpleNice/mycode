//接口入口地址:避免更改域名后多处修改请求地址
const IP = ""
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

