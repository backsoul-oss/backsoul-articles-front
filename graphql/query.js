import gql from "graphql-tag";

export const ARTICLES = gql `
query{
  allArticles{
    id
    title
    Slug
    content
    image
    createdAt
    textDescription
  }
}
`;

export const ARTICLE_BY_SLUG = gql `
query articleById($slug: String!){
  articleBySlug(Slug:$slug){
    id
    title
    Slug
    content
    image
    createdAt
    textDescription
  }
}
`;