import './stylesheets/index.css';
import * as ReactDOMClient from 'react-dom/client';
import App from './App';

const rootDiv = document.getElementById( 'root' );
const root = ReactDOMClient.createRoot( rootDiv );

root.render( <App /> );
