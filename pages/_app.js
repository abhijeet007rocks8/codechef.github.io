import '../styles/globals.css'
import Team from './Team/'
import Events from './Events/'
import Articles from './Articles'
import LeaderBoard from './Leaderboard'
import Navbar from '../components/Navbar/Navbar'

function MyApp({ Component, pageProps }) {
  return (<>
        {/* <Events/>
        <Articles/> */}
        <Navbar/>
         <Component {...pageProps}/> 
      </> //{...pageProps} />
  );}

export default MyApp
