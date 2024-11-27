<template>
  <v-app>
    <v-container>
      <!-- ページタイトル -->
      <v-row justify="center" class="mb-6">
        <v-col cols="12" md="8">
          <h1 class="text-center font-weight-bold">
            Photos
          </h1>
          <p class="text-center">
            各イベントなどのお写真です。
          </p>
        </v-col>
      </v-row>

      <!-- PhotoList -->
      <div class="text-center">
        <v-card>
          <v-carousel hide-delimiters cycle height="500">
            <v-carousel-item outlined v-for="event in events" :key="event.id">
              <v-img :src="event.image" contain></v-img>
            </v-carousel-item>
          </v-carousel>
        </v-card>
      </div>
    </v-container>
  </v-app>
</template>

<script>
export default {
  name: "PhotosPage",
  data() {
    return {
      events: [
        {
          id: 1,
          image: "src/assets/okonomiyaki.png"
        },
        {
          id: 2,
          image: "src/assets/momiji.png"
        },
        {
          id: 3,
          image: "src/assets/momiji_manju.png"
        },
        {
          id: 4,
          image: "src/assets/war_building_genbaku_dome.png"
        },
      ]
    };
  },
};
</script>

<style scoped>
.text-center {
  text-align: center;
}

.mb-6 {
  margin-bottom: 24px;
}
</style>
