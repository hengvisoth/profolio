export interface CareerExperience {
  dateRange: string
  company: string
  companyType: string
  role: string
  bullets: string[]
  tags: string[]
}

export interface CareerEducation {
  degree: string
  yearRange: string
  school: string
}

export interface CareerAchievement {
  title: string
  description: string
}

export interface CareerHistoryContent {
  label: string
  title: string
  description: string
  educationLabel: string
  educationTitle: string
  achievementsLabel: string
  experiences: CareerExperience[]
  education: CareerEducation[]
  achievements: CareerAchievement[]
}
