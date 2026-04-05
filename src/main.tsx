import '@/main.scss';

import { createRoot } from 'react-dom/client';

import { App } from '@/App';
import { benchmark } from '@/Password';

const container = document.getElementById('root');

const root = createRoot(container!);
root.render(<App />);

Object.assign(window, { benchmark });
