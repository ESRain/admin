import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import User from '../views/User.vue';
import Main from '../views/Main.vue';
import Mall from '../views/Mall.vue';
import page1 from '../views/page1.vue';
import page2 from '../views/page2.vue';
// import PageTwo from '../views/PageTwo.vue';
Vue.use(VueRouter)

const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
    return originalPush.call(this, location).catch(err => err)
}


const routes =[
        {   
			path:'/',
			component:Main,
			meta:{title:'main'},  
            redirect:'/home',   //重定向
            children:[
                {
                    name:'home',
                    path:'/home',       //首页
                    component:Home,
                    meta:{title:'home'},  
                },
        
                {
                    name:'user',
                    path:'/user',       //用户管理
                    component:User,
                    meta:{title:'user'},  
                },
                {
                    name:'mall',
                    path:'/mall',       //商品管理
                    component:Mall,
                    meta:{title:'mall'}, 
                },
                {
                    name:'page1',
                    path:'/page1',       //page1
                    component:page1,
                    meta:{title:'page1'},
                },
                {
                    name:'page2',
                    path:'/page2',       //page2
                    component:page2,
                    meta:{title:'page2'},
                },
                // {
                //     path:'/pageTwo',       //pagetwo
                //     component:PageTwo,
                //     meta:{title:'page2'},
                // },
        
            ]
        },
        
]

const router = new VueRouter({
    routes
})

export default router