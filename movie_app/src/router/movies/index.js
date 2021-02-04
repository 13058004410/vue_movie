export default{
    path:'/movies',
    component:()=>import('@/views/movies'),
    children:[
        {
            path:'movieList',
            component:()=>import('@/components/movieList')
        },
        {
            path:'city',
            component:()=>import('@/components/cityList')
        },
        {
            path:'/movies',
            redirect:'/movies/city'
        }
    ]
}