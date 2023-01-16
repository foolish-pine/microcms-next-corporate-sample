import Head from "next/head";
import Image from "next/image";
import styles from "@/styles/Home.module.css";
import { client } from "@/libs/client";
import Link from "next/link";
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
