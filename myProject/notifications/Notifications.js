import * as Notifications from 'expo-notifications';


Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: true,
    shouldSetBadge: false,
  }),
});

Notifications.icon = './assets/notification-icon.png'

async function schedulePushNotification() {
  const time = new Date(Date.now())
  trigger = time.setDate(25)
  trigger.repeats = true

  await Notifications.scheduleNotificationAsync({
    content: {
      title: "Your monthly order",
      body: 'Please select the plants for your next shipment',
      sound: './assets/notification-sound.mp3',
    },
    trigger,
  });
}

export default schedulePushNotification;