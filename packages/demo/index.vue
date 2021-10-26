<template>
  <div class="test-box">
    <el-button>测试</el-button>
  </div>
</template>

<script>
import '../common.js'
import { Button } from "element-ui";
export default {
  components:{
    'el-button':Button,
  },
  data: () => {
  },
};
</script>

<style lang="scss" scoped>
.test-box {
  background: red;
}
</style>
