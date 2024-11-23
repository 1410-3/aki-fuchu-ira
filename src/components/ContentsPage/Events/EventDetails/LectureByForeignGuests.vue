<template>
  <v-app>
    <v-container>
      <v-row 
        justify="center" 
        class="mb-6">
        <v-col 
          cols="12" 
          md="8">
          <h1 class="text-center font-weight-bold">
            令和6年度2回目 外国人ゲストによる講演会 
          </h1>
          <p class="text-center">
            お待たせしました、令和6年度2回目 外国人ゲストによる講演会を実施いたします！！！
          </p>
        </v-col>
      </v-row>

      <v-row justify="center">
        <v-col 
          cols="12" 
          md="8">
          <v-card outlined>
            <v-card-title class="font-weight-bold">
              内容
            </v-card-title>
            <v-card-text>
              近日公開予定です、お楽しみに！
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-app>
</template>

<script>
export default {
  name: "LectureByForeignGuests",
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
