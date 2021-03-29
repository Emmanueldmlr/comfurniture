import '../styles/globals.css';
import { Provider } from 'react-redux';
import store from '../store/store';
import { createWrapper } from 'next-redux-wrapper';
import { ThemeProvider } from '@material-ui/core/styles';
import theme from '../configs/theme';
import Head from 'next/head'

const MyApp = ({ Component, pageProps }) => {
  return(
      <>
        <ThemeProvider theme={theme}> 
				
          <Provider store={store}>
              <Component {...pageProps} />
          </Provider>
        </ThemeProvider>
      </>
  ) 
}

MyApp.getInitialProps = async ({ Component, ctx }) => {
  const pageProps = Component.getInitialProps
    ? await Component.getInitialProps(ctx)
    : {};
  return { pageProps: pageProps };
};

const makeStore = () => store;
const wrapper = createWrapper(makeStore);

export default wrapper.withRedux(MyApp);
