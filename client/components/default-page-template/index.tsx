import { Container } from "@nextui-org/react";
import Head from "next/head";
import { ReactElement } from "react";
import { Footer } from "../footer";
import { Header } from "../header";
import { Carousel } from "../carousel";
import { Divider } from "../divider";
import DisplayItems from "../displayItems";

type DefaultPageTemplate = {
  tabTitle: string;
  contentDescription: string;
  children: ReactElement;
};

export const DefaultPageTemplate = ({
  tabTitle,
  contentDescription,
  children,
}: DefaultPageTemplate) => {
  return (
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
        <Divider title="Novidades" />
        <DisplayItems />
        <Divider title="Mais Comprados" />
        <DisplayItems />
        <Footer />
      </Container>
    </div>
  );
};
