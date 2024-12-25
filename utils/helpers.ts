import * as WebBrowser from 'expo-web-browser';

export const openLink = async (url: string) => {
    WebBrowser.openBrowserAsync(url);
} 