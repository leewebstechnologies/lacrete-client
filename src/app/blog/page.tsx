// "use client";
import Link from "next/link";
// import { useState } from "react";
import { posts } from "@/app/data";
import "./blog.css";
import Image from "next/image";

const Blog = () => {
  return (
    <>
      <div className="container">
        <h1 className="title">Blog Detail</h1>
        <div className="posts">
          {posts.map((post) => (
            <Link href={`/blog/${post.id}`} key={post.id} className="post-card">
              <Image src={post.image} width={400} height={400} alt="postImage"/>
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