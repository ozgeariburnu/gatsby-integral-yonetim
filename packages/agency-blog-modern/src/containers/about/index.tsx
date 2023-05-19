import * as React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Image from 'gatsby-image';
import SocialProfile from '../../components/social-profile/social-profile';
import {
  IoMdGlobe,
} from 'react-icons/io';
import {
  AboutWrapper,
  AboutImage,
  AboutPageTitle,
  AboutDetails,
  SocialProfiles,
} from './style';

const SocialLinks = [
  {
    icon: <IoMdGlobe />,
    url: 'https://bursaintegralyonetim.com',
    tooltip: 'Resmi Web Sayfası',
  }
];

interface AboutProps { }

const About: React.FunctionComponent<AboutProps> = () => {
  const Data = useStaticQuery(graphql`
    query {
      avatar: file(absolutePath: { regex: "/kurumsal.jpg/" }) {
        childImageSharp {
          fluid(maxWidth: 1770, quality: 90) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      site {
        siteMetadata {
          author
          about
        }
      }
    }
  `);

  return (
    <AboutWrapper>
      <AboutPageTitle>
        <h2>Kurumsal</h2>
        <p>
          Bursa İntegral Profesyonel Site Yönetimi &amp; Danışmanlık Hizmetleri,
          ortak yaşam alanlarının yönetimi konusunda uzman kadrosuyla sizlere hizmet vermek için kurulmuş bir yönetim ve danışmanlık firmasıdır.
          Bursa İntegral Profesyonel Site Yönetimi &amp; Danışmanlık Hizmetleri, hizmet verdiği müşterilerine karşı hukuki,
          mali ve ekonomik sorumluluklarını yerine getirerek gayrimenkullerinize değer katar.
        </p>
      </AboutPageTitle>

      <AboutImage>
        <Image fluid={Data.avatar.childImageSharp.fluid} alt="Bursa İntegral Yönetim" />
      </AboutImage >

      <AboutDetails>
        <h2>Biz Kimiz?</h2>
        <p>
          Müşterilerinin yaşam kalitelerine artı değer katan Bursa İntegral Profesyonel Site Yönetimi &amp; Danışmanlık Hizmetleri,
          profesyonel hizmet ile apartmanlarınızın, sitelerinizin, iş hanlarınızın profesyonel bir şekilde yönetilmesi
          ve işletilebilmesi için gerekli olan düzeni kurar ve sürdürür.
        </p>
        <p>
          Bursa İntegral Profesyonel Site Yönetimi &amp; Danışmanlık Hizmetleri,
          hizmet verdiği müşterilerine karşı hukuki, mali ve ekonomik sorumluluklarını yerine getirerek gayrimenkullerinize değer katar.
        </p>
        <p>
          Kat sakinlerinin yaşam kalitelerine artı değer katan Bursa İntegral Profesyonel Site Yönetimi &amp; Danışmanlık Hizmetleri,
          profesyonel hizmet ile apartmanlarınızın, sitelerinizin, iş hanlarınızın profesyonel bir şekilde yönetilmesi
          ve işletilebilmesi için gerekli olan düzeni kurar ve sürdürür.
        </p>

        <h2>Misyon</h2>
        <p>
          Yaşam ve çalışma alanlarında ihtiyaç duyulan her konuda kat sakinleri odaklı hızlı yönetim hizmeti sunmak,
          etik kurallardan asla ödün vermeden, apartman sakini,kat maliki, kiracı, çalışan memnuniyeti odaklı bir fark yaratmaktır.
        </p >

        <h2>Vizyon</h2>
        <p>
          Yönetim ve danışmanlık hizmetlerini sunduğumuz sitelerde, site sakinlerinin beklediği hizmetleri; empati yaparak,
          kaliteli, verimli, şeffaf ve etkin biçimde gerçekleştirmeyi kendisine vizyon olarak belirlemiştir.
        </p>

        <h2>Ne Amaçlıyoruz?</h2>
        <p>
          Bursa İntegral Profesyonel Site Yönetimi ve Danışmanlık Hizmetleri olarak şeffaf yönetim anlayışıyla yüklendiğimiz zorlu misyon ile amacımız sadece sektörün lideri olmak değil,
          aynı zamanda diğer meslektaşlarımızla beraber sektörü yaratmayı amaçlıyoruz.
        </p>
        <SocialProfiles>
          <SocialProfile items={SocialLinks} />
        </SocialProfiles>
      </AboutDetails >
    </AboutWrapper >
  );
};

export default About;
