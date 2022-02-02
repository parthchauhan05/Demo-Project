<template>
  <div id="app">
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div> -->
    <!-- <router-view /> -->
    <el-container>
      <el-header style="position: sticky; top: 0"
        ><headerComponent
      /></el-header>
      <el-main>
        <homeComponent />
      </el-main>
      <el-footer><footerComponent /></el-footer>
    </el-container>
  </div>
</template>

<script>
import headerComponent from "@/components/header.vue";
import footerComponent from "@/components/footer.vue";
import homeComponent from "@/components/home.vue";

export default {
  components: {
    headerComponent,
    footerComponent,
    homeComponent,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
