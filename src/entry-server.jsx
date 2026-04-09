import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { StaticRouter } from 'react-router-dom/server';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { CacheProvider } from '@emotion/react';
import createCache from '@emotion/cache';
import createEmotionServer from '@emotion/server/create-instance';
import { HelmetProvider } from 'react-helmet-async';
import App from './App';
import theme from './theme';

export function render(url) {
  // Fresh Emotion cache per render to avoid leaks between routes
  const cache = createCache({ key: 'css' });
  const { extractCriticalToChunks, constructStyleTagsFromChunks } =
    createEmotionServer(cache);

  const helmetContext = {};

  const html = ReactDOMServer.renderToString(
    <React.StrictMode>
      <HelmetProvider context={helmetContext}>
        <CacheProvider value={cache}>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            <StaticRouter location={url}>
              <App />
            </StaticRouter>
          </ThemeProvider>
        </CacheProvider>
      </HelmetProvider>
    </React.StrictMode>,
  );

  // Extract critical CSS injected by MUI / Emotion
  const emotionChunks = extractCriticalToChunks(html);
  const emotionCss = constructStyleTagsFromChunks(emotionChunks);

  // Extract head tags set by react-helmet-async
  const { helmet } = helmetContext;

  return { html, emotionCss, helmet };
}
