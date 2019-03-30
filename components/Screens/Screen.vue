<template>
  <section
    class="absolute w-screen h-screen overflow-hidden"
    :style="width"
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
      type: String,
      default: '',
    },
    height: {
      type: String,
      default: '',
    },
  },
};
</script>
