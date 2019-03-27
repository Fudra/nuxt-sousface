<template>
  <section class="flex justify-center h-screen items-center flex-col">
    <beacon-base>
      <beacon-ring :delay="0" />
      <beacon-ring :delay="0.25" />
      <beacon-ring :delay="0.5" />
    </beacon-base>

    <beacon-quote
      class="mt-20 font-sans font-normal"
    />
  </section>
</template>

<script>
import BeaconBase from '@/components/Beacon/BeaconBase';
import BeaconRing from '@/components/Beacon/BeaconRing';
import BeaconQuote from '@/components/Beacon/BeaconQuote';

export default {
  components: {
    BeaconBase,
    BeaconRing,
    BeaconQuote,
  },
};
</script>

<style>

</style>
