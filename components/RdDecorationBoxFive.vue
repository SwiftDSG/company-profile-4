<template>
  <div :class="type" class="rd-decoration-box-5">
    <div v-for="n in 16" :key="n" class="rd-decoration-box"></div>
  </div>
</template>

<script lang="ts" setup>
  defineProps<{ type?: string }>()
</script>

<style lang="scss" scoped>
.rd-decoration-box-5 {
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
  gap: 10%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: flex-start;
  .rd-decoration-box {
    position: relative;
    width: 17.5%;
    height: 17.5%;
    background: var(--font-color);
  }
  &.secondary {
    .rd-decoration-box {
      background: var(--primary-color);
    }
  }
}
</style>