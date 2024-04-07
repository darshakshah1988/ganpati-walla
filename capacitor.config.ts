import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.ganpatiwalla.app',
  appName: 'GanpatiWalla',
  webDir: 'dist',
  server: {
    androidScheme: 'https'
  }
};

export default config;
