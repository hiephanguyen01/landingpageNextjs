import { GetStaticProps, GetStaticPropsContext } from 'next'
import * as React from 'react'
import Link from 'next/link'
import { getPostList } from '@/utils/posts'
import { MainLayout } from '@/components/layout'
import { Box, Container, Divider, Typography } from '@mui/material'
import { BlogItem } from '@/components/blog'
export interface BlogListPageProps {
	posts: any[]
}

export default function BlogListPage({ posts }: BlogListPageProps) {
	console.log('posts', posts)

	return (
		<Box component="section">
			<Container>
				<Typography variant="h3" fontWeight={'bold'}>
					Blog
				</Typography>
				<Box component="ul" sx={{ listStyleType: 'none', p: 0 }}>
					{posts.map((post) => (
						<li key={post.id}>
							<Link href={`/blog/${post.slug}`} passHref>
								<BlogItem post={post} />
							</Link>
							<Divider sx={{ my: 3 }} />
						</li>
					))}
				</Box>
			</Container>
		</Box>
	)
}
BlogListPage.Layout = MainLayout

export const getStaticProps: GetStaticProps<BlogListPageProps> = async () => {
	// server-side
	// build-time
	// console.log('static props')
	// const response = await fetch('https://js-post-api.herokuapp.com/api/posts?_page=1')
	// const data = await response.json()
	// console.log(data)

	// convert markdown files into list of javascript objects
	const postList = await getPostList()

	return {
		props: {
			posts: postList,
		},
	}
}
