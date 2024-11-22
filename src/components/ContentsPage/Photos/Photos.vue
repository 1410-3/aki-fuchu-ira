<template>
  <v-app>
    <v-container>
      <!-- ページタイトル -->
      <v-row 
        justify="center"
        class="mb-6">
        <v-col 
          cols="12" 
          md="8">
          <h1 class="text-center font-weight-bold">
            Photos
          </h1>
        </v-col>
      </v-row>

      <!-- PhotoList -->
      <v-row>
        <v-col 
          v-for="event in events" 
          :key="event.id"
          cols="12"
          sm="6" 
          md="6">
          <v-card outlined>
            <v-img 
              :src="event.image" 
              height="400px"
            />
            <v-card-title class="font-weight-bold">
              {{ event.title }}
            </v-card-title>
            <v-card-subtitle>{{ event.date }}</v-card-subtitle>
            <v-card-text>{{ event.description }}</v-card-text>
          </v-card>
        </v-col>
      </v-row>
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
          title: "1.お好み焼きを食べました！",
          image:"src/assets/okonomiyaki.png"
        },
        {
          id: 2,
          title: "2.紅葉を見に行きました！",
          image:"src/assets/momiji.png"
        },
        {
          id: 3,
          title: "3.藤い屋のもみじまんじゅうを食べました！ ",
          image:"src/assets/momiji_manju.png"
        },
        {
          id: 4,
          title: "4.原爆ドームを見に行きました。",
          image:"src/assets/war_building_genbaku_dome.png"
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
