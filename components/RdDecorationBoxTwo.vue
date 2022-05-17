<template>
  <div :class="type" class="rd-decoration-box-2">
    <div v-for="n in 6" :key="n" class="rd-decoration-stripe"></div>
  </div>
</template>

<script lang="ts" setup>
  defineProps<{ type?: string }>()
</script>

<style lang="scss" scoped>
.rd-decoration-box-2 {
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  .rd-decoration-stripe {
    position: relative;
    width: 10%;
    height: 100%;
    background: var(--font-color);
  }
  &.secondary {
    .rd-decoration-stripe {
      background: var(--primary-color);
    }
  }
}
</style>