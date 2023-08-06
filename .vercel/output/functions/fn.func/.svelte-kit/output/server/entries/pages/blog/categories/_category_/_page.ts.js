const load = async ({ fetch, params }) => {
  const { category } = params;
  const response = await fetch(`/api/blogs`);
  const allPosts = await response.json();
  const posts = allPosts.filter(
    (post) => post.meta.categories.includes(category)
  );
  return {
    category,
    posts,
    params
  };
};
export {
  load
};
