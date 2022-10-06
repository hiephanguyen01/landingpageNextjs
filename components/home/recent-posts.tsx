import { Box, Container, Stack, Typography, Link as MuiLink } from '@mui/material'
import Link from 'next/link'
import React from 'react'
import PostCard from './post-card'

type Props = {}

export default function RecentPost({}: Props) {
	return (
		<Box>
			<Container>
				<Stack
					direction="row"
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
					<Box>
						<PostCard />
					</Box>
					<Box>
						<PostCard />
					</Box>
				</Stack>
			</Container>
		</Box>
	)
}
