import axios from 'axios';

const getBaseUrl = () => {
    // Prefer explicit environment variable when provided
    if (typeof process !== 'undefined' && process.env && process.env.API_URL) {
        return process.env.API_URL;
    }

    // Try to detect Expo debugger host (works in Expo Go / Metro)
    try {
        const Constants = require('expo-constants').default;
        const manifest = Constants.manifest || Constants.expoConfig;
        if (manifest && manifest.debuggerHost) {
            const ip = manifest.debuggerHost.split(':')[0];
            return `http://${ip}:3333`;
        }
    } catch (e) {}

    // Android emulator (Android Studio) maps localhost to 10.0.2.2
    try {
        const { Platform } = require('react-native');
        if (Platform.OS === 'android') {
            return 'http://10.0.2.2:3333';
        }
    } catch (e) {}

    // Fallback to localhost (iOS simulator / web)
    return 'http://localhost:3333';
};

const api = axios.create({
    baseURL: getBaseUrl()
});

export default api;