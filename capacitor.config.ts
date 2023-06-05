import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'io.ionic.starter',
  appName: 'tunelyApp',
  webDir: 'www',
  bundledWebRuntime: false,
  plugins: {
    android: {
      minSdkVersion: 24
    }
  }
};

export default config;
