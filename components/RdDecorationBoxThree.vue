<template>
  <div :class="type" class="rd-decoration-box-3">
    <div class="rd-decoration-box"></div>
  </div>
</template>

<script lang="ts" setup>
  defineProps<{ type?: string }>()
</script>

<style lang="scss" scoped>
.rd-decoration-box-3 {
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
  .rd-decoration-box {
    position: relative;
    width: 100%;
    height: 100%;
    background: var(--font-color);
  }
  &.secondary {
    .rd-decoration-box {
      background: var(--primary-color);
    }
  }
}
</style>