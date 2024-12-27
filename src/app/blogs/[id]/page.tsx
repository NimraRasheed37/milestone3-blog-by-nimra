import { blogData } from '../../../data/blogData';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { IoIosArrowBack } from 'react-icons/io';
import CommentSection from '../../../components/Comments';
import Footer from '@/components/Footer';

// Updated type for BlogPostProps
type BlogPostProps = {
  params: { id: string };
};

export default function BlogPost({ params }: BlogPostProps) {
  if (!params || !params.id) {
    return notFound();
  }

  // Find the blog with the given ID
  const blog = blogData.find((b) => b.id === params.id);

  if (!blog) {
    // If no blog is found, return a 404 page
    return notFound();
  }

  return (
    <>
    <div className="container mx-auto p-4 w-[90%] md:w-[80%] xl:w-[70%]">
      {/* Back to Home Icon */}
      <Link href="/" passHref>
        <div className="flex items-center space-x-2 mb-6 cursor-pointer">
          <IoIosArrowBack className="w-5 h-5 text-gray-600 hover:text-gray-800" />
          <span className="text-gray-600 hover:text-gray-800">Back to Home</span>
        </div>
      </Link>

      {/* Blog Image */}
      <div className="relative w-full h-64 lg:h-96">
        <img
          src={blog.image}
          alt={blog.title}
          className="w-full h-full object-cover rounded-lg"
        />
      </div>

      {/* Blog Content */}
      <div className="mt-6">
        <h1 className="text-3xl md:text-4xl font-bold text-[#493638]">{blog.title}</h1>
        <p className="text-sm text-gray-600 mb-4">by {blog.author}</p>

        {/* Render Full Blog Content */}
        <div
          className="text-lg font-medium leading-relaxed"
          dangerouslySetInnerHTML={{ __html: blog.content }}
        />
      </div>

      {/* Pass the correct blogId */}
      <CommentSection blogId={blog.id} />

      
    </div>
    <Footer />
    </>
  );
}

// Ensure this function exists in case of static generation
export async function generateStaticParams() {
  // Return an array of objects with the `id` of each blog post
  return blogData.map((blog) => ({ id: blog.id.toString() }));
}
