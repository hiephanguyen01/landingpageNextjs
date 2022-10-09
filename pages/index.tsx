import Seo from '@/components/common/seo'
import FeatureWorks from '@/components/home/featured-works'
import HeroSection from '@/components/home/hero'
import RecentPost from '@/components/home/recent-posts'
import { MainLayout } from '@/components/layout'
import { NextPageWithLayout } from '@/models/common'
import { Box } from '@mui/material'

const Home: NextPageWithLayout = () => {
	return (
		<Box>
			<Seo
				data={{
					title: 'NextJS Tutorials | Easy Frontend',
					description:
						'Step by step tutorials to build a full CRUD website using NextJS for beginners',
					url: 'landingpage-nextjs-tawny.vercel.app',
					thumbnailUrl:
						'https://scontent.fsgn2-6.fna.fbcdn.net/v/t39.30808-6/277789691_3276601086001080_176518641407509832_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=sDwft50BYFEAX-aJifo&_nc_ht=scontent.fsgn2-6.fna&oh=00_AT8f55Fw_APwxkKp7F88SpWvX0NF47TqadJL8TrFmAsoRA&oe=63468B9D',
				}}
			/>
			<HeroSection />
			<RecentPost />
			<FeatureWorks />
		</Box>
	)
}

Home.Layout = MainLayout

export default Home
