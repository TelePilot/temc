import './App.css'

import TaglineContextProvider from './store/Tagline.context'
import ProjectContextProvider from './store/Project.context'
import Footer from './components/footer.component'
import Navigation from './components/navigation.component'
import { Route } from 'react-router-dom'
import Kontakt from './pages/kontakt.component'

import Home from './pages/home.component'
function App() {
	return (
		<div className='App'>
			<Navigation />
			<Route path={'/'} exact>
				<TaglineContextProvider>
					<ProjectContextProvider>
						<Home />
					</ProjectContextProvider>
				</TaglineContextProvider>
			</Route>
			<Route path={'/kontakt'}>
				<Kontakt />
			</Route>

			<Footer />
		</div>
	)
}

export default App
