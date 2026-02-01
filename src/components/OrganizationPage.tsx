import React from 'react';
import PersonList from '../components/PersonList';
import { organizationData } from '../data/OrganizationData';
import './OrganizationPage.css';


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