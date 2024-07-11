import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client'

// Perfect Scrollbar
import 'react-perfect-scrollbar/dist/css/styles.css';

// Tailwind css
import './tailwind.css';

// i18n (needs to be bundled)
import './i18n';

// Redux
import { Provider } from 'react-redux';
import store from './store/index';

// Dynamic Route Component
import DynamicRoute from './router/index';

const MainApp = () => {
    return (
        <React.StrictMode>
            <Suspense fallback={<div>Loading...</div>}>
                <Provider store={store}>
                    <DynamicRoute />
                </Provider>
            </Suspense>
        </React.StrictMode>
    );
};

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(<MainApp />);
