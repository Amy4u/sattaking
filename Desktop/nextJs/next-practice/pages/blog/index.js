import Navbar from '../../components/Navbar';
import Image from 'next/image';
import Link from 'next/link'

export const getStaticProps = async () => {
    const res = await fetch ('https://jsonplaceholder.typicode.com/posts')
    const data = await res.json()
    return {
      props: {
        data: data
      }
    }
}

const blog = ({ data }) => {
  return (
    <> 
      <Navbar />
      <h2>
        Blog Page
      </h2>
      <Image 
        src="https://images.pexels.com/photos/15800210/pexels-photo-15800210.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        width="200"
        height="200"
        className="img"
        alt=""
      />
      {
        data?.slice(0, 5)?.map(item => {
          return (
            <div key={item.id} style={{textAlign: 'center'}}>
              <h3>{item.id}</h3>
              <Link href={`/blog/${item.id}`}>
                <h2>{item.title}</h2>
              </Link>
            </div>
          )
        })
      }
    </>
  )
}

export default blog