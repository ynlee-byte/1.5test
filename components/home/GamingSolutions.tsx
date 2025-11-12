"use client";
import Image from "next/image";
import Link from "next/link";
import { Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import profileImg from "@/public/images/avatar/avatar.png";

// Gaming Solutions 슬라이드 20개 생성
const generateGamingSlides = () => {
  const slides = [];
  const names = ["Robert Fox", "Sarah Connor", "John Doe", "Jane Smith", "Mike Johnson"];
  const badges = ["TOP PLAYER", "LEGEND", "PRO", "ELITE", "MASTER"];

  for (let i = 1; i <= 20; i++) {
    const imageNum = String(i % 26).padStart(2, '0');
    slides.push({
      id: i,
      imagePath: `/optimized/${imageNum}.webp`,
      name: names[i % names.length],
      badge: badges[i % badges.length],
      kills: 100 + (i * 5),
      streak: 50 + (i * 3),
      rank: `S${(i % 9) + 1}`,
    });
  }
  return slides;
};

const gamingSlides = generateGamingSlides();

const GamingSolutions = () => {
  return (
    <section className="gaming-solutions pt-60 pb-120">
      <div className="container-fluid">
        <div className="row align-items-center vertical-column-gap mb-60">
          <div className="col-12 text-center">
            <h2 className="fw-6 title-animation">
              <span className="quaternary-text">← </span>
              OUR GAMING SOLUTIONS
              <span className="quaternary-text"> →</span>
            </h2>
          </div>
        </div>

        <div className="row">
          <div className="col-12">
            <div className="gaming-solutions-wrapper">
              <Swiper
                loop={true}
                speed={1000}
                slidesPerView="auto"
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                  delay: 5000,
                  disableOnInteraction: false,
                }}
                modules={[Autoplay, Navigation]}
                navigation={{
                  nextEl: ".gaming-next",
                  prevEl: ".gaming-prev",
                }}
                className="gaming-solutions-slider"
              >
                {gamingSlides.map((slide) => (
                  <SwiperSlide key={slide.id}>
                    <div className="gaming-slide">
                      <div className="gaming-screen" style={{backgroundImage: `url(${slide.imagePath})`, backgroundSize: 'cover', backgroundPosition: 'center'}}>
                        <div className="screen-overlay"></div>
                        <div className="game-icons">
                          <div className="icon-item">🎮</div>
                          <div className="icon-item">⚔️</div>
                          <div className="icon-item">🏆</div>
                          <div className="icon-item">💎</div>
                          <div className="icon-item">🎯</div>
                        </div>
                        <div className="player-profile-box">
                          <div className="profile-header">
                            <div className="profile-avatar">
                              <Image src={profileImg} alt={slide.name} width={60} height={60} />
                              <span className="online-badge"></span>
                            </div>
                            <div className="profile-info">
                              <h4>{slide.name}</h4>
                              <p className="level-badge">{slide.badge}</p>
                            </div>
                          </div>
                          <div className="profile-stats">
                            <div className="stat-item">
                              <span className="stat-value">{slide.kills}</span>
                              <span className="stat-label">KILLS</span>
                            </div>
                            <div className="stat-divider"></div>
                            <div className="stat-item">
                              <span className="stat-value">{slide.streak}</span>
                              <span className="stat-label">STREAK</span>
                            </div>
                            <div className="stat-divider"></div>
                            <div className="stat-item">
                              <span className="stat-value">{slide.rank}</span>
                              <span className="stat-label">RANK</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>

              {/* 네비게이션 버튼 */}
              <button className="gaming-nav gaming-prev">
                <i className="ti ti-arrow-up-left"></i>
              </button>
              <button className="gaming-nav gaming-next">
                <i className="ti ti-arrow-up-right"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GamingSolutions;
