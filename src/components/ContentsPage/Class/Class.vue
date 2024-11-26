<template>
  <v-container class="py-5">
    <!-- ページタイトル -->
    <v-row justify="center" class="mb-6">
      <v-col cols="12" md="8">
        <h1 class="text-center font-weight-bold">
          語学クラスのご案内
        </h1>
        <p class="text-center">
          地域住民向けに提供される2024年の語学クラス一覧です。
        </p>
      </v-col>
    </v-row>

    <v-row justify="center" class="mb-6">
      <v-col cols="12" md="8">
        <v-card class="pa-5">
          <h2 class="text-center font-weight-bold mb-4">
            各クラスの説明
          </h2>
          <v-table>
            <thead>
              <tr>
                <th class="text-left">
                  区分
                </th>
                <th class="text-left">
                  入門英会話教室
                </th>
                <th class="text-left">
                  初級英会話教室
                </th>
                <th class="text-left">
                  中級英会話教室
                </th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="content in specificContents" :key="content.name">
                <td>{{ content.name }}</td>
                <td>{{ content.introduction }}</td>
                <td>{{ content.beginner }}</td>
                <td>{{ content.intermediate }}</td>
              </tr>
            </tbody>
          </v-table>
        </v-card>
      </v-col>
    </v-row>

    <v-row justify="center" class="mb-6">
      <v-col cols="12" md="8">
        <v-card class="pa-5">
          <h2 class="text-center font-weight-bold mb-4">
            共通事項
          </h2>
          <v-table>
            <tbody>
              <tr v-for="content in commonContents" :key="content.name">
                <td class="font-weight-bold">
                  {{ content.name }}
                </td>
                <td>
                  {{ content.value }}
                </td>
              </tr>
            </tbody>
          </v-table>
        </v-card>
      </v-col>
    </v-row>

    <v-row justify="center" class="mt-5">
      <v-col cols="12" md="8">
        <v-alert type="info" dense>
          ☆日本語教室毎月第 1～4 日曜日の 10:30～12:00、安芸府中商工センターにおいて外国の方を対象に日本語教室を開催しています。<br>
          受講料は無料です。日本語指導ボランティアも大歓迎です。<br>
          お知り合いの外国の方がいらっしゃいましたら、是非、日本語教室をご紹介下さい。
        </v-alert>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "ClassPage",
  data() {
    return {
      specificContents: [
        {
          name: "開催日",
          introduction: "4月4日（木）～ 第1～第4木曜（月4回）",
          beginner: "4月9日（火）～ 第2･4火曜日（月2回）",
          intermediate: "4月2日（火）～ 第1･3火曜日（月2回）",
        },
        {
          name: "お時間",
          introduction: "19時15分 ～ 20時15分（1時間）",
          beginner: "18時30分 ～ 20時30分（2時間）",
          intermediate: "18時30分 ～ 20時30分（2時間）",
        },
      ],

      commonContents: [
        { name: "定員", value: "12名程度" },
        { name: "期間", value: "令和6年4月～令和7年3月" },
        { name: "講師", value: "外国人講師" },
        { name: "受講料", value: "１か月 3,500 円（1 年分を 2 回に分けて前払い。）" },
        { name: "実施場所", value: "安芸府中商工センター（府中町大須１丁目１０－１０）" },
        { name: "申込先", value: "府中町国際交流協会" },
        { name: "申込期間", value: "2 月 13 日(火)午前 9 時から申込を受け付けます。" },
        {
          name: "申込方法",
          value:
            "〇 電話・FAX・メールで申込んでください。(電話は火曜日・水曜日・木曜日の 9：00～12：00、FAX・メールは終日受付)。定員になり次第、申込を締切ります。",
        },
      ],
    };
  },
};
</script>
