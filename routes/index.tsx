import { Head } from "$fresh/runtime.ts";

export default function Home() {
  const winDownloadUrl = "https://github.com/Lori-Shu/tiny-player/releases/latest/download/tiny-player-setup.exe";
  const repoUrl = "https://github.com/Lori-Shu/tiny-player";

  return (
    <>
      <Head>
        <title>tiny_player | High-Performance Media Player</title>
        <meta name="description" content="A lightweight, high-performance media player built with Rust." />
        {/* 引入一个细腻的字体 */}
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;800&display=swap" rel="stylesheet" />
        <style>{`
          body { font-family: 'Inter', sans-serif; }
          .mesh-gradient {
            background-color: #0f172a;
            background-image: 
              radial-gradient(at 0% 0%, hsla(253,16%,7%,1) 0, transparent 50%), 
              radial-gradient(at 50% 0%, hsla(225,39%,30%,1) 0, transparent 50%), 
              radial-gradient(at 100% 0%, hsla(339,49%,30%,1) 0, transparent 50%);
          }
        `}</style>
      </Head>
      
      {/* 极具现代感的背景 */}
      <div class="min-h-screen mesh-gradient flex flex-col items-center justify-center text-white selection:bg-blue-500/30">
        
        {/* 顶部状态标签 */}
        <div class="mb-8 animate-bounce">
          <span class="px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/10 text-xs font-medium tracking-widest uppercase text-blue-300">
            Now in Beta v0.1.0
          </span>
        </div>

        {/* 主体内容 */}
        <main class="max-w-4xl w-full px-6 text-center">
          <h1 class="text-6xl md:text-8xl font-extrabold tracking-tighter mb-6 bg-clip-text text-transparent bg-gradient-to-b from-white to-gray-400">
            tiny-player
          </h1>
          
          <p class="text-xl md:text-2xl text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed">
            极简，但快得离谱。基于 Rust 驱动的底层架构，<br class="hidden md:block" />
            为您还原最纯粹的视听体验。
          </p>

          {/* 下载卡片：毛玻璃效果 */}
          <div class="inline-block p-[1px] rounded-3xl bg-gradient-to-b from-white/20 to-transparent">
            <div class="bg-black/40 backdrop-blur-2xl rounded-[23px] p-8 md:p-12 shadow-2xl">
              <div class="flex flex-col md:flex-row items-center gap-6">
                
                {/* Windows 下载按钮 */}
                <a
                  href={winDownloadUrl}
                  class="group relative flex items-center gap-3 bg-white text-black font-bold py-4 px-8 rounded-2xl transition-all hover:scale-105 active:scale-95 overflow-hidden"
                >
                  <div class="absolute inset-0 bg-gradient-to-r from-blue-400/20 to-purple-400/20 opacity-0 group-hover:opacity-100 transition-opacity" />
                  <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M0 3.449L9.75 2.1V11.59H0V3.449zm0 17.102L9.75 21.9V12.4H0v8.151zM10.71 1.96L24 0v11.59H10.71V1.96zm0 20.08l13.29 1.96V12.4H10.71v9.64z"/></svg>
                  <span>下载 Windows 版</span>
                </a>

                <div class="h-10 w-[1px] bg-white/10 hidden md:block" />

                {/* GitHub 链接 */}
                <a
                  href={repoUrl}
                  target="_blank"
                  class="flex items-center gap-2 text-gray-300 hover:text-white transition-colors py-2"
                >
                  <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>
                  <span class="font-medium">Star on GitHub</span>
                </a>
              </div>
            </div>
          </div>

          {/* 特性简述 */}
          <div class="mt-24 grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
            <Feature title="Rust 驱动" desc="原生性能，超低内存占用，告别卡顿。" />
            <Feature title="硬核解码" desc="完美支持 4K 视频，色彩精准还原。" />
            <Feature title="隐私至上" desc="无广告、无追踪，代码完全透明开源。" />
          </div>
        </main>

        <footer class="mt-24 pb-12 text-gray-500 text-sm italic">
          Built with <span class="text-gray-400">Fresh</span> & <span class="text-gray-400">Rust</span>. Designed for the future.
        </footer>
      </div>
    </>
  );
}

function Feature({ title, desc }: { title: string; desc: string }) {
  return (
    <div class="p-6 rounded-2xl bg-white/5 border border-white/5">
      <h3 class="text-lg font-bold mb-2 text-blue-400">{title}</h3>
      <p class="text-gray-400 text-sm leading-relaxed">{desc}</p>
    </div>
  );
}