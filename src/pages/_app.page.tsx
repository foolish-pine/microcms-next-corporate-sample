import "destyle.css";
import "@/styles/base.scss";
import type { AppProps } from "next/app";
import Head from "next/head";
import { DefaultSeo } from "next-seo";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="robots" content="noindex" />
      </Head>
      <DefaultSeo
        defaultTitle="Shiro"
        description="白いお花の専門店「Shiro」のホームページです。"
        openGraph={{
          type: "website",
          title: "Shiro",
          description: "白いお花の専門店「Shiro」のホームページです。",
          site_name: "Shiro",
          url: "https://microcms-next-corporate-sample.foolish-pine.com/",
        }}
      />
      <Component {...pageProps} />
    </>
  );
}
