import Link from 'next/link';
import { useRouter } from 'next/router';
import Navbar from '../components/Navbar';

const error = () => {
  const router = useRouter();
  return (
    <>
        <Navbar />
        <center>
            <h2>
                Page Not Found Go Back To Home Page
            </h2>
            <button onClick={() => router.push('/')}>Go Back To Home</button>
        </center>   
    </>
  )
}

export default error