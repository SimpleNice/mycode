import Index from '@/views/Index'
import All from '@/views/All'
// import Article from '@/views/Article'
// import System from '@/views/System'
import userList from '@/components/user/list'
import userAdd from '@/components/user/add'
import userMember from '@/components/user/member'
import userLevel from '@/components/user/level'
import userDetail from '@/components/user/detail'
import Login from '@/views/login'
// import About from '@/views/about'
import AboutList from '@/components/about/list'
import AboutAdd from '@/components/about/add'
import CommunityList from '@/components/community/list' //社区列表
import CommunityTopic from '@/components/community/topic' //话题列表
import CommunityAddTopic from '@/components/community/addTopic' //新增修改话题
import CommunityAdd from '@/components/community/add' //新增修改社区
import CommunitySite from '@/components/community/site' //关键词过滤
import friendLinkList from '@/components/system/friendlink/list' //友情链接
import conditionList from '@/components/dataInformation/conditionList' //条件信息
import symptomList from '@/components/dataInformation/symptomList' //症状信息
import symptomAdd from '@/components/dataInformation/symptomAdd' //添加症状



const routers=[
	{
		path: '/',
		name: 'index',
    component: Index,
    show:false,
    meta: {
      label: '首页'
    }
  },
  {
		path: '/login',
		name: 'login',
    component: Login,
    show:false,
    meta: {
      label: '登录'
    }
  },
  {
		path: '/user',
		name: 'user',
    component: All,
    redirect: {name: 'userList'},
    show:true,
    meta: {
      label: '成员管理'
    },
    children: [
      {
        path: '/user/list',
        name: 'userList',
        component:userList,
        show:true,
        meta: {
          label: '用户列表'
        }
      },
      {
        path: '/user/member',
        name: 'userMember',
        component:userMember,
        show:true,
        meta: {
          label: '会员列表'
        }
      },
      {
        path: '/user/level',
        name: 'userLevel',
        component:userLevel,
        show:true,
        meta: {
          label: '用户权限'
        }
      },
      {
        path: '/user/add',
        name: 'userAdd',
        component:userAdd,
        show:true,
        meta: {
          label: '添加/编辑用户'
        }
      },
      {
        path: '/user/edit/:id(\\d+)',
        name: 'edit',
        redirect:{name:'userAdd'},
        show:false,
        meta: {
          label: '编辑用户'
        }
      },
      {
        path: '/user/detail/:id(\\d+)',
        name: 'detail',
        component:userDetail,
        show:false,
        meta: {
          label: '用户详细'
        }
      }
    ]
  },
  {
    path: '/community',
    name: 'community',
    component:All,
    show:true,
    meta:{
      label: '社区管理'
    },
    children:[{ 
      path: '/community/list',
      name: 'communityList',
      component: CommunityList,
      show:true,
      meta:{
        label: '社区列表'
      }
    },
    { 
      path: '/community/topic',
      name: 'communityTopic',
      component: CommunityTopic,
      show:true,
      meta:{
        label: '话题列表'
      }
    },
    { 
      path: '/community/addTopic',
      name: 'communityAddTopic',
      component: CommunityAddTopic,
      show:true,
      meta:{
        label: '新增修改话题'
      }
    },
    { 
      path: '/community/add',
      name: 'communityAdd',
      component: CommunityAdd,
      show:true,
      meta:{
        label: '新增修改社区'
      }
    },
    { 
      path: '/community/site',
      name: 'communitySite',
      component: CommunitySite,
      show:true,
      meta:{
        label: '关键词过滤'
      }
    },
  ]
  },
  {
    path: '/article',
    name: 'article',
    component: All,
    show:true,
    meta: {
      label: '文章管理'
    }
  },
  ,{
    path: '/dataInformation',
    name: 'DataInformation',
    component: All,
    show:true,
    meta: {
      label: '资料管理'
    },
    children:[
      {
        path: '/dataInformation/symptomList',
        name: 'symptomList',
        show: true,
        component: symptomList,
        meta:{
          label:'症状信息'
        }
      },
      {
        path: '/dataInformation/symptomAdd',
        name: 'symptomAdd',
        show: true,
        component: symptomAdd,
        meta:{
          label:'添加症状'
        }
      },
      {
        path: '/dataInformation/conditionList',
        name: 'conditionList',
        show: true,
        component: conditionList,
        meta:{
          label:'条件信息'
        }
      },
      {
        path: '/system/friendLink',
        name: 'friendLink',
        show: true,
        component: friendLinkList,
        meta:{
          label:'治疗信息'
        }
      },
    ]
  },{
    path:'/about',
    name:'about',
    show:true,
    component: All,
    redirect: {name: 'aboutList'},
    meta:{
      label:'关于我们'
    },
    children:[
    {
      path:'/about/list',
      name:'aboutList',
      show:true,
      component:AboutList,
      meta:{
        label:'文章列表'
      } 
    },
    {
      path:'/about/add',
      name:'aboutAdd',
      show:true,
      component:AboutAdd,
      meta:{
        label:'添加/编辑文章'
      }
    },
    {
      path: '/about/edit/:id(\\d+)',
      name: 'aboutEdit',
      redirect:{name:'aboutAdd'},
      show:false,
      meta: {
        label: '编辑文章'
      }
    }]
  },
  ,{
    path: '/system',
    name: 'System',
    component: All,
    show:true,
    meta: {
      label: '系統管理'
    },
    children:[
      {
        path: '/system/friendLink',
        name: 'friendLink',
        show: true,
        component: friendLinkList,
        meta:{
          label:'友情链接'
        }
      }
    ]
  }  
]
export default routers
