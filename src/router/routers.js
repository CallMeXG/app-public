

const frameIn = [
    {
        path: '/',
        name: 'home',
        component: () => import(/* webpackChunkName: "group-foo" */ '../views/home')
    }
]

export default[
    ...frameIn
]