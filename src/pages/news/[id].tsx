import { client } from "@/libs/client";

export const getStaticPaths = async () => {
  const data = await client.get({ endpoint: "news" });

  const paths = data.contents.map((content) => `/news/${content.id}`);
  return { paths, fallback: false };
};

export const getStaticProps = async (context) => {
  const id = context.params.id;
  const data = await client.get({ endpoint: "news", contentId: id });

  return {
    props: {
      news: data,
    },
  };
};

export default function NewsId({ news }) {
  return (
    <main>
      <h1>{news.title}</h1>
      <p>{news.publishedAt}</p>
      <div
        dangerouslySetInnerHTML={{
          __html: `${news.content}`,
        }}
      />
    </main>
  );
}
