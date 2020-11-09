import './App.css'
import Header from './components/header.component'
import Tagline from './components/tagline.component'
import TaglineContextProvider from './store/Tagline.context'
import Footer from './components/footer.component'
import Navigation from './components/navigation.component'
import TextBubble from './components/textbubble.component'
import Movie from './components/movie.component'
import { Route } from 'react-router-dom'
import Kontakt from './components/pages/kontakt.component'
// import ProjectContextProvider from './store/Project.context'
// import Sample from './components/sample.component'
function App() {
	return (
		<div className='App'>
			<Navigation />
			<Route path={'/kontakt'}>
			<Kontakt />
			</Route>
			<Header />
			<TaglineContextProvider>
				<Tagline />
			</TaglineContextProvider>
			{/* <ProjectContextProvider>
				<Sample />
			</ProjectContextProvider> */}
			<TextBubble />
			<Movie />
			
			<Footer />
		</div>
	)
}

export default App
