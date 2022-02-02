<template>
  <div class="header">
    <div class="header-logo">
      <img src="https://d360.ducenit.com/DIA/img/logo.png" alt="Ducen Logo. " />
    </div>
    <div class="header-tabs">
      <ul>
        <li class="header-tabs__items">
          <router-link to="/list" class="header-tabs__item">List</router-link>
        </li>
        <li class="header-tabs__items">
          <router-link to="/table" class="header-tabs__item">Table</router-link>
        </li>
        <li class="header-tabs__items">
          <router-link to="/form" class="header-tabs__item">Form</router-link>
        </li>
      </ul>
    </div>
    <div class="header-account">
      <el-avatar
        class="header-account__icon"
        src="https://d360.ducenit.com/DIA/IMG/EmployeeImages/Imagenotfound2.jpg"
      ></el-avatar>
    </div>
  </div>
</template>

<script>
export default {
  name: "headerComponent",
};
</script>

<style scoped>
li {
  list-style: none;
  margin: 0.5rem;
}

.header {
  background-color: #14a24a;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
}

.header-tabs ul {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 0;
}

.header-tabs__item {
  color: white;
  text-decoration: none;
}

@media only screen and (min-width: 480px) {
  .header-tabs {
    width: 40%;
  }

  .header {
    flex-direction: row;
  }

  .header-tabs ul {
    flex-direction: row;
    justify-content: flex-start;
  }
}
</style>
