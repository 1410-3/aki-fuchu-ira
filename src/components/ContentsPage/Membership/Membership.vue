<template>
  <v-app>
    <v-container>
      <!-- ページタイトル -->
      <v-row justify="center" class="mb-6">
        <v-col cols="12" md="8">
          <h1 class="text-center font-weight-bold">
            会員さんを募集しています！
          </h1>
          <p class="text-center">
            貢献してくださる会員さんを随時募集しています。
          </p>
        </v-col>
      </v-row>
      <v-row justify="center">
        <v-col cols="12" md="8">
          <v-card outlined>
            <v-card-title class="font-weight-bold">
              会員の種類と年会費
            </v-card-title>
            <v-card-text>
              府中町国際交流協会では、会員を募集しています。 <br>

              府中町国際交流協会では、ワールドミ－ティングやスピ－チコンテスト、
              語学教室、料理教室、交流会等を通じて、国際交流を積極的に推進して
              います。協会の活動は、みなさまの支援によって運営されています。<br><br>

              今年度も、個人会員及び法人会員を募集しています。会員は府中町の
              国際化を推進し、日本人と外国人の共生社会づくりを目指して協会の活動
              を支援していただく「サポ－タ－的な役割」を持つものです。<br><br>

              会員には、当協会主催の講座・イベント等の活動への会員割引などの特典
              があります。あなたも、ぜひ府中町国際交流協会とともにボランティア
              活動や地域の国際交流に参加しませんか。
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>

      <v-row justify="center">
        <v-col cols="12" md="8">
          <v-card outlined>
            <v-card-title class="font-weight-bold">
              会員の種類と年会費
            </v-card-title>
            <v-card-text>
              <v-list dense>
                <v-list-item>
                  <v-list-item-content>
                    <v-list-item-title>個人会員1人</v-list-item-title>
                    <v-list-item-subtitle>年会費: 2,000円</v-list-item-subtitle>
                  </v-list-item-content>
                </v-list-item>
                <v-list-item>
                  <v-list-item-content>
                    <v-list-item-title>法人会員</v-list-item-title>
                    <v-list-item-subtitle>年会費: 10,000円</v-list-item-subtitle>
                  </v-list-item-content>
                </v-list-item>
              </v-list>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>

      <v-row justify="center" class="mt-6">
        <v-col cols="12" md="8">
          <v-card>
            <v-card-title class="font-weight-bold">
              お問い合わせ
            </v-card-title>
            <v-card-text>
              InstagramのDMなどからよろしくお願いいたします。
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-app>
</template>

<script>
export default {
  name: "MembershipPage",
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
