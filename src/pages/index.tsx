import Image from "next/image";
import { client } from "@/libs/client";
import { Header } from "./components/Header";
import helperStyles from "@/styles/helpers/helpers.module.scss";
import topStyles from "@/styles/pages/top/top.module.scss";
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
    <>
      <Header />
      <main className={topStyles.top_inner}>
        <div className={topStyles.mv}>
          <div className={topStyles.mv_inner}>
            <h1 className={topStyles.mv_title}>Shiro</h1>
            <p className={topStyles.mv_subtitle}>White flower shop</p>
          </div>
        </div>
        <section className={topStyles.concept}>
          <div className={topStyles.concept_inner}>
            <h2 className={topStyles.concept_title}>Concept</h2>
            <p className={topStyles.concept_text}>
              私たちShiroは、白いお花だけを取り扱うフラワーショップです。
              <br />
              色とりどりの花束も素敵だけれど、洗練された「白」の美しさを感じてほしい。
              <br />
              「白」に対する愛から生まれた静寂な時間が流れる店へ、ぜひお越しください。
            </p>
            <Image
              src="/img/top/ph_concept.png"
              alt=""
              width="960"
              height="400"
              className={topStyles.concept_image}
            />
          </div>
        </section>
        <section className={topStyles.work}>
          <div className={topStyles.work_inner}>
            <h2 className={topStyles.work_title}>Work</h2>
            <p className={topStyles.work_text}>
              <span className={helperStyles.mobileInlineBlock}>
                オーダーメイドでのブーケ・アレンジメントのデザインのほか、
              </span>
              ウェディングやイベントの装花なども行なっています。
              <br />
              一人一人にあったご提案をさせていただきます。
            </p>
            <ul className={topStyles.work_cardUnit}>
              <li className={topStyles.work_card}>
                <Image
                  src="/img/top/bg_mv.png"
                  alt=""
                  width="2560"
                  height="1240"
                  className={topStyles.work_card_image}
                />
                <p className={topStyles.work_card_title}>Gift</p>
                <p className={topStyles.work_card_description}>
                  花束をお送りしたいお相手、伝えたいお気持ちに合わせたプレゼント用花束のアレンジメントをさせていただきます。花言葉などの豆知識もお伝えします。
                </p>
              </li>
              <li className={topStyles.work_card}>
                <Image
                  src="/img/top/ph_concept.png"
                  alt=""
                  width="960"
                  height="400"
                  className={topStyles.work_card_image}
                />
                <p className={topStyles.work_card_title}>Gift</p>
                <p className={topStyles.work_card_description}>
                  花束をお送りしたいお相手、伝えたいお気持ちに合わせたプレゼント用花束のアレンジメントをさせていただきます。花言葉などの豆知識もお伝えします。
                </p>
              </li>
              <li className={topStyles.work_card}>
                <Image
                  src="/img/top/ph_concept.png"
                  alt=""
                  width="960"
                  height="400"
                  className={topStyles.work_card_image}
                />
                <p className={topStyles.work_card_title}>Gift</p>
                <p className={topStyles.work_card_description}>
                  花束をお送りしたいお相手、伝えたいお気持ちに合わせたプレゼント用花束のアレンジメントをさせていただきます。花言葉などの豆知識もお伝えします。
                </p>
              </li>
              <li className={topStyles.work_card}>
                <Image
                  src="/img/top/ph_concept.png"
                  alt=""
                  width="960"
                  height="400"
                  className={topStyles.work_card_image}
                />
                <p className={topStyles.work_card_title}>Gift</p>
                <p className={topStyles.work_card_description}>
                  花束をお送りしたいお相手、伝えたいお気持ちに合わせたプレゼント用花束のアレンジメントをさせていただきます。花言葉などの豆知識もお伝えします。
                </p>
              </li>
            </ul>
          </div>
        </section>
      </main>
      {/* <div>
        <p className={helperStyles.ttu}>test</p>
        <ul>
          {news.map((news) => (
            <li key={news.id}>
              <Link href={`/news/${news.id}`}>{news.title}</Link>
            </li>
          ))}
        </ul>
      </div> */}
    </>
  );
}
