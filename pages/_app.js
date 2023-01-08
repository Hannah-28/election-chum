import '../styles/globals.css';
import { ProSidebarProvider } from 'react-pro-sidebar';
import { Provider } from 'react-redux';
import store from '../store';

export default function App({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <ProSidebarProvider>
        <Component {...pageProps} />
      </ProSidebarProvider>
    </Provider>
  );
}
