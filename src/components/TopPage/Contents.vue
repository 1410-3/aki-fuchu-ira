<template>
  <v-container class="fill-height">
    <v-responsive class="align-center fill-height mx-auto" max-width="900">
      <div class="text-center">
        <h1 class="text-h2">
          Welcome To Fuchu <br>
          International Relations Association!!
        </h1>
        <v-card outlined>
          <v-img :src=path />
        </v-card>
      </div>
    </v-responsive>
  </v-container>
</template>

<script>
export default {
  name: "ContentsPage",
  data() {
    return {
      path: new URL('@/assets/worldPiece.webp', import.meta.url).href
    };
  }
}
</script>
