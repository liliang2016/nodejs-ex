<template>
  <section class="container">
    <el-dialog title="对话框标题" :visible.sync="dialogVisible" append-to-body>
      这是一个通用对话框
      <span slot="footer">
        <el-button @click="dialogVisible = false">取消</el-button>
        <el-button @click="dialogVisible = false">确定</el-button>
      </span>
    </el-dialog>
    <el-button  @click="dialogVisible = true">打开对话框</el-button>
  </section>
</template>

<script>
export default {
  data() {
    return { dialogVisible: false }
  }
}
</script>

<style lang="scss">
.container {
  width: 1000px;
  margin: auto;
  padding-top: 20px;
  text-align: center;
}
</style>