<script setup></script>

<template>
  <span class="dropdown-header" v-on:click="showBody = !showBody">
    <!-- В хедере может быть любой объект с дизайном, так что slot. -->
    <slot name="header"></slot>
  </span>
  <div class="dropdown-body" :class="{ 'dropdown-shown': showBody }">
    <slot></slot>
  </div>
</template>

<style scoped>
.change-name-field {
  position: relative;
  background: #eee;
  border: 1px solid black;
  cursor: pointer;
  padding: 2px;
}
.dropdown-body {
  position: absolute;
  display: none;
  flex-direction: column;
  z-index: 1;
}
.dropdown-shown {
  display: flex !important;
}
.change-name-dropdown {
  background: #ccc;
}
</style>
<script>
export default {
  components: true,
  props: {
    current_name: String,
  },
  data() {
    return {
      showBody: false,
    };
  },
};
</script>
