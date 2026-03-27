export default function Home() {
  return (
    <main style={{ padding: 32, maxWidth: 640, lineHeight: 1.6 }}>
      <h1 style={{ marginTop: 0 }}>Welcome</h1>
      <p>
        此專案為 Next.js App Router 範本，已含 <code>vercel.json</code> 與建置腳本。
        推送到 GitHub 後，至{" "}
        <a href="https://vercel.com/new" target="_blank" rel="noreferrer">
          vercel.com
        </a>{" "}
        匯入此倉庫即可部署。
      </p>
      <p style={{ color: "#666", fontSize: 14 }}>
        請在專案目錄執行 <code>npm install</code> 後再使用本機預覽。
      </p>
    </main>
  );
}