import Home from '@/components/home/Index.vue'

export const routes = [
  {path: '',
  component: Home, titulo: 'Home'},
  { path: '*', redirect: '/' }
]
