import PostFeed from "@WhizWire/components/posts/PostFeed"
import Header from "@WhizWire/components/Header"
import Form from "@WhizWire/components/Form"

export default function Home() {
  return (
    <>
      <Header label="Home" />
      <Form placeholder="What's happening?" />
      <PostFeed />
    </>
  )
}
