import Head from "next/head";
import type { FunctionComponent } from "react";

import { Page } from "../components/Page";
import type { ContentLocale } from "../contents";
import { contentLocaleFr } from "../contents/fr";

const Main: FunctionComponent<{ content: ContentLocale }> = ({ content }) => (
  <>
    <section className={`w-full flex flex-col`}>
      <div className={`flex flex-col items-center`}>
        <div className={`container py-6`}>{content.legal.content}</div>
      </div>
    </section>
  </>
);

const LegalPage: FunctionComponent = () => (
  <>
    <Head>
      <title>{contentLocaleFr.legal.title}</title>
    </Head>
    <Page content={contentLocaleFr}>
      <Main content={contentLocaleFr} />
    </Page>
  </>
);

export default LegalPage;
