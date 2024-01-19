import Link from 'next/link'
import { useRouter } from 'next/router';

const Navbar = () => {

  const router = useRouter();

  return (
    <>
        <nav className="navabar">
            <ul className="menu-bar">
                <Link href="/" className={router.pathname=='/'?'active':''}>Home</Link>
                <Link href="/about" className={router.pathname=='/about'?'active':''}>About</Link>
                <Link href="/contact" className={router.pathname=='/contact'?'active':''}>Contact</Link>
                <Link href="/blog" className={router.pathname=='/blog'?'active':''}>Blog</Link>
                <Link href="/product" className={router.pathname=='/product'?'active':''}>Product</Link>
            </ul>
        </nav>
    </>
  )
}

export default Navbar