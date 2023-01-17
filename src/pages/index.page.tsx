import Image from "next/image";
import { client } from "@/libs/client";
import { Header } from "@/pages/components/Header";
import helperStyles from "@/styles/helpers/helpers.module.scss";
import topStyles from "@/styles/pages/top/top.module.scss";
import type { Work } from "@/types/Work";

export const getStaticProps = async () => {
  const data = await client.get({ endpoint: "works" });

  return {
    props: {
      works: data.contents,
    },
  };
};

type Props = {
  works: Work[];
};

export default function Home({ works }: Props) {
  return (
    <>
      <Header />
      <main>
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
              {works.map((work) => (
                <li className={topStyles.work_card} key={work.id}>
                  <Image
                    src={work.image.url}
                    alt=""
                    width={work.image.width}
                    height={work.image.height}
                    className={topStyles.work_card_image}
                  />
                  <p className={topStyles.work_card_title}>{work.title}</p>
                  <p className={topStyles.work_card_description}>
                    {work.description}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </section>
      </main>
    </>
  );
}
