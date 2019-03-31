<template>
  <section
    class="absolute w-screen h-screen overflow-hidden"
    :style="screenSize"
  >
    <div class="w-screen h-screen flex justify-center items-center">
      <slot />
    </div>
  </section>
</template>

<script>
export default {
  name: 'Screen',
  props: {
    width: {
      type: Number,
      default: -1,
    },
    height: {
      type: Number,
      default: -1,
    },
  },
  computed: {
    screenSize() {
      return {
        width: this.width === -1 ? null : this.width + '%',
        height: this.height === -1 ? null : this.height + '%',
      };
    },
  },
};
</script>
