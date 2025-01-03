import { blogData } from '../../../data/blogData';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { IoIosArrowBack } from 'react-icons/io';
import CommentSection from '../../../components/Comments';
import Footer from '@/components/Footer';
import Image from 'next/image';

// Correct type for BlogPostProps
interface BlogPostProps {
  params: Promise<{ id: string }>; 
}

export default async function BlogPost({ params }: BlogPostProps) {
  const { id } = await params;

  if (!id) {
    return notFound();
  }

  const blog = blogData.find((b) => b.id === id);

  if (!blog) {
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
          <Image
            src={blog.image}
            alt={blog.title}
            layout="fill"
            objectFit="cover"
            className="rounded-lg"
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

        {/* Comment Section */}
        <CommentSection blogId={blog.id} />
      </div>
      <Footer />
    </>
  );
}

// Generate static params for all blog posts
export async function generateStaticParams() {
  return blogData.map((blog) => ({
    id: blog.id.toString(), // Ensure ID is a string
  }));
} 