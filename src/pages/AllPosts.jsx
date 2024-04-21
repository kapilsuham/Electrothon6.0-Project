import React, {useState, useEffect} from 'react'
import { Container, PostCard } from '../components'
import appwriteService from "../appwrite/config";

function AllPosts() {
    const [posts, setPosts] = useState([])
    useEffect(() => {}, [])
    appwriteService.getPosts([]).then((posts) => {
        if (posts) {
            setPosts(posts.documents)
            // {console.log(posts.documents)}
        }
    })
  return (
    <div className='w-full min-h-[73vh] mt-[-4.1vh] py-8'>
        <Container>
            <div className='flex flex-wrap'>
                {posts.map((post) => (
                    <div key={post.$id} className='p-2 lg:w-1/3'>
                        <PostCard {...post} />
                    </div>
                ))}
            </div>
            </Container>
    </div>
  )
}

export default AllPosts