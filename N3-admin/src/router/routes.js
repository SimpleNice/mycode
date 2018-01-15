import Index from '@/views/Index'
import User from '@/views/User'
import Article from '@/views/Article'
import System from '@/views/System'
import userList from '@/components/user/list'
import userAdd from '@/components/user/add'
import userLevel from '@/components/user/level'
import Login from '@/views/login'

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
		name: 'userlist',
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
        path: '/user/add',
        name: 'userAdd',
        component:userAdd,
        show:true,
        meta: {
          label: '添加用户'
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
        path: '/user/edit/:id(\\d+)',
        name: 'edit',
        component:userAdd,
        show:false,
        meta: {
          label: '编辑用户'
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
  },
  ,{
		path: '/system',
		name: 'system',
    component: System,
    show:true,
    meta: {
      label: '系統管理'
    }
  }  
]
export default routers
