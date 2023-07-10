// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import * as RemoteConfig from 'firebase/remote-config';
// import { getAnalytics } from 'firebase/analytics';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyBde_XqFtUaRUvntP_FXNv4j-oPHMrOeyI',
  authDomain: 'philipyun-com.firebaseapp.com',
  projectId: 'philipyun-com',
  storageBucket: 'philipyun-com.appspot.com',
  messagingSenderId: '929076554573',
  appId: '1:929076554573:web:85738768d1875a2d102504',
  measurementId: 'G-GT8596YL54',
};

type ConfigType = 'json' | 'number' | 'boolean';
// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const getRemoteConfig = async () => {
  const isSupported = await RemoteConfig.isSupported();
  if (!isSupported) return null;
  const remoteConfig = RemoteConfig.getRemoteConfig(app);
  await RemoteConfig.fetchAndActivate(remoteConfig);
  return remoteConfig;
};

export const getFirebaseConfigValue = async (value: string, type?: ConfigType) => {
  const remoteConfig = await getRemoteConfig();
  if (!remoteConfig) {
    return null;
  }
  const configType = type ?? 'json';
  switch (configType) {
    case 'boolean':
      return RemoteConfig.getValue(remoteConfig, value).asBoolean();
    case 'json':
      return JSON.parse(RemoteConfig.getValue(remoteConfig, value).asString());
    case 'number':
      return RemoteConfig.getValue(remoteConfig, value).asNumber();
  }
};
