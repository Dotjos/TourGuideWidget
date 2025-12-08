import React from 'react';
import ReactDOM from 'react-dom/client';
import TourComponent from './TourComponent';
import { initializeWidget } from './loading';


(window as any).renderTourUI = function(tourConfig: any) {
  
    const rootElement = document.createElement('div');
    rootElement.id = 'tourguidekit-root';
    document.body.appendChild(rootElement);

    const shadowRoot = rootElement.attachShadow({ mode: 'open' });
    const container = document.createElement('div');
    shadowRoot.appendChild(container);

    ReactDOM.createRoot(container).render(
        <React.StrictMode>
            <TourComponent steps={tourConfig.steps} globalTourId={tourConfig.id} />
        </React.StrictMode>
    );
};


initializeWidget();