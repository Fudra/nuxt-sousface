<template>
  <div
    v-draggabilly="{ axis: 'x', containment: '.wrapper' }"
    v-draggabilly-on:dragMove="handleDragMove"
    v-draggabilly-on:dragEnd="handleDragEnd"
    class="absolute h-screen w-2 bg-teal opacity-80 hover:opacity-100 z-50 cursor-col-resize"
    :style="position"
  />
</template>

<script>
/* eslint-disable */
  import { mapGetters, mapActions } from 'vuex';
  import TWEEN from '@tweenjs/tween.js';

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

        // Tweening time in ms
        tweenDuration: 1000,
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
        this.transitionToOneSide();
      },
      constrainBoundaries(percentage) {
        // todo move to mixin or helper
        if(percentage <= 0) return 0;
        if(percentage >= 100) return 100;
        return percentage;
      },
      updateHandlerPosition() {
        let move = this.width > 90 ? '-.5rem' : '0.0001rem';
        this.position = {
          left: `calc(${ this.width }% + ${ move })`,
        };
      },
      setInnerDimensions() {
        this.screen.width = window.innerWidth;
        this.screen.center = window.innerWidth / 2;
      },
      transitionToOneSide() {
        if(this.width < 50) {
          this.tween(this.width, 0);
        } else {
          this.tween(this.width, 100);
        }
      },
      // source: https://alligator.io/vuejs/tween-values-tweenjs/
      tween(start, end) {
        let frameHandler;

        const animate = (currentTime) => {
          TWEEN.update(currentTime);
          frameHandler = requestAnimationFrame(animate);
        };

        const myTween = new TWEEN.Tween({ tweeningValue: start })
          .to({ tweeningValue: end }, this.tweenDuration)
          // .easing(TWEEN.Easing.Cubic)
          .onUpdate((value) => {
            this.setScreenWidth(+value.tweeningValue.toFixed(2));
          })
          .onComplete(() => {
            cancelAnimationFrame(frameHandler);
          })
          .start();

        frameHandler = requestAnimationFrame(animate);
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
