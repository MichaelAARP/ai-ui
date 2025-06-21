import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import './index.css'; // optional

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);


// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import App from './App';
// import { ChainlitContext, ChainlitAPI } from '@chainlit/react-client';
// import { RecoilRoot } from 'recoil';
// import { BrowserRouter } from 'react-router-dom';

// const CHAINLIT_SERVER_URL = 'https://demchat.agetechcollaborative.org';

// const apiClient = new ChainlitAPI(CHAINLIT_SERVER_URL, 'webapp');

// ReactDOM.createRoot(document.getElementById('root')!).render(
//   <React.StrictMode>
//     <ChainlitContext.Provider value={apiClient}>
//       <RecoilRoot>
//         <BrowserRouter>
//           <App />
//         </BrowserRouter>
//       </RecoilRoot>
//     </ChainlitContext.Provider>
//   </React.StrictMode>
// );