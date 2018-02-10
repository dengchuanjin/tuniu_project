import Comment from '@/components/public/Comment'
import AgenciesDetail from '@/components/Agencies/AgenciesDetail'
import TicketsDetail from '@/components/Tickets/TicketsDetail'
import AdminLogin from '@/components/AdminLogin'
import Register from '@/components/Register'
import AgenciesHome from '@/components/Agencies/AgenciesHome'
import MerchantRegister from '@/components/VendorRegistration/MerchantRegister'
//填写订单
import FillInOrder from '@/components/Agencies/FillInOrder'
import PersonalCenter from '@/components/PersonakCenterFolder/PersonalCenter'
import MyTourOrder from '@/components/PersonakCenterFolder/MyTourOrder'
import PersonalDataDetails from '@/components/PersonakCenterFolder/PersonalDataDetails'
import UpdatePassword from '@/components/PersonakCenterFolder/UpdatePassword'
import PaymentPlatform from '@/components/public/PaymentPlatform'
import MyOrderQRCode from '@/components/MyOrderQRCode'
import MyOrderDetails from '@/components/PersonakCenterFolder/MyOrderDetails'

//微信支付

//门票首页
import AdmissionTicketHomePage from '@/components/AdmissionTicketHomePage'

//酒店首页
import HotelHomePage from '@/components/HotelHomePage'


export default [
  {
    path: '/myOrderQRCode',
    name: 'MyOrderQRCode',
    component: MyOrderQRCode
  },
  {
    path: '/myOrderDetails',
    name: 'MyOrderDetails',
    component: MyOrderDetails
  },
  {
    path: '/paymentPlatform',
    name: 'PaymentPlatform',
    component: PaymentPlatform
  },
  {
    path: '/merchantRegister',
    name: 'MerchantRegister',
    component: MerchantRegister
  },
  {
    path: '/personalCenter',
    name: 'PersonalCenter',
    component: PersonalCenter,
    children: [
      {
        path: 'myTourOrder',
        components: {
          default: Comment,
          MyInformtion: MyTourOrder
        },
        name: 'MyTourOrder'
      },
      {
        path: 'personalDataDetails',
        components: {
          default: Comment,
          MyInformtion: PersonalDataDetails
        },
        name: 'PersonalDataDetails'
      },
      {
        path: 'updatePassword',
        components: {
          default: Comment,
          MyInformtion: UpdatePassword
        },
        name: 'UpdatePassword'
      },
    ]
  },
  {
    path: '/fillInOrder',
    name: 'FillInOrder',
    component: FillInOrder
  },
  {
    path: '/adminLogin',
    name: 'AdminLogin',
    component: AdminLogin
  },
  {
    path: '/Register',
    name: 'Register',
    component: Register
  },
  {
    path: '/Comment',
    name: 'Comment',
    component: Comment,
    children: [
      {
        path: 'agenciesHome',
        components: {
          default: Comment,
          User: AgenciesHome
        },
        name: 'AgenciesHome'
      },
      {
        path: 'agenciesDetail/:id',
        components: {
          default: Comment,
          User: AgenciesDetail
        },
        name: 'AgenciesDetail'
      },
      {
        path: 'ticketsDetail',
        components: {
          default: Comment,
          User: TicketsDetail
        },
        name: 'TicketsDetail'
      },
      {
        path: 'admissionTicketHomePage',
        components: {
          default: Comment,
          User: AdmissionTicketHomePage
        },
        name: 'AdmissionTicketHomePage'
      },
      {
        path: 'hotelHomePage',
        components: {
          default: Comment,
          User: HotelHomePage
        },
        name: 'HotelHomePage'
      },
    ]
  },
  {
    path: 'AdminLogin',
    components: {
      default: Comment,
      User: AdminLogin
    },
    name: 'AdminLogin'
  },
  {
    path: '*',
    hidden: true,
    redirect: {name: 'AgenciesHome'}
  },
]
