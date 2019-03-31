import {
  mapGetters,
} from 'vuex';

export default {
  name: 'ScreenContainer',
  computed: {
    ...mapGetters({
      width: 'screen/screenWidth',
      height: 'screen/screenHeight',
    }),
  },
  render() {
    return this.$scopedSlots.default({
      width: this.width,
      height: this.height,
    });
  },
};
