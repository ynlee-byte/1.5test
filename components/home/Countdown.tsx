"use client";

import dynamic from "next/dynamic";
import Image from "next/image";
import Link from "next/link";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
const CountUp = dynamic(() => import("react-countup"), { ssr: false });

const Countdown = () => {
  useGSAP(() => {
    const device_width = window.innerWidth;
    if (device_width >= 768) {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: ".countdown",
          start: "top top",
          end: "+=40%",
          scrub: 1,
          pin: false,
        },
      });

      // 왼쪽 이미지 - 위로 이동
      gsap.to(".weapon-image", {
        y: -80,
        scrollTrigger: {
          trigger: ".countdown",
          start: "top bottom",
          end: "bottom top",
          scrub: 1,
        },
      });

      // 오른쪽 이미지 - 아래로 이동
      gsap.to(".character-image", {
        y: 80,
        scrollTrigger: {
          trigger: ".countdown",
          start: "top bottom",
          end: "bottom top",
          scrub: 1,
        },
      });
    }
  });

  return (
    <section className="countdown pt-120 pb-120">
      <div className="container-fluid">
        {/* 나의 카드 섹션 */}
        <div className="row justify-content-center">
          <div className="col-12 text-center mb-60">
            <h2 className="fw-6 title-animation">
              <span className="quaternary-text">🟢</span> 나의 카드 <span className="quaternary-text">🟢</span>
            </h2>
          </div>
        </div>

        <div className="row justify-content-center my-cards-row">
          <div className="col-auto">
            <div className="my-card-single card-purple">
              <div className="card-icon-wrapper">
                <div className="card-icon-circle purple">
                  <Image src="/iconChat.png" alt="Chat Icon" width={48} height={48} />
                </div>
              </div>
              <div className="badge-group mt-16">
                <span className="day-badge">월, 화, 수</span>
              </div>
              <h4 className="fw-7 mt-12">지난주 리뷰</h4>
              <div className="btn-wrapper mt-35">
                <Link href="/profile" className="btn--secondary">
                  리뷰 카드 작성하기
                </Link>
                <svg viewBox="0 0 100 102" xmlns="http://www.w3.org/2000/svg" fill="none" preserveAspectRatio="none" className="shape">
                  <path d="M0 1  L100 1  L100 55 L80 101 L0 101 Z" />
                </svg>
              </div>
            </div>
          </div>

          <div className="col-auto">
            <div className="my-card-single card-green highlight">
              <div className="card-icon-wrapper">
                <div className="card-icon-circle green">
                  <Image src="/bigiconScoop.png" alt="Scoop Icon" width={48} height={48} />
                </div>
              </div>
              <div className="badge-group mt-16">
                <span className="day-badge">목, 금</span>
              </div>
              <h4 className="fw-7 mt-12">지난주 판정</h4>
              <div className="btn-wrapper mt-35">
                <Link href="/profile" className="btn--secondary">
                  판정 카드 작성하기
                </Link>
                <svg viewBox="0 0 100 102" xmlns="http://www.w3.org/2000/svg" fill="none" preserveAspectRatio="none" className="shape">
                  <path d="M0 1  L100 1  L100 55 L80 101 L0 101 Z" />
                </svg>
              </div>
            </div>
          </div>

          <div className="col-auto">
            <div className="my-card-single card-pink">
              <div className="card-icon-wrapper">
                <div className="card-icon-circle pink">
                  <Image src="/iconHeart.png" alt="Heart Icon" width={48} height={48} />
                </div>
              </div>
              <div className="badge-group mt-16">
                <span className="day-badge">목, 금, 토</span>
              </div>
              <h4 className="fw-7 mt-12">이번주 목표</h4>
              <div className="btn-wrapper mt-35">
                <Link href="/profile" className="btn--secondary">
                  목표 카드 작성하기
                </Link>
                <svg viewBox="0 0 100 102" xmlns="http://www.w3.org/2000/svg" fill="none" preserveAspectRatio="none" className="shape">
                  <path d="M0 1  L100 1  L100 55 L80 101 L0 101 Z" />
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* 통계 섹션 */}
        <div className="row justify-content-center position-relative">
          {/* 왼쪽 무기 이미지 419*311 */}
          <div className="stats-left-image">
            <div className="weapon-image" style={{ position: 'relative', width: '419px', height: '311px' }}>
              <Image src="/optimized/05.webp" alt="Weapon" fill style={{ objectFit: 'cover' }} />
            </div>
          </div>

          {/* 오른쪽 캐릭터 이미지 338*400 */}
          <div className="stats-right-image">
            <div className="character-image" style={{ position: 'relative', width: '338px', height: '400px' }}>
              <Image src="/optimized/12.webp" alt="Character" fill style={{ objectFit: 'cover' }} />
            </div>
          </div>

          <div className="col-12 col-sm-11 col-md-9 col-lg-7 col-xl-7">
            <div className="counter-wrapper pt-120">
              <div className="counter__single">
                <h2 className="title-lg fw-8 mt-8">
                  <span className="odometer">
                    <CountUp end={0} enableScrollSpy={true} />
                  </span>
                  <span className="prefix text-uppercase"> +</span>
                </h2>
                <p className="text-xxl fw-6 text-uppercase mt-6" style={{color: "#FFB800"}}>Games</p>
              </div>
              <div className="counter__single">
                <h2 className="title-lg fw-8 mt-8">
                  <span className="odometer">
                    <CountUp end={0} enableScrollSpy={true} />
                  </span>
                  <span className="prefix text-uppercase"> k+</span>
                </h2>
                <p className="text-xxl fw-6 text-uppercase mt-6" style={{color: "#FFB800"}}>Players</p>
              </div>
              <div className="counter__single">
                <h2 className="title-lg fw-8 mt-8">
                  <span className="odometer">
                    <CountUp end={0} enableScrollSpy={true} />
                  </span>
                  <span className="prefix text-uppercase"> k+</span>
                </h2>
                <p className="text-xxl fw-6 text-uppercase mt-6" style={{color: "#FFB800"}}>Champions</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Countdown;
