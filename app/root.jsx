import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from '@remix-run/react';
import { json } from '@remix-run/node';
import { createCookieSessionStorage } from '@remix-run/node';
import logoJdm from '~/assets/logojdm.png';
import config from '~/config.json';
import { ThemeProvider } from '~/components/theme-provider';
import { VisuallyHidden } from '~/components/visually-hidden';
import { Navbar } from '~/layouts/navbar';
import { Footer } from '~/components/footer';
import { ErrorBoundary } from '~/layouts/error';
import { useLoaderData } from '@remix-run/react';
import { useFetcher } from '@remix-run/react';
import { useEffect } from 'react';

export const links = () => [
  { rel: 'preload', href: '/fonts/ipa-gothic.woff2', as: 'font', type: 'font/woff2', crossOrigin: 'anonymous' },
  { rel: 'preload', href: '/fonts/gotham-book.woff2', as: 'font', type: 'font/woff2', crossOrigin: 'anonymous' },
  { rel: 'preload', href: '/fonts/gotham-medium.woff2', as: 'font', type: 'font/woff2', crossOrigin: 'anonymous' },
  { rel: 'preload', href: '/fonts/gotham-bold.woff2', as: 'font', type: 'font/woff2', crossOrigin: 'anonymous' },
  { rel: 'preload', href: '/fonts/gotham-book-italic.woff2', as: 'font', type: 'font/woff2', crossOrigin: 'anonymous' },
  { rel: 'preload', href: '/fonts/gotham-medium-italic.woff2', as: 'font', type: 'font/woff2', crossOrigin: 'anonymous' },
  { rel: 'preload', href: '/fonts/gotham-bold-italic.woff2', as: 'font', type: 'font/woff2', crossOrigin: 'anonymous' },
  { rel: 'preload', href: '/fonts/katakana.woff2', as: 'font', type: 'font/woff2', crossOrigin: 'anonymous' },
  { rel: 'manifest', href: '/manifest.json' },
  { rel: 'icon', href: logoJdm, type: 'image/png' },
  { rel: 'shortcut_icon', href: '/shortcut.png', type: 'image/png', sizes: '64x64' },
  { rel: 'apple-touch-icon', href: logoJdm, sizes: '256x256' },
  { rel: 'author', href: '/humans.txt', type: 'text/plain' },
];

export const loader = async ({ request }) => {
  const { getSession, commitSession } = createCookieSessionStorage({
    cookie: {
      name: '__session',
      httpOnly: true,
      maxAge: 604_800,
      path: '/',
      sameSite: 'lax',
      secrets: [process.env.SESSION_SECRET || 'fallback-secret-key'],
      secure: process.env.NODE_ENV === 'production',
    },
  });

  const session = await getSession(request.headers.get('Cookie'));
  const theme = session.get('theme') || 'dark';

  return json(
    { theme },
    {
      headers: {
        'Set-Cookie': await commitSession(session),
      },
    }
  );
};

export default function App() {
  let { theme } = useLoaderData();
  const fetcher = useFetcher();

  if (fetcher.formData?.has('theme')) {
    theme = fetcher.formData.get('theme');
  }

  function toggleTheme(newTheme) {
    fetcher.submit(
      { theme: newTheme ? newTheme : theme === 'dark' ? 'light' : 'dark' },
      { action: '/api/set-theme', method: 'post' }
    );
  }

  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        <ThemeProvider theme={theme} toggleTheme={toggleTheme}>
          <VisuallyHidden>
            <a href="#main">Skip to main content</a>
          </VisuallyHidden>
          <Navbar />
          <main id="main">
            <Outlet />
          </main>
          <Footer />
        </ThemeProvider>
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}