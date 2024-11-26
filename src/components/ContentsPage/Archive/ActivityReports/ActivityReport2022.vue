<template>
  <v-app>
    <v-container>
      <v-row justify="center" class="mb-6">
        <v-col cols="12" md="8">
          <h1 class="text-center font-weight-bold">
            2022年、活動報告
          </h1>
          <p class="text-center">
            2022年に活動したことを報告いたします。
          </p>
        </v-col>
      </v-row>

      <v-row justify="center">
        <v-col cols="12" md="8">
          <v-card outlined>
            <v-card-title class="font-weight-bold">
              活動
            </v-card-title>
            <v-card-text>
              某ウィルスに負けずにがんばりましょうね！！
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-app>
</template>

<script>
export default {
  name: "ActivityReport2022",
};
</script>

<style scoped>
.text-center {
  text-align: center;
}

.mb-6 {
  margin-bottom: 24px;
}

.mt-6 {
  margin-top: 24px;
}
</style>
