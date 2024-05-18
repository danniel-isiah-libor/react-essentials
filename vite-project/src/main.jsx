import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Profile from './components/Profile'
import Contact from './components/Contact'

const experiences = { 
  'company_a': {
    name: 'Company A',
    duration: '2019 - 2021'
  },
  'company_b': {
    name: 'Inventive Media',
    duration: '2021 - present'
  }
 }

 const applications = []

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App/>

    <Profile 
      name="John Doe" 
      position="Software Engineer"
      experiences={experiences}
      />

    {
      (applications.length > 0) && <>
      <h2>Applications</h2>
      <ul>
        {
          (applications.length) ?
          applications.map(
            (item, index) => {
              return <li key={index}>{item}</li> 
            }
          )
          : <li>No applications</li>
        }
      </ul>
      </>
    }

      <Contact/>
  </React.StrictMode>,
)
