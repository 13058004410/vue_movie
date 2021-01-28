export default{
    path:'/home',
    component:()=>import('@/views/home'),
    children:[
        {
            path:'movieList'
        }
    ]
}