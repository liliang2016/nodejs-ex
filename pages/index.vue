<template>
  <section class="container">
    <h1 class="title" @click="dialogVisible = true">
      mysoc
    </h1>
    <com-dialog title="dialog title" dialog-class="ceshi" :visible.sync="dialogVisible">
      <button slot="actions">reset</button>
      <button slot="actions">submit</button>
    </com-dialog>
  </section>
</template>

<script>
import ComDialog from '~/components/base/dialog'
export default {
  components: { ComDialog },
  data() {
    return { dialogVisible: true }
  }
}
</script>

<style lang="scss">
</style>