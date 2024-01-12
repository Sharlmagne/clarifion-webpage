import { HeaderBar } from './components/HeaderBar.tsx'
import { Header } from './components/Header.tsx'
import { Footer } from './components/Footer.tsx'
import { StepsBar } from './components/StepsBar.tsx'
import { ItemInfo } from './components/ItemInfo.tsx'
import { ReviewBox } from './components/ReviewBox.tsx'
import itemPreview from './assets/images/item-preview-large.png'

function App() {
  return (
    <div className='h-full flex flex-col'>
      <HeaderBar />
      <Header />
      <div className='lg:container mx-auto px-8 md h-fit flex-grow'>
        <div className='mt-10 w-full flex flex-col items-center text-center gap-4 lg:mt-0'>
          <h1 className='text-5xl text-black'>
            Wait ! your order in progress.
          </h1>
          <p className='text-2xl font-light'>
            Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing
          </p>
        </div>
        <StepsBar />
        <div className='flex gap-8 bg-[#FAFAFA] p-10 rounded-md'>
          <div className='hidden lg:flex max-w-[575px] flex-col gap-6 '>
            <div className='flex-grow'>
              <img
                className='w-full h-full object-cover'
                src={itemPreview}
                alt='Item Preview'
              />
            </div>
            <ReviewBox />
          </div>
          <ItemInfo />
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default App
