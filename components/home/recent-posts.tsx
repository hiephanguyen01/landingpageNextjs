import { Post } from '@/models'
import { Box, Container, Link as MuiLink, Stack, Typography } from '@mui/material'
import Link from 'next/link'
import React from 'react'
import PostCard from './post-card'

type Props = {}

export default function RecentPost({}: Props) {
	const postList: Post[] = [
		{
			id: '1',
			title: 'Making a design system from scratch',
			publishedDate: '2022-06-18T10:00:00Z',
			slug: '',
			tagList: ['Design', 'Pattern'],
			description:
				'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
		},
		{
			id: '2',
			slug: '',
			title: 'Creating pixel perfect icons in Figma',
			publishedDate: '2022-06-18T10:00:00Z',
			tagList: ['Figma', 'Icon Design'],
			description:
				'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
		},
	]

	return (
		<Box component="section" bgcolor="secondary.light" pt={2} pb={4}>
			<Container>
				<Stack
					direction="row"
					mb={2}
					justifyContent={{ xs: 'center', md: 'space-between' }}
					alignContent="center"
				>
					<Typography variant="h5">Recent Posts</Typography>
					<Link href="/blog" passHref>
						<MuiLink display={{ xs: 'none', md: 'inline' }}>View all</MuiLink>
					</Link>
				</Stack>
				<Stack
					direction={{ xs: 'column', md: 'row' }}
					spacing={3}
					sx={{
						'& > div': {
							width: {
								xs: '100%',
								md: '50%',
							},
						},
					}}
				>
					{postList.map((post) => (
						<Box key={post.id}>
							<PostCard post={post} />
						</Box>
					))}
				</Stack>
			</Container>
		</Box>
	)
}
