<template>
  <div>
    <el-form
      v-if="!formSubmitted"
      ref="form"
      :model="form"
      label-width="120px"
      style="width: 40%; margin: 0 auto"
    >
      <el-form-item label="Customer Name">
        <el-input v-model="form.name"></el-input>
      </el-form-item>
      <el-form-item
        prop="email"
        label="Email"
        :rules="[
          {
            required: true,
            message: 'Please input email address',
            trigger: 'blur',
          },
          {
            type: 'email',
            message: 'Please input correct email address',
            trigger: ['blur', 'change'],
          },
        ]"
      >
        <el-input v-model="form.email"></el-input>
      </el-form-item>
      <el-form-item label="Activity zone">
        <el-select v-model="form.tshirt" placeholder="please select one Tshirt">
          <el-option
            :label="tshirt.title"
            v-for="tshirt in this.$parent.tshirtList"
            :key="tshirt.title"
            :value="tshirt.title"
          ></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="Additional Comments">
        <el-input type="textarea" v-model="form.comment"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">Create</el-button>
        <el-button>Cancel</el-button>
      </el-form-item>
    </el-form>

    <div v-else>
      <el-card class="box-card" shadow="always">
        <el-descriptions title="Customer Info">
          <el-descriptions-item
            :label="key"
            v-for="(value, key) in form"
            :key="key"
            >{{ value }}</el-descriptions-item
          >
        </el-descriptions>
      </el-card>
    </div>

  </div>
</template>
<script>
export default {
  name: "formComponent",
  props: ["tshirtData"],
  data() {
    return {
      form: {
        name: "",
        email: "",
        tshirt: "",
        comment: "",
      },
      formSubmitted: false,
    };
  },
  methods: {
    onSubmit() {
      this.formSubmitted = true;
      this.$emit("formSubmitted", this.form);
    },
  },
};
</script>
