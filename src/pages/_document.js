import Document, { Html, Head, Main, NextScript } from 'next/document';

class myDocument extends Document {
    render() {
        return (
            <Html>
                <Head>
                    <link href="https://fonts.googleapis.com/css?family=Open+Sans:400,700|Rubik:500,700&display=swap" rel="stylesheet" />
                    <link rel="icon" href="/favicon.ico" />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}

export default myDocument;