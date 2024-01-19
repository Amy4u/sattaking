import Navbar from '../components/Navbar';
import Image from 'next/image'
import Head from 'next/head';

function index() {
  return (
    <>
      <Head>
        <title>Home Page</title>
      </Head>

      <Navbar />
      <h2>Hello</h2>
      <Image 
        src="https://media.istockphoto.com/id/1353511271/photo/a-man-logs-in-to-an-internet-site.jpg?s=612x612&w=is&k=20&c=CknVnZG9vB3TqPis3lpJkpg_Fd2GZtmS6mwlREinHvc="
        width="200"
        height="200"
        className="img"
        alt=""
      />
      <style jsx>
        {`
          h2{
            color: green
          }
        `}
      </style>
    </>
  )
}

export default index