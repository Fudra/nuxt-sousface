/* eslint-disable */
import Vue from 'vue';
import Draggabilly from 'draggabilly';

function install(Vue, options) {
  function bind(el, binding, vnode, oldVnode) {
    if(el.draggie) {
      return;
    }
    const options = binding.value || {};
    const draggie = new Draggabilly(el, options);
    el.draggie = draggie;
    const directives = vnode.data.directives;
    for(let i in directives) {
      const dir = directives[i];
      if(dir.name === 'draggabilly-on') {
        if(dir.modifiers.once) {
          draggie.once(dir.arg, dir.value);
        } else {
          draggie.on(dir.arg, dir.value);
        }
      }
    }
  }

  Vue.directive('draggabilly', {
    bind,
    unbind: function(el, binding, vnode) {
      if(el.draggie) {
        el.draggie.destroy();
      }
    },
  });

  Vue.directive('draggabilly-on', {
    bind(elem, binding, vnode) {
      return; //No need to do anything
    },
  });
}

export default install;
