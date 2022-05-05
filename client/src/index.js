import './stylesheets/index.css';
import * as ReactDOMClient from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom'
import App from './App';


const Rooter = () => <BrowserRouter><App /></BrowserRouter>
const rootDiv = document.getElementById( 'root' );
const root = ReactDOMClient.createRoot( rootDiv );

root.render( <Rooter /> );
