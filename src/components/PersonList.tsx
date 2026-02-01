import React from 'react';
import './PersonList.css';

interface Person {
  employee: {
    firstname: string;
    lastname: string;
  };
  title?: string;
  pronouns?: string;
}

interface PersonListProps {
  people: Person[];
  showTitle?: boolean;
}

const PersonList: React.FC<PersonListProps> = ({ people }) => {
  return (
    <div className="person-list">
      {people.map((person, index) => (
        <div key={index} className="person-item">
          <div className="person-name">
            {person.employee.firstname} {person.employee.lastname}
            {person.pronouns && <span className="pronouns"> ({person.pronouns})</span>}
          </div>
          {person.title && (
            <div className="person-title">{person.title}</div>
          )}
        </div>
      ))}
    </div>
  );
};

export default PersonList;