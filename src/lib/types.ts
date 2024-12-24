export interface Subject {
  credits: string
  examCode: string
  finalGrade: string
  monthYear: string
  points: number | string
  status: string
  subject: string
}

export interface Semester {
  [key: string]: Subject
}

export interface Student {
  roll_number: string
  name: string
  semesters: {
    [key: string]: Semester | null
  }
  totalSubjects: number
  dueSubjects: number
  totalCredits: number
  studentCredits: number
  GPA: string | null
}

