// 初始化播放器
const player = videojs('main-video', {
  fluid: false,
  aspectRatio: '16:9'
});

// 评论系统
document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('comment-form');
  const commentsList = document.getElementById('comments-list');
  const commentCount = document.getElementById('comment-count');

  // 加载存储的评论
  let comments = JSON.parse(localStorage.getItem('comments') || '[]');
  updateComments();

  // 提交评论
  form.addEventListener('submit', (e) => {
      e.preventDefault();
      const text = form.querySelector('textarea').value.trim();
      
      if (text) {
          comments.push({
              text: text,
              time: new Date().toLocaleString(),
              likes: 0
          });
          
          localStorage.setItem('comments', JSON.stringify(comments));
          updateComments();
          form.reset();
      }
  });

  // 更新评论显示
  function updateComments() {
      commentsList.innerHTML = comments.map((comment, index) => `
          <div class="comment-item">
              <div class="comment-text">${comment.text}</div>
              <div class="comment-meta">
                  <span>${comment.time}</span>
                  <button onclick="handleLike(${index})">👍 ${comment.likes}</button>
              </div>
          </div>
      `).join('');
      
      commentCount.textContent = comments.length;
  }

  // 点赞功能
  window.handleLike = (index) => {
      comments[index].likes++;
      localStorage.setItem('comments', JSON.stringify(comments));
      updateComments();
  };
});