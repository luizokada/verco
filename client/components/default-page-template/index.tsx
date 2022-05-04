import { Container } from "@nextui-org/react";
import Head from "next/head";
import { ReactElement } from "react";
import { Footer } from "../footer";
import { Header } from "../header";

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
      <Head>
        <title>{tabTitle}</title>
        <meta name="description" content={contentDescription} />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <body>
        <Container fluid>
          <Header />
          {children}
          <Footer />
        </Container>
      </body>
    </>
  );
}
