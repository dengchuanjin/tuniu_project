import Comment from '@/components/public/Comment'//公用页面
import AgenciesDetail from '@/components/Agencies/AgenciesDetail'//跟团游详情页
import AdminLogin from '@/components/AdminLogin'//登录
import Register from '@/components/Register'//游客注册
import AgenciesHome from '@/components/Agencies/AgenciesHome'//跟团游首页
import MerchantRegister from '@/components/VendorRegistration/MerchantRegister'//供应商注册

import FillInOrder from '@/components/Agencies/FillInOrder'//填写订单
import PersonalCenter from '@/components/PersonakCenterFolder/PersonalCenter'//个人中心
import MyTourOrder from '@/components/PersonakCenterFolder/MyTourOrder'//我的订单
import PersonalDataDetails from '@/components/PersonakCenterFolder/PersonalDataDetails'//个人信息
import UpdatePassword from '@/components/PersonakCenterFolder/UpdatePassword'//修改密码
import PaymentPlatform from '@/components/public/PaymentPlatform'//订单支付的类型
import MyOrderQRCode from '@/components/MyOrderQRCode'//二维码付款
import MyOrderDetails from '@/components/PersonakCenterFolder/MyOrderDetails'//订单详情
import MyCollection from '@/components/PersonakCenterFolder/MyCollection' //我的收藏
import CommentOnAComment from '@/components/Agencies/CommentOnAComment' //发表评论


//微信支付


import AdmissionTicketHomePage from '@/components/Tickets/AdmissionTicketHomePage'//门票首页
import TicketsDetail from '@/components/Tickets/TicketsDetail'//门票详情
import TicketsReserve from '@/components/Tickets/TicketsReserve'//门票预定


import HotelHomePage from '@/components/Hotel/HotelHomePage'//酒店首页
import HotelDetails from '@/components/Hotel/HotelDetails'//酒店详情页


export default [
  //发表评论
  {
    path: '/commentOnAComment',
    name: 'CommentOnAComment',
    component: CommentOnAComment
  },
  //订单支付的类型
  {
    path: '/paymentPlatform',
    name: 'PaymentPlatform',
    component: PaymentPlatform
  },
  //门票预定
  {
    path: '/ticketsReserve',
    name: 'TicketsReserve',
    component: TicketsReserve
  },
  //二维码支付订单
  {
    path: '/myOrderQRCode',
    name: 'MyOrderQRCode',
    component: MyOrderQRCode
  },
  //订单详情
  {
    path: '/myOrderDetails',
    name: 'MyOrderDetails',
    component: MyOrderDetails
  },
  //供应商注册
  {
    path: '/merchantRegister',
    name: 'MerchantRegister',
    component: MerchantRegister
  },
  //个人中心
  {
    path: '/personalCenter',
    name: 'PersonalCenter',
    component: PersonalCenter,
    children: [
      //我的订单
      {
        path: 'myTourOrder',
        components: {
          default: Comment,
          MyInformtion: MyTourOrder
        },
        name: 'MyTourOrder'
      },
      //个人信息
      {
        path: 'personalDataDetails',
        components: {
          default: Comment,
          MyInformtion: PersonalDataDetails
        },
        name: 'PersonalDataDetails'
      },
      //修改密码
      {
        path: 'updatePassword',
        components: {
          default: Comment,
          MyInformtion: UpdatePassword
        },
        name: 'UpdatePassword'
      },
      //我的收藏
      {
        path: 'myCollection',
        components: {
          default: Comment,
          MyInformtion: MyCollection
        },
        name: 'MyCollection'
      }
    ]
  },
  //填写订单
  {
    path: '/fillInOrder',
    name: 'FillInOrder',
    component: FillInOrder
  },
  //游客注册
  {
    path: '/Register',
    name: 'Register',
    component: Register
  },
  //公用页面
  {
    path: '/Comment',
    name: 'Comment',
    component: Comment,
    children: [
      //跟团游首页
      {
        path: 'agenciesHome',
        components: {
          default: Comment,
          User: AgenciesHome
        },
        name: 'AgenciesHome'
      },
      //跟团游详情页
      {
        path: 'agenciesDetail/:id',
        components: {
          default: Comment,
          User: AgenciesDetail
        },
        name: 'AgenciesDetail'
      },
      //门票详情页
      {
        path: 'ticketsDetail',
        components: {
          default: Comment,
          User: TicketsDetail
        },
        name: 'TicketsDetail'
      },
      //门票首页
      {
        path: 'admissionTicketHomePage',
        components: {
          default: Comment,
          User: AdmissionTicketHomePage
        },
        name: 'AdmissionTicketHomePage'
      },
      //酒店首页
      {
        path: 'hotelHomePage',
        components: {
          default: Comment,
          User: HotelHomePage
        },
        name: 'HotelHomePage'
      },
      //酒店详情页
      {
        path: 'hotelDetails',
        components: {
          default: Comment,
          User: HotelDetails
        },
        name: 'HotelDetails'
      }
    ]
  },
  //登录
  {
    path: '/adminLogin',
    component: AdminLogin,
    name: 'AdminLogin'
  },
  {
    path: '*',
    hidden: true,
    redirect: {name: 'HotelDetails'}
  },
]
