<template>
<div class="com-dialog-wrapper" v-if="visible">
  <div class="com-dialog-overlay" @click="onModalClick"></div>
  <div class="com-dialog" :class="[{center}, dialogClass]" :style="dialogStyle">
    <div class="com-dialog-title">
      <slot name="title">{{title}}</slot>
      <button class="btn-close" v-if="showClose" @click="onClose">&times;</button>
    </div>
    <div class="com-dialog-body">
      dialog body
    </div>
    <div class="com-dialog-actions">
      <slot name="actions"></slot>
    </div>
  </div>
</div>
</template>
<script>
export default {
  props: {
    visible: Boolean,
    title: String,
    width: [Number, String],
    showClose: {
      type: Boolean,
      default: true
    },
    dialogClass: String,
    closeOnClickModal: {
      type: Boolean,
      default: true
    },
    center: Boolean
  },
  computed: {
    dialogStyle() {
      let maxWidth = this.width
      if (typeof maxWidth == 'string') {
        maxWidth = maxWidth.trim()
        let numWidth = parseInt(maxWidth)
        return maxWidth ? maxWidth.endsWith('%') ? { maxWidth } : { maxWidth: `${numWidth}px` } : {}
      } else if (typeof maxWidth == 'number') {
        return { maxWidth: `${maxWidth}px` }
      }
      return {}
    }
  },
  methods: {
    onClose() {
      this.$emit('update:visible', false)
    },
    onModalClick() {
      if (this.closeOnClickModal) this.onClose()
    }
  }
}
</script>
<style lang="scss">
$dialog-container-padding: 20px;
.com-dialog-wrapper {
  position: fixed;
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.com-dialog-overlay {
  position: absolute;
  opacity: .4;
  background-color: #000;
}
.com-dialog-wrapper,
.com-dialog-overlay {
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
}
.com-dialog {
  position: relative;
  z-index: 1;
  background-color: #fff;
  width: 100%;
  max-width: 480px;
  padding: 0 $dialog-container-padding;
  border-radius: 3px;
  &.center {
    .com-dialog-title {
      text-align: center;
    }
    .com-dialog-actions {
      justify-content: center;
    }
  }
}
.com-dialog-title {
  padding-top: $dialog-container-padding;
  position: relative;
  text-transform: capitalize;
  font-size: 18px;
  font-weight: bold;
  color: $primaryTextColor;
  .btn-close {
    position: absolute;
    top: 8px;
    right: 0;
    font-size: 24px;
    width: 32px;
    height: 32px;
    text-align: center;
    line-height: 1;
    font-weight: normal;
    background: transparent;
    border: none;
    outline: none;
    cursor: pointer;
  }
}
.com-dialog-body {
  padding: $dialog-container-padding 0;
}
.com-dialog-actions {
  padding: $dialog-container-padding/2 0 $dialog-container-padding;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  button {
    min-width: 52px;
    & + button {
    margin-left: 8px;
  }
  }
}
</style>