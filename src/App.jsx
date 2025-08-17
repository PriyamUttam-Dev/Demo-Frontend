import { useState } from 'react'
import Navigation from './components/Navigation'
import SignUp from './components/SignUp'
import UserCard from './components/UserCard'
import './App.css'

function App() {
  const [currentView, setCurrentView] = useState('home')

  const sampleUsers = [
    { name: 'Priyam Uttam', email: 'pri@example.com' },
    { name: 'Aditi', email: 'aditi@example.com' },
    { name: 'Ravi', email: 'avi@example.com' }
  ]

  const renderContent = () => {
    switch(currentView) {
      case 'signup':
        return <SignUp />
      case 'users':
        return (
          <div className="users-section">
            <h2>User Cards Demo</h2>
            <div className="user-cards-container">
              {sampleUsers.map((user, index) => (
                <UserCard key={index} name={user.name} email={user.email} />
              ))}
            </div>
          </div>
        )
      default:
        return (
          <div className="home-section">
            <h1>Frontend Components Demo</h1>
            <p>Welcome! This demo showcases three React components:</p>
            <div className="features">
              <div className="feature-card">
                <h3>Sign-Up Form</h3>
                <p>Complete form with validation and modern styling</p>
                <button onClick={() => setCurrentView('signup')}>View Sign-Up</button>
              </div>
              <div className="feature-card">
                <h3>Navigation Bar</h3>
                <p>Responsive navigation with mobile hamburger menu</p>
                <p><em>Already visible at the top!</em></p>
              </div>
              <div className="feature-card">
                <h3>User Cards</h3>
                <p>Reusable card components with props</p>
                <button onClick={() => setCurrentView('users')}>View User Cards</button>
              </div>
            </div>
          </div>
        )
    }
  }

  return (
    <>
      <Navigation setCurrentView={setCurrentView} />
      <main className="main-content">
        {renderContent()}
      </main>
    </>
  )
}

export default App
