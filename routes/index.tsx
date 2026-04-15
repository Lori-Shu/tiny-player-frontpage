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
          body { 
            background-color: #050505; 
            margin: 0;
            font-family: 'Inter', sans-serif;
            color: #f8fafc;
          }
          .glass-card {
            background: rgba(255, 255, 255, 0.03);
            backdrop-filter: blur(20px);
            border: 1px solid rgba(255, 255, 255, 0.08);
          }
        `}</style>
      </Head>
      
      {/* 主容器：强制全屏且文字居中 */}
      <div class="min-h-screen w-full flex flex-col bg-[#050505] text-slate-50 selection:bg-blue-500/30">
        
        {/* 背景光晕 - 增加现代感 */}
        <div class="fixed inset-0 overflow-hidden pointer-events-none">
          <div class="absolute -top-[10%] -left-[10%] w-[40%] h-[40%] bg-blue-900/20 rounded-full blur-[120px]"></div>
          <div class="absolute top-[20%] -right-[10%] w-[30%] h-[50%] bg-purple-900/10 rounded-full blur-[120px]"></div>
        </div>

        {/* 顶部导航 (占位) */}
        <nav class="relative z-10 w-full px-8 py-6 flex flex-col md:flex-row justify-center items-center opacity-80 border-4 border-red-500">
            {/* 1. 使用 style 绕过 Tailwind 编译器验证 */}
            {/* 2. 加上 leading-[0.8] 压缩行高，防止撑破容器 */}
            <span 
                class="font-black tracking-tighter whitespace-nowrap leading-[0.8]"
                style={{ fontSize: "10rem", display: "block" }} 
            >
                tiny-player
            </span>
            
            <a href={repoUrl} class="mt-4 md:mt-0 md:ml-8 text-2xl md:text-5xl hover:text-blue-400 transition-colors">
                GitHub
            </a>
        </nav>

        {/* 核心内容区 - 使用 flex-grow 撑开空间 */}
        <main class="relative z-10 flex-grow flex flex-col items-center justify-center px-6 py-12">
          
          <div class="text-center mb-12 animate-fade-in">
            <h1 class="text-5xl md:text-6xl font-black tracking-tighter mb-6 bg-clip-text text-transparent bg-gradient-to-b from-white to-slate-500">
              极简，但不止于快。
            </h1>
            <p class="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed">
              基于 Rust 驱动的底层架构，<span class="text-slate-200">tiny-player</span> 专注于极致的响应速度与纯净的解码性能。
            </p>
          </div>

          {/* 模拟界面预览 - 填充下半部分空间，增强视觉现代感 */}
          <div class="w-full max-w-4xl aspect-video glass-card rounded-3xl mb-16 shadow-2xl relative overflow-hidden group">
             {/* 模拟播放器内部 UI */}
             <div class="absolute inset-0 flex items-center justify-center bg-black/20">
                <div class="w-20 h-20 rounded-full bg-white/10 flex items-center justify-center backdrop-blur-md group-hover:scale-110 transition-transform">
                   <svg class="w-8 h-8 text-white fill-current" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
                </div>
             </div>
             {/* 模拟控制条 */}
             <div class="absolute bottom-0 w-full p-6 bg-gradient-to-t from-black/60 to-transparent">
                <div class="h-1 w-full bg-white/10 rounded-full overflow-hidden">
                   <div class="h-full w-1/3 bg-blue-500"></div>
                </div>
             </div>
          </div>

          {/* 下载区 */}
          <div class="flex flex-col items-center gap-6">
            <a
              href={winDownloadUrl}
              class="group relative flex items-center gap-3 bg-slate-50 text-black font-bold py-5 px-10 rounded-2xl transition-all hover:scale-105 active:scale-95 shadow-[0_0_40px_rgba(255,255,255,0.1)]"
            >
              <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M0 3.449L9.75 2.1V11.59H0V3.449zm0 17.102L9.75 21.9V12.4H0v8.151zM10.71 1.96L24 0v11.59H10.71V1.96zm0 20.08l13.29 1.96V12.4H10.71v9.64z"/></svg>
              <span class="text-lg">立即下载 Windows 版</span>
            </a>
            <p class="text-slate-500 text-sm">v0.1.0-alpha | 适用于 Windows 10/11</p>
          </div>

        </main>

        {/* 底部特性栏 - 填充底部空间 */}
        <footer class="relative z-10 w-full px-6 py-12 border-t border-white/5 bg-black/20">
          <div class="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 text-center md:text-left">
            <div>
              <h3 class="text-white font-bold mb-2">Rust 原生内核</h3>
              <p class="text-slate-500 text-sm">零内存安全风险，极致利用每一分硬件性能。</p>
            </div>
            <div>
              <h3 class="text-white font-bold mb-2">4K 硬件加速</h3>
              <p class="text-slate-500 text-sm">自研解码管线，完美支持高帧率、超高清视频播放。</p>
            </div>
            <div>
              <h3 class="text-white font-bold mb-2">开源且隐私</h3>
              <p class="text-slate-500 text-sm">没有广告，没有追踪，只有代码和你的电影。</p>
            </div>
          </div>
          <div class="mt-12 text-center text-slate-600 text-xs">
            © 2026 Lori-Shu. All rights reserved.
          </div>
        </footer>
      </div>
    </>
  );
}