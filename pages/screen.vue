<template>
  <section>
    <screen-container>
      <div slot-scope="{ width }">
        <screen
          class="bg-black z-20"
          :width="width"
        >
          <div class="text-5xl text-white">
            1
          </div>
        </screen>
        <screen
          class="bg-gray-light  z-10"
        >
          <div class="text-5xl text-black-light">
            2
          </div>
        </screen>
      </div>
    </screen-container>
  </section>
</template>

<script>
import Screen from '@/components/Screens/Screen';
import ScreenContainer from '@/components/Screens/ScreenContainer';

export default {
  components: {
    Screen,
    ScreenContainer,
  },
};
</script>
