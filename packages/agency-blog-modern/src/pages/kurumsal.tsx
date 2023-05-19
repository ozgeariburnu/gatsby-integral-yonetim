import React from 'react';
import Layout from '../components/layout';
import SEO from '../components/seo';
import About from '../containers/about';

type AboutPageProps = {};

const AboutPage: React.FunctionComponent<AboutPageProps> = () => {
  return (
    <Layout>
      <SEO
        title="Kurumsal"
        description="Bursa İntegral Profesyonel Site Yönetimi & Danışmanlık Hizmetleri, ortak yaşam alanlarının yönetimi konusunda uzman kadrosuyla sizlere hizmet vermek için kurulmuş bir yönetim ve danışmanlık firmasıdır."
      />

      <About />
    </Layout>
  );
};

export default AboutPage;
