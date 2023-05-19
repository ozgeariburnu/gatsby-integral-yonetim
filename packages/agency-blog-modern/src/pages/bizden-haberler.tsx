import React from 'react';
import Layout from '../components/layout';
import SEO from '../components/seo';
import Blog from '../containers/blog';

type BlogPageProps = {};

const BlogPage: React.FunctionComponent<BlogPageProps> = () => {
    return (
        <Layout>
            <SEO
                title="Bizden Haberler"
                description="Bursa İntegral Profesyonel Site Yönetimi & Danışmanlık Hizmetleri, ortak yaşam alanlarının yönetimi konusunda uzman kadrosuyla sizlere hizmet vermek için kurulmuş bir yönetim ve danışmanlık firmasıdır."
            />
            <Blog />
        </Layout>
    );
};

export default BlogPage;