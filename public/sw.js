self.addEventListener('push', function(event) {
  console.log('Push received');

  const data = {
    title: "Flash Sale!",
    body: "50% discount available now!",
    icon: "https://cdn-icons-png.flaticon.com/512/1827/1827504.png"
  };

  const options = {
    body: data.body,
    icon: data.icon
  };

  event.waitUntil(
    self.registration.showNotification(data.title, options)
  );
});

self.addEventListener('notificationclick', function(event) {
  event.notification.close();
  event.waitUntil(
    clients.openWindow('http://localhost:5173')
  );
});