import React from 'react';
import { useStaticQuery, graphql, Link } from 'gatsby';
import _ from 'lodash';
import FeaturePost from '../../components/feature-post/feature-post';
import PromotionImage from '../../images/mavi-kapak-kampanyasi.png';
import {
  SidebarWrapper,
  SidebarWidget,
  WidgetTitle,
  TagItem
} from './style';

type SidebarProps = {};

const Sidebar: React.FunctionComponent<SidebarProps> = () => {
  const Data = useStaticQuery(graphql`
    query {
      allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }, limit: 5) {
        edges {
          node {
            excerpt(pruneLength: 300)
            fields {
              slug
            }
            frontmatter {
              date(formatString: "DD [<span>] MMM [</span>]", locale: "tr")
              title
              description
              tags
              cover {
                childImageSharp {
                  fluid(maxWidth: 90, maxHeight: 90, quality: 100) {
                    ...GatsbyImageSharpFluid_noBase64
                  }
                }
              }
            }
          }
        }
        group(field: frontmatter___tags) {
          totalCount
          fieldValue
        }
      }
    }
  `);

  const Posts = Data.allMarkdownRemark.edges;
  const Tags = Data.allMarkdownRemark.group;

  return (
    <SidebarWrapper>
      <SidebarWidget>
        <WidgetTitle>Son Gönderiler</WidgetTitle>
        {Posts.map(({ node }: any) => {
          const title = node.frontmatter.title || node.fields.slug;
          // Random Placeholder Color
          const placeholderColors = [
            '#55efc4',
            '#81ecec',
            '#74b9ff',
            '#a29bfe',
            '#ffeaa7',
            '#fab1a0',
            '#e17055',
            '#0984e3',
            '#badc58',
            '#c7ecee',
          ];
          const setColor =
            placeholderColors[
            Math.floor(Math.random() * placeholderColors.length)
            ];

          return (
            <FeaturePost
              key={node.fields.slug}
              title={title}
              image={
                node.frontmatter.cover == null
                  ? null
                  : node.frontmatter.cover.childImageSharp.fluid
              }
              url={node.fields.slug}
              tags={node.frontmatter.tags}
              placeholderBG={setColor}
            />
          );
        })}
      </SidebarWidget>

      <SidebarWidget>
        <WidgetTitle>Etiketler</WidgetTitle>
        {Tags.map((tag: any) => (
          <TagItem key={tag.fieldValue}>
            <span>#</span>
            <Link to={`/etiket/${_.kebabCase(tag.fieldValue)}/`}>
              {tag.fieldValue} <span>({tag.totalCount})</span>
            </Link>
          </TagItem>
        ))}
      </SidebarWidget>
    </SidebarWrapper>
  );
};

export default Sidebar;
