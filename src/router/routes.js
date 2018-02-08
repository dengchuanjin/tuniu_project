import Comment from '@/components/Comment'
import HeelTour from '@/components/HeelTour'
import AdmissionTicket from '@/components/AdmissionTicket'
import AdminLogin from '@/components/AdminLogin'
import Register from '@/components/Register'
import HueiLeYouTourHomePage from '@/components/HueiLeYouTourHomePage'
import MerchantRegister from '@/components/MerchantRegister'
import MyOrder from '@/components/MyOrder'
import PersonalCenter from '@/components/PersonalCenter'
import MyTourOrder from '@/components/PersonakCenterFolder/MyTourOrder'
import PersonalDataDetails from '@/components/PersonakCenterFolder/PersonalDataDetails'
import HuiLeYouCashier from '@/components/HuiLeYouCashier'


export default [
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
    ]
  },
  {
    path: '/myOrder',
    name: 'MyOrder',
    component: MyOrder
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
    redirect: {name: 'PersonalDataDetails'}
  },
]
