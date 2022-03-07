import {
  createRouter as _createRouter,
  createWebHistory,
  createMemoryHistory,
  createWebHashHistory
}
from 'vue-router'

const routes = [
  {
    name: 'hello',
    path: '/hello',
    component: () => import('../views/hello.jsx')
  },
  {
    name: 'data',
    path: '/data',
    component: () => import('../views/data.jsx')
  }
]

export function createRouter() {
  return _createRouter({
    history: import.meta.env.SSR ? createMemoryHistory() : createWebHistory(), // createWebHashHistory(), //createMemoryHistory(), //createWebHistory(),
    routes
  })
}