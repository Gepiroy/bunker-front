<script setup>
import DropdownTemplate from "./DropdownTemplate.vue";
</script>

<template>
  <dropdown-template>
    <template #header>
      <span class="change-name-header">{{ current_name }}</span>
    </template>
    <form class="change-name-form" @submit.prevent="onSubmit">
      <input type="text" v-model="name" id="name" placeholder="Новое имя" />
      <input type="submit" value="ОК" />
    </form>
  </dropdown-template>
</template>

<style scoped>
.change-name-header {
  position: relative;
  background: #eee;
  border: 1px solid black;
  border-radius: 12px;
  cursor: pointer;
  padding: 2px 4px;
  user-select: none;
}
.change-name-form {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  padding: 10px;
  background: #ccc;
  border-radius: 12px;
  border: 1px solid black;
}
</style>
<script>
export default {
  components: { DropdownTemplate },
  components: true,
  props: {
    current_name: null,
  },
  mounted() {
    this.socket = this.$nuxtSocket({ persist: "main" });
  },
  data() {
    return {
      name: null,
    };
  },
  methods: {
    onSubmit() {
      if(this.name==null) return;
      this.socket.emit(
        "nickChanged",
        {
          new_name: this.name,
        },
        (resp) => {
          /* Handle response, if any */
        }
      );
    },
  },
};
</script>
