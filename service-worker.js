self.addEventListener('push', function (event) {
  var options = {
    body: event.data.text(),
    icon: 'icon.png',
    badge: 'icon.png'
  };

  event.waitUntil(
    self.registration.showNotification('Push Notification', options)
  );
});

self.addEventListener('notificationclick', function (event) {
  event.notification.close();
  // 可以根据需要添加点击后的行为
  event.waitUntil(
    clients.openWindow('/')
  );
});