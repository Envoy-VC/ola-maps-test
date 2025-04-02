'use client';

import dynamic from 'next/dynamic';

const CollegeMap = dynamic(
  () => import('../components/college-map').then((m) => m.CollegeMap),
  { ssr: false }
);

const Home = () => {
  return (
    <>
      <CollegeMap />
    </>
  );
};

export default Home;
