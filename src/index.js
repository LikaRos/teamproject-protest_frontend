import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { App } from 'components/App';
import { store, persistor } from './redux/store';
import { PersistGate } from 'redux-persist/integration/react';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <PersistGate persistor={persistor}>
      <Provider store={store}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </Provider>
    </PersistGate>
  </React.StrictMode>
);
// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import { App } from 'components/App';
// import './index.css';
// import { Provider } from 'react-redux';
// import { PersistGate } from 'redux-persist/integration/react';
// import { persistor, store } from './redux/store';
// import { BrowserRouter } from 'react-router-dom';

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <Provider store={store}>
//     <PersistGate loading={null} persistor={persistor}>
//       <BrowserRouter>
//         <App />
//       </BrowserRouter>
//     </PersistGate>
//   </Provider>
// );
