import React, { useState } from 'react';
import { Plus } from 'lucide-react';
import Card from '../../atoms/Card';
import Button from '../../atoms/Button';
import Input from '../../atoms/Input';
import Select from '../../atoms/Select';

export default function AnimalForm({ onSubmit, onCancel }) {
  const [formData, setFormData] = useState({
    id: '',
    breed: '',
    datePurchase: '',
    healthCondition: '',
    costOfPurchase: '',
    group: '',
    species: '',
    gender: '',
    birthDate: '',
    sectionAssigned: '',
    feedingPlan: '',
    vaccinationCard: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    onSubmit(formData);
  };

  const groups = [
    { value: 'goat', label: 'Goat' },
    { value: 'chicken', label: 'Chicken' },
    { value: 'cow', label: 'Cow' },
    { value: 'sheep', label: 'Sheep' }
  ];

  const healthConditions = [
    { value: 'excellent', label: 'Excellent' },
    { value: 'good', label: 'Good' },
    { value: 'fair', label: 'Fair' },
    { value: 'poor', label: 'Poor' }
  ];

  const genders = [
    { value: 'male', label: 'Male' },
    { value: 'female', label: 'Female' }
  ];

  return (
    <Card className="max-w-4xl mx-auto">
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-gray-900">Add New Animal</h2>
        <p className="text-gray-600 mt-1">Fill in the details to register a new animal</p>
      </div>

      <div className="space-y-6">
        {/* Basic Information */}
        <div>
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Basic Information</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Input
              label="Animal ID"
              name="id"
              value={formData.id}
              onChange={handleChange}
              placeholder="e.g., A001"
            />
            <Select
              label="Group"
              name="group"
              value={formData.group}
              onChange={handleChange}
              options={groups}
            />
            <Input
              label="Species"
              name="species"
              value={formData.species}
              onChange={handleChange}
              placeholder="e.g., Boer"
            />
            <Input
              label="Breed"
              name="breed"
              value={formData.breed}
              onChange={handleChange}
              placeholder="e.g., Boer Goat"
            />
            <Select
              label="Gender"
              name="gender"
              value={formData.gender}
              onChange={handleChange}
              options={genders}
            />
            <Input
              label="Birth Date"
              name="birthDate"
              type="date"
              value={formData.birthDate}
              onChange={handleChange}
            />
          </div>
        </div>

        {/* Purchase Information */}
        <div>
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Purchase Information</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Input
              label="Date of Purchase"
              name="datePurchase"
              type="date"
              value={formData.datePurchase}
              onChange={handleChange}
            />
            <Input
              label="Cost of Purchase"
              name="costOfPurchase"
              type="number"
              value={formData.costOfPurchase}
              onChange={handleChange}
              placeholder="0.00"
            />
          </div>
        </div>

        {/* Health & Management */}
        <div>
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Health & Management</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Select
              label="Health Condition"
              name="healthCondition"
              value={formData.healthCondition}
              onChange={handleChange}
              options={healthConditions}
            />
            <Input
              label="Section Assigned"
              name="sectionAssigned"
              value={formData.sectionAssigned}
              onChange={handleChange}
              placeholder="e.g., Barn A"
            />
            <Input
              label="Feeding Plan"
              name="feedingPlan"
              value={formData.feedingPlan}
              onChange={handleChange}
              placeholder="e.g., Plan A - 3 meals/day"
            />
            <Input
              label="Vaccination Card ID"
              name="vaccinationCard"
              value={formData.vaccinationCard}
              onChange={handleChange}
              placeholder="e.g., VAC001"
            />
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex justify-end gap-3 pt-4 border-t">
          <Button type="button" variant="secondary" onClick={onCancel}>
            Cancel
          </Button>
          <Button onClick={handleSubmit} variant="primary">
            <Plus className="w-4 h-4 mr-2" />
            Add Animal
          </Button>
        </div>
      </div>
    </Card>
  );
}