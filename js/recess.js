
new SmartBanner({
  daysHidden: 15,
  daysReminder: 90,
  appStoreLanguage: 'us',
  title: 'MyPage',
  author: 'MyCompany LLC',
  button: 'VIEW',
  store: {
    ios: 'On the App Store',
    android: 'In Google Play',
    windows: 'In Windows store'
  },
  price: {
    ios: 'FREE',
    android: 'FREE',
    windows: 'FREE'
  }
  // , theme: '' // put platform type ('ios', 'android', etc.) here to force single theme on all device
  // , icon: '' // full path to icon image if not using website icon image
  // , force: 'ios' // Uncomment for platform emulation
});
