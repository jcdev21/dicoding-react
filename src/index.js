import * as React from 'react';
import { createRoot } from 'react-dom/client';

import ContactApp from './react-dasar/daftar-kontak/components/ContactApp';
// import CounterApp from './react-dasar/event-handling/CounterApp';

const root = createRoot(document.getElementById('root'));
root.render(<ContactApp />);
