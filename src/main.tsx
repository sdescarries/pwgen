import '@/main.scss';

import { createRoot } from 'react-dom/client';

import { App } from '@/App';
import { reportWebVitals } from '@/reportWebVitals';
import { Random } from './Password';

const container = document.getElementById('root');
const root = createRoot(container!);
root.render(<App />);

reportWebVitals(console.log);

const random = new Random(16);
const dump = () => eval(`console.table(window.random.#array)`);
Object.assign(window, { random, dump });

random.pop();


