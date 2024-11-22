<template>
  <v-container class="py-5">
    <v-row justify="center">
      <v-col 
        cols="12" 
        md="8">
        <v-card class="pa-5">
          <v-card-title class="text-h5">
            アーカイブ一覧
          </v-card-title>
          <v-divider />

          <!-- アーカイブリスト -->
          <v-list>
            <v-list-item
              v-for="(item, index) in archives"
              :key="index"
              class="mb-3"
              link
              :href="item.link"
            >
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
              </v-list-item-content>
              <v-list-item-icon>
                <v-icon>mdi-chevron-right</v-icon>
              </v-list-item-icon>
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
          link: "/ActivityRport/2023",
        },
        {
          title: "令和4年度(2022/4/1-2023/3/31)活動報告",
          date: "2023-04-01",
          link: "/ActivityRport/2022",
        },
        {
          title: "令和3年度(2021/4/1-2022/3/31)活動報告",
          date: "2022-04-01",
          link: "/ActivityRport/2021",
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
