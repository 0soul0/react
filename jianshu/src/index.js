import React from 'react';
import ReactDOM from 'react-dom';
//引入css 組件所有都會引入每有階層關析

import {Globalstyle} from './style.js';
//引入圖片
import {IconFont} from './common/static/iconfont/iconfont'
import App from './App';

const Appc=(
  <div>
      <App />
      <Globalstyle/>
      <IconFont/>
  </div>
);
ReactDOM.render(
  Appc,
  document.getElementById('root')
);



