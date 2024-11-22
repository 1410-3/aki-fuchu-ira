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
            イベント情報
          </h1>
          <p class="text-center">
            府中町国際交流協会が開催するイベントをご紹介します。
          </p>
        </v-col>
      </v-row>

      <!-- イベントリスト -->
      <v-row>
        <v-col 
          v-for="event in events" 
          :key="event.id"
          cols="12"
          sm="6" 
          md="4">
          <v-card outlined>
            <v-card-title class="font-weight-bold">
              {{ event.title }}
            </v-card-title>
            <v-card-subtitle>{{ event.date }}</v-card-subtitle>
            <v-card-text>{{ event.description }}</v-card-text>
            <v-card-actions>
              <v-btn 
                color="primary" 
                outlined 
                :href="event.link" 
                target="_blank">
                詳細を見る
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-app>
</template>

<script>
export default {
  name: "EventPage",
  data() {
    return {
      events: [
        {
          id: 1,
          title: "令和6年度2回目  外国人ゲストによる講演会 ",
          date: "2024年12月8日1:30PM -3:00PM",
          description:
            "「令和６年度２回目  外国人ゲストによる講演会」があります",
          // link: "",
        },
        {
          id: 2,
          title: "test2",
          date: "2024年12月8日1:30PM -3:00PM",
          description:
            "test2",
        },
        {
          id: 3,
          title: "test3",
          date: "2024年12月8日1:30PM -3:00PM",
          description:
            "test3",
        },
        {
          id: 4,
          title: "test4",
          date: "2024年12月8日1:30PM -3:00PM",
          description:
            "test4",
        },
        {
          id: 5,
          title: "test5",
          date: "2024年12月8日1:30PM -3:00PM",
          description:
            "test5",
        },
        {
          id: 6,
          title: "test6",
          date: "2024年12月8日1:30PM -3:00PM",
          description:
            "test6",
        },
        {
          id: 7,
          title: "test7",
          date: "2024年12月8日1:30PM -3:00PM",
          description:
            "test7",
        },
        {
          id: 8,
          title: "test8",
          date: "2024年12月8日1:30PM -3:00PM",
          description:
            "test8",
        },
        {
          id: 9,
          title: "test9",
          date: "2024年12月8日1:30PM -3:00PM",
          description:
            "test9",
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
