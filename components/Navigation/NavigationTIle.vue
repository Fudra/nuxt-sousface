<template>
  <div
    class="relative float-left w-9 h-9 m-2px opacity-2 bg-grey hover:bg-teal hover:opacity-80"
    :class="isActive"
  />
</template>

<script>
export default {
  name: 'NavigationTile',
  props: {},
  data() {
    return {
      active: false,
    };
  },
  computed: {
    isActive() {
      return this.active ? 'opacity-90' : 'opacity-30';
    },
  },
};
</script>
