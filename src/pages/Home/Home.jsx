import React from 'react';
import SummaryHeader from './components/SummaryHeader/SummaryHeader';
import useInView from '../../components/hooks/useInView';
import './Home.css'
import SkillList from './components/SkillsList/SkillList';
import useBackgroundColor from '../../components/hooks/useBackgroundColor';

const Home = () => {
  useInView('.card, .skill-category');
  useBackgroundColor("#ca6702")
  return (
    <>
      <SummaryHeader />
      <SkillList />
    </>
  );
};

export default Home;