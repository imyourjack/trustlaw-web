// 공통 타입들
export interface ConsultationRequest {
  id: number;
  name: string;
  phone: string;
  email: string;
  consultationType: '회생' | '파산' | '기타';
  content: string;
  status: '대기' | '진행중' | '완료';
  createdAt: string;
}

export interface FAQ {
  id: number;
  question: string;
  answer: string;
  category: string;
}

export interface Location {
  address: string;
  latitude: number;
  longitude: number;
  operatingHours: {
    weekdays: string;
    weekend: string;
  };
}

// API 응답 타입
export interface ApiResponse<T> {
  success: boolean;
  data: T;
  message?: string;
}
