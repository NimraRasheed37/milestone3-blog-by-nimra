'use client';

import React, { useState, useEffect } from 'react';

type Comment = {
  name: string;
  comment: string;
  date: string;
};

type CommentSectionProps = {
  blogId: string;
};

const CommentSection: React.FC<CommentSectionProps> = ({ blogId }) => {
  const [name, setName] = useState('');
  const [comment, setComment] = useState('');
  const [comments, setComments] = useState<Comment[]>([]);

  // Load comments for the blog from localStorage
  useEffect(() => {
    const storedComments = JSON.parse(localStorage.getItem(`comments-${blogId}`) || '[]');
    setComments(storedComments);
  }, [blogId]);

  // Save comments to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem(`comments-${blogId}`, JSON.stringify(comments));
  }, [comments, blogId]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (name.trim() && comment.trim()) {
      const newComment = { name, comment, date: new Date().toISOString() };
      setComments([...comments, newComment]);
      setName('');
      setComment('');
    }
  };

  return (
    <div className="mt-10">
      <h2 className="text-2xl font-bold mb-4">Leave a Comment</h2>
      <form onSubmit={handleSubmit} className="mb-6">
        <div className="mb-4">
          <label htmlFor="name" className="block text-sm font-medium mb-1">
            Name
          </label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-[#493638]"
            placeholder="Your name"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="comment" className="block text-sm font-medium mb-1">
            Comment
          </label>
          <textarea
            id="comment"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-[#493638]"
            placeholder="Your comment"
            rows={2}
            required
          />
        </div>
        <button
          type="submit"
          className="bg-[#da5552] font-bold text-white hover:text-[#ffd791] shadow-xl px-8 py-2 rounded hover:bg-[#493638]"
        >
          Submit
        </button>
      </form>
      <div>
        <h3 className="text-xl font-semibold mb-4">Comments</h3>
        {comments.length > 0 ? (
          comments.map((c, index) => (
            <div key={index} className="mb-4 p-3 border rounded bg-gray-50">
              <p className="text-sm font-semibold text-[#493638]">{c.name}</p>
              <p className="text-sm text-black">{c.comment}</p>
              <p className="text-xs text-gray-500">{new Date(c.date).toLocaleString()}</p>
            </div>
          ))
        ) : (
          <p className="text-gray-500">No comments yet. Be the first to comment!</p>
        )}
      </div>
    </div>
  );
};

export default CommentSection;
