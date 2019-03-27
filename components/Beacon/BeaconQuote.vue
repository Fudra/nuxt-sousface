<template>
  <blockquote
    :cite="author"
  >
    <p
      class="inline font-medium"
    >
      {{ cite }}
    </p>
    <footer class="text-right">
      <cite class="text-grey-darker">{{ author }}</cite>
    </footer>
  </blockquote>
</template>

<script>
export default {
  name: 'BeaconQuote',
  props: {
    delay: {
      type: Number,
      default: 0,
    },
  },
  data() {
    return {
      cite: ' Mach sichtbar, was vielleicht ohne dich nie wahrgenommen worden wäre.',
      author: 'Robert Bresson',
    };
  },
};
</script>

<style scoped>
  blockquote:before {
    content: open-quote;
    font-size: 4em;
    line-height: 0.1em;
    margin-right: 0.1em;
    vertical-align: -0.3em;
    font-weight: 800;
  }

  cite:before {
    content: '\2014 \00A0';
  }
</style>
