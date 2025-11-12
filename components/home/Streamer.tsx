"use client";
import Link from "next/link";

const Streamer = () => {
  return (
    <section className="streamer pt-120 pb-120">
      <div className="container-fluid">
        <div className="row align-items-center vertical-column-gap">
          <div className="col-12 col-lg-6">
            <div className="text-center text-lg-start">
              <h2 className="fw-6 title-animation mt-8">BEST Streamers</h2>
            </div>
          </div>
          <div className="col-12 col-lg-6">
            <div className="text-center text-lg-end">
              <div className="btn-wrapper">
                <Link href="/leaderboard" className="btn--secondary">
                  VIEW ALL
                </Link>
                <svg viewBox="0 0 100 102" xmlns="http://www.w3.org/2000/svg" fill="none" preserveAspectRatio="none" className="shape">
                  <path d="M0 1  L100 1  L100 55 L80 101 L0 101 Z" />
                </svg>
              </div>
            </div>
          </div>
        </div>
        {/* 구분을 위한 빈 공간 추가 */}
        <div className="row mt-60">
          <div className="col-12">
            <div style={{height: "1px", background: "rgba(255,255,255,0.1)"}}></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Streamer;
