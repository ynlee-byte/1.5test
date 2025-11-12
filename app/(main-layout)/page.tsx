import dynamic from "next/dynamic";
import Banner from "@/components/home/Banner";

// 초기 뷰포트 밖의 모든 컴포넌트 lazy loading
const Animations = dynamic(() => import("@/components/shared/Animations"), { ssr: false });
const Feature = dynamic(() => import("@/components/home/Feature"), { ssr: false });
const TrendingGames = dynamic(() => import("@/components/home/TrendingGames"), { ssr: false });
const Countdown = dynamic(() => import("@/components/home/Countdown"), { ssr: false });
const Streamer = dynamic(() => import("@/components/home/Streamer"), { ssr: false });
const GamingSolutions = dynamic(() => import("@/components/home/GamingSolutions"), { ssr: false });
const Platform = dynamic(() => import("@/components/home/Platform"), { ssr: false });
const Secure = dynamic(() => import("@/components/home/Secure"), { ssr: false });
const WhyChoose = dynamic(() => import("@/components/home/WhyChoose"), { ssr: false });
const Cta = dynamic(() => import("@/components/home/Cta"), { ssr: false });

const page = () => {
  return (
    <main className="nftg-content nftg-content-home">
      <Animations />
      <Banner />
      <Feature />
      <TrendingGames />
      <Countdown />
      <Streamer />
      <GamingSolutions />
      <Platform />
      <Secure />
      <WhyChoose />
      <Cta />
    </main>
  );
};

export default page;
