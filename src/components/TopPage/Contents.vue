<template>
  <v-container class="fill-height">
    <v-responsive class="align-center fill-height mx-auto" max-width="900">
      <div class="text-center">
        <h1 class="text-h2">
          Welcome To Fuchu <br>
          International Relations Association!!
        </h1>
        <v-card outlined>
          <v-carousel hide-delimiters cycle height="500">
            <v-carousel-item v-for="(image, index) in images" :key="index">
              <v-img :src="image" contain></v-img>
            </v-carousel-item>
          </v-carousel>
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
      images: [
        new URL('@/assets/worldPiece.webp', import.meta.url).href,
        new URL('@/assets/momiji.png', import.meta.url).href,
        new URL('@/assets/okonomiyaki.png', import.meta.url).href,
      ]
    };
  }
}
</script>
