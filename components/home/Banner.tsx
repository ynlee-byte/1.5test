"use client";
import bannerThumb from "@/public/optimized/00-1.webp";
import sword from "@/public/images/banner/sword.png";
import avatar1 from "@/public/img/avatar1.png";
import avatar2 from "@/public/img/avatar2.png";
import avatar3 from "@/public/img/avatar3.png";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Tilt from "react-parallax-tilt";

// 배너 슬라이드 5개로 축소 (성능 최적화)
const generateBannerSlides = () => {
  const slides = [];
  const titles = ["기획 정리", "콘텐츠 발행", "외부 기업 투고", "협업 경험", "구체적인 피드백"];
  const imageIndices = [6, 19, 21, 25, 4]; // 미리 선택된 이미지

  imageIndices.forEach((idx, i) => {
    const imageNum = String(idx).padStart(2, '0');
    slides.push({
      id: i + 1,
      imagePath: `/optimized/${imageNum}.webp`,
      title: titles[i],
    });
  });
  return slides;
};

const bannerSlides = generateBannerSlides();

const winners = [
  {
    id: 1,
    name: "Cristofer Dorwart",
    img: avatar1,
    prizeMoney: 350,
  },
  {
    id: 2,
    name: "Luna Evergreen",
    img: avatar2,
    prizeMoney: 250,
  },
  {
    id: 3,
    name: "Lucas Thornfield",
    img: avatar3,
    prizeMoney: 150,
  },
];

const Banner = () => {
  // GSAP 애니메이션 비활성화 - 성능 최적화
  // useGSAP(() => {
  //   const device_width = window.innerWidth;
  //   if (device_width >= 768) {
  //     const tl = gsap.timeline({
  //       scrollTrigger: {
  //         trigger: ".banner",
  //         start: "top top",
  //         end: "+=40%",
  //         scrub: 1,
  //         pin: false,
  //       },
  //     });
  //     tl.to(".sword img", {
  //       y: "180px",
  //       opacity: 0.4,
  //       duration: 3,
  //     });
  //     tl.to(".banner__thumb img", {
  //       transform: "scale(0.7)",
  //       y: "100px",
  //       opacity: 0.4,
  //       duration: 3,
  //     });
  //   }
  // });
  return (
    <section className="banner">
      <div className="container-fluid">
        <div className="row vertical-column-gap">
          <div className="col-12 col-lg-8 col-xxl-9">
            <div className="banner__content">
              <div className="banner__content-inner">
                <ol className="breadcrumb mt-8">
                  <li className="breadcrumb-item active">Explore</li>
                  <li className="breadcrumb-item active">Play</li>
                  <li className="breadcrumb-item active">Win</li>
                </ol>
                <h1 className="title-animation title-xxl stroked-text fw-8 transform-none mt-8">Play & Earn</h1>
                <p className="text-xl mt-6">창의적인 기획과 전략으로 여러분의 아이디어를 현실로 만들어드립니다. 함께 성장하는 파트너가 되겠습니다.</p>
                <div className="section__cta mt-40">
                  <div className="btn-wrapper">
                    <Link href="/games" className="btn--secondary">
                      프로젝트 시작하기
                    </Link>
                    <svg viewBox="0 0 100 102" xmlns="http://www.w3.org/2000/svg" fill="none" preserveAspectRatio="none" className="shape">
                      <path d="M0 1  L100 1  L100 55 L80 101 L0 101 Z" />
                    </svg>
                  </div>
                </div>
              </div>
              <div className="sword">
                <Image src={sword} alt="Image" />
              </div>
              <div className="banner__thumb">
                <Image
                  src={bannerThumb}
                  alt="Image"
                  priority
                  sizes="(max-width: 768px) 100vw, 60vw"
                />
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-4 col-xxl-3">
            {/* Last Winners Card */}
            <div className="hero-content" style={{ marginBottom: '20px' }}>
              <Tilt
                className="card-area py-lg-8 py-6 px-lg-6 px-3 rounded-5 tilt"
                data-tilt>
                <h3 className="tcn-1 dot-icon cursor-scale growDown mb-6 title-anim d-flex align-items-center gap-3">
                  <span className="orange-dot" style={{
                    width: '12px',
                    height: '12px',
                    borderRadius: '50%',
                    background: 'rgb(246, 87, 30)',
                    display: 'inline-block',
                    flexShrink: 0
                  }}></span>
                  Last Winners
                </h3>
                <div className="hr-line" style={{ marginBottom: '30px' }}></div>
                <div className="card-items">
                  {winners.map(({ id, img, name, prizeMoney }) => (
                    <React.Fragment key={id}>
                      <div className="card-item">
                        <div className="card-img-area rounded-circle overflow-hidden">
                          <Image className="w-100" src={img} alt="profile" />
                        </div>
                        <div className="card-info">
                          <h4 className="card-title fw-semibold tcn-1 mb-1 cursor-scale growDown2 title-anim">
                            {name}
                          </h4>
                          <p className="card-text tcs-1 fw-medium mb-0">
                            +${prizeMoney}
                          </p>
                        </div>
                      </div>
                      {id !== 3 && <div className="hr-line"></div>}
                    </React.Fragment>
                  ))}
                </div>
              </Tilt>
            </div>
            <div className="banner__slider">
              <div className="banner__slider-wrapper">
                {/* 슬라이더 대신 첫 번째 이미지만 표시 - 성능 최적화 */}
                <div className="banner__slider-single">
                  <div className="thumb">
                    <Link href="/games/2">
                      <Image
                        src={bannerSlides[0].imagePath}
                        alt="Image"
                        width={400}
                        height={500}
                        priority
                        sizes="(max-width: 768px) 100vw, 400px"
                      />
                    </Link>
                  </div>
                  <div className="content text-center">
                    <h2 className="fw-8 stroked-text" style={{ fontFamily: 'NexonLv2Gothic, sans-serif', textTransform: 'none' }}>
                      <Link href="/games/2">{bannerSlides[0].title}</Link>
                    </h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
