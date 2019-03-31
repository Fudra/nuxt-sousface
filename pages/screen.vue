<!-- eslint-disable -->
<template>
  <screen-container>
    <div slot-scope="{ width }">
      <vertical-handler />
      <screen
        :key="1"
        class="bg-black z-40"
        :width="width"
      >
        <div class="text-5xl text-white">
          1
        </div>
      </screen>
      <screen
        :key="2"
        class="bg-gray-lighter z-30"
      >
        <div class="text-5xl text-black-light">
          2
        </div>
      </screen>
    </div>
  </screen-container>
</template>

<script>
/* eslint-disable */
import Screen from '@/components/Screens/Screen';
import ScreenContainer from '@/components/Screens/ScreenContainer';
import VerticalHandler from '@/components/Screens/VerticalHandler';

export default {
  components: {
    Screen,
    ScreenContainer,
    VerticalHandler,
  },
};
</script>
