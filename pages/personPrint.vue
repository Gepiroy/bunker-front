<script setup></script>

<template>
  <div class="cards">
    <PrintablePersonCard
      v-for="text in ages"
      :key="text"
      :text="text"
      color="#999"
    ></PrintablePersonCard>
    <PrintablePersonCard
      v-for="text in ages"
      :key="text"
      :text="text"
      color="#999"
    ></PrintablePersonCard>
    <PrintablePersonCard
      v-for="text in ages"
      :key="text"
      :text="text"
      color="#999"
    ></PrintablePersonCard>
    <PrintablePersonCard
      v-for="text in ages"
      :key="text"
      :text="text"
      color="#999"
    ></PrintablePersonCard>
    <PrintablePersonCard
      v-for="text in ages"
      :key="text"
      :text="text"
      color="#999"
    ></PrintablePersonCard>
    <PrintablePersonCard
      v-for="text in ages"
      :key="text"
      :text="text"
      color="#999"
    ></PrintablePersonCard>
    <PrintablePersonCard
      v-for="text in orientations"
      :key="text"
      :text="text"
      color="#555"
    ></PrintablePersonCard>
    <PrintablePersonCard
      v-for="text in orientations"
      :key="text"
      :text="text"
      color="#555"
    ></PrintablePersonCard>
    <PrintablePersonCard
      v-for="text in orientations"
      :key="text"
      :text="text"
      color="#555"
    ></PrintablePersonCard>
    <PrintablePersonCard
      v-for="text in extra_orientations"
      :key="text"
      :text="text"
      color="#555"
    ></PrintablePersonCard>
    <PrintablePersonCard
      v-for="text in nations"
      :key="text"
      :text="text"
      color="#111"
    ></PrintablePersonCard>
    <PrintablePersonCard
      v-for="text in nations"
      :key="text"
      :text="text"
      color="#111"
    ></PrintablePersonCard>
    <PrintablePersonCard
      v-for="text in nations"
      :key="text"
      :text="text"
      color="#111"
    ></PrintablePersonCard>
    <PrintablePersonCard
      v-for="text in nations"
      :key="text"
      :text="text"
      color="#111"
    ></PrintablePersonCard>
    <PrintablePersonCard
      v-for="text in nations"
      :key="text"
      :text="text"
      color="#111"
    ></PrintablePersonCard>
    <PrintablePersonCard
      v-for="text in nations"
      :key="text"
      :text="text"
      color="#111"
    ></PrintablePersonCard>
  </div>
</template>

<style scoped>
.cards {
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  background: #fff;
}
</style>
<script>
export default {
  data() {
    return {
      ages: [
        "Мальчик",
        "Парень",
        "Мужик",
        "Дед",
        "Девочка",
        "Девушка",
        "Женщина",
        "Бабушка",
      ],
      nations: [
        "Славянин",
        "Немец",
        "Еврей",
        "Араб",
        "Чёрный",
        "Кавказец",
        "Латинос",
        "Китаец",
        "Кореец",
      ],
      orientations: [
        "Натурал",
        "Натурал",
        "Натурал",
        "Натурал",
        "Натурал",
        "Натурал",
        "Натурал",
        "Натурал",
        "Натурал",
        "Гомосексуал",
        "Бисексуал",
        "Асексуал",
      ],
      extra_orientations: [
        "Педофил",
        "Зоофил",
        "Некрофил",
      ]
    };
  },
};
</script>
