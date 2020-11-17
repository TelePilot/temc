import './App.css'
import styled from 'styled-components'
import TaglineContextProvider from './store/Tagline.context'
import ProjectContextProvider from './store/Project.context'
import HeaderContextProvider from './store/Header.context'
import ImageSizeProvider from './store/image.context'
import Footer from './components/footer/footer.component'
import { Route, Switch, withRouter } from 'react-router-dom'
import Kontakt from './pages/kontakt.component'
import ProjectExtended from './pages/project-extended.component'
import { AnimatePresence } from 'framer-motion'
import Home from './pages/home.component'
import Example from './components/navbar/hamburger/Example'
import About from './pages/about.component'

const PageContainer = styled.div`
	min-height: 110vh;
	box-sizing: border-box;
	padding: 0 50px;
`

function App() {
	return (
		<div className='App'>
			{/* <Navigation /> */}
		<Example />
			<PageContainer>
				<ImageSizeProvider>
					<ProjectContextProvider>
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
												<HeaderContextProvider>
													<Home key={location.id} />
												</HeaderContextProvider>
											</TaglineContextProvider>
										</Route>
										<Route path={'/project/:id'}>
											<ProjectExtended key={location.id} />
										</Route>
										<Route exact path={'/about'}>
											<About key={location.id} />
										</Route>
										<Route exact path={'/kontakt'}>
											<Kontakt key={location.id} />
										</Route>
									</Switch>
								</AnimatePresence>
							)}
						/>
					</ProjectContextProvider>
				</ImageSizeProvider>
			</PageContainer>

			<Footer />
		</div>
	)
}

export default App
