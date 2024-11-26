<template>
  <v-container class="py-5">
    <v-row justify="center" class="mb-6">
      <v-col cols="12" md="8">
        <h1 class="text-center font-weight-bold">
          アーカイブ一覧
        </h1>
        <p class="text-center">
          過去の活動記録を確認できます。
        </p>
      </v-col>
    </v-row>
    <v-row justify="center" class="mb-6">
      <v-col cols="12" md="8">
        <v-card class="pa-5">
          <v-card-title class="text-h5">
            アーカイブ一覧
          </v-card-title>
          <v-divider />

          <v-list>
            <v-list-item v-for="(item, index) in archives" :key="index" class="mb-3">
              <v-list-item-content>
                <v-list-item-title class="text-h6">
                  {{ item.title }}
                </v-list-item-title>
                <v-list-item-subtitle class="text-caption text--secondary">
                  {{ formatDate(item.date) }}
                </v-list-item-subtitle>
                <v-list-item-subtitle class="mt-2">
                  {{ item.description }}
                </v-list-item-subtitle>
                <v-card-actions>
                  <v-btn color="primary" outlined :href="item.link" target="_blank">
                    詳細を見る
                  </v-btn>
                </v-card-actions>
              </v-list-item-content>
            </v-list-item>
          </v-list>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      archives: [
        {
          title: "令和５年度(2023/4/1-2024/3/31)活動報告",
          date: "2024-04-01",
          link: "/activityReports/2023",
        },
        {
          title: "令和4年度(2022/4/1-2023/3/31)活動報告",
          date: "2023-04-01",
          link: "/activityReports/2022",
        },
        {
          title: "令和3年度(2021/4/1-2022/3/31)活動報告",
          date: "2022-04-01",
          link: "/activityReports/2021",
        },
      ],
    };
  },
  methods: {
    formatDate(date) {
      const options = { year: "numeric", month: "long", day: "numeric" };
      return new Date(date).toLocaleDateString("ja-JP", options);
    },
  },
};
</script>
