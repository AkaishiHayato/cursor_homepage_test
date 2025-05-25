// スムーズスクロール機能
const initSmoothScroll = () => {
  try {
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
          target.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
          });
        }
      });
    });
  } catch (error) {
    console.error('スムーズスクロールの初期化に失敗しました:', error);
  }
};

// スクロールアニメーション機能
const initScrollAnimation = () => {
  try {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, observerOptions);

    document.querySelectorAll('.fade-in').forEach((element) => {
      observer.observe(element);
    });
  } catch (error) {
    console.error('スクロールアニメーションの初期化に失敗しました:', error);
  }
};

// ナビゲーションバーの背景色変更機能
const initNavbarScroll = () => {
  try {
    const navbar = document.querySelector('.navbar');
    if (!navbar) return;

    window.addEventListener('scroll', () => {
      if (window.scrollY > 50) {
        navbar.style.background = 'rgba(255, 255, 255, 0.98)';
      } else {
        navbar.style.background = 'rgba(255, 255, 255, 0.95)';
      }
    });
  } catch (error) {
    console.error('ナビゲーションバーの初期化に失敗しました:', error);
  }
};

// フォーム送信処理
const initContactForm = () => {
  try {
    const contactForm = document.querySelector('.contact-form');
    if (!contactForm) return;

    contactForm.addEventListener('submit', async (e) => {
      e.preventDefault();

      const formData = new FormData(contactForm);
      const formValues = Object.fromEntries(formData.entries());

      // ここにフォーム送信の処理を追加
      // 例: APIエンドポイントへの送信など

      try {
        // 送信成功時の処理
        alert('メッセージを送信しました！');
        contactForm.reset();
      } catch (error) {
        console.error('フォーム送信に失敗しました:', error);
        alert('申し訳ありません。送信に失敗しました。もう一度お試しください。');
      }
    });
  } catch (error) {
    console.error('コンタクトフォームの初期化に失敗しました:', error);
  }
};

// 初期化関数
const init = () => {
  try {
    initSmoothScroll();
    initScrollAnimation();
    initNavbarScroll();
    initContactForm();
  } catch (error) {
    console.error('アプリケーションの初期化に失敗しました:', error);
  }
};

// DOMContentLoadedイベントで初期化を実行
document.addEventListener('DOMContentLoaded', init);
