import { Post } from '@/models/post'
import { Card, CardContent } from '@mui/material'
import React from 'react'
import { BlogItem } from '../blog'

type Props = {
	post: Post
}

const PostCard = ({ post }: Props) => {
	return (
		<Card>
			<CardContent>
				<BlogItem post={post} />
			</CardContent>
		</Card>
	)
}

export default PostCard
