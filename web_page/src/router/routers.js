import IndexView from '@/components/Index'
import Patient from '@/components/Patient'
import Symptom from '@/components/Symptom'
import SymptomList from '@/components/Symptom/index'
import SymptomSurvey from '@/components/Symptom/survey'
import Expert from '@/components/Expert'
import Treatment from '@/components/Treatment'
import TreatmentList from '@/components/Treatment/browse'
import TreatmentSearch from '@/components/Treatment/search'
import TreatmentSurvey from '@/components/Treatment/survey'
import Login from '@/components/acc/login'
import Reg from '@/components/acc/reg'
import RecoverPwd from '@/components/acc/recoverPwd'
import PersonalCenter from '@/components/PersonalCenter'
// import SearchSel from '@/components/searchSel'
import Health from '@/components/Health' //健康状态
import myInformation from '@/components/health/myInformation' //我的信息
import HealthDiary from '@/components/health/healthDiary' //健康日记
import Majorillness from '@/components/health/majorillness' //主要病症
import MyChart from '@/components/health/myChart'//我的图标
import CheckingData from '@/components/health/checkingData' //检查记录
import CheckingDataAll from '@/components/health/checkingData/all' //所有检查记录
import CheckingDataList from '@/components/health/checkingData/index' //检查记录
import CheckingDataHistory from '@/components/health/checkingData/history' //检查历史
import MySymptoms from '@/components/health/mySymptoms' //我的症状
import mySymptomsList from '@/components/health/symptoms/index' //我的症状列表
import mySymptomsUpdate from '@/components/health/symptoms/edit' //我的症状列表
import mySymptomsHistory from '@/components/health/symptoms/history' //我的症状列表
import MyTreatment from '@/components/health/myTreatment'//我的治疗
import myTreatmentIndex from '@/components/health/mytreatment/index'//我的治疗--首页
import myTreatmentEvaluate from '@/components/health/mytreatment/evaluate'//我的治疗--评估
import myTreatmentHistory from '@/components/health/mytreatment/history'//我的治疗--历史
import Assess from '@/components/health/assess'//评估
import Error from '@/view/404'
import HomePage from '@/view/homePage'
import Community from '@/components/community'
import CommunityIndex from '@/components/community/index'
import CommunityCodeOfConduct from '@/components/community/codeOfConduct'
import CommunityManage from '@/components/community/manage'
import CommunityMyTopic from '@/components/community/myTopic'
import CommunityTopicContent from '@/components/community/topicContent'
import CommunityMyCommunity from '@/components/community/myCommunity'
import CommunityUpdate from '@/components/community/update'
const routers=[
    {
        path: '/',
        name: 'Index',
        component: IndexView,
        show:false,
        label:"首页",
        link:"/"
    },{
        path: '/PersonalCenter',
        name: 'PersonalCenter',
        component: PersonalCenter,  
        show:true,
        logshow:true,
        label:"个人中心",
        link:"/PersonalCenter"
    },{
        path: '/health',
        name: 'Health',
        component: Health,
        redirect: '/health/myInformation',  
        show:true,
        logshow:true,
        label:"健康状态",
        link:"/health",
        children:[
            {
                path: '/health/myInformation',
                name: 'MyInformation',
                component: myInformation,
                show:false,
                logshow:false,
                label:"我的信息",
                link:"/health/myInformation",
            },
            {
                path: '/health/majorillness',
                name: 'Majorillness',
                component: Majorillness,
                show:false,
                logshow:false,
                label:"主要病症",
                link:"/health/majorillness",
            },
            {
                path: '/health/healthDiary',
                name: 'HealthDiary',
                component: HealthDiary,
                show:false,
                logshow:false,
                label:"健康日记",
                link:"/health/healthDiary",
            },
            {
                path: '/health/checkingData',
                name: 'CheckingData',
                component: CheckingData,
                redirect: '/health/checkingData/list',  
                show:false,
                logshow:false,
                label:"检查记录",
                link:"/health/checkingData",
                children:[
                    {
                        path: '/health/checkingData/list',
                        name: 'CheckingDataList',
                        component: CheckingDataList,
                        show:false,
                        logshow:false,
                        label:"检查记录列表",
                        link:"/health/checkingData/list",
                    },
                    {
                        path: '/health/checkingData/all',
                        name: 'CheckingDataAll',
                        component: CheckingDataAll,
                        show:false,
                        logshow:false,
                        label:"所有的检查项",
                        link:"/health/checkingData/all",
                    },
                    {
                        path: '/health/checkingData/history/:id',
                        name: 'CheckingDataHistory',
                        component: CheckingDataHistory,
                        show:false,
                        logshow:false,
                        label:"检查历史",
                        link:"/health/checkingData/history",
                    }
                ]
            },
            {
                path: '/health/myChart',
                name: 'MyChart',
                component: MyChart,
                show:false,
                logshow:false,
                label:"我的图表",
                link:"/health/myChart",
            },
            {
                path: '/health/mySymptoms',
                name: 'MySymptoms',
                component: MySymptoms,
                redirect: '/health/mySymptoms/list',
                show:false,
                logshow:false,
                label:"我的症状",
                link:"/health/mySymptoms",
                children:[
                    {
                        path: '/health/mySymptoms/list',
                        name: 'mySymptomsList',
                        component: mySymptomsList,
                        show:false,
                        logshow:false,
                        label:"检查记录列表",
                        link:"/health/mySymptoms/list",
                    },
                    {
                        path: '/health/mySymptoms/update',
                        name: 'mySymptomsUpdate',
                        component: mySymptomsUpdate,
                        show:false,
                        logshow:false,
                        label:"更新我的症状",
                        link:"/health/mySymptoms/update",
                    },{
                        path: '/health/mySymptoms/history/:id',
                        name: 'mySymptomsHistory',
                        component: mySymptomsHistory,
                        show:false,
                        logshow:false,
                        label:"更新我的症状",
                        link:"/health/mySymptoms/history",
                    }
                ]
            },
            {
                path: '/health/myTreatment',
                name: 'MyTreatment',
                component: MyTreatment,
                redirect: '/health/myTreatment/index',
                show:false,
                logshow:false,
                label:"我的治疗",
                link:"/health/myTreatment",
                children:[
                    {
                        path: '/health/myTreatment/index',
                        name: 'myTreatmentIndex',
                        component: myTreatmentIndex,
                        show:false,
                        logshow:false,
                        label:"首页",
                        link:"/health/myTreatment/index",
                    },
                    {
                        path: '/health/myTreatment/history/:id',
                        name: 'myTreatmentHistory',
                        component: myTreatmentHistory,
                        show:false,
                        logshow:false,
                        label:"跟踪历史",
                        link:"/health/myTreatment/history",
                    },
                    {
                        path: '/health/myTreatment/evaluate/:id',
                        name: 'myTreatmentEvaluate',
                        component: myTreatmentEvaluate,
                        show:false,
                        logshow:false,
                        label:"评估",
                        link:"/health/myTreatment/evaluate",
                    },
                ]
            },
            {
                path: '/health/assess',
                name: 'Assess',
                component: Assess,
                show:false,
                logshow:false,
                label:"评估",
                link:"/health/assess",
            },
        ]
    },{
        path: '/patient',
        name: 'Patient',
        component: Patient,  
        show:true,
        logshow:false,
        label:"病友",
        link:"/patient"
    },{
        path: '/community',
        name: 'Community',
        component: Community,  
        redirect: '/community/index/:id?',
        show:true,
        logshow:true,
        label:"社区",
        link:"/community",
        children:[
            {
                path: '/community/index/:id?',
                name: 'CommunityIndex',
                component: CommunityIndex,  
                show:false,
                logshow:false,
                label:"社区首页",
                link:"/community/index",
            },
            {
                path: '/community/codeOfConduct',
                name: 'CommunityCodeOfConduct',
                component: CommunityCodeOfConduct,  
                show:false,
                logshow:false,
                label:"行为守则",
                link:"/community/codeOfConduct", 
            },
            {
                path: '/community/topicContent/:id',
                name: 'CommunityTopicContent',
                component: CommunityTopicContent,  
                show:false,
                logshow:false,
                label:"话题内容",
                link:"/community/topicContent", 
            },
            {
                path: '/community/update/:id?',
                name: 'CommunityUpdate',
                component: CommunityUpdate,  
                show:false,
                logshow:false,
                label:"编辑/新增话题",
                link:"/community/update", 
            },
            {
                path: '/community/manage',
                name: 'CommunityManage',
                component: CommunityManage,
                redirect: '/community/manage/myCommunity',  
                show:false,
                logshow:false,
                label:"管理我的论坛和话题",
                link:"/community/manage", 
                children:[
                    {
                        path: '/community/manage/myCommunity',
                        name: 'CommunityMyCommunity',
                        component: CommunityMyCommunity,  
                        show:false,
                        logshow:false,
                        label:"我的社区",
                        link:"/community/manage/myCommunity", 
                    },
                    {
                        path: '/community/manage/myTopic',
                        name: 'CommunityMyTopic',
                        component: CommunityMyTopic,  
                        show:false,
                        logshow:false,
                        label:"我的话题",
                        link:"/community/manage/myTopic", 
                    }
                ]
            }
        ]
    },{
        path: '/symptom',
        name: 'Symptom',
        component: Symptom,
        redirect:'/symptom/index',  
        show:true,
        logshow:false,
        label:"症状",
        link:"/symptom",
        children:[
            {
                path: '/symptom/index',
                name: 'SymptomList',
                component: SymptomList,
                show:false,
                logshow:false,
                label:"症状",
                link:"/symptom/index"
            },{
                path: '/symptom/survey/:id',
                name: 'SymptomSurvey',
                component: SymptomSurvey,
                show:false,
                logshow:false,
                label:"评估报告",
                link:"/symptom/survey"
            }
        ]
    },{
        path: '/expert',
        name: 'Expert',
        component: Expert,
        show:true,
        logshow:false,
        label:"专家",
        link:"/expert"
    },{
        path: '/treatment',
        name: 'Treatment',
        redirect: '/treatment/search',
        component: Treatment,
        show:true,
        logshow:false,
        label:"治疗",
        link:"/treatment",
        children:[
            {
                path: '/treatment/search',
                name: 'TreatmentSearch',
                component: TreatmentSearch,
                show:false,
                logshow:false,
                label:"搜索",
                link:"/treatment/search",
            },
            {
                path: '/treatment/list',
                name: 'TreatmentList',
                component: TreatmentList,
                show:false,
                logshow:false,
                label:"浏览列表",
                link:"/treatment/list",
            },
            {
                path: '/treatment/survey/:id',
                name: 'TreatmentSurvey',
                component: TreatmentSurvey,
                show:false,
                logshow:false,
                label:"概观",
                link:"/treatment/survey",
            }
        ]
    },{
        path: '/login',
        name: 'login',
        component:Login,
        show:false,
        logshow:false,
        label: "登录",
        link: "/login"
    },{
        path: '/reg',
        name: 'reg',
        component:Reg,
        show:false,
        logshow:false,
        label: "注册",
        link: "/reg"
    },{
        path: '/recoverPwd',
        name: 'recoverPwd',
        component:RecoverPwd,
        show:false,
        logshow:false,
        label: "找回密码",
        link: "/recoverPwd"
    },{
        path: '/',
        name: 'Aboutus',
        component: IndexView,
        show:true,
        logshow:false,
        label:"关于我们",
        link:"/"
    },{
        path: '/homepage/:id',
        name: 'HomePage',
        component: HomePage,
        show:false,
        logshow:false,
        label:"个人主页",
        link:"/homepage"
    },{
        path: '*',
        name:'404',
        component: Error,
        link:"/"
    }
]
export default routers