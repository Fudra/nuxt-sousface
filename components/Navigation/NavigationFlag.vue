<template>
  <div class="absolute bg-grey opacity-90 w-64 h-19 py-1 px-5 flex flex-col justify-center ml-20" style="width: 25rem;">
    <h2
      class="uppercase font-sans font-normal text-lg"
    >
      {{ name }}
    </h2>
    <h3
      class="uppercase font-sans font-normal text-2xl"
    >
      {{ project }}
    </h3>
  </div>
</template>

<script>
export default {
  name: 'NavigationFlag',
  props: {
    name: {
      type: String,
      default: 'Jon Doe',
    },
    project: {
      type: String,
      default: 'Lorem Ipsum',
    },
  },
};
</script>
