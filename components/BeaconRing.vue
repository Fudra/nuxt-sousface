<template>
  <div
    class="relative rounded-full h-48 w-48 border border-teal"
    :style="transition"
  />
</template>

<script>
export default {
  props: {
    duration: {
      type: Number,
      default: 2,
    },
    delay: {
      type: Number,
      default: 0,
    },
  },
  computed: {
    transition() {
      return {
        animation: `ping ${this.duration}s infinite ${this.delay}s`,
      };
    },
  },
};
</script>

<style>
  @keyframes ping {
    0% {
      opacity: 1;
      border-color: rgba(24, 166, 140, .5);
    }

    100% {
      transform: scale(2, 2);
      opacity: 0;
      border-color: rgba(24, 166, 140, .2);
    }
  }
</style>
