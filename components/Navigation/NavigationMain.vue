<template>
  <div class="absolute pin-t pin-l  ml-8 mt-8 w-24 relative">
    <navigation-tile class="ml-0 mt-0" />
    <navigation-tile class="mt-0" />
    <navigation-tile class="ml-0" />
    <navigation-tile />

    <navigation-flag class="" />
  </div>
</template>

<script>
import NavigationTile from '@/components/Navigation/NavigationTile';
import NavigationFlag from '@/components/Navigation/NavigationFlag';

export default {
  name: 'NavigationMain',
  components: {
    NavigationTile,
    NavigationFlag,
  },
};
</script>
