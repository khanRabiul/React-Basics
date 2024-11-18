const Blog = () => {
    return (
      <div className="container mx-auto my-10">
        <h1 className="text-3xl font-bold mb-6">Our Blog</h1>
        <div className="space-y-6">
          <div className="p-4 border border-gray-200 rounded shadow">
            <h2 className="text-2xl font-bold">Blog Post 1</h2>
            <p className="text-gray-600">A brief description of the blog post...</p>
          </div>
          <div className="p-4 border border-gray-200 rounded shadow">
            <h2 className="text-2xl font-bold">Blog Post 2</h2>
            <p className="text-gray-600">A brief description of the blog post...</p>
          </div>
        </div>
      </div>
    );
  };
  
  export default Blog;
  