import React from 'react';
import Document, {
  Html, Main, NextScript,Head
} from 'next/document';
import { ServerStyleSheets } from '@material-ui/core/styles';

export default class MyDocument extends Document {
 
  render() {
    return (
      <Html lang="en">
          <Head>
                <link rel="icon" href="../static/assets/images/favicon/favicon.png" sizes="32x32" />
                <link rel="icon" href="../static/assets/images/favicon/favicon.png" sizes="192x192" />
                <link rel="apple-touch-icon" href="../static/assets/images/favicon/favicon.png" />
                <meta name="msapplication-TileImage" content="../static/assets/images/favicon/favicon.png" />
                

                {/* <link rel="stylesheet" href="assets/css/vendor/simple-line-icons.css" />
                <link rel="stylesheet" href="assets/css/vendor/ionicons.min.css" /> */}

                {/* <link rel="stylesheet" href="assets/css/plugins/animate.css" />
                <link rel="stylesheet" href="assets/css/plugins/swiper-bundle.min.css" />
                <link rel="stylesheet" href="assets/css/plugins/jquery-ui.min.css" />
                <link rel="stylesheet" href="assets/css/plugins/jquery.lineProgressbar.css">
                <link rel="stylesheet" href="assets/css/plugins/nice-select.css" />
                <link rel="stylesheet" href="assets/css/plugins/venobox.css" /> */}

                <link rel="stylesheet" href="../static/assets/css/vendor/vendor.min.css" />
                <link rel="stylesheet" href="../static/assets/css/plugins/plugins.min.css" />
                <link rel="stylesheet" href="../static/assets/css/style.min.css"/>

                 {/* <link rel="stylesheet" href="assets/css/style.css" /> */}
          </Head>
          <Main />
          <NextScript />
               <script src="../static/assets/js/vendor/vendor.min.js"></script>
               <script src="../static/assets/js/plugins/plugins.min.js"></script>
               <script src="../static/assets/js/main.js"></script>

      </Html>
    );
  }
}


MyDocument.getInitialProps = async (ctx) => {
    const sheets = new ServerStyleSheets();
  
  const originalRenderPage = ctx.renderPage;
    ctx.renderPage = () => originalRenderPage({
      enhanceApp: (App) => (props) => sheets.collect(<App {...props} />),
    });
     
    const initialProps = await Document.getInitialProps(ctx);
  
    return {
      ...initialProps,
      styles: [...React.Children.toArray(initialProps.styles), sheets.getStyleElement()],
    };
};