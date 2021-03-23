import '../styles/globals.css'
import Team from './Team/team'
import Events from './Events/Events'
import Articles from './Articles/Articles'

function MyApp({ Component, pageProps }) {
  return (<Component>
        <Articles/>
      </Component> //{...pageProps} />
  );}

export default MyApp
