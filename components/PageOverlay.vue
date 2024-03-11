<script setup></script>

<template>
  <div v-if="alive" class="overlay shadow">
    <slot></slot>
  </div>
</template>

<style scoped>
.overlay {
  position: fixed;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  top: 0px;
}
.shadow {
  background: rgba(0, 0, 0, 0.5);
}
</style>
<script>
export default {
  components: true,
  data() {
    return {
      alive: true
    }
  },
  props: {
    closeDelay: 0,
  },
  mounted() {
    console.log("pageOverlay mounted. Delay is " + this.closeDelay);
    if (this.closeDelay > 0) {
      setTimeout(() => {
        this.alive = false;
      }, this.closeDelay);
    }
  }
};
</script>
