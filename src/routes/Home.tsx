import Header from '../components/Header'
import Introduction from '../components/Introduction'
import MyServices from '../components/MyServices'
import About from '../components/About'
import MyWork from '../components/MyWork'
import Footer from '../components/Footer'

export default function Home(): JSX.Element {
  return (
    <main>
      <Header />
      <Introduction />
      <MyServices />
      <About />
      <MyWork />
      <Footer />
    </main>
  )
}
