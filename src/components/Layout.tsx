import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { NAVIGATION } from '@/components/navigation';

export default function Layout({ children }: { children: React.ReactNode }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (href: string) => location.pathname.startsWith(href);

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow">
        <nav
          className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"
          aria-label="Main Navigation"
        >
          <div className="flex h-16 items-center justify-between">
            {/* Logo */}
            <div className="flex lg:flex-1">
              <Link to="/" className="flex items-center">
                <span className="sr-only">TrustLaw</span>
                <h1 className="text-2xl font-bold text-blue-600">TrustLaw</h1>
              </Link>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex lg:gap-x-12">
              {NAVIGATION.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={
                    isActive(item.href)
                      ? 'text-blue-600 hover:text-blue-500'
                      : 'text-gray-700 hover:text-gray-800'
                  }
                  aria-current={isActive(item.href) ? 'page' : undefined}
                >
                  {item.name}
                </Link>
              ))}
            </div>

            {/* Mobile Menu Toggle */}
            <div className="flex lg:hidden">
              <button
                type="button"
                className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                onClick={() => setMobileMenuOpen(true)}
              >
                <span className="sr-only">Open main menu</span>
                <Bars3Icon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
          </div>
        </nav>
      </header>

      <main>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
          {children}
        </div>
      </main>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden">
          {/* Backdrop */}
          <div
            className="fixed inset-0 z-10 bg-black/20"
            onClick={() => setMobileMenuOpen(false)}
          />
          <div className="fixed inset-y-0 right-0 z-20 w-full max-w-xs overflow-y-auto bg-white shadow-xl ring-1 ring-gray-900/10">
            <div className="flex items-center justify-between px-4 py-6">
              <h1 className="text-2xl font-bold text-blue-600">TrustLaw</h1>
              <button
                type="button"
                className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div className="px-4 pt-4 pb-12">
              <nav className="space-y-1">
                {NAVIGATION.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`block rounded-md px-3 py-2 text-base font-semibold leading-7 hover:bg-gray-100 ${
                      isActive(item.href)
                        ? 'bg-gray-100 text-blue-600'
                        : 'text-gray-900'
                    }`}
                    aria-current={isActive(item.href) ? 'page' : undefined}
                  >
                    {item.name}
                  </Link>
                ))}
              </nav>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
