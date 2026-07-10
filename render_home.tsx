import React from 'react';
import { renderToString } from 'react-dom/server';
import Home from './src/pages/Home';
import { StaticRouter } from 'react-router-dom/server';

const html = renderToString(
  <StaticRouter location="/">
    <Home />
  </StaticRouter>
);

console.log(html);
