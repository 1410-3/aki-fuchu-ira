<template>
  <v-container class="py-5">
    <!-- ページタイトル -->
    <v-row 
      justify="center"
      class="mb-6">
      <v-col 
        cols="12" 
        md="8">
        <h1 class="text-center font-weight-bold">
          語学クラスのご案内
        </h1>
        <p class="text-center">
          地域住民向けに提供される2024年の語学クラス一覧です。
        </p>
      </v-col>
    </v-row>
    <v-row 
      justify="center"
      class="mb-6">
      <v-col 
        cols="12" 
        md="8">
        <v-card class="pa-5">
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
              <tr
                v-for="content in contents"
                :key="content.name"
              >
                <td>
                  {{ content.name }}
                </td>
                <td>
                  {{ content.introduction }}
                </td>
                <td>
                  {{ content.beginner }}
                </td>
                <td>
                  {{ content.intermediate }}
                </td>
              </tr>
            </tbody>
          </v-table>
        </v-card>
      </v-col>
    </v-row>
    <v-row 
      justify="center" 
      class="mt-5">
      <v-col 
        cols="12"
        md="8">
        <v-alert 
          type="info" 
          dense>
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
  name: "ContactPage",
  data () {
    return {
      contents: [
        {
          name: "定員",
          introduction: "12名程度",
          beginner:"12名程度",
          intermediate:"12名程度",
        },
        {
          name: "対象者",
          introduction: "20歳以上の英会話初心者",
          beginner:"20歳以上の中学生程度の英語力のかた",
          intermediate:"20歳以上の高校生程度の英語力のかた",
        },
        {
          name: "期間",
          introduction: "令和6年4月～令和7年3月",
          beginner:"令和6年4月～令和7年3月",
          intermediate:"令和6年4月～令和7年3月",
        }, 
        {
          name: "開催日",
          introduction: "4 月 4 日（木）～第 1～第 4 木曜（月 4 回）",
          beginner:"4 月 9 日（火）～第 2･4 火曜日（月 2 回）",
          intermediate:"4 月 2 日（火）～第 1･3 火曜日（月 2 回）",
        }, 
        {
          name: "お時間",
          introduction: "19 時 15 分～20 時 15 分（1 時間）",
          beginner:"18 時 30 分～20 時 30 分（2 時間）",
          intermediate:"18 時 30 分～20 時 30 分（2 時間）",
        }, 
        {
          name: "講師",
          introduction: "外国人講師",
          beginner:"外国人講師",
          intermediate:"外国人講師",
        }, 
        {
          name: "受 講 料",
          introduction: "１か月 3,500 円（1 年分を 2 回に分けて前払い。）",
          beginner:"１か月 3,500 円（1 年分を 2 回に分けて前払い。）",
          intermediate:"１か月 3,500 円（1 年分を 2 回に分けて前払い。）",
        }, 
        {
          name: "実施場所",
          introduction: "安芸府中商工センター（府中町大須１丁目１０－１０）",
          beginner:"安芸府中商工センター（府中町大須１丁目１０－１０）",
          intermediate:"安芸府中商工センター（府中町大須１丁目１０－１０）",
        },
        {
          name: "申込先",
          introduction: "府中町国際交流協会",
          beginner:"府中町国際交流協会",
          intermediate:"府中町国際交流協会",
        },
        {
          name: "申込期間",
          introduction: "2 月 13 日(火)午前 9 時から申込を受け付けます。",
          beginner:"2 月 13 日(火)午前 9 時から申込を受け付けます。",
          intermediate:"2 月 13 日(火)午前 9 時から申込を受け付けます。",
        },
        {
          name: "申込方法",
          introduction: "〇 電話・FAX・メールで申込んでください。(電話は火曜日・水曜日・木曜日の 9：00～12：00、FAX・メールは終日受付)○ ①住所・②氏名（ふりがな）・③電話番号・④メールアドレス・⑤希望の教室名をお知らせください。〇 定員になり次第、申込を締切ります。〇 申込が定員の半数に満たない場合は開講を見送らせていただくことがあります。",
          beginner: "〇 電話・FAX・メールで申込んでください。(電話は火曜日・水曜日・木曜日の 9：00～12：00、FAX・メールは終日受付)○ ①住所・②氏名（ふりがな）・③電話番号・④メールアドレス・⑤希望の教室名をお知らせください。〇 定員になり次第、申込を締切ります。〇 申込が定員の半数に満たない場合は開講を見送らせていただくことがあります。",
          intermediate: "〇 電話・FAX・メールで申込んでください。(電話は火曜日・水曜日・木曜日の 9：00～12：00、FAX・メールは終日受付)○ ①住所・②氏名（ふりがな）・③電話番号・④メールアドレス・⑤希望の教室名をお知らせください。〇 定員になり次第、申込を締切ります。〇 申込が定員の半数に満たない場合は開講を見送らせていただくことがあります。",
        },
      ],
    }
  },
};
</script>
