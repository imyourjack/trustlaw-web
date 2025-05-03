import React from 'react';

const Location: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">오시는 길 (Location)</h1>
      <div className="space-y-6">
        <div>
          <h2 className="text-xl font-semibold mb-2">주소</h2>
          <p className="text-gray-600">주소가 여기에 표시됩니다</p>
        </div>
        <div>
          <h2 className="text-xl font-semibold mb-2">교통 안내</h2>
          <p className="text-gray-600">교통 안내가 여기에 표시됩니다</p>
        </div>
        <div>
          <h2 className="text-xl font-semibold mb-2">주차 안내</h2>
          <p className="text-gray-600">주차 안내가 여기에 표시됩니다</p>
        </div>
      </div>
    </div>
  );
};

export default Location;
