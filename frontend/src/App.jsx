import { LandingPage } from './features/landing'
import { HRPipelinePage } from './features/hr-dashboard'
import { JobSearchPage } from './features/job-listings'

const normalizePath = (path) => path.replace(/\/+$/, '') || '/'

function App() {
  const pathname = normalizePath(window.location.pathname)

  if (pathname === '/hr-dashboard') {
    return <HRPipelinePage />
  }

  if (pathname === '/job-search') {
    return <JobSearchPage />
  }

  return <LandingPage />
}

export default App
