import Index from '@/views/Index'
import User from '@/views/User'
import Article from '@/views/Article'
import System from '@/views/System'
import userList from '@/components/user/list'
import userAdd from '@/components/user/add'
import userLevel from '@/components/user/level'
import userDetail from '@/components/user/detail'
import Login from '@/views/login'
import About from '@/views/about'
import AboutList from '@/components/about/list'
import AboutAdd from '@/components/about/add'
import friendLinkList from '@/components/system/friendlink/list'



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
    component: User,
    redirect: {name: 'userList'},
    show:true,
    meta: {
      label: '用户管理'
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
    path: '/article',
    name: 'article',
    component: Article,
    show:true,
    meta: {
      label: '文章管理'
    }
  },{
    path:'/about',
    name:'about',
    show:true,
    component: About,
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
    component: System,
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
