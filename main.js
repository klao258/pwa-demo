if ('serviceWorker' in navigator && 'PushManager' in window) {
  // 注册service worker
  navigator.serviceWorker.register('service-worker.js').then(function(registration) {
    console.log('Service Worker registered with scope:', registration.scope);

    // 请求推送权限
    Notification.requestPermission().then(function(permission) {
      if (permission === 'granted') {
        console.log('Notification permission granted.');
      } else {
        console.log('Notification permission denied.');
      }
    });
  });

  // 发送推送通知
  document.getElementById('pushButton').addEventListener('click', function() {
    if (Notification.permission === 'granted') {
      navigator.serviceWorker.ready.then(function(registration) {
        registration.showNotification('Hello from your PWA!', {
          body: 'This is a push notification.',
          icon: 'icon.png',
          badge: 'icon.png'
        });
      });
    } else {
      alert('You must enable notifications first.');
    }
  });
} else {
  console.log('Push notifications are not supported in this browser.');
}