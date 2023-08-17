import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.statecert.hello_appy',
  appName: 'hello_appy',
  webDir: 'dist',
  server: {
    androidScheme: 'https',
    url: "http://localhost:5174/",
    cleartext: true
  }
};

export default config;
