import HeroSection from '@/components/home/hero'
import RecentPost from '@/components/home/recent-posts'
import { MainLayout } from '@/components/layout'
import { NextPageWithLayout } from '@/models/common'
import { Box } from '@mui/material'

const Home: NextPageWithLayout = () => {
	return (
		<Box>
			<HeroSection />
			<RecentPost/>
		</Box>
	)
}

Home.Layout = MainLayout

export default Home
