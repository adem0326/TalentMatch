import React, { useEffect, useRef, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Button, GlassCard } from '../../../components/ui'
import { usePostJob } from '../hooks/usePostJob'

export default function PostJobPage() {
  const { submit, loading, error, result } = usePostJob()
  const navigate = useNavigate()
  const [showSuccess, setShowSuccess] = useState(false)
  const formRef = useRef(null)
  const sectionsRef = useRef([])

  useEffect(() => {
    if (result) {
      setShowSuccess(true)
      window.scrollTo({ top: 0, behavior: 'smooth' })
      setTimeout(() => navigate('/hr-listings'), 1300)
    }
  }, [result, navigate])

  useEffect(() => {
    function onScroll() {
      const windowCenter = window.innerHeight / 2
      let active = 0
      sectionsRef.current.forEach((el, idx) => {
        if (!el) return
        const rect = el.getBoundingClientRect()
        if (rect.top < windowCenter) active = idx
      })
      document.querySelectorAll('.progress-step').forEach((el, idx) => {
        if (idx <= active) el.classList.add('active')
        else el.classList.remove('active')
      })
    }
    window.addEventListener('scroll', onScroll)
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  async function handleSubmit(e) {
    e.preventDefault()
    const data = Object.fromEntries(new FormData(formRef.current))
    try {
      await submit(data)
    } catch (err) {
      // error state handled by hook
      alert(err.message || String(err))
    }
  }

  return (
    <div className="dashboard">
      <aside className="sidebar">
        <div className="logo">TalentMatch</div>
        <nav>
          <Link to="/hr-listings">Job Listings</Link>
          <Link to="/hr-dashboard">Candidate Pipeline</Link>
          <Link to="/hr-analytics">Analytics</Link>
          <Link to="/">← Back to Home</Link>
        </nav>
      </aside>

      <div className="main">
        <header className="header">
          <h1>Post New Job</h1>
        </header>

        <div className="content">
          <div className="form-container">
            <div className="breadcrumb">
              <Link to="/hr-listings">Job Listings</Link>
              <span>/</span>
              <span>Post New Job</span>
            </div>

            <div className="progress-bar">
              <div className="progress-step active" />
              <div className="progress-step" />
              <div className="progress-step" />
              <div className="progress-step" />
            </div>

            <div className={`success-message ${showSuccess ? 'show' : ''}`}>
              Job posting created successfully! Redirecting...
            </div>

            <form id="jobForm" ref={formRef} onSubmit={handleSubmit}>
              <section
                className="form-section"
                ref={(el) => (sectionsRef.current[0] = el)}
              >
                <h2>Job Information</h2>

                <div className="form-group">
                  <label className="form-label">
                    Job Title <span className="required">*</span>
                  </label>
                  <input type="text" name="jobTitle" placeholder="e.g., Senior Full-Stack Engineer" required />
                  <div className="form-hint">The primary job title for this position</div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label className="form-label">
                      Department <span className="required">*</span>
                    </label>
                    <select name="department" required>
                      <option value="">Select a department</option>
                      <option value="Engineering">Engineering</option>
                      <option value="Design">Design</option>
                      <option value="Product">Product</option>
                      <option value="Sales">Sales</option>
                      <option value="Marketing">Marketing</option>
                      <option value="Operations">Operations</option>
                      <option value="HR">HR & People</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label className="form-label">
                      Seniority Level <span className="required">*</span>
                    </label>
                    <select name="seniority" required>
                      <option value="">Select level</option>
                      <option value="Entry">Entry Level</option>
                      <option value="Mid">Mid Level</option>
                      <option value="Senior">Senior</option>
                      <option value="Lead">Lead / Manager</option>
                      <option value="Executive">Executive</option>
                    </select>
                  </div>
                </div>

                <div className="form-group">
                  <label className="form-label">
                    Job Description <span className="required">*</span>
                  </label>
                  <textarea name="description" placeholder="Provide a detailed job description, responsibilities, and requirements..." required />
                  <div className="form-hint">At least 50 characters</div>
                </div>
              </section>

              <section
                className="form-section"
                ref={(el) => (sectionsRef.current[1] = el)}
              >
                <h2>Location & Employment Type</h2>

                <div className="form-row">
                  <div className="form-group">
                    <label className="form-label">
                      Location <span className="required">*</span>
                    </label>
                    <input type="text" name="location" placeholder="e.g., San Francisco, CA or Remote" required />
                  </div>

                  <div className="form-group">
                    <label className="form-label">
                      Employment Type <span className="required">*</span>
                    </label>
                    <select name="employmentType" required>
                      <option value="">Select type</option>
                      <option value="Full-time">Full-time</option>
                      <option value="Part-time">Part-time</option>
                      <option value="Contract">Contract</option>
                      <option value="Temporary">Temporary</option>
                    </select>
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label className="form-label">
                      Salary Range (Min) <span className="required">*</span>
                    </label>
                    <input type="number" name="salaryMin" placeholder="e.g., 80000" required />
                  </div>

                  <div className="form-group">
                    <label className="form-label">
                      Salary Range (Max) <span className="required">*</span>
                    </label>
                    <input type="number" name="salaryMax" placeholder="e.g., 150000" required />
                  </div>
                </div>
              </section>

              <section
                className="form-section"
                ref={(el) => (sectionsRef.current[2] = el)}
              >
                <h2>Requirements & Skills</h2>

                <div className="form-group">
                  <label className="form-label">
                    Required Skills <span className="required">*</span>
                  </label>
                  <input type="text" name="skills" placeholder="e.g., React, Node.js, PostgreSQL (comma-separated)" required />
                  <div className="form-hint">Enter skills separated by commas</div>
                </div>

                <div className="form-group">
                  <label className="form-label">
                    Years of Experience Required <span className="required">*</span>
                  </label>
                  <select name="experience" required>
                    <option value="">Select range</option>
                    <option value="0-2">0-2 years</option>
                    <option value="2-5">2-5 years</option>
                    <option value="5-10">5-10 years</option>
                    <option value="10+">10+ years</option>
                  </select>
                </div>

                <div className="form-group">
                  <label className="form-label">Education Requirements</label>
                  <input type="text" name="education" placeholder="e.g., Bachelor's degree in Computer Science" />
                  <div className="form-hint">Optional: specify required education level</div>
                </div>
              </section>

              <section
                className="form-section"
                ref={(el) => (sectionsRef.current[3] = el)}
              >
                <h2>Publishing Settings</h2>

                <div className="form-group">
                  <label className="form-label">
                    Status <span className="required">*</span>
                  </label>
                  <select name="status" required>
                    <option value="draft">Save as Draft</option>
                    <option value="active">Publish Immediately</option>
                  </select>
                  <div className="form-hint">Draft postings are not visible to job seekers</div>
                </div>

                <div className="form-group">
                  <label className="form-label">
                    Hiring Manager Email <span className="required">*</span>
                  </label>
                  <input type="email" name="managerEmail" placeholder="hiring.manager@company.com" required />
                  <div className="form-hint">Applicants will be routed to this email</div>
                </div>
              </section>

              <div className="form-actions">
                <button type="submit" className="btn btn-primary" disabled={loading}>
                  {loading ? 'Posting…' : 'Post Job'}
                </button>
                <Link to="/hr-listings" className="btn btn-secondary">Cancel</Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
