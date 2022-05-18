<template>
  <div ref="rdDecorationBox" :class="type" class="rd-decoration-box-2">
    <div v-for="n in 6" :key="n" class="rd-decoration-stripe"></div>
  </div>
</template>

<script lang="ts" setup>
  import { gsap } from 'gsap'

  const rdDecorationBox = ref<HTMLDivElement>(null)

  const boxInit = ref<GSAPTimeline>(null)

  const props = defineProps<{ type?: string, state?: 'init' | 'before-mount' | 'mounted' }>()

  function animate(rdDecorationBox: Element): GSAPTimeline {
    const tl = gsap.timeline({ paused: true })

    tl.from(rdDecorationBox.querySelectorAll('.rd-decoration-stripe'), {
      y: '100%',
      ease: 'power2.out',
      duration: 0.5,
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