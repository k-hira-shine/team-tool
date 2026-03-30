# TeamTool

チーム向けの置き場です。

| フォルダ | 内容 |
|----------|------|
| [`portal/`](portal/) | ポータルサイト（Next.js）。ツールへの入口・リンク集 |
| [`tools/`](tools/) | これから足す各ツール用（空のメモ付き） |

## いまの状態（テスト用）

- **ログインなし**で、トップページ（URL は `/`）がそのままポータル画面です。
- **環境変数は不要**でビルド・表示できます。

## 開発（ローカル・ポータル）

```bash
cd portal
npm install
npm run dev
```

ブラウザで http://localhost:3000 を開きます。

## GitHub リポジトリ

- <https://github.com/k-hira-shine/team-tool>

## Vercel にデプロイ（ポータル）

1. プロジェクトの **Root Directory** を **`portal`** に設定する（以前 `web` の場合は **`portal` に変更**）
2. **Deploy**（環境変数は現状不要）
3. 公開 URL でポータルが表示されます

**フォルダ名を `web` → `portal` に変えたので、Vercel の設定で Root Directory を必ず `portal` に直してください。**

## あとからログインを足すとき

Google OAuth・許可メールリストなどは、別途 `portal` 側に追加する想定です。

## デザイン

左サイドバー・カードグリッド。参照画像は `portal/public/design-reference.png`（配置済みの場合）。
