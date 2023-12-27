import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex)
export default {
    state: {
        tabsList: [     //面包屑数据
            {
                path: "/",
                name: "home",
                label: "首页",
                icon: "s-home",
                url: "Home/Home",
            }
        ]
    },
    mutations: {
        //修改面包屑数据
        selectMenu(state,val){
            console.log(val ,'val');
            //判断是否为首页
            if (val.name !== 'home') {
                const index = state.tabsList.findIndex(item => item.name === val.name)
                //如果不存在
                if (index === -1) {
                    state.tabsList.push(val)
                }
            }
            
        }
    },
    
}