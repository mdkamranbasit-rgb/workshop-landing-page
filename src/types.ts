/**
 * TypeScript Interfaces for AI & Robotics Summer Workshop Application
 */

export interface WorkshopDetailCard {
  id: string;
  label: string;
  value: string;
  iconName: string; // Dynamic icon rendering helper
  colorClass: string;
}

export interface LearningOutcome {
  id: string;
  title: string;
  description: string;
  badgeText: string;
  illustration: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: string;
}

export interface EnquiryPayload {
  name: string;
  email: string;
  phone: string;
}

export interface EnquiryResponse {
  success: boolean;
  message?: string;
  error?: string;
  data?: EnquiryPayload & { createdAt: string };
  persistence?: string;
}
