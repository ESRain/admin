<template>
  <div>
    <!-- <el-radio-group v-model="isCollapse" style="margin-bottom: 20px">
      <el-radio-button :label="false">展开</el-radio-button>
      <el-radio-button :label="true">收起</el-radio-button>
    </el-radio-group> -->
    <el-menu
      default-active="1-4-1"
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose"
      :collapse="isCollapse" 
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b">

<!--      <ul>
          <li>{{$route.query.page1}}</li>
          <li>{{$route.query.page2}}</li>
            </ul> -->
      
      
      <h3>{{  isCollapse ? '后台' : '后台管理系统'}}</h3>
      <el-menu-item @click="clickMenu(item)" v-for="item in noChildren" :key="item.name" :index="item.name">
        <i :class="`el-icon-${item.icon}`"></i>
        <span slot="title">{{item.label}}</span>
      </el-menu-item>

      <el-submenu v-for="(items) in hasChildren" :key="items.label" :index="items.name">

        <template slot="title">
          <i  :class="`el-icon-${items.icon}`"></i>
          <span slot="title">{{items.label}}</span>
        </template>

        <el-menu-item-group v-for="(Sonitem) in items.children" :key="Sonitem  .name">
          <el-menu-item @click="clickMenu(Sonitem)" :index="Sonitem.name">
            {{Sonitem.label}}
          </el-menu-item>
        </el-menu-item-group>
        
      </el-submenu>
    </el-menu>

  </div>
</template>

<script>
export default {
  data() {
    return {
      // isCollapse: false,
      menuData: [
        {
          path: "/",
          name: "home",
          label: "首页",
          icon: "s-home",
          url: "Home/Home",
        },
        {
          path: "/mall",
          name: "mall",
          label: "商品管理",
          icon: "video-play",
          url: "MallManage/MallManage",
        },
        {
          path: "/user",
          name: "user",
          label: "用户管理",
          icon: "user",
          url: "UserManage/UserManage",
        },
        {
          label: "其他",
          icon: "location",
          children: [
            {
              path: "/page1",
              name: "page1",
              label: "页面1",
              icon: "setting",
              url: "Other/PageOne",
            },
            {
              path: "/page2",
              name: "page2",
              label: "页面2",
              icon: "setting",
              url: "Other/PageTwo",
            },
          ],
        },
      ],
    };
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
    clickMenu(item){
      this.$router.push(item.path);
      this.$store.commit('selectMenu',item)
    },
  },
 computed: {
    // 没有子菜单
    noChildren() {
        return this.menuData.filter(item => !item.children)
    },
    // 有子菜单
    hasChildren() {
        return this.menuData.filter(item => item.children)
    },
       isCollapse(){
      return this.$store.state.isCollapse
    }
  }
};
</script>


<style lang="less" scoped>

//整个侧边栏
.el-menu-vertical-demo:not(.el-menu--collapse) {  
  width: 200px;
  min-height: 400px;
  background-color: #bae8bc !important;
  
}
.el-menu {
  height: 100vh;
  background-color: #e3f6f5 !important;
    color: #232946 !important;      

  h3{
    color: #2d334a;
    text-align: center;
    line-height: 48px;
    font-size: 16px;
    font-weight: 400px;
  }
  .el-menu-item{                  //一级路由
    background-color: #e3f6f5 !important;
    color: #232946 !important;      
  }  
}

</style>

