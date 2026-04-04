import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Nav from './components/Nav';
import Footer from './components/Footer';
import ProgressBar from './components/ProgressBar';
import PageTransition from './components/PageTransition';
import HomePage from './pages/HomePage';
import GovernmentBusinessPage from './pages/GovernmentBusinessPage';
import FCLPage from './pages/FCLPage';
import ClearancePage from './pages/ClearancePage';
import ATOPage from './pages/ATOPage';
import NotFoundPage from './pages/NotFoundPage';
import ScrollToTop from './components/ScrollToTop';

export default function App() {
  return (
    <>
      <ScrollToTop />
      <ProgressBar />
      <Nav />
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
      <Footer />
    </>
  );
}
