import { useRouter } from "next/router";
import { ClipLoader } from "react-spinners";

import usePost from "@WhizWire/hooks/usePost";

import Header from "@WhizWire/components/Header";
import Form from "@WhizWire/components/Form";
import PostItem from "@WhizWire/components/posts/PostItem";
import CommentFeed from "@WhizWire/components/posts/CommentFeed";
import { Strings } from "@WhizWire/libs/strings/en";


const PostView = () => {
  const router = useRouter();
  const { postId } = router.query;

  const { data: fetchedPost, isLoading } = usePost(postId as string);

  if (isLoading || !fetchedPost) {
    return (
      <div className="flex justify-center items-center h-full">
        <ClipLoader color="lightblue" size={80} />
      </div>
    )
  }

  return ( 
    <>
      <Header showBackArrow label={Strings.WHISPER} />
      <PostItem data={fetchedPost} />
      <Form postId={postId as string} isComment placeholder={Strings.REPLY_WHISPER} />
      <CommentFeed comments={fetchedPost?.comments} />
    </>
   );
}
 
export default PostView;