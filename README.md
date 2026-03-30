# TeamTool

チーム向けポータル（Next.js）。実装は `web/` にあります。

## いまの状態（テスト用）

- **ログインなし**で、トップページ（URL は `/`）がそのままポータル画面です。
- **環境変数は不要**でビルド・表示できます。
- **インターネット公開**を前提にするなら、GitHub に push して Vercel にデプロイするだけでOKです（Root Directory に `web` を指定）。

## 開発（ローカル）

```bash
cd web
npm install
npm run dev
```

ブラウザで http://localhost:3000 を開きます。

## Vercel にデプロイ

1. GitHub にリポジトリを push
2. [Vercel](https://vercel.com/) で **Import** → リポジトリを選択
3. **Root Directory** を `web` に設定（リポジトリ直下が `web` フォルダのとき）
4. 環境変数は **現状不要**（デプロイして URL を開けばページが見える）

## あとからログインを足すとき

Google OAuth・許可メールリストなどは、別途コードと環境変数を追加する想定です。必要になったらそのときに README を更新します。

## デザイン

モックに合わせたレイアウト（左サイドバー・ネイビーのスケジュール帯・カードグリッド）。参照画像は `web/public/design-reference.png`（配置済みの場合）。
