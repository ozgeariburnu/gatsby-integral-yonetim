import React from 'react';
import Layout from '../components/layout';
import SEO from '../components/seo';
import Contact from '../containers/contact';

type ContactPageProps = {};

const ContactPage: React.FunctionComponent<ContactPageProps> = () => {
  return (
    <Layout>
      <SEO
        title="Bize Ulaşın"
        description="Bursa İntegral Profesyonel Site Yönetimi & Danışmanlık Hizmetleri, ortak yaşam alanlarının yönetimi konusunda uzman kadrosuyla sizlere hizmet vermek için kurulmuş bir yönetim ve danışmanlık firmasıdır."
      />

      <Contact />
    </Layout>
  );
};

export default ContactPage;
