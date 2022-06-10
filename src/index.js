import * as React from 'react';
import { createRoot } from 'react-dom/client';

import ContactApp from './react-dasar/daftar-kontak/components/ContactApp';

const root = createRoot(document.getElementById('root'));
root.render(<ContactApp />);
