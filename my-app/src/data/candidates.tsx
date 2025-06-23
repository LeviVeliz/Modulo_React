import type { CandidateType } from "@/types/candidates";

const candidatesArray: CandidateType[] = [
{ name: 'Ricardo', age: 23, experience: 5, status: 'Interviewing', skills: ['Php', '.Net'], working: true },
{ name: 'Abel', age: 20, experience: 1, status: 'Hired', skills: ['Node.js', 'C++'], working: true },
{ name: 'David', age: 22, experience: 3, status: 'Pending', skills: ['React', 'Python'], working: false },
{ name: 'Valentina', age: 21, experience: 9, status: 'Reviewing', skills: ['Android Development'], working: true },
{ name: 'Javier', age: 28, experience: 2, status: 'Reviewing', skills: ['Go', 'Kubernetes'], working: false },
{ name: 'Camila', age: 30, experience: 3, status: 'Hired', skills: ['Swift', 'iOS Development'], working: true }   
]

export default candidatesArray