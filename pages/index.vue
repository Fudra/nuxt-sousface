<template>
  <section class="container">
    <beacon-base>
      <beacon-ring :delay="0" />
      <beacon-ring :delay="0.25" />
      <beacon-ring :delay="0.5" />
    </beacon-base>
  </section>
</template>

<script>
import BeaconBase from '@/components/BeaconBase';
import BeaconRing from '@/components/BeaconRing';

export default {
  components: {
    BeaconBase,
    BeaconRing,
  },
};
</script>

<style>

</style>
