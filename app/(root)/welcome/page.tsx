import About from '@/components/shared/About'
import PopularCarousel from '@/components/shared/PopularCarousel'
import Search from '@/components/shared/Search'
import WelcomeBanner from '@/components/shared/WelcomeBanner'


const page = () => {
  return (
    <div
      className='
        h-full
        w-full
        bg-gradient-to-r
        from-primary
        via-background
        to-primary
      '
    >
      <WelcomeBanner />
      <div
        className='
          w-full
        '
      >
        <Search />
        <PopularCarousel />
        <About />
      </div>
      
    </div>
  )
}

export default page