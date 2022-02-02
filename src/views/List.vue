<template>
  <div>
    <el-row :gutter="20" class="mb3">
      <el-col
        :span="6"
        v-for="tshirt in this.$parent.tshirtList"
        :key="tshirt.title"
        class="mb3"
      >
        <el-card class="box-card" shadow="hover">
          <img
            src='@/assets/images/blue-t-shirt.jpg'
            :alt="tshirt.title"
            class="image"
            width="100%"
          />
          <h3>{{ tshirt.title }}</h3>
          <p class="card-text">
            <em>$ {{ tshirt.price }}</em>
          </p>

          <p v-if="tshirt.stock > 0">
            <strong>{{ tshirt.stock }} left!</strong>
          </p>
          <p v-else><strong>Out of Stock!</strong></p>
          <p>More Coming in {{ nextShipment(tshirt.nextShipment) }} days!</p>
          <el-button
            type="success"
            round
            v-if="tshirt.stock > 0"
            @click.prevent="buy(tshirt)"
            >Buy</el-button
          >
          <el-button type="success" round v-else disabled>Buy</el-button>
        </el-card>
      </el-col>
    </el-row>
    <el-pagination
      layout="prev, pager, next"
      :total="this.$parent.tshirts.length"
      :page-size="8"
      @current-change="this.$parent.handleCurrentChange"
    >
    </el-pagination>
    <!-- <formComponent :tshirtData = tshirtList @formSubmitted="formSubmitted" />
        <tableComponent :tshirtData = tshirtList /> -->
  </div>
</template>

<script>
// import tshirtData from "@/components/tshirt.json";
// import tableComponent from "./table.vue";
// import formComponent from "./form.vue";

export default {
  // components: {
  //     tableComponent,
  //     formComponent
  // },
  name: "listComponent",
  data() {
    return {
      //   tshirts: tshirtData,
      currentPage: 1,
    };
  },
  //   computed: {
  //     tshirtList: function () {
  //       return this.$parent.tshirts.slice(
  //         (this.currentPage - 1) * 8,
  //         this.currentPage * 8
  //       );
  //     },
  //   },
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
