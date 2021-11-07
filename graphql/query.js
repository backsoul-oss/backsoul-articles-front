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
    categories{
      id
      name
    }
  }
}
`;

export const CATEGORY_BY_ID = gql `
query categoryById($id: Int!){
  categoryById(id:$id){
    id
    name
  }
}`
