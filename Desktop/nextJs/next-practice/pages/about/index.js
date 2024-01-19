import Navbar from '../../components/Navbar'
import Image from 'next/image'
import Head from 'next/head'

function about () {
  // const myLoader = ({ src, width, quality }) => {
  //   console.log(src,width,quality)
  //   return `http://localhost:3000/${src}?w=${width}&q=${quality || 75}`
  // }
  return (
    <>
      <Head>
        <title>About Page</title>
      </Head>

      <Navbar />
      <h2>About Page</h2>
      <Image
        // loader={myLoader}
        src='/assets/images/awards3.jpg'
        // layout="fill"
        width='200'
        height='200'
        className='img'
        alt=''
        // sizes="(max-width: 768px) 100vw,
        //       (max-width: 1200px) 50vw,
        //       33vw"
      />
    </>
  )
}

export default about
