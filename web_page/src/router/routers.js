import IndexView from '@/components/Index'
import Patient from '@/components/Patient'
import Symptom from '@/components/Symptom'
import Expert from '@/components/Expert'
import Treatment from '@/components/Treatment'
import Error from '@/view/404'
const routers=[
    {
        path: '/',
        name: 'Index',
        component: IndexView,
        show:false,
        label:"首页"
    },{
        path: '/',
        name: 'PersonalCenter',
        component: IndexView,  
        show:true,
        logshow:true,
        label:"个人中心"
    },{
        path: '/',
        name: 'HealthStatus',
        component: IndexView,  
        show:true,
        logshow:true,
        label:"健康状态"
    },{
        path: '/patient',
        name: 'Patient',
        component: Patient,  
        show:true,
        logshow:false,
        label:"病友"
    },{
        path: '/',
        name: 'Community',
        component: IndexView,  
        show:true,
        logshow:true,
        label:"社区"
    },{
        path: '/symptom',
        name: 'Symptom',
        component: Symptom,
        show:true,
        logshow:false,
        label:"症状"
    },{
        path: '/expert',
        name: 'Expert',
        component: Expert,
        show:true,
        logshow:false,
        label:"专家"
    },{
        path: '/treatment',
        name: 'Treatment',
        component: Treatment,
        show:true,
        logshow:false,
        label:"治疗"
    },{
        path: '/',
        name: 'Aboutus',
        component: IndexView,
        show:true,
        logshow:false,
        label:"关于我们"
    },{
        path: '*',
        name:'404',
        component: Error
    }
]
export default routers