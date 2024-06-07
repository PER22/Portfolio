import React from 'react';
import SummaryHeader from './components/SummaryHeader/SummaryHeader';
import useInView from '../../components/hooks/useInView';
import './Home.css'
import SkillList from './components/SkillsList/SkillList';
const Home = () => {
  useInView('.card, .skill-category');

  return (
    <>
    <SummaryHeader />
      <SkillList/>
    </>
  );
};

export default Home;