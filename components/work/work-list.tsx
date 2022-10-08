import { Work } from '@/models/work'
import { Box, Divider } from '@mui/material'
import React, { Fragment } from 'react'

type Props = {
	workList: Work[]
}

export default function WorkList({ workList }: Props) {
	if (workList.length === 0) return null
	return (
		<Box>
			{workList.map((work) => (
				<Fragment key={work.id}>
					<Box>{work.title}</Box>
					<Divider sx={{ my: 3 }} />
				</Fragment>
			))}
		</Box>
	)
}
