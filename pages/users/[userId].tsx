import { useRouter } from "next/router";
import { ClipLoader } from "react-spinners";

import useUser from "@WhizWire/hooks/useUser";

import PostFeed from "@WhizWire/components/posts/PostFeed";
import Header from "@WhizWire/components/Header";
import UserBio from "@WhizWire/components/users/UserBio";
import UserHero from "@WhizWire/components/users/UserHero";



const UserView = () => {
  const router = useRouter();
  const { userId } = router.query;

  const { data: fetchedUser, isLoading } = useUser(userId as string);

  if (isLoading || !fetchedUser) {
    return (
      <div className="flex justify-center items-center h-full">
        <ClipLoader color="lightblue" size={80} />
      </div>
    )
  }

  return (
    <>
      <Header showBackArrow label={fetchedUser?.name} />
      <UserHero userId={userId as string} />
      <UserBio userId={userId as string} />
      <PostFeed userId={userId as string} />
    </>
   );
}
 
export default UserView;