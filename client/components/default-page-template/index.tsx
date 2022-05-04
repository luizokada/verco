import { Container } from "@nextui-org/react";
import Head from "next/head";
import { ReactElement } from "react";
import { Footer } from "../footer";
import { Header } from "../header";
import { Carousel } from "../carousel";
import { Divider } from "../divider";
import DisplayItems from "../displayItems";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Link from "next/link";

type DefaultPageTemplate = {
  tabTitle: string;
  contentDescription: string;
  children: ReactElement;
};

export default function DefaultPageTemplate({
  tabTitle,
  contentDescription,
  children,
}: DefaultPageTemplate) {
  return (
    <>
      <div>
        <Head>
          <title>{tabTitle}</title>
          <meta name="description" content={contentDescription} />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <Container as="main" css={{ w: "100%" }}>
          <Header />
          {children}
          <Carousel />
          <Divider title="Novidades" id="iha" />
          <DisplayItems />
          <Divider title="Mais Comprados" />
          <DisplayItems />
          <Footer />
        </Container>
        <Link href="/cadastro">
          <a href="#iha">Next.js!</a>
        </Link>
      </div>
    </>
  );
}
