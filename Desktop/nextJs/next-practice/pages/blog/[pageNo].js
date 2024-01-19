import { useRouter } from "next/router";
import Navbar from '../../components/Navbar';

export const getStaticPaths = async() => {
  const res = await fetch ('https://jsonplaceholder.typicode.com/posts')
  const data = await res.json()

  const paths = data.map((items) => {
    return {
      params : {
        pageNo: items.id.toString(),
      },
    }
  })

  return {
    paths,
    fallback: false
  }
}

export const getStaticProps = async(context) => {
  const id = context.params.pageNo;
  const res = await fetch (`https://jsonplaceholder.typicode.com/posts/${id}`)
  const data = await res.json()
  return {
    props: {
      data: data
    }
  }
}


const pageNo = ({ data }) => {
    const router = useRouter();
  return (
    <>
      <Navbar />
       <h1>pageNo. {router?.query?.pageNo}</h1>
       <div key={data.id} style={{textAlign: 'center'}}>
              <h3>{data.id}</h3>
                <h2>{data.title}</h2>
            </div>
    </>
  )
}

export default pageNo