<template>
  <div style="position: relative" class="table" width="50vw"> 
    <div
      style="
        width:7px;
        height:100%;
        z-index:9;
        right:0;
        position:absolute;
        background: linear-gradient(90deg, rgba(0,0,0,0) 0%, rgba(9,9,121,0) 0%, rgba(16,81,94,1) 100%);
        opacity:0.07;'
      "
      v-show="shadow"
    ></div>
    <el-table
      :data="this.$parent.tshirts"
      stripe
      border
      show-header
      v-freeze-header
      style="width: 100%; margin: 0 auto"
      :header-cell-style="{
        color: 'blue',
        position: 'sticky',
        top: 0,
        zIndex: 1,
      }"
      class="table"
    >
      <el-table-column type="expand">
        <template>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer a
            magna eu felis fermentum pulvinar. Nunc tincidunt gravida convallis.
            Proin vitae posuere eros, at cursus dolor. Integer sed sagittis
            ante. Suspendisse justo libero, porta et mollis sit amet, mollis non
            diam. Vestibulum bibendum viverra viverra. Praesent mattis ligula in
            auctor laoreet. Sed viverra lobortis risus, eget eleifend lorem
            tristique vel. Etiam quam turpis, malesuada sit amet magna et,
            venenatis sodales metus. Nullam nunc dolor, sollicitudin hendrerit
            suscipit non, fermentum eu odio. Curabitur pellentesque, sem luctus
            finibus eleifend, ligula leo imperdiet risus, ac tincidunt nibh
            lacus eu erat. Phasellus commodo semper nisl in aliquet. Cras
            scelerisque ex ex, sit amet hendrerit neque finibus non. Etiam
            gravida tortor sapien, non commodo nisl facilisis tempor. Donec
            lacus eros, semper quis augue quis, ullamcorper posuere sem. Cras
            molestie euismod tortor, eget mollis ligula cursus nec. Donec
            vehicula vestibulum ullamcorper. Nunc purus mi, pretium non interdum
            nec, ultrices at ex. Fusce at turpis cursus, gravida nibh dapibus,
            lacinia turpis. Pellentesque fringilla risus eros, vel ultricies
            odio tincidunt at.
          </p>
        </template>
      </el-table-column>
      <el-table-column
        :prop="column"
        :label="column | titleCase"
        v-for="column in columns"
        :key="column"
        :fixed="column == 'title' ? true : false"
        :sortable="column == 'price' ? true : false"
        width="300px"
      >
      </el-table-column>
      <el-table-column width="1px" fixed="right"> </el-table-column>
    </el-table>
  </div>
</template>
<script>

import {freezeHeader} from "../freezeHeader"
export default {
  name: "tableComponent",
  props: ["tshirtData"],
  data: () => {
    return {
      columns: [
        "title",
        "price",
        "stock",
        "title",
        "price",
        "stock",
        "title",
        "price",
        "stock",
      ],
      shadow: false,
    };
  },
  filters: {
    titleCase: (title) => {
      return title
        .split(" ")
        .map((i) => i[0].toUpperCase() + i.substring(1).toLowerCase())
        .join(" ");
    },
  },
  methods: {
    scroll() {
      window.setInterval(() => {
        this.shadow = document.querySelector(".is-scrolling-right")
          ? false
          : true;
      }, 100);
    },
  },
  mounted() {
    this.scroll();
  },
};
</script>

<style scoped>
.el-table {
  color: blue !important;
}
.el-table__header{
  position: sticky;
  top: 0;
  box-shadow: 0 2px 2px -1px rgba(0, 0, 0, 0.4);
  background: whitesmoke !important;
}

.shadow {
  box-shadow: inset -10px 0px 19px #888;
}
</style>
