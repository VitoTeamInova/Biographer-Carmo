export interface BiographyData {
  siteColorScheme: string;
  firstName: string;
  middleName: string;
  lastName: string;
  dateOfBirth: string;
  dateOfPassing: string;
  placeOfBirth: string;
  latestResidence: string;
  profession: string;
  homePhoto: string;
  homeText: string;
  earlyLifePhoto: string;
  earlyLifeText: string;
  educationPhoto: string;
  educationText: string;
  workPhoto: string;
  workSummary: string;
  testimonials: string[];
  photos: string[];
  videos: string[];
  timelineEvents: TimelineEvent[];
  exportDate: string;
}

export interface TimelineEvent {
  date: string;
  description: string;
}

export interface Section {
  id: string;
  title: string;
  component: React.ComponentType;
}