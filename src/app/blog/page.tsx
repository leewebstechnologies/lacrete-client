"use client";
import Link from "next/link";
import { useState } from "react";
import { posts } from "@/app/data";
import "./blog.css";

const Blog = () => {
  return (
    <>
      <div className="container">
        <h1 className="title">My Beautiful Blog</h1>
        <div className="posts">
          {posts.map((post) => (
            <Link href={`/blog/${post.id}`} key={post.id} className="post-card">
              <h2>{post.title}</h2>
              <p>{post.summary}</p>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}
export default Blog