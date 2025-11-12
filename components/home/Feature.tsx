"use client";
import Image from "next/image";
import Link from "next/link";
import { Autoplay, FreeMode, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

// Feature 슬라이드 30개 생성
const generateFeatureSlides = () => {
  const slides = [];
  for (let i = 1; i <= 30; i++) {
    const imageNum = String(i % 26).padStart(2, '0');
    slides.push({
      id: i,
      imagePath: `/optimized/${imageNum}.webp`,
      title: `프로젝트 ${i}`,
      number: `[ ${String(i).padStart(2, '0')} ]`,
      count: 100 + i,
    });
  }
  return slides;
};

const featureSlides = generateFeatureSlides();

const Feature = () => {
  return (
    <section className="feature pt-120">
      <div className="container-fluid">
        <div className="row align-items-center vertical-column-gap">
          <div className="col-12 col-lg-6">
            <div className="text-center text-lg-start">
              <h2 className="fw-6 title-animation mt-8">주요 프로젝트</h2>
            </div>
          </div>
          <div className="col-12 col-lg-6">
            <div className="text-center text-lg-end">
              <div className="btn-wrapper">
                <Link href="games" className="btn--secondary">
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
            <div className="feature-wrapper mt-60">
              <div className="feature-slider-wrapper">
                <Swiper
                  loop={true}
                  speed={1000}
                  slidesPerView={1}
                  spaceBetween={22}
                  freeMode={true}
                  modules={[Autoplay, FreeMode, Navigation, Pagination]}
                  autoplay={{
                    delay: 5000,
                    disableOnInteraction: false,
                    pauseOnMouseEnter: true,
                  }}
                  navigation={{
                    nextEl: ".next-feature",
                    prevEl: ".prev-feature",
                  }}
                  pagination={{
                    el: ".feature-slider-progress",
                    type: "progressbar",
                  }}
                  breakpoints={{
                    700: {
                      slidesPerView: 2,
                    },
                    992: {
                      slidesPerView: 3,
                    },
                    1400: {
                      slidesPerView: 4,
                    },
                  }}
                  className="feature-slider swiper"
                >
                  {featureSlides.map((slide) => (
                    <SwiperSlide key={slide.id} className="swiper-slide">
                      <div className="feature-slider__single">
                        <div className="thumb">
                          <Link href="/games/1">
                            <Image src={slide.imagePath} alt="Image" width={400} height={500} />
                          </Link>
                          <div className="price-tag">
                            <i className="ti ti-circle-filled"></i>
                            <span className="text-sm fw-7">{slide.count}</span>
                          </div>
                        </div>
                        <div className="content">
                          <div className="content-inner">
                            <p className="text-md fw-6 mt-8">
                              <span>{slide.number}</span>
                              주요 프로젝트
                            </p>
                            <h3 className="fw-7 mt-16">
                              <Link href="/games/1">{slide.title}</Link>
                            </h3>
                          </div>
                          <div className="cta mt-50 text-end">
                            <Link href="/games/1" className="fw-7">
                              자세히 보기 <i className="ti ti-plus"></i>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
                <div className="slider-footer mt-60">
                  <div className="slider-navigation">
                    <button type="button" aria-label="prev slide" title="prev slide" className="prev-feature slider-btn">
                      <i className="ti ti-chevron-left"></i>
                    </button>
                    <button type="button" aria-label="next slide" title="next slide" className="next-feature slider-btn">
                      <i className="ti ti-chevron-right"></i>
                    </button>
                  </div>
                  <div className="feature-slider-progress pagination-two"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Feature;
