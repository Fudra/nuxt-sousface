<template>
  <div>
    <navigation-tile />
    <navigation-tile />
    <navigation-tile />
    <navigation-tile />
  </div>
</template>

<script>
import NavigationTile from '@/components/Navigation/NavigationTile';

export default {
  name: 'NavigationMain',
  components: {
    NavigationTile,
  },
};
</script>
