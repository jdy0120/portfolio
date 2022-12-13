import Head from "next/head";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Head>
        <title>{`Frontend Developer Doyeonism`}</title>
        <meta
          name="description"
          content="프론트엔드 개발자 도여니즘의 포트폴리오 사이트입니다."
        />
        <meta
          name="google-site-verification"
          content="WrgXhDJoxCGujyLnFUO8SgIZCiXVWzwutKiQQujBiY8"
        />
        <meta
          name="naver-site-verification"
          content="4909b4bb612edd28d0f591516306e500cd19b359"
        />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Frontend Developer Doyeonism" />
        <meta
          property="og:description"
          content="프론트엔드 개발자 도여니즘의 포트폴리오 사이트입니다."
        />
        <meta
          property="og:image"
          content="https://portfolio.doyeonism.com/assets/logo.png"
        />
        <meta property="og:url" content="https://portfolio.doyeonism.com/" />
      </Head>
    </>
  );
}
