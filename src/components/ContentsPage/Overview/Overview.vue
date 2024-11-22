<template>
  <v-app>
    <v-container>
      <v-main>
        <v-container>
          <v-row justify="center">
            <v-col 
              cols="12"
              md="8">
              <h1 class="text-center font-weight-bold">
                府中町国際交流協会とは？
              </h1>
              <p class="text-center">
                府中町国際交流協会は、地域の国際交流活動を推進するための団体です。
              </p>
            </v-col>
          </v-row>

          <v-row 
            justify="center" 
            class="mt-10">
            <v-col 
              cols="12" 
              md="12">
              <v-card outlined>
                <v-card-title class="font-weight-bold">
                  目的
                </v-card-title>
                <v-card-text>
                  <p>
                    多文化共生社会を目指し、地域の住民と外国籍の方々の交流を促進することを目指します。
                  </p>
                </v-card-text>
                <v-card-title class="font-weight-bold">
                  活動内容
                </v-card-title>
                <v-card-text>
                  <ul>
                    <li>国際交流イベントの開催</li>
                    <li>語学教室の提供</li>
                    <li>地域コミュニティとの協力</li>
                  </ul>
                </v-card-text>
              </v-card>
            </v-col>
          </v-row>
          <v-row 
            justify="center" 
            class="mt-10">
            <v-col 
              cols="12" 
              md="12">
              <v-card>
                <v-card-title class="font-weight-bold">
                  活動の様子
                </v-card-title>
                <v-card-text>
                  <p>
                    イベントや語学教室の写真を通じて、私たちの活動を感じてください。
                  </p>
                </v-card-text>
              </v-card>
            </v-col>
          </v-row>
        </v-container>
      </v-main>
    </v-container>
  </v-app>
</template>

<script>
export default {
  name: "Overview",
};
</script>

<style scoped>
.text-center {
  text-align: center;
}

.mt-10 {
  margin-top: 40px;
}
</style>
