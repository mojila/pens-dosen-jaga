import Document, { Head, Main, NextScript } from "next/document";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/css/bootstrap-grid.min.css";
import "bootstrap/dist/css/bootstrap-reboot.min.css";
import "../static/styles/style.css";

export default class MyDocument extends Document {
    render() {
        return (
            <html lang="en">
                <Head>
                    <meta name="viewport" content="initial-scale=1.0, width=device-width"/>
                    <link rel="stylesheet" href="/_next/static/style.css"/>
                    <link rel="shortcut icon" href="/static/images/favicon.ico" type="image/x-icon"/>
                    <link rel="icon" href="/static/images/favicon.ico" type="image/x-icon"/>
                </Head>
                <body>
                    <Main/>
                    <NextScript/>
                </body>
            </html>
        )
    }
}