import { Routes, Route, Navigate } from 'react-router-dom'
import { LandingPage } from './features/landing'
import { HRPipelinePage } from './features/hr-dashboard'
import { JobSearchPage, JobListingsPage } from './features/job-listings'
import { PostJobPage } from './features/post-job'

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/hr-dashboard" element={<HRPipelinePage />} />
        <Route path="/job-search" element={<JobSearchPage />} />
        <Route path="/post-new-job" element={<PostJobPage />} />
      <Route path="/hr-listings" element={<JobListingsPage />} />
      <Route path="/hr-listings.html" element={<JobListingsPage />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  )
}

export default App
