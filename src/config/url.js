import * as dev from '@/config/development.js';
import * as prod from '@/config/production.js';

export const ABOUT_URL = process.env.NODE_ENV === 'production'? prod.ABOUT_URL : dev.ABOUT_URL;
export const CONCERTS_URL = process.env.NODE_ENV === 'production'? prod.CONCERTS_URL : dev.CONCERTS_URL;
export const WINDS_URL = process.env.NODE_ENV === 'production'? prod.WINDS_URL : dev.WINDS_URL;
export const ENSEMBLE_URL = process.env.NODE_ENV === 'production'? prod.ENSEMBLE_URL : dev.ENSEMBLE_URL;
export const LINK_URL = process.env.NODE_ENV === 'production'? prod.LINK_URL : dev.LINK_URL;
export const NEWS_URL = process.env.NODE_ENV === 'production'? prod.NEWS_URL : dev.NEWS_URL;
