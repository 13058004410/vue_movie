export default{
    path:'/movies',
    component:()=>import('@/views/movies'),
    children:[
        {
            path:'movieList',
            component:()=>import('@/components/movieList')
        }
    ]
}