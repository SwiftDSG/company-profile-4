<template>
  <div ref="rdDecorationBox" :class="type" class="rd-decoration-box-5">
    <div v-for="n in 16" :key="n" class="rd-decoration-box"></div>
  </div>
</template>

<script lang="ts" setup>
  import { gsap } from 'gsap'

  const rdDecorationBox = ref<HTMLDivElement>(null)

  const boxInit = ref<GSAPTimeline>(null)

  const props = defineProps<{ type?: string, state?: 'init' | 'before-mount' | 'mounted' }>()

  function animate(rdDecorationBox: Element): GSAPTimeline {
    const tl = gsap.timeline({ paused: true })

    tl.from(rdDecorationBox.querySelectorAll('.rd-decoration-box'), {
      opacity: 0,
      ease: 'power2.out',
      duration: 0.25,
      stagger: 0.05
    })

    return tl
  }

  watch(() => props.state, (val) => {
    if (val === 'mounted') boxInit.value.play()
  })

  onMounted(() => {
    if (props.state === 'init') {
      boxInit.value = animate(rdDecorationBox.value)
    }
  })
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