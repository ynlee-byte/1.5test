"use client";
import avatar from "@/public/images/avatar/avatar.png";
import afive from "@/public/images/avatar/five.png";
import afour from "@/public/images/avatar/four.png";
import aone from "@/public/images/avatar/one.png";
import asix from "@/public/images/avatar/six.png";
import fire from "@/public/images/fire.png";
import Image from "next/image";
import Link from "next/link";
import Tilt from "react-parallax-tilt";

// 6개 이미지 생성
const generateTrendingGames = () => {
  const games = [];
  const avatars = [avatar, aone, afive, afour, asix];
  const names = ["David Malan", "Est Howard", "Ann Black", "Ar Mccoy", "Wade Warren", "Court Henry"];
  const titles = ["Bit Blossom", "Techno Tots", "Crypto Cutie", "Crypto Collectibles", "Byte Blossom", "Digital Dolly"];

  for (let i = 1; i <= 6; i++) {
    const imageNum = String(i).padStart(2, '0');
    games.push({
      id: i,
      imagePath: `/optimized/${imageNum}.webp`,
      title: titles[i - 1],
      number: `#${100 + i}`,
      creator: {
        name: names[i - 1],
        avatar: avatars[i % avatars.length],
      },
      price: (1 + (i % 10) * 0.5).toFixed(3),
      likes: (i % 50) + 1,
    });
  }
  return games;
};

const trendingGames = generateTrendingGames();

const TrendingGames = () => {
  // GSAP 애니메이션 비활성화 - 성능 최적화
  // useGSAP(() => {
  //   const elements = document.querySelectorAll(".appear-down");
  //   elements.forEach((element) => {
  //     gsap.fromTo(
  //       element,
  //       {
  //         scale: 0.8,
  //         opacity: 0,
  //       },
  //       {
  //         scale: 1,
  //         opacity: 1,
  //         duration: 1,
  //         stagger: 0.2,
  //         scrollTrigger: {
  //           trigger: element,
  //           scrub: 1,
  //           start: "top bottom",
  //           end: "top center",
  //           markers: false,
  //         },
  //       },
  //     );
  //   });
  // });
  return (
    <section className="trending pt-120 fade-wrapper">
      <div className="container-fluid">
        <div className="row align-items-center vertical-column-gap">
          <div className="col-12 col-lg-6">
            <div className="text-center text-lg-start">
              <h2 className="fw-6 title-animation mt-8">
                인기 포트폴리오 <Image src={fire} alt="Image" />{" "}
                <span style={{fontSize: '0.5em', color: '#FFB800'}}>({trendingGames.length}개)</span>
              </h2>
            </div>
          </div>
          <div className="col-12 col-lg-6">
            <div className="text-center text-lg-end">
              <div className="btn-wrapper">
                <Link href="/shop" className="btn--secondary">
                  전체보기
                </Link>
                <svg viewBox="0 0 100 102" xmlns="http://www.w3.org/2000/svg" fill="none" preserveAspectRatio="none" className="shape">
                  <path d="M0 1  L100 1  L100 55 L80 101 L0 101 Z" />
                </svg>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <div className="trending__wrapper mt-60 ">
              {trendingGames.map((game) => (
                <div key={game.id} className="trending__single-wrapper appear-down">
                  <Tilt tiltMaxAngleX={5} tiltMaxAngleY={5} className="trending__single van-tilt">
                    <div className="thumb ">
                      <Link href="/shop/1">
                        <Image
                          src={game.imagePath}
                          alt="Image"
                          width={400}
                          height={400}
                          loading="lazy"
                          sizes="(max-width: 768px) 50vw, 400px"
                        />
                      </Link>
                    </div>
                    <div className="content-wrapper">
                      <div className="info">
                        <p className="text-sm fw-6">
                          <Link href="/shop/1">{game.title}</Link>
                          <span>{game.number}</span>
                        </p>
                      </div>
                      <div className="trending__single-footer">
                        <div className="author">
                          <div className="author-meta">
                            <Link href="/public-profile" aria-label="view profile" title="view profile">
                              <span className="hexagon-wrapper">
                                <Image src={game.creator.avatar} alt="View Profile" />
                                <svg viewBox="-3 -3 106 106" xmlns="http://www.w3.org/2000/svg" fill="none" className="hexagon-border">
                                  <polygon points="50 0, 100 25, 100 75, 50 100, 0 75, 0 25" />
                                </svg>
                              </span>
                              <span className="text-sm fw-6">{game.creator.name}</span>
                            </Link>
                          </div>
                          <div className="author-title">
                            <p className="text-uppercase text-xs fw-6">제작자</p>
                          </div>
                        </div>
                        <div className="price-footer">
                          <div className="price-inner">
                            <p className="price text-sm fw-6">
                              {game.price} <span className="currency">ETH</span>
                            </p>
                            <Link href="/shop/1" className="btn--primary text-sm">
                              입찰하기
                              <i className="ti ti-arrow-narrow-right"></i>
                            </Link>
                            <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" fill="none" preserveAspectRatio="none" className="cmn-shape">
                              <path d="M0 0  L100 0  L100 65 L88 100 L0 100 Z" vectorEffect="non-scaling-stroke"></path>
                            </svg>
                          </div>
                          <div className="review">
                            <Link href="/shop/1" className="text-sm fw-6">
                              <i className="ti ti-heart-filled"></i>
                              {game.likes}
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Tilt>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrendingGames;
