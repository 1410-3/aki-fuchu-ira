<template>
  <Header />
  <TopPagesContents class="horizontal-gradient" />
</template>

<script setup>
import Header from '@/components/Header/Header.vue';
import TopPagesContents from '@/components/TopPage/Contents.vue';
</script>

<style scoped>
.horizontal-gradient {
  background: linear-gradient(to right, orange, pink);
}
</style>
