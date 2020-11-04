import './App.css'
import Header from './components/header.component'
import Project from './components/project.component'
import Tagline from './components/tagline.component'
import TaglineContextProvider from './store/Tagline.context'
import ProjectContextProvider from './store/Project.context'
import FooterContextProvider from './store/Project.context'
import Footer from './components/footer.component'

function App() {
	return (
		<div className='App'>
			<Header />
			<TaglineContextProvider>
				<Tagline />
			</TaglineContextProvider>
			<ProjectContextProvider>
				<Project />
			</ProjectContextProvider>
			<FooterContextProvider>
				<Footer />
			</FooterContextProvider>
		</div>
	)
}

export default App
