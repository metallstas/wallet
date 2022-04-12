import './index.css';
import App from './App';
import { createRoot } from 'react-dom/client';

const container = document.getElementById('root')
if(container === null) {
  throw 'root not found'
}
const root = createRoot(container);
root.render(<App />);
