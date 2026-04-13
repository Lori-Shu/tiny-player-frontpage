import { Head } from "$fresh/runtime.ts";

export default function Home() {
  const winDownloadUrl = "https://github.com/Lori-Shu/tiny-player/releases/latest/download/tiny-player-setup.exe";

  return (
    <>
      <Head>
        <title>tiny-player - 极简高性能媒体播放器</title>
        <meta name="description" content="一款纯粹、轻量、无广告的媒体播放器。" />
      </Head>
      
      {/* 居中全屏背景 */}
      <div class="min-h-screen bg-gray-50 flex flex-col justify-center items-center p-4">
        
        {/* 卡片主体 */}
        <div class="max-w-md w-full bg-white rounded-2xl shadow-sm border border-gray-100 p-10 text-center">
          
          {/* 标题与描述 */}
          <h1 class="text-4xl font-extrabold text-gray-900 tracking-tight mb-3">
            tiny-player
          </h1>
          <p class="text-gray-500 mb-10 text-sm">
            基于底层高性能架构，纯粹的媒体播放器。告别臃肿。
          </p>

          {/* 下载按钮组 */}
          <div class="flex flex-col gap-4">
            <a
              href={winDownloadUrl}
              class="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-xl transition-colors shadow-sm flex justify-center items-center gap-2"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>
              下载 Windows 版
            </a>
            
            {/*<a
              href={linuxDownloadUrl}
              class="w-full bg-gray-800 hover:bg-gray-900 text-white font-medium py-3 px-6 rounded-xl transition-colors shadow-sm flex justify-center items-center gap-2"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>
              下载 Linux 版 (AppImage)
            </a>*/}
          </div>

          {/* 底部信息与源码链接 */}
          <div class="mt-10 pt-6 border-t border-gray-100">
            <p class="text-xs text-gray-400">
              完全开源免费 · <a href="https://github.com/Lori-Shu/tiny-player" target="_blank" class="text-blue-500 hover:text-blue-600 hover:underline transition-colors">查看 GitHub 源码</a>
            </p>
          </div>
        </div>

      </div>
    </>
  );
}