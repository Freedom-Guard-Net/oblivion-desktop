import { getDirectionByLang } from '../../localization';
import { defaultSettings } from '../../defaultSettings';
import { settings } from './settings';

export const clearUpdateNotifOnStartup = () => {
    if (typeof window === 'undefined') return;
    localStorage?.removeItem('OBLIVION_CHECKUPDATE');
    localStorage?.removeItem('OBLIVION_NEWUPDATE');
};

export const loadTheme = () => {
    const detectingSystemTheme = window?.matchMedia('(prefers-color-scheme: dark)')?.matches;
    settings.get('theme').then((theme) => {
        document.documentElement.setAttribute(
            'data-bs-theme',
            typeof theme === 'undefined' ? (detectingSystemTheme ? 'dark' : 'light') : theme
        );
    });
};

export const loadLang = () => {
    settings.get('lang').then((data) => {
        if (typeof data === 'undefined') {
            data = defaultSettings.lang;
        }
        if (!localStorage.getItem('lang')) {
            localStorage.setItem('lang', data);
        }
        const langDir = getDirectionByLang(data);
        document.documentElement.setAttribute('lang', data);
        document.documentElement.setAttribute('dir', langDir);
    });
};
