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
      width: `width: ${this.width}%`,
      height: `height: ${this.height}%`,
    });
  },
};
