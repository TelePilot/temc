import './App.css'
import styled from 'styled-components'
import TaglineContextProvider from './store/Tagline.context'
import ProjectContextProvider from './store/Project.context'
import Footer from './components/footer/footer.component'
import Navigation from './components/navbar/navigation.component'
import { Route, Switch } from 'react-router-dom'
import Kontakt from './pages/kontakt.component'
import { AnimatePresence } from 'framer-motion'
import Home from './pages/home.component'

function App() {
	return (
		<div className='App'>
			<Navigation />
			<AnimatePresence>
				<Switch>
					<Route exact path={'/'}>
						<TaglineContextProvider>
							<ProjectContextProvider>
								<Home />
							</ProjectContextProvider>
						</TaglineContextProvider>
					</Route>
					<Route exact path={'/kontakt'}>
						<Kontakt />
					</Route>
				</Switch>
			</AnimatePresence>

			<Footer />
		</div>
	)
}

export default App
