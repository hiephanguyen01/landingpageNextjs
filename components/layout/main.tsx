import { LayoutProps } from '@/models/index'
import React, { useEffect } from 'react'
import Link from 'next/link'
import { Stack } from '@mui/material'
import { Box } from '@mui/system'
import Footer from '../common/footer'
import { Header } from '../common/header/index'

export function MainLayout({ children }: LayoutProps) {
	useEffect(() => {
		console.log('MainLayout mounting')

		return () => console.log('MainLayout unmounting')
	}, [])

	return (
		<Stack minHeight="100vh">
			<Header/>
			<Box component="main" flexGrow={1}>
				{children}
			</Box>
			<Footer/>
		</Stack>
	)
}
