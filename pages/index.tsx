import FeatureWorks from '@/components/home/featured-works'
import HeroSection from '@/components/home/hero'
import RecentPost from '@/components/home/recent-posts'
import { MainLayout } from '@/components/layout'
import { NextPageWithLayout } from '@/models/common'
import { Box } from '@mui/material'

const Home: NextPageWithLayout = () => {
	return (
		<Box>
			<HeroSection />
			<RecentPost />
			<FeatureWorks />
		</Box>
	)
}

Home.Layout = MainLayout

export default Home
