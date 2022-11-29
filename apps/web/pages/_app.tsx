import React, { ReactNode, useEffect } from "react";
import ReactDOM from "react-dom";
import { AppProps } from "next/app";
import Head from "next/head";
import Router from "next/router";
import { createRoot } from 'react-dom/client';

import PageChange from "../components/PageChange";

import "@fortawesome/fontawesome-free/css/all.min.css";
import "styles/tailwind.css";
import { NextPage } from "next";

type GetLayout = (page: ReactNode) => ReactNode;

type Page<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: GetLayout;
};

type MyAppProps<P = {}> = AppProps<P> & {
  Component: Page<P>;
};

Router.events.on("routeChangeStart", (url) => {
  console.log(`Loading: ${url}`);
  if (document) {
    document.body.classList.add("body-page-transition");
    ReactDOM.render(
      <PageChange path={url} />,
      document.getElementById("page-transition")
    );
  }
});

export default function MyApp({ Component, pageProps }: MyAppProps): JSX.Element {
  const defaultGetLayout: GetLayout = (page: ReactNode): ReactNode => page;
  const getLayout = Component.getLayout ?? defaultGetLayout

  useEffect(() => {
    const pageTransitionElement = document.getElementById("page-transition");
    if (pageTransitionElement !== null) {
      Router.events.on("routeChangeComplete", () => {
        ReactDOM.unmountComponentAtNode(pageTransitionElement);
        document.body.classList.remove("body-page-transition");
      });
      Router.events.on("routeChangeError", () => {
        ReactDOM.unmountComponentAtNode(pageTransitionElement);
        document.body.classList.remove("body-page-transition");
      });
    }
  }, [])

  return (
    <React.Fragment>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <title>Whitebox QA Engineer Testing App</title>
      </Head>
        {getLayout(<Component {...pageProps} />)}
    </React.Fragment>
  );
}