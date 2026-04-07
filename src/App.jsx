import React, { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import Nav from './components/Nav';
import Footer from './components/Footer';
import ProgressBar from './components/ProgressBar';
import PageTransition from './components/PageTransition';
import ScrollToTop from './components/ScrollToTop';

const HomePage = React.lazy(() => import('./pages/HomePage'));
const GovernmentBusinessPage = React.lazy(() => import('./pages/GovernmentBusinessPage'));
const FCLPage = React.lazy(() => import('./pages/FCLPage'));
const ClearancePage = React.lazy(() => import('./pages/ClearancePage'));
const ATOPage = React.lazy(() => import('./pages/ATOPage'));
const NotFoundPage = React.lazy(() => import('./pages/NotFoundPage'));

export default function App() {
  return (
    <>
      <ScrollToTop />
      <ProgressBar />
      <Nav />
      <Suspense fallback={null}>
        <PageTransition>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/government-business" element={<GovernmentBusinessPage />} />
            <Route path="/fcl" element={<FCLPage />} />
            <Route path="/clearance" element={<ClearancePage />} />
            <Route path="/ato" element={<ATOPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </PageTransition>
      </Suspense>
      <Footer />
    </>
  );
}
