import { blogData } from "../data/blogData";
import Link from "next/link";
import Image from "next/image";

interface BlogCardItemProps {
  id: string;
  title: string;
  author: string;
  excerpt: string;
  image: string;
}

function BlogCardItem({
  id,
  title,
  author,
  excerpt,
  image,
}: BlogCardItemProps) {
  return (
    <div
      key={id}
      className="p-4 border-2 shadow-lg hover:shadow-xl cursor-pointer rounded-sm text-center"
    >
      <Image
        src={image}
        alt={title}
        width={300}
        height={250}
        className="w-full h-48 object-cover"
      />
      <h2 className="font-bold font-serif py-2 text-xl hover:text-[#da5552]">
        {title}
      </h2>
      <p>{author}</p>
      <p>{excerpt}</p>

      {/* Read More Button */}
      <Link href={`/blogs/${id}`}>
        <button className="mt-4 bg-[#493638] text-[#ffd791] px-4 py-2 rounded-lg font-bold hover:text-white hover:bg-[#da5552]">
          Read More
        </button>
      </Link>
    </div>
  );
}

export default function BlogCard() {
  return (
    <div className="container mx-auto p-8">
      <h1 className="text-3xl md:text-5xl font-bold text-center mb-8 text-gray-800">
        Blogs
      </h1>
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {blogData.length > 0 ? (
          blogData.map((blog) => (
            <BlogCardItem
              key={blog.id}
              id={blog.id}
              title={blog.title}
              author={blog.author}
              excerpt={blog.excerpt}
              image={blog.image}
            />
          ))
        ) : (
          <p>No blogs available.</p>
        )}
      </div>
    </div>
  );
}
