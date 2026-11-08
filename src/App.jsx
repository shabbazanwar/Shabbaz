import { useLayoutEffect } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import Portfolio from './pages/Portfolio';

function ScrollToTop() {
  const { hash, pathname } = useLocation();

  useLayoutEffect(() => {
    const target = hash ? document.getElementById(hash.slice(1)) : null;
    if (target) {
      target.scrollIntoView({ behavior: 'instant', block: 'start' });
      return;
    }

    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, [hash, pathname]);

  return null;
}

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Portfolio />} />
        <Route path="/work" element={<Portfolio mode="work" />} />
        <Route path="/experience" element={<Portfolio mode="experience" />} />
        <Route path="/contact" element={<Portfolio mode="contact" />} />
        <Route path="/privacy-policy" element={<Portfolio mode="privacy" />} />
        <Route path="/terms" element={<Portfolio mode="terms" />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </>
  );
}
