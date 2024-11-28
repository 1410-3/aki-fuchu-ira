# Productの概要

広島の安芸郡府中町の国際交流協会のホームページをリニューアルするならどんな感じにしようかなとおもって作っています。

## 💿 起動方法(Windows環境です)

1. <code>node.js</code>のLTSをインストールしてね。
2. <code>npm --version</code>で数字がでたら多分だいじょうぶ。
3. <code>npm i</code>で必要なパッケージをインストールできるよ。
4. <code>npm run dev</code>で起動できるよ。
5. <code>npm run test</code>でテストコードを導入したのでテストができるよ。
6. <code>http://localhost:3000/</code>にアクセスしてみよう。
7. <code>npm run build</code>でビルドです。

## VScodeの設定

ファイル => ユーザー設定 => 設定 => 「codeActionsOnSave」で検索 => settings.jsonで編集

settings.jsonに以下を追記して保存してちょ。

```json
  "editor.codeActionsOnSave": [
   "source.fixAll"],
 "eslint.validate": [
   "javascript",
   "javascriptreact",
   "typescript",
   "typescriptreact"
 ],
 "editor.defaultFormatter": "esbenp.prettier-vscode",
 "editor.formatOnSave": true
```

## これからやること

- CSSをきれいに設定して彩りをつける
- 複数から同じ画面に遷移する必要もないと思うので、トップページはメディアのコンテンツを充実させて、画面遷移はヘッダーからのみにしようかなと考え中。
- すべて英語に切り替える
- フォルダ構成とかいい感じにする
- Firebaseにデプロイする
