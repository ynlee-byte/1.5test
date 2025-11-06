"use client";
import one from "@/public/images/platform/one.png";
import three from "@/public/images/platform/three.png";
import two from "@/public/images/platform/two.png";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Image from "next/image";
import Link from "next/link";

gsap.registerPlugin(ScrollTrigger);

const platformFeatures = [
  {
    id: "01",
    image: one,
    title: "콘텐츠 제작 및 발행",
    description: "브랜드의 가치를 전달하는 창의적인 콘텐츠를 기획하고 제작합니다. 타겟 고객에게 효과적으로 메시지를 전달하는 맞춤형 솔루션을 제공합니다.",
    buttonText: "시작하기",
    buttonLink: "/sign-up",
  },
  {
    id: "02",
    image: two,
    title: "프로젝트 관리 및 운영",
    description: "체계적인 프로젝트 관리로 성공적인 결과물을 만들어냅니다. 기획부터 실행까지 모든 과정을 투명하게 관리하고 최적의 성과를 도출합니다.",
    buttonText: "문의하기",
    buttonLink: "/sign-up",
  },
  {
    id: "03",
    image: three,
    title: "브랜딩 및 마케팅",
    description: "데이터 기반의 전략적 마케팅으로 브랜드 가치를 극대화합니다. 창의적인 아이디어와 실행력으로 시장에서의 경쟁력을 강화합니다.",
    buttonText: "상담하기",
    buttonLink: "/sign-up",
  },
];

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
                  <Image src={feature.image} alt="Image" />
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
