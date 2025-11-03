
import React from 'react';

export interface Service {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export interface Project {
  image: string;
  category: string;
  title:string;
  description: string;
}

export interface Feature {
    icon: React.ReactNode;
    title: string;
    description: string;
}

export interface TeamMember {
    avatar: string;
    name: string;
    role: string;
}
