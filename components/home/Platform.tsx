"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Image from "next/image";
import Link from "next/link";

gsap.registerPlugin(ScrollTrigger);

// Platform 카드 24개 생성
const generatePlatformFeatures = () => {
  const features = [];
  const titles = ["콘텐츠 제작 및 발행", "프로젝트 관리 및 운영", "브랜딩 및 마케팅"];
  const descriptions = [
    "브랜드의 가치를 전달하는 창의적인 콘텐츠를 기획하고 제작합니다.",
    "체계적인 프로젝트 관리로 성공적인 결과물을 만들어냅니다.",
    "데이터 기반의 전략적 마케팅으로 브랜드 가치를 극대화합니다.",
  ];
  const buttonTexts = ["시작하기", "문의하기", "상담하기"];

  for (let i = 1; i <= 24; i++) {
    const imageNum = String(i % 26).padStart(2, '0');
    const idx = (i - 1) % 3;
    features.push({
      id: String(i).padStart(2, '0'),
      imagePath: `/optimized/${imageNum}.webp`,
      title: titles[idx],
      description: descriptions[idx],
      buttonText: buttonTexts[idx],
      buttonLink: "/sign-up",
    });
  }
  return features;
};

const platformFeatures = generatePlatformFeatures();

const Platform = () => {
  useGSAP(() => {
    const elements = document.querySelectorAll(".appear-down");
    elements.forEach((element) => {
      gsap.fromTo(
        element,
        {
          scale: 0.8,
          opacity: 0,
        },
        {
          scale: 1,
          opacity: 1,
          duration: 1,
          stagger: 0.2,
          scrollTrigger: {
            trigger: element,
            scrub: 1,
            start: "top bottom",
            end: "top center",
            markers: false,
          },
        },
      );
    });
  });

  return (
    <section className="pt-120 platform fade-wrapper">
      <div className="container-fluid">
        <div className="row align-items-center vertical-column-gap">
          <div className="col-12 col-lg-7">
            <div className="text-center text-lg-start">
              <h2 className="fw-6 title-animation mt-8">주요 서비스</h2>
            </div>
          </div>
          <div className="col-12 col-lg-5">
            <div className="text-center text-lg-end">
              <div className="btn-wrapper">
                <Link href="/sign-up" className="btn--secondary">
                  참여하기
                </Link>
                <svg viewBox="0 0 100 102" xmlns="http://www.w3.org/2000/svg" fill="none" preserveAspectRatio="none" className="shape">
                  <path d="M0 1  L100 1  L100 55 L80 101 L0 101 Z" />
                </svg>
              </div>
            </div>
          </div>
        </div>
        <div className="row vertical-column-gap mt-60">
          {platformFeatures.map((feature) => (
            <div key={feature.id} className="col-12 col-md-6 col-xl-4">
              <div className="platform-single appear-down van-tilt">
                <div className="tag">
                  <div className="tag-inner">
                    <p className="title-sm fw-7 text-black">{feature.id}</p>
                  </div>
                </div>
                <div className="thumb">
                  <Image src={feature.imagePath} alt="Image" width={400} height={300} />
                </div>
                <div className="content mt-40">
                  <h4 className="fw-6 mt-8">{feature.title}</h4>
                  <p className="mt-20">{feature.description}</p>
                  <div className="btn-wrapper mt-35">
                    <Link href={feature.buttonLink} className="btn--secondary">
                      {feature.buttonText}{" "}
                    </Link>
                    <svg viewBox="0 0 100 102" xmlns="http://www.w3.org/2000/svg" fill="none" preserveAspectRatio="none" className="shape">
                      <path d="M0 1  L100 1  L100 55 L80 101 L0 101 Z" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Platform;
