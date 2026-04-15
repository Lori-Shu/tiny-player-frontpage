import { Head } from "$fresh/runtime.ts";

export default function Home() {
  const winDownloadUrl = "https://github.com/Lori-Shu/tiny-player/releases/latest/download/tiny-player-setup.exe";
  const repoUrl = "https://github.com/Lori-Shu/tiny-player";

  return (
    <>
      <Head>
        <title>tiny-player | 极简高性能播放器</title>
        <meta name="description" content="A lightweight, high-performance media player built with Rust." />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;700;900&display=swap" rel="stylesheet" />
        <style>{`
          /* 基础复位与全局样式 */
          body { 
            background-color: #050505; 
            margin: 0;
            font-family: 'Inter', sans-serif;
            color: #f8fafc;
            overflow-x: hidden;
          }

          /* 主容器 */
          .page-container {
            min-height: 100vh;
            display: flex;
            flex-direction: column;
            position: relative;
          }

          /* 背景光晕 */
          .glow-container {
            position: fixed;
            inset: 0;
            overflow: hidden;
            pointer-events: none;
            z-index: 0;
          }
          .glow-1 {
            position: absolute;
            top: -10%; left: -10%;
            width: 40%; height: 40%;
            background: rgba(30, 58, 138, 0.2);
            border-radius: 50%;
            filter: blur(120px);
          }
          .glow-2 {
            position: absolute;
            top: 20%; right: -10%;
            width: 30%; height: 50%;
            background: rgba(88, 28, 135, 0.1);
            border-radius: 50%;
            filter: blur(120px);
          }

          /* 导航栏 */
          .nav-bar {
            position: relative;
            z-index: 10;
            padding: 1.5rem 2rem;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            opacity: 0.8;
          }
          .brand-logo {
            font-weight: 900;
            letter-spacing: -0.05em;
            line-height: 0.8;
            white-space: nowrap;
            /* 响应式大字体：最小 4rem, 随宽度缩放, 最大 10rem */
            font-size: clamp(4rem, 12vw, 10rem);
          }
          .github-link {
            text-decoration: none;
            color: inherit;
            font-size: 1.5rem;
            margin-top: 1rem;
            transition: color 0.3s;
          }
          .github-link:hover { color: #60a5fa; }

          @media (min-width: 768px) {
            .nav-bar { flex-direction: row; }
            .github-link { margin-top: 0; margin-left: 2rem; font-size: 3rem; }
          }

          /* 核心内容区 */
          .main-content {
            position: relative;
            z-index: 10;
            flex-grow: 1;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            padding: 3rem 1.5rem;
            text-align: center;
          }

          .hero-text h1 {
            font-size: clamp(2.5rem, 6vw, 4rem);
            font-weight: 900;
            letter-spacing: -0.02em;
            margin-bottom: 1.5rem;
            background: linear-gradient(to bottom, #fff, #64748b);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
          }
          .hero-text p {
            font-size: 1.25rem;
            color: #94a3b8;
            max-width: 42rem;
            margin: 0 auto 3rem;
            line-height: 1.6;
          }

          /* 玻璃卡片预览 */
          .glass-card {
            width: 100%;
            max-width: 56rem;
            aspect-ratio: 16 / 9;
            background: rgba(255, 255, 255, 0.03);
            backdrop-filter: blur(20px);
            border: 1px solid rgba(255, 255, 255, 0.08);
            border-radius: 1.5rem;
            margin-bottom: 4rem;
            position: relative;
            overflow: hidden;
            box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5);
          }
          .play-button-wrapper {
            position: absolute;
            inset: 0;
            display: flex;
            align-items: center;
            justify-content: center;
            background: rgba(0,0,0,0.2);
          }
          .play-icon {
            width: 5rem; height: 5rem;
            background: rgba(255,255,255,0.1);
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            transition: transform 0.3s;
          }
          .glass-card:hover .play-icon { transform: scale(1.1); }

          /* 下载按钮 */
          .download-btn {
            display: flex;
            align-items: center;
            gap: 0.75rem;
            background: #f8fafc;
            color: #000;
            font-weight: 700;
            padding: 1.25rem 2.5rem;
            border-radius: 1rem;
            text-decoration: none;
            transition: transform 0.2s, box-shadow 0.2s;
            box-shadow: 0 0 40px rgba(255,255,255,0.1);
          }
          .download-btn:hover { transform: scale(1.05); }
          .download-btn:active { transform: scale(0.95); }

          /* 页脚网格 */
          .footer {
            position: relative;
            z-index: 10;
            padding: 3rem 1.5rem;
            border-top: 1px solid rgba(255,255,255,0.05);
            background: rgba(0,0,0,0.2);
          }
          .footer-grid {
            max-width: 72rem;
            margin: 0 auto;
            display: grid;
            grid-template-cols: 1fr;
            gap: 3rem;
          }
          @media (min-width: 768px) {
            .footer-grid { grid-template-cols: repeat(3, 1fr); }
          }
          .feature-item h3 { color: #fff; margin-bottom: 0.5rem; }
          .feature-item p { color: #64748b; font-size: 0.875rem; }
        `}</style>
      </Head>
      
      <div class="page-container">
        {/* 背景光晕 */}
        <div class="glow-container">
          <div class="glow-1"></div>
          <div class="glow-2"></div>
        </div>

        {/* 顶部导航 */}
        <nav class="nav-bar">
          <span class="brand-logo">tiny-player</span>
          <a href={repoUrl} class="github-link">GitHub</a>
        </nav>

        {/* 核心内容区 */}
        <main class="main-content">
          <div class="hero-text">
            <h1>极简，但不止于快。</h1>
            <p>
              基于 Rust 驱动的底层架构，<span style={{color: '#e2e8f0'}}>tiny-player</span> 专注于极致的响应速度与纯净的解码性能。
            </p>
          </div>


          {/* 下载区 */}
          <div style={{display:'flex', flexDirection:'column', alignItems:'center', gap:'1.5rem'}}>
            <a href={winDownloadUrl} class="download-btn">
              <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24"><path d="M0 3.449L9.75 2.1V11.59H0V3.449zm0 17.102L9.75 21.9V12.4H0v8.151zM10.71 1.96L24 0v11.59H10.71V1.96zm0 20.08l13.29 1.96V12.4H10.71v9.64z"/></svg>
              <span style={{fontSize:'1.125rem'}}>立即下载 Windows 版</span>
            </a>
            <p style={{color:'#64748b', fontSize:'0.875rem'}}>v0.1.0-beta | 适用于 Windows 10/11</p>
          </div>
        </main>

        {/* 页脚 */}
        <footer class="footer">
          <div class="footer-grid">
            <div class="feature-item">
              <h3>Rust 原生内核</h3>
              <p>零内存安全风险，极致利用每一分硬件性能。</p>
            </div>
            <div class="feature-item">
              <h3>4K 硬件加速</h3>
              <p>自研解码管线，完美支持高帧率、超高清视频播放。</p>
            </div>
            <div class="feature-item">
              <h3>开源且隐私</h3>
              <p>没有广告，没有追踪，只有代码和你的电影。</p>
            </div>
          </div>
          <div style={{marginTop:'3rem', textAlign:'center', color:'#475569', fontSize:'0.75rem'}}>
            © 2026 Lori-Shu. All rights reserved.
          </div>
        </footer>
      </div>
    </>
  );
}