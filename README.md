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

## GitHub リポジトリ

- <https://github.com/k-hira-shine/team-tool>（このフォルダを `main` で push 済み）

## Vercel にデプロイ

1. [Vercel の Import](https://vercel.com/new) を開く
2. GitHub の **`k-hira-shine/team-tool`** をインポート
3. **Root Directory** を **`web`** に変更（「Edit」から指定）
4. **Deploy**（環境変数は不要）
5. 完了後に表示される **`https://….vercel.app`** が公開 URL

## あとからログインを足すとき

Google OAuth・許可メールリストなどは、別途コードと環境変数を追加する想定です。必要になったらそのときに README を更新します。

## デザイン

モックに合わせたレイアウト（左サイドバー・ネイビーのスケジュール帯・カードグリッド）。参照画像は `web/public/design-reference.png`（配置済みの場合）。
