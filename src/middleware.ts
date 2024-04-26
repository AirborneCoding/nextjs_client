import createMiddleware from 'next-intl/middleware';

export default createMiddleware({
  locales: ['ar', 'fr'],
  defaultLocale: 'ar',
  localeDetection: false
});

export const config = {
  matcher: ['/', '/(ar|fr)/:path*']
};