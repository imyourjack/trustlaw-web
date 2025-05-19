# TrustLaw - 회생/파산 전문 법률 상담 웹사이트

## 프로젝트 개요
개인 및 기업의 회생/파산 관련 법률 상담을 온라인으로 제공하는 웹사이트입니다.

## 기술 스택

### 프론트엔드
- React 18
- TypeScript
- Vite
- React Router
- Tailwind CSS

### 개발 환경 설정
1. Node.js LTS 버전 설치
2. 프로젝트 클론
3. 의존성 설치:
```bash
npm install
```

### 실행 방법

#### 개발 서버 실행
```bash
npm run dev
```

#### 빌드
```bash
npm run build
```

#### 프리뷰
```bash
npm run preview
```

## 프로젝트 구조
```
trustlaw-web/
├── src/
│   ├── components/     # 재사용 가능한 컴포넌트
│   ├── pages/         # 페이지 컴포넌트
│   ├── services/      # API 서비스
│   ├── types/        # TypeScript 타입 정의
│   ├── utils/        # 유틸리티 함수
│   └── App.tsx
├── public/
└── tests/
```


## TODO
1. 메뉴별로 배경 이미지 추가 (배경 제외하고 텍스트 박스 가운데로) / (이미지 파일크기 최적화)
2. 헤더에 메인 메뉴 호버 이벤트 수정
3. 메뉴별 텍스트 알맞게 수정
4. 네이버 지도 지도만 나오게 수정, 왼쪽 영역에 위치 정보 텍스트 추가
5. 도메인, 운영서버 구축