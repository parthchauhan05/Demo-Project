<template>
  <div>
    <router-view></router-view>
  </div>
</template>

<script>
import tshirtData from "./tshirt.json";


export default {
  name: "homeComponent",
  data() {
    return {
      tshirts: tshirtData,
      currentPage: 1,
    };
  },
  computed: {
    tshirtList: function () {
      return this.tshirts.slice(
        (this.currentPage - 1) * 8,
        this.currentPage * 8
      );
    },
  },
  methods: {
    nextShipment: function (date) {
      const cDate = new Date(date.year, date.month, date.day, 0, 0);
      const now = new Date();
      return Math.floor((cDate - now) / 1000 / 60 / 60 / 24);
    },
    buy: function (tshirt) {
      tshirt.stock--;
    },
    handleCurrentChange: function (value) {
      this.currentPage = value;
    },
    formSubmitted: (form) => {
      alert("Form Submitted. Check console for data.");
      console.log(form);
    },
  },
};
</script>

<style scoped>
.mb3 {
  margin-bottom: 1.2rem;
}
</style>
