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
import { ScriptProps } from "next/script";

type Page<P = Record<string, never>> = NextPage<P> & {
  layout: (page: ScriptProps) => JSX.Element;
};

type Props = AppProps & {
  Component: Page;
};

const Noop = ({ children }: ScriptProps) => <>{children}</>;


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

export default function MyApp({ Component, pageProps }: Props): JSX.Element {
  const Layout = Component.layout || Noop;

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
         <Layout>
          <Component {...pageProps} />
        </Layout>
    </React.Fragment>
  );
}