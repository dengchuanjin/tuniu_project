import Comment from '@/components/Comment'
import HeelTour from '@/components/HeelTour'
import AdmissionTicket from '@/components/AdmissionTicket'
import AdminLogin from '@/components/AdminLogin'
import Register from '@/components/Register'
import HueiLeYouTourHomePage from '@/components/HueiLeYouTourHomePage'
import MerchantRegister from '@/components/MerchantRegister'
//填写订单
import MyOrder from '@/components/MyOrder'
import PersonalCenter from '@/components/PersonalCenter'
import MyTourOrder from '@/components/PersonakCenterFolder/MyTourOrder'
import PersonalDataDetails from '@/components/PersonakCenterFolder/PersonalDataDetails'
import UpdatePassword from '@/components/PersonakCenterFolder/UpdatePassword'
import HuiLeYouCashier from '@/components/HuiLeYouCashier'
import MyOrderQRCode from '@/components/MyOrderQRCode'
import MyOrderDetails from '@/components/PersonakCenterFolder/MyOrderDetails'

//微信支付
import PayPage from '@/components/PayPage'

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
    path: '/huiLeYouCashier',
    name: 'HuiLeYouCashier',
    component: HuiLeYouCashier
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
    path: '/myOrder',
    name: 'MyOrder',
    component: MyOrder
  },
  {
    path: '/payPage',
    name: 'PayPage',
    component: PayPage
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
        path: 'HueiLeYouTourHomePage',
        components: {
          default: Comment,
          User: HueiLeYouTourHomePage
        },
        name: 'HueiLeYouTourHomePage'
      },
      {
        path: 'HeelTour/:id',
        components: {
          default: Comment,
          User: HeelTour
        },
        name: 'HeelTour'
      },
      {
        path: 'AdmissionTicket',
        components: {
          default: Comment,
          User: AdmissionTicket
        },
        name: 'AdmissionTicket'
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
    redirect: {name: 'MyOrderDetails'}
  },
]
