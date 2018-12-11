<template>
<div id="app">
   <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
      <router-link to="/admin">Admin</router-link>
    </div> -->
    <router-view/>
</div>

</template>
<style lang="less">
.el-header,
.el-footer {
  background-color: #B3C0D1;
}

.el-aside {
  background-color: #D3DCE6;
}

.el-main {
  background-color: #E9EEF3;
}
.el-container{
  height: 100vh;
}

</style>
