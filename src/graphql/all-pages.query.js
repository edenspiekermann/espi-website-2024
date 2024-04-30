export const allPagesQuery = `
  query AllPagesQuery {
    allPages(first: 100) {
      slug
    }
  }
`;
