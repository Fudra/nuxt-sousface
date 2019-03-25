<template>
  <div class="flex justify-center items-center">
    <div class="relative rounded-full h-48 w-48 bg-teal cursor-pointer">
      <slot />
    </div>
  </div>
</template>

<script>
export default {
  name: 'BeaconBase',
};
</script>
