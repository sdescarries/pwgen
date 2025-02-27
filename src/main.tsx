import '@/main.scss';

import { createRoot } from 'react-dom/client';

import { App } from '@/App';
import { reportWebVitals } from '@/reportWebVitals';

const container = document.getElementById('root');

 
const root = createRoot(container!);
root.render(<App />);

reportWebVitals(console.log);
