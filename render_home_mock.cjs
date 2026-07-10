import React from 'react';
import { renderToString } from 'react-dom/server';
import { HeroBanner, NewsSection, AdmissionsSection, ActivitiesSection, FacesSection, ConsultationSection } from './src/pages/Home';

// Mock Link since we don't have router
jest.mock('react-router-dom', () => ({
  Link: ({ children, to, className }: any) => <a href={to} className={className}>{children}</a>
}));

const html = renderToString(
  <div className="flex flex-col w-full">
    <HeroBanner />
    <NewsSection />
    <AdmissionsSection />
    <ActivitiesSection />
    <FacesSection />
    <ConsultationSection />
  </div>
);

console.log(html);
