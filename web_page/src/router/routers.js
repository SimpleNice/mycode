import IndexView from '@/components/Index'
import Patient from '@/components/Patient'
import Symptom from '@/components/Symptom'
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
//健康状态
import Health from '@/components/Health' //健康状态
import myInformation from '@/components/health/myInformation' //我的信息
import HealthDiary from '@/components/health/healthDiary' //健康日记
import Majorillness from '@/components/health/majorillness' //主要病症
import MyChart from '@/components/health/myChart'//我的图标
import MySymptoms from '@/components/health/mySymptoms' //我的症状
import MyTreatment from '@/components/health/myTreatment'//我的治疗
import CheckingData from '@/components/health/checkingData' //检查记录
import Assess from '@/components/health/assess'//评估
import Error from '@/view/404'
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
                show:false,
                logshow:false,
                label:"检查记录",
                link:"/health/checkingData",
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
                component: myInformation,
                show:false,
                logshow:false,
                label:"我的症状",
                link:"/health/mySymptoms",
            },
            {
                path: '/health/myTreatment',
                name: 'MyTreatment',
                component: MyTreatment,
                show:false,
                logshow:false,
                label:"我的治疗",
                link:"/health/myTreatment",
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
        path: '/',
        name: 'Community',
        component: IndexView,  
        show:true,
        logshow:true,
        label:"社区",
        link:"/"
    },{
        path: '/symptom',
        name: 'Symptom',
        component: Symptom,
        show:true,
        logshow:false,
        label:"症状",
        link:"/symptom"
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
                path: '/treatment/survey',
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
        path: '*',
        name:'404',
        component: Error,
        link:"/"
    }
]
export default routers