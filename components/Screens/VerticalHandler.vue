<template>
  <div
    v-draggabilly="{ axis: 'x', containment: '.wrapper' }"
    v-draggabilly-on:dragMove="handleDragMove"
    v-draggabilly-on:dragEnd="handleDragEnd"
    class="absolute h-screen w-2 bg-blue hover:bg-blue-light z-50 cursor-col-resize"
    :style="position"
  />
</template>

<script>
/* eslint-disable */
  import { mapGetters, mapActions } from 'vuex';

  export default {
    name: 'VerticalHandler',
    data() {
      return {
        screen: {
          width: 0,
          center: 0,
        },
        position: {},
        autoUpdatePosition: true,
      };
    },
    computed: {
      ...mapGetters({
        width: 'screen/screenWidth',
      }),
    },
    methods: {
      ...mapActions({
        setScreenWidth: 'screen/setScreenWidth',
      }),
      handleDragMove({ x }) {
        this.autoUpdatePosition = false;
        const percent = this.constrainBoundaries(x / this.screen.width * 100);
        this.setScreenWidth(percent);
      },
      handleDragEnd() {
        this.autoUpdatePosition = true;
      },
      constrainBoundaries(percentage) {
        // todo move to mixin or helper
        if(percentage <= 0) return 0;
        if(percentage >= 100) return 100;
        return percentage;
      },
      updateHandlerPosition() {
        this.position = {
          left: `calc(${ this.width }% - .25rem)`,
        };
      },
      setInnerDimensions() {
        this.screen.width = window.innerWidth;
        this.screen.center = window.innerWidth / 2;
      },
    },
    mounted() {
      this.setInnerDimensions();
    },
    watch: {
      width: {
        handler() {
          if(!this.autoUpdatePosition) return;
          this.updateHandlerPosition();
        },
        immediate: true,
      },
    },
  };
</script>

<style scoped>
  .cursor-col-resize {
    cursor: col-resize;
  }
</style>
