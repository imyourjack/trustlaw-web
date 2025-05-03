import { useState } from 'react';
import { motion } from 'framer-motion';

export default function Home() {
  const [consultationOpen, setConsultationOpen] = useState(false);

  const consultationCategories = [
    { id: 1, name: '개인회생', description: '개인의 채무를 조정하여 상환하는 제도' },
    { id: 2, name: '법인회생', description: '기업의 채무를 조정하여 상환하는 제도' },
    { id: 3, name: '개인파산', description: '개인의 채무를 면제받는 제도' },
    { id: 4, name: '법인파산', description: '기업의 채무를 면제받는 제도' },
  ];

  return (
    <div className="py-24 sm:py-32">
      {/* Hero Section */}
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
            전문적인 회생/파산 법률 상담
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            개인 및 기업의 채무 문제 해결을 위한 전문적인 법률 서비스를 제공합니다.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <button
              onClick={() => setConsultationOpen(true)}
              className="rounded-md bg-blue-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
            >
              상담 신청하기
            </button>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            제공하는 서비스
          </h2>
          <p className="mt-2 text-lg leading-8 text-gray-600">
            다양한 회생/파산 관련 법률 서비스를 제공합니다.
          </p>
        </div>
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-4">
          {consultationCategories.map((category) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="flex flex-col items-center justify-center rounded-2xl bg-white/5 p-8 text-center shadow-lg"
            >
              <h3 className="text-lg font-semibold leading-8 text-gray-900">
                {category.name}
              </h3>
              <p className="mt-2 text-sm leading-6 text-gray-600">
                {category.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Consultation Modal */}
      {consultationOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
          <div className="relative w-full max-w-md rounded-lg bg-white p-6">
            <h3 className="text-lg font-medium leading-6 text-gray-900">상담 신청</h3>
            <form className="mt-4 space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                  이름
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                />
              </div>
              {/* Additional form fields */}
              <div className="flex justify-end">
                <button
                  type="button"
                  onClick={() => setConsultationOpen(false)}
                  className="rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                >
                  취소
                </button>
                <button
                  type="submit"
                  className="ml-3 inline-flex justify-center rounded-md bg-blue-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
                >
                  신청하기
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
