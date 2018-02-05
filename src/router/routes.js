import Comment from '@/components/Comment'
import HeelTour from '@/components/HeelTour'
import AdmissionTicket from '@/components/AdmissionTicket'
import AdminLogin from '@/components/AdminLogin'
import Register from '@/components/Register'
import HueiLeYouTourHomePage from '@/components/HueiLeYouTourHomePage'
import MerchantRegister from '@/components/MerchantRegister'

export default [
  {
    path: '/merchantRegister',
    name: 'MerchantRegister',
    component: MerchantRegister
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
    redirect: {name: 'HueiLeYouTourHomePage'}
  },
]
