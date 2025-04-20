import "./blogDetail.css";
import { postDetails } from "@/app/data";


const BlogDetail = () => {
  const { id } = router.query;
  const post = postDetails[id];

  if (!post) return <p>Loading...</p>;
  return (
    <div className="detail-container">
      <h1>{post.title}</h1>
      <p>{post.content}</p>
    </div>
  );
};
export default BlogDetail;
