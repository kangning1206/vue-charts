<template>
  <div>
    <el-container>
      <el-header>
        <a href="https://d3js.org.cn" class="navbar-brand">
        <img src="https://d3js.org/logo.svg" alt="d3 logo"
      class="navbar-logo"></a>
        <el-menu mode="horizontal" class="header-menu">
          <el-menu-item index="1">
            <router-link to="/">首页</router-link>
          </el-menu-item>
        </el-menu>
      </el-header>
      <el-container>
        <el-aside width="200px" router>
          <el-menu default-active="0" class="">
            <el-menu-item v-for="(item,index) in menu" :key="index" :index="index.toString()">
              <i :class="item.icon"></i>
              <span slot="title"><router-link :to="item.path">{{item.title}}</router-link></span>
            </el-menu-item>
          </el-menu>
        </el-aside>
        <el-main>
          <router-view />
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>
<script>
export default {
  name: 'css',
  data() {
    return {
      menu: [
        { title: '方块', path: '/css/rotate', icon: 'el-icon-third-zhuzhuangtu' },
        { title: 'Demo', path: '/css/demo', icon: 'el-icon-third-bingtu' },
      ],
    };
  },
};

</script>

<style lang="less">
.el-header,
.el-footer {
  background-color: #293c55;
  position: relative;
}

.el-aside {
  background-color: #293c55;
}

.el-main {
  background-color: #fff;
}

.el-container {
  height: 800px;
}

.header-menu {
  position: absolute;
  right: 0;
  top: 0;
}

.el-menu {
  background-color: transparent;
  border: none;
}

.el-menu a {
  color: #ccc;
}

.el-menu-item.is-active {
  background-color: #e43c59;
}

.el-menu-item:hover {
  background-color: #162436;
}

.navbar-brand {
  display: inline-block;
  padding: 20px 15px 10px 15px;
}

.el-header .navbar-logo {
  height: 30px;
  vertical-align: middle;
}
</style>
