import type { Role } from "../types/Employee";
import React from 'react';
import PersonList from '../components/PersonList';
import { organizationData } from '../data/OrganizationData';
import './OrganizationPage.css';

const roles: Role[] = [
  {
    title: "CEO/Chair of Board",
    employee: { firstname: "Jo-Anne", lastname: "Sinclair" }
  },
  {
    title: "COO/VP Operations",
    employee: { firstname: "Jackson", lastname: "Smith" }
  },
  {
    title: "CFO/VP Administration",
    employee: { firstname: "Susan", lastname: "Thomas" }
  },
  {
    title: "VP Client Services",
    employee: { firstname: "Richa", lastname: "Kaur" }
  },
  {
    title: "CIO",
    employee: { firstname: "Josee", lastname: "Benjamin" }
  },
  {
    title: "VP Sales & Marketing",
    employee: { firstname: "Vincent", lastname: "Grey" }
  },
  {
    title: "Director Financial and Audit Svcs",
    employee: { firstname: "Rupa", lastname: "Kharki" },
  },
  {
    title: "Director Human Resources",
    employee: { firstname: "Xun", lastname: "Kuang" }
  },
  {
    title: "Director Legal Services/General Counsel",
    employee: { firstname: "Stien", lastname: "Pedersen" }
  },
  {
    title: "Director Information Technology",
    employee: { firstname: "Sandra", lastname: "Bear" }
  },
  {
    title: "Director Information Security and CISSO",
    employee: { firstname: "Gus", lastname: "Blue" }
  },
  {
    title: "Director Accounting",
    employee: { firstname: "Sam", lastname: "Kong" }
  },
  {
    title: "Director Physical Security",
    employee: { firstname: "Valentine", lastname: "Smith" }
  },
  {
    title: "Director Facilities",
    employee: { firstname: "Mariya", lastname: "Kaperski" }
  },
  {
    title: "Manager, Business Continuity and Disaster Recovery",
    employee: { firstname: "Abd al-Hamid", lastname: "Alami" }
  },
  {
    title: "Manager, Internal Audit",
    employee: { firstname: "Victoria", lastname: "Gray" }
  },
  {
    title: "Chief Architect",
    employee: { firstname: "Cheryl", lastname: "Guru" }
  },
  {
    title: "Manager, Security Architecture",
    employee: { firstname: "Jean", lastname: "Ngoy" }
  },
  {
    title: "Solution Architect, Online Banking",
    employee: { firstname: "Kris", lastname: "Gold" }
  },
  {
    title: "Manager, Application Solutions",
    employee: { firstname: "Isaac", lastname: "Smith" }
  },
  {
    title: "Lead Developer, Online Banking",
    employee: { firstname: "Payton", lastname: "Frost" }
  },
  {
    title: "Manager, Operational Risk",
    employee: { firstname: "Samantha", lastname: "Nettle" }
  },
  {
    title: "Manager, Vendor Relations",
    employee: { firstname: "Yolanda", lastname: "Ferreira" }
  },
  {
    title: "Manager, Purchasing",
    employee: { firstname: "Samir", lastname: "Hassan" }
  },
  {
    title: "Manager, Communications",
    employee: { firstname: "Yuna", lastname: "Aikawa" }
  },
  {
    title: "Manager Customer Experience and Community Eng.",
    employee: { firstname: "Jonathan", lastname: "Carberry" }
  },
  {
    title: "Manager of Sales",
    employee: { firstname: "Roland", lastname: "Wei" }
  },
  {
    title: "Manager, Marketing",
    employee: { firstname: "Pran", lastname: "Singh" }
  },
  {
    title: "Business Analyst, Online Banking",
    employee: { firstname: "Linda", lastname: "Analyst" }
  },
  {
    title: "Manager, Contract Management",
    employee: { firstname: "Esra", lastname: "Sedge" }
  },
  {
    title: "Manager, Compliance Management",
    employee: { firstname: "Pranee", lastname: "Tan" }
  },
  {
    title: "Manager IT End User Service Desk",
    employee: { firstname: "Karmen", lastname: "Spruce" }
  },
  {
    title: "Manager IT End User Computing",
    employee: { firstname: "Haydar", lastname: "Katirci" }
  },
  {
    title: "Manager IT Telecom and Infrastructure",
    employee: { firstname: "Jill", lastname: "Harkness" }
  },
  {
    title: "Manager, Data Center and Hosting Services",
    employee: { firstname: "Tim", lastname: "Morrison" }
  },
  {
    title: "Manager of IT Risk Management",
    employee: { firstname: "Aleksandr", lastname: "Milosevic" }
  },
  {
    title: "Manager IT, project management office",
    employee: { firstname: "Jim", lastname: "Wingnut" }
  }
];


const OrganizationPage: React.FC = () => {
  return (
    <div className="organization-page">
      <h2>Leadership and Management</h2>
      <p className="page-description">
        View our organizational leadership structure and key management roles.
      </p>
      <PersonList people={organizationData} showTitle={true} />
    </div>
  );
};

export default OrganizationPage;