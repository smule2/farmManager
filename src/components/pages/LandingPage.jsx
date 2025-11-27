import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../atoms/Button';
import Heading from '../atoms/Heading';
import Divider from '../atoms/Divider';
export default function LandingPage() {
  return (
    <div className="max-w-4xl mx-auto mt-10 p-6 bg-white rounded-md shadow-md">
      {/* Page Heading */}
      <Heading level={1} className="text-center mb-4">
        Welcome to the Farm Management App
      </Heading>

      <Divider />

      <p className="text-gray-700 text-center mb-6">
        Manage your animals, groups, and reports all in one place.  
        Get started by navigating to the pages below.
      </p>

      {/* Action Buttons */}
      <div className="flex justify-center gap-4">
        <Link to="/animals/register">
          <Button variant="primary" size="md">Register Animal</Button>
        </Link>
        <Link to="/animals">
          <Button variant="secondary" size="md">View Animals</Button>
        </Link>
        <Link to="/group/1">
          <Button variant="ghost" size="md">View Group</Button>
        </Link>
         <Link to="/dashboard">
          <Button variant="ghost" size="md">View Dashboard </Button>
        </Link>
      </div>

      <Divider />

      <p className="text-gray-500 text-sm text-center mt-6">
        This is a demo landing page to test routing.
      </p>
    </div>
  );
}
