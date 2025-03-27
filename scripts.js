// 初始化播放器时启用填充模式
const player = videojs('main-video', {
    fluid: false,    // 禁用默认fluid模式
    responsive: true,
    fill: true,      // 启用自定义填充模式
    aspectRatio: '16:9' // 初始宽高比
  });
  
  // 窗口大小变化时动态重置
  window.addEventListener('resize', () => {
    player.currentDimensions({}); // 强制刷新尺寸计算
  });
  
  // 全屏切换时优化
  player.on('fullscreenchange', () => {
    if (player.isFullscreen()) {
      player.tech().el().style.objectFit = 'contain';
    }
  });
  // 管理员接口示例 违规检测
fetch('/api/delete-video', {
    method: 'POST',
    headers: { 'Authorization': 'Bearer <ADMIN_TOKEN>' },
    body: JSON.stringify({ videoId: '违规ID' })
  });