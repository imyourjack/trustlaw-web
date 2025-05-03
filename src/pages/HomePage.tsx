import { useState } from 'react';

const sections = [
  { id: 'qualification', label: '회생/파산 신청자격' },
  { id: 'consult', label: '상담안내' },
  { id: 'faq', label: '자주하는 질문' },
  { id: 'location', label: '오시는 길' },
];

const Header = () => (
  <header className="bg-blue-900 text-white shadow-md sticky top-0 z-50">
    <div className="max-w-screen-lg mx-auto px-4 py-5 flex justify-between items-center">
      <h1 className="text-2xl font-bold tracking-wide">최길성 법무사 사무소</h1>
      <nav className="hidden md:flex space-x-6">
        {sections.map(({ id, label }) => (
          <a key={id} href={`#${id}`} className="hover:text-blue-300 transition-colors">
            {label}
          </a>
        ))}
      </nav>
    </div>
  </header>
);

const SectionNavigation = ({
  activeSection,
  scrollToSection,
}: {
  activeSection: string;
  scrollToSection: (id: string) => void;
}) => (
  <nav className="flex justify-center flex-wrap gap-3 mb-10">
    {sections.map(({ id, label }) => (
      <button
        key={id}
        onClick={() => scrollToSection(id)}
        className={`px-4 py-2 text-sm rounded-full border font-medium transition ${
          activeSection === id
            ? 'bg-blue-600 text-white border-blue-600'
            : 'bg-white text-gray-800 border-gray-300 hover:bg-blue-100'
        }`}
      >
        {label}
      </button>
    ))}
  </nav>
);

const QualificationSection = () => (
  <section id="qualification" className="scroll-mt-24 mb-20">
    <h2 className="text-3xl font-bold mb-8">회생/파산 신청자격</h2>
    <div className="bg-white rounded-lg shadow-lg p-8">
      <p className="text-lg text-gray-800 mb-6">
        채무가 총소득을 초과하거나, 상환이 불가능한 상태라면 회생 또는 파산 신청이 가능합니다.
        소득과 재산 상태에 따라 판단되며, 전문가의 상담을 통해 정확히 진단받으실 수 있습니다.
      </p>
      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-blue-100 rounded-lg p-6">
          <h3 className="text-xl font-semibold mb-4">개인회생</h3>
          <ul className="list-disc pl-6 text-gray-700">
            <li>신용카드 대금</li>
            <li>대출금</li>
            <li>투자금</li>
            <li>사업자금</li>
          </ul>
        </div>
        <div className="bg-blue-100 rounded-lg p-6">
          <h3 className="text-xl font-semibold mb-4">파산</h3>
          <ul className="list-disc pl-6 text-gray-700">
            <li>채무가 소득을 초과</li>
            <li>상환이 불가능한 상태</li>
            <li>일정한 수입이 없음</li>
          </ul>
        </div>
      </div>
    </div>
  </section>
);

const ConsultSection = () => (
  <section id="consult" className="scroll-mt-24 mb-20">
    <h2 className="text-3xl font-bold mb-8">상담안내</h2>
    <div className="bg-white rounded-lg shadow-lg p-8">
      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <h3 className="text-xl font-semibold mb-4">상담 방법</h3>
          <ul className="list-disc pl-6 text-gray-700">
            <li>📞 전화 상담: 02-1234-5678 (평일 09:00~18:00)</li>
            <li>💬 카카오톡 상담: [상담 바로가기]</li>
            <li>🏢 방문 상담: 서울특별시 ○○구 ○○로 123, ○○빌딩 4층</li>
          </ul>
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-4">상담 혜택</h3>
          <ul className="list-disc pl-6 text-gray-700">
            <li>모든 상담은 무료</li>
            <li>개인정보 철저 보호</li>
            <li>전문가의 정확한 진단</li>
            <li>법적 조언 제공</li>
          </ul>
        </div>
      </div>
    </div>
  </section>
);

const FaqSection = () => (
  <section id="faq" className="scroll-mt-24 mb-20">
    <h2 className="text-3xl font-bold mb-8">자주하는 질문</h2>
    <div className="bg-white rounded-lg shadow-lg p-8 space-y-6">
      <div className="border-b pb-4">
        <h3 className="font-semibold mb-2">Q1. 신용불량자도 개인회생 신청이 가능한가요?</h3>
        <p className="text-gray-700">네, 가능합니다. 일정한 수입이 있다면 법원 인가를 받을 수 있습니다.</p>
      </div>
      <div className="border-b pb-4">
        <h3 className="font-semibold mb-2">Q2. 파산하면 모든 재산을 잃게 되나요?</h3>
        <p className="text-gray-700">아니요. 기초생활에 필요한 일부 재산은 보호받을 수 있습니다.</p>
      </div>
      <div className="border-b pb-4">
        <h3 className="font-semibold mb-2">Q3. 회생 절차는 얼마나 걸리나요?</h3>
        <p className="text-gray-700">보통 3~6개월 이내에 개시결정이 나오며, 이후 변제 기간은 3~5년입니다.</p>
      </div>
    </div>
  </section>
);

const LocationSection = () => (
  <section id="location" className="scroll-mt-24 mb-20">
    <h2 className="text-3xl font-bold mb-8">오시는 길</h2>
    <div className="bg-white rounded-lg shadow-lg p-8 space-y-6">
      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <h3 className="text-xl font-semibold mb-4">주소</h3>
          <p className="text-gray-700">광주광역시 동구 동명로 110, 법조타운 4층 404호</p>
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-4">교통 안내</h3>
          <ul className="list-disc pl-6 text-gray-700">
            <li>지하철 1호선 동명역 1번 출구 도보 5분</li>
            <li>버스 정류장 도보 3분 거리</li>
            <li>주차장 이용 가능</li>
          </ul>
        </div>
      </div>
      <div>
        <iframe
          src="https://map.naver.com/v5/entry/place/33118804?c=14136251.6358795,4184624.5780483,17,0,0,0,dh"
          width="100%"
          height="400"
          className="rounded-lg w-full border"
          allowFullScreen
          loading="lazy"
          title="네이버 지도"
        ></iframe>
      </div>
    </div>
  </section>
);

const HomePage = () => {
  const [activeSection, setActiveSection] = useState('qualification');

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(id);
    }
  };

  return (
    <div className="bg-gray-50 text-gray-900">
      <Header />
      <main className="max-w-screen-lg mx-auto px-4 py-12">
        {/* <SectionNavigation activeSection={activeSection} scrollToSection={scrollToSection} /> */}
        <QualificationSection />
        <ConsultSection />
        <FaqSection />
        <LocationSection />
      </main>
    </div>
  );
};

export default HomePage;