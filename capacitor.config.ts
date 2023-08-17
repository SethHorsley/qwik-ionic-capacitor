import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.statecert.hello_appy',
  appName: 'hello_appy',
  webDir: 'dist',
  server: {
    androidScheme: 'https'
  }
};

export default config;
