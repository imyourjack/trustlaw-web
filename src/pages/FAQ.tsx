import React from 'react';
import Layout from '../components/Layout';

const FAQ: React.FC = () => {
  return (
    <Layout>
      <div className="max-w-4xl mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8">Frequently Asked Questions</h1>
        <div className="space-y-6">
          {/* Add your FAQ content here */}
          <div className="border-l-4 border-blue-500 pl-4">
            <h2 className="text-xl font-semibold mb-2">What services do you offer?</h2>
            <p className="text-gray-600">
              We provide comprehensive legal consultation services for various needs.
            </p>
          </div>
          {/* Add more FAQ items as needed */}
        </div>
      </div>
    </Layout>
  );
};

export default FAQ;
