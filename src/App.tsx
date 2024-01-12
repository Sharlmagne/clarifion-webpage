import { HeaderBar } from './components/HeaderBar.tsx'
import { Header } from './components/Header.tsx'
import { Footer } from './components/Footer.tsx'
import { StepsBar } from './components/StepsBar.tsx'
import { ItemInfo } from './components/ItemInfo.tsx'
import { ReviewBox } from './components/ReviewBox.tsx'
import itemPreview from './assets/images/item-preview-large.png'

function App() {
  return (
    <>
      <HeaderBar />
      <Header />
      <div className='container mx-auto h-full'>
        <div className='w-full flex flex-col items-center gap-4'>
          <h1 className='text-5xl'>Wait ! your order in progress.</h1>
          <p className='text-2xl font-light'>
            Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing
          </p>
        </div>
        <StepsBar />
        <div className='flex gap-8 bg-[#FAFAFA] p-10'>
          <div className='flex flex-col gap-6'>
            <div className='flex-grow bg-red-500'>
              {/*<img src={itemPreview} alt='Item Preview' />*/}
            </div>
            <ReviewBox />
          </div>
          <ItemInfo />
        </div>
      </div>
      <Footer />
    </>
  )
}

export default App
