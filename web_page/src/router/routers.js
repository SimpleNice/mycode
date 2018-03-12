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
        path: '/',
        name: 'PersonalCenter',
        component: IndexView,  
        show:true,
        logshow:true,
        label:"个人中心",
        link:"/"
    },{
        path: '/',
        name: 'HealthStatus',
        component: IndexView,  
        show:true,
        logshow:true,
        label:"健康状态",
        link:"/"
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