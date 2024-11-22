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
            アクセス
          </h1>
          <p class="text-center">
            府中町国際交流協会へのアクセス方法をご案内します。<br>
            府中町国際交流協会事務局は、「安芸府中生涯学習センタ－くすのきプラザ２階」にあります。<br>
          </p>
        </v-col>
      </v-row>

      <!-- Googleマップセクション -->
      <v-row justify="center">
        <v-col 
          cols="12"
          md="8">
          <v-card>
            <v-card-title class="font-weight-bold">
              府中町国際交流協会の場所
            </v-card-title>
            <v-card-text>
              <div class="map-container">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3327.126776965908!2d132.5024507!3d34.3937776!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x355a9f73d5d8579d%3A0x7f422b57ce00eef!2z5a6J6Iq45bqc5Lit55Sf5rav5a2m57-S44K744Oz44K_44O844GP44GZ44Gu44GN44OX44Op44K2!5e0!3m2!1sja!2sjp!4v1690031234567!5m2!1sja!2sjp" 
                  width="100%"
                  height="400"
                  style="border:0;"
                  allowfullscreen=""
                  loading="lazy"
                  referrerpolicy="no-referrer-when-downgrade"
                />
              </div>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>

      <!-- アクセス情報セクション -->
      <v-row 
        justify="center"
        class="mt-6">
        <v-col 
          cols="12"
          md="8">
          <v-card>
            <v-card-title class="font-weight-bold">
              住所とアクセス情報
            </v-card-title>
            <v-card-text>
              <ul>
                <li>
                  <strong>住所:</strong> 〒735-0006 広島県安芸郡府中町本町1丁目10番15号
                </li>
                <li>
                  <strong>電話番号:</strong> 082-287-6340
                </li>
                <li>
                  <strong>FAX:</strong> 082-287-6340
                </li>
                <li>
                  <strong>最寄り駅:</strong> JR天神川駅（徒歩10分）
                </li>
                <li>
                  <strong>バス:</strong> 乗車「広電バス市内２号線府中山田ゆきのバス」、下車「府中町役場東口」（徒歩2分）<br>
                </li>
                <li>
                  <strong>駐車場:</strong> 周辺の有料駐車場をご利用ください。
                </li>
              </ul>
              <br>
              <p>
                ※事務局は、毎週火曜日、水曜日、木曜日の午前９時から正午まで開いています。<br>
                ※不在のときは、お名前と連絡先を留守番電話に入れてください（FAXも可）。後日、事務局から連絡します。
              </p>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-app>
</template>

<script>
export default {
  name: "AccessPage",
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
.map-container iframe {
  border-radius: 8px; /* マップの角を少し丸める */
}
</style>
