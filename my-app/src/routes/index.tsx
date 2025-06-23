import { createFileRoute } from '@tanstack/react-router'
import '../App.css'
import candidatesArray from '@/data/candidates'
import Candidate from '@/components/candidate'

export const Route = createFileRoute('/')({
  component: App,
})

function App() {
  return (
    <div className="App">
      <h1>Lista de candidatos</h1>
      <section className='candidates__section'>
      {candidatesArray.map((candidate, index) => (
        <Candidate
          key={index}
          name={candidate.name}
          age={candidate.age}
          experience={candidate.experience}
          status={candidate.status}
          skills={candidate.skills}
          working={candidate.working}
        />
      ))}
      </section>
    </div>
  )
}
