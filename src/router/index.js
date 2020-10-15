import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

/* Layout */
import Layout from '@/layout'

/**
 * Note: sub-menu only appear when route children.length >= 1
 * Detail see: https://panjiachen.github.io/vue-element-admin-site/guide/essentials/router-and-nav.html
 *
 * hidden: true                   if set true, item will not show in the sidebar(default is false)
 * alwaysShow: true               if set true, will always show the root menu
 *                                if not set alwaysShow, when item has more than one children route,
 *                                it will becomes nested mode, otherwise not show the root menu
 * redirect: noRedirect           if set noRedirect will no redirect in the breadcrumb
 * name:'router-name'             the name is used by <keep-alive> (must set!!!)
 * meta : {
    roles: ['admin','editor']    control the page roles (you can set multiple roles)
    title: 'title'               the name show in sidebar and breadcrumb (recommend set)
    icon: 'svg-name'/'el-icon-x' the icon show in the sidebar
    breadcrumb: false            if set false, the item will hidden in breadcrumb(default is true)
    activeMenu: '/example/list'  if set path, the sidebar will highlight the path you set
  }
 */

/**
 * constantRoutes
 * a base page that does not have permission requirements
 * all roles can be accessed
 */
export const constantRoutes = [
  {
    path: '/login',
    component: () => import('@/views/login'),
    hidden: true
  },

  {
    path: '/404',
    component: () => import('@/views/404'),
    hidden: true
  },

  {
    path: '/',
    component: Layout,
    redirect: '/dashboard',
    children: [{
      path: 'dashboard',
      name: 'Dashboard',
      component: () => import('@/views/dashboard/index'),
      meta: { title: '仪表盘', icon: 'dashboard' }
    }]
  },
  {
    path: '/configuration',
    component: Layout,
    redirect: '/configuration/network-share',
    name: 'Configuration',
    meta: { title: '配置', icon: 'config' },
    children: [
      {
        path: 'network-share',
        name: 'NetworkShare',
        component: () => import('@/views/config/components/NetworkShare'),
        meta: { title: '网络分享', icon: 'network-share' }
      },
      {
        path: 'phone-config',
        name: 'PhoneConfig',
        component: () => import('@/views/config/components/PhoneConfig'),
        meta: { title: '手咪配置', icon: 'phone-config' }
      },
      {
        path: 'data-business',
        name: 'DataBusiness',
        component: () => import('@/views/config/components/DataBusiness'),
        meta: { title: '数据业务', icon: 'data-business' }
      },
      {
        path: 'traffic-statistics',
        name: 'TrafficStatistics',
        component: () => import('@/views/config/components/TrafficStatistics'),
        meta: { title: '流量统计', icon: 'traffic-statistics' }
      },
      {
        path: 'sos-config',
        name: 'SOSConfig',
        component: () => import('@/views/config/components/SOSConfig'),
        meta: { title: 'SOS配置', icon: 'sos-config' }
      },
      {
        path: 'vpn-config',
        name: 'VPNConfig',
        component: () => import('@/views/config/components/VPNConfig'),
        meta: { title: 'VPN配置', icon: 'vpn-config' }
      },
      {
        path: 'firewall-config',
        name: 'FirewallConfig',
        component: () => import('@/views/config/components/FirewallConfig'),
        meta: { title: '防火墙配置', icon: 'firewall-config' }
      },
      {
        path: 'other-config',
        name: 'OtherConfig',
        component: () => import('@/views/config/components/OtherConfig'),
        meta: { title: '其他配置', icon: 'other-config' }
      },
      {
        path: 'firmware-update',
        name: 'FirmwareUpdate',
        component: () => import('@/views/config/components/FirmwareUpdate'),
        meta: { title: '升级固件', icon: 'firmware-update' }
      },
      {
        path: 'restore-config',
        name: 'RestoreConfig',
        component: () => import('@/views/config/components/RestoreConfig'),
        meta: { title: '回复默认设置', icon: 'restore-config' }
      },
      {
        path: 'reboot-device',
        name: 'RebootDevice',
        component: () => import('@/views/config/components/RebootDevice'),
        meta: { title: '重启设备', icon: 'reboot-device' }
      },
      {
        path: 'about-device',
        name: 'AboutDevice',
        component: () => import('@/views/config/components/AboutDevice'),
        meta: { title: '关于设备', icon: 'about-device' }
      }
    ]
  },
  {
    path: '/message',
    component: Layout,
    children: [
      {
        path: 'index',
        name: 'Message',
        component: () => import('@/views/message/index'),
        meta: { title: '短信', icon: 'message' }
      }
    ]
  },
  {
    path: '/contact',
    component: Layout,
    children: [
      {
        path: 'index',
        name: 'Contact',
        component: () => import('@/views/contact/index'),
        meta: { title: '联系人', icon: 'peoples' }
      }
    ]
  },
  {
    path: '/record',
    component: Layout,
    children: [
      {
        path: 'index',
        name: 'Record',
        component: () => import('@/views/record/index'),
        meta: { title: '通信记录', icon: 'form' }
      }
    ]
  },
  // 404 page must be placed at the end !!!
  { path: '*', redirect: '/404', hidden: true }
]

const createRouter = () => new Router({
  // mode: 'history', // require service support
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRoutes
})

const router = createRouter()

// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // reset router
}

export default router
