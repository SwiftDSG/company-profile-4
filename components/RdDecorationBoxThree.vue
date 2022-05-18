<template>
  <div ref="rdDecorationBox" :class="type" class="rd-decoration-box-3">
    <div class="rd-decoration-box"></div>
  </div>
</template>

<script lang="ts" setup>
  import { gsap } from 'gsap'

  const rdDecorationBox = ref<HTMLDivElement>(null)

  const boxInit = ref<GSAPTimeline>(null)

  const props = defineProps<{ type?: string, state?: 'init' | 'before-mount' | 'mounted' }>()

  function animate(rdDecorationBox: Element): GSAPTimeline {
    const tl = gsap.timeline({ paused: true })

    tl.from(rdDecorationBox.querySelector('.rd-decoration-box'), {
      y: '100%',
      ease: 'power2.out',
      duration: 0.5
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