import { Post } from '@/models/post'
import { Card, CardContent, Divider, Typography } from '@mui/material'
import { format } from 'date-fns'
import React from 'react'

type Props = {
	post: Post
}

const PostCard = ({ post }: Props) => {
	return (
		<Card>
			<CardContent>
				<Typography variant="h5" fontWeight="bold">
					{post.title}
				</Typography>

				<Typography variant="body1" my={2} sx={{ display: 'flex' }}>
					{format(Number(post.publishedDate), 'dd MMM yyyy')}

					<Divider orientation="vertical" sx={{ mx: 2 }} flexItem />

					{post.tagList.join(', ')}
				</Typography>
				<Typography variant="body2">{post.description}</Typography>
			</CardContent>
		</Card>
	)
}

export default PostCard
