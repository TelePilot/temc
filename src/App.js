import './App.css'
import styled from 'styled-components'
import TaglineContextProvider from './store/Tagline.context'
import ProjectContextProvider from './store/Project.context'
import Footer from './components/footer/footer.component'
import Navigation from './components/navbar/navigation.component'
import { Route, Switch } from 'react-router-dom'
import Kontakt from './pages/kontakt.component'
import ProjectExtended from './pages/project-extended.component'
import { AnimatePresence } from 'framer-motion'
import Home from './pages/home.component'

const PageContainer = styled.div`
	min-height: 110vh;
`

function App() {
	return (
		<div className='App'>
			<Navigation />
			<PageContainer>
				<Route
					render={({ location }) => (
						<AnimatePresence
							exitBeforeEnter
							initial={false}
							onExitComplete={() => window.scrollTo(0, 0)}
						>
							<Switch location={location} key={location.pathname}>
								<Route exact path={'/'}>
									<TaglineContextProvider>
										<ProjectContextProvider>
											<Home key={location.id} />
										</ProjectContextProvider>
									</TaglineContextProvider>
								</Route>
								<Route path={'/project/:id'}>
									<ProjectContextProvider>
										<ProjectExtended key={location.id} />
									</ProjectContextProvider>
								</Route>
								<Route exact path={'/kontakt'}>
									<Kontakt key={location.id} />
								</Route>
							</Switch>
						</AnimatePresence>
					)}
				/>
			</PageContainer>

			<Footer />
		</div>
	)
}

export default App
