import Link from "next/link";
import { client } from "@/libs/client";
import helperStyles from "@/styles/helpers/helpers.module.scss";
import type { News } from "@/types/news";

export const getStaticProps = async () => {
  const data = await client.get({ endpoint: "news" });

  return {
    props: {
      news: data.contents,
    },
  };
};

type Props = {
  news: News[];
};

export default function Home({ news }: Props) {
  return (
    <div>
      <p className={helperStyles.ttu}>test</p>
      <ul>
        {news.map((news) => (
          <li key={news.id}>
            <Link href={`/news/${news.id}`}>{news.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
