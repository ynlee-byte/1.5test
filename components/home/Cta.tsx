import cta from "@/public/images/cta/cta-bg.webp";
import ctaThumb from "@/public/images/cta/cta-thumb.webp";
import Image from "next/image";
import Link from "next/link";

// CTA 이미지 갤러리 생성
const generateCtaImages = () => {
  const images = [];
  for (let i = 1; i <= 10; i++) {
    const imageNum = String(i).padStart(2, '0');
    images.push({
      id: i,
      imagePath: `/optimized/${imageNum}.webp`,
    });
  }
  return images;
};

const ctaImages = generateCtaImages();

const Cta = () => {
  return (
    <section className="cta mb-120 fade-wrapper">
      <div className="container-fluid">
        <div className="row">
          <div className="col-12">
            <div className="cta__inner fade-top" style={{ position: 'relative', overflow: 'hidden' }}>
              {/* 배경에 하나의 큰 이미지 배치 */}
              <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                zIndex: 1,
                pointerEvents: 'none'
              }}>
                <Image
                  src="/optimized/10.webp"
                  alt="Background"
                  fill
                  style={{ objectFit: 'cover', opacity: 1 }}
                />
              </div>

              <div className="row" style={{ position: 'relative', zIndex: 2 }}>
                <div className="col-12">
                  <div className="cta__content">
                    <h2 className="fw-6 text-capitalize title-animation mt-8">여정을 시작할 준비가 되셨나요?</h2>
                    <p className="text-xl mt-24">단순한 게임을 넘어 더 많은 것을 경험하세요. 독점 보상과 회원 전용 콘텐츠, 그리고 다양한 인기 타이틀을 만나보실 수 있습니다.</p>
                    <div className="section__cta mt-50">
                      <div className="btn-wrapper">
                        <Link href="/games" className="btn--secondary">
                          지금 시작하기{" "}
                        </Link>
                        <svg viewBox="0 0 100 102" xmlns="http://www.w3.org/2000/svg" fill="none" preserveAspectRatio="none" className="shape">
                          <path d="M0 1  L100 1  L100 55 L80 101 L0 101 Z" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="cta__bg">
                <Image src={cta} alt="Image" className="parallax-image" />
              </div>
              <div className="cta-stroke">
                <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" fill="none" preserveAspectRatio="none">
                  <path d="M0 0 L95 0 L100 20 L100 100 L5 100 L0 80 L0 0 Z" vectorEffect="non-scaling-stroke" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="cta__thumb fade-left">
        <Image src="/07.png" alt="Image" width={510} height={758} style={{ objectFit: 'contain' }} />
      </div>
    </section>
  );
};

export default Cta;
