import * as React from 'react';
import Image from 'gatsby-image';
import { useStaticQuery, graphql, Link } from 'gatsby';
import { IoMdArrowRoundBack } from 'react-icons/io';
import {
  NotFoundWrapper,
  NotFoundContent,
  NotFoundImage,
  Goback,
  Icon,
} from './style';

interface NotFoundProps { }

const NotFound: React.FunctionComponent<NotFoundProps> = () => {
  const Data = useStaticQuery(graphql`
    query {
      avatar: file(absolutePath: { regex: "/404.png/" }) {
        childImageSharp {
          fluid(maxWidth: 750, quality: 100) {
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
    <NotFoundWrapper>
      <NotFoundContent>
        <h1>Sayfa Bulunamadı</h1>
        <p>
          Aradığınız sayfa mevcut değil. Tekrar aramayı deneyin veya aşağıdaki "Geri Dön" sekmesini kullanın.
        </p>
        <Goback>
          <Link to="/">
            <Icon>
              <IoMdArrowRoundBack />
            </Icon>
            Geri Dön
          </Link>
        </Goback>
      </NotFoundContent>
      <NotFoundImage>
        <Image fluid={Data.avatar.childImageSharp.fluid} alt="Bursa İntegral Yönetim" />
      </NotFoundImage>
    </NotFoundWrapper>
  );
};

export default NotFound;
