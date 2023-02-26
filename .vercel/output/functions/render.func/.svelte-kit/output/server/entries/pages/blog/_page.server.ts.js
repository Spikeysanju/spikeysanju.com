const load = async ({ fetch }) => {
  const response = await fetch(`/api/blogs`);
  const blogs = await response.json();
  const categories = [...new Set(blogs.map((blog) => blog.meta.categories).flat())];
  return {
    blogs,
    categories
  };
};
export {
  load
};
