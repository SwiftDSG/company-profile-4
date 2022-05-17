<template>
  <div :class="type" class="rd-decoration-box-4">
    <div class="rd-decoration-box-outer">
      <div class="rd-decoration-box">
        <div class="rd-decoration-box-border-top"></div>
        <div class="rd-decoration-box-border-right"></div>
        <div class="rd-decoration-box-border-bottom"></div>
        <div class="rd-decoration-box-border-left"></div>
      </div>
    </div>
    <div class="rd-decoration-box-inner">
      <div class="rd-decoration-box"></div>
    </div>
  </div>
</template>

<script lang="ts" setup>
  defineProps<{ type?: string }>()
</script>

<style lang="scss" scoped>
.rd-decoration-box-4 {
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
  .rd-decoration-box-outer {
    position: absolute;
    width: 100%;
    height: 100%;
    overflow: hidden;
    .rd-decoration-box {
      position: relative;
      width: 100%;
      height: 100%;
      .rd-decoration-box-border-top {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 20%;
        background: var(--font-color);
      }
      .rd-decoration-box-border-right {
        position: absolute;
        top: 0;
        right: 0;
        width: 20%;
        height: 100%;
        background: var(--font-color);
      }
      .rd-decoration-box-border-bottom {
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 20%;
        background: var(--font-color);
      }
      .rd-decoration-box-border-left {
        position: absolute;
        top: 0;
        left: 0;
        width: 20%;
        height: 100%;
        background: var(--font-color);
      }
    }
  }
  .rd-decoration-box-inner {
    position: absolute;
    top: 30%;
    left: 30%;
    width: 40%;
    height: 40%;
    overflow: hidden;
    .rd-decoration-box {
      position: relative;
      width: 100%;
      height: 100%;
      background: var(--font-light-color);
    }
  }
  &.secondary {
    .rd-decoration-box-inner {
      .rd-decoration-box {
        background: var(--primary-color);
      }
    }
  }
}
</style>