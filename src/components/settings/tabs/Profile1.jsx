import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const Profile = () => {
  // State for tracking which fields are being edited
  const [isEditing, setIsEditing] = useState({
    firstName: false,
    lastName: false,
    email: false,
    phone: false,
    language: false
  });

  // Form data state
  const [formData, setFormData] = useState({
    firstName: 'John',
    lastName: 'Doe',
    email: 'JohnDoe@gmail.com',
    phone: '0000000000',
    language: 'English'
  });

  // Toggle edit mode for a field
  const handleEdit = (field) => {
    setIsEditing(prev => ({
      ...prev,
      [field]: !prev[field]
    }));
  };

  // Update form data
  const handleChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  // Handle save
  const handleSave = async (field) => {
    console.log(`Saving ${field}:`, formData[field]);
    setIsEditing(prev => ({ ...prev, [field]: false }));
  };

  return (
    <div className="max-w-6xl">
      {/* Section Title */}
      <h2 className="text-xl font-semibold text-black dark:text-white mb-2">
        Profile
      </h2>
      <p className="text-gray-600 dark:text-gray-400 mb-8">
        Manage your profile settings
      </p>

      <div className="space-y-6 max-w-4xl">
        {/* First Name Field */}
        <div className="flex flex-col md:flex-row md:items-center gap-4">
          <label className="md:w-32 text-black dark:text-white font-medium">
            First Name
          </label>
          <input
            type="text"
            value={formData.firstName}
            onChange={(e) => handleChange('firstName', e.target.value)}
            disabled={!isEditing.firstName}
            className="flex-1 px-5 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:bg-gray-50 dark:disabled:bg-gray-800 disabled:text-gray-600 dark:disabled:text-gray-400 text-gray-900 dark:text-white bg-white dark:bg-gray-900"
          />
          <button
            onClick={() => isEditing.firstName ? handleSave('firstName') : handleEdit('firstName')}
            className="px-8 py-3 bg-blue-600 text-white border border-blue-600 rounded-lg hover:bg-blue-50 hover:text-blue-600 dark:bg-[#73FBFD] dark:text-black dark:border-[#73FBFD] dark:hover:bg-gray-800 dark:hover:text-[#73FBFD] transition-colors font-medium min-w-[80px]"
          >
            {isEditing.firstName ? 'Save' : 'Edit'}
          </button>
        </div>

        {/* Last Name Field */}
        <div className="flex flex-col md:flex-row md:items-center gap-4">
              <label className="md:w-32 text-black dark:text-white font-medium">
            Last Name
          </label>
          <input
            type="text"
            value={formData.lastName}
            onChange={(e) => handleChange('lastName', e.target.value)}
            disabled={!isEditing.lastName}
            className="flex-1 px-5 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:bg-gray-50 dark:disabled:bg-gray-800 disabled:text-gray-600 dark:disabled:text-gray-400 text-gray-900 dark:text-white bg-white dark:bg-gray-900"
          />
          <button
            onClick={() => isEditing.lastName ? handleSave('lastName') : handleEdit('lastName')}
            className="px-8 py-3 bg-blue-600 text-white border border-blue-600 rounded-lg hover:bg-blue-50 hover:text-blue-600 dark:bg-[#73FBFD] dark:text-black dark:border-[#73FBFD] dark:hover:bg-gray-800 dark:hover:text-[#73FBFD] transition-colors font-medium min-w-[80px]"
          >
            {isEditing.lastName ? 'Save' : 'Edit'}
          </button>
        </div>

        {/* Email Field */}
        <div className="flex flex-col md:flex-row md:items-center gap-4">
          <label className="md:w-32 text-black dark:text-white font-medium">
            Email
          </label>
          <input
            type="email"
            value={formData.email}
            onChange={(e) => handleChange('email', e.target.value)}
            disabled={!isEditing.email}
            className="flex-1 px-5 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:bg-gray-50 dark:disabled:bg-gray-800 disabled:text-gray-600 dark:disabled:text-gray-400 text-gray-900 dark:text-white bg-white dark:bg-gray-900"
          />
          <button
            onClick={() => isEditing.email ? handleSave('email') : handleEdit('email')}
            className="px-8 py-3 bg-blue-600 text-white border border-blue-600 rounded-lg hover:bg-blue-50 hover:text-blue-600 dark:bg-[#73FBFD] dark:text-black dark:border-[#73FBFD] dark:hover:bg-gray-800 dark:hover:text-[#73FBFD] transition-colors font-medium min-w-[80px]"
          >
            {isEditing.email ? 'Save' : 'Edit'}
          </button>
        </div>

        {/* Phone Field */}
        <div className="flex flex-col md:flex-row md:items-center gap-4">
          <label className="md:w-32 text-black dark:text-white font-medium">
            Phone
          </label>
          <input
            type="tel"
            value={formData.phone}
            onChange={(e) => handleChange('phone', e.target.value)}
            disabled={!isEditing.phone}
            className="flex-1 px-5 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:bg-gray-50 dark:disabled:bg-gray-800 disabled:text-gray-600 dark:disabled:text-gray-400 text-gray-900 dark:text-white bg-white dark:bg-gray-900"
          />
          <button
            onClick={() => isEditing.phone ? handleSave('phone') : handleEdit('phone')}
            className="px-8 py-3 bg-blue-600 text-white border border-blue-600 rounded-lg hover:bg-blue-50 hover:text-blue-600 dark:bg-[#73FBFD] dark:text-black dark:border-[#73FBFD] dark:hover:bg-gray-800 dark:hover:text-[#73FBFD] transition-colors font-medium min-w-[80px]"
          >
            {isEditing.phone ? 'Save' : 'Edit'}
          </button>
        </div>

        {/* Language Field */}
        <div className="flex flex-col md:flex-row md:items-center gap-4">
          <label className="md:w-32 text-black dark:text-white font-medium">
            Language
          </label>
          <div className="flex-1 relative">
            <select
              value={formData.language}
              onChange={(e) => handleChange('language', e.target.value)}
              disabled={!isEditing.language}
              className="w-full px-5 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:bg-gray-50 dark:disabled:bg-gray-800 disabled:text-gray-600 dark:disabled:text-gray-400 text-gray-900 dark:text-white bg-white dark:bg-gray-900 appearance-none pr-10"
            >
              <option>English</option>
              <option>Spanish</option>
              <option>French</option>
              <option>German</option>
              <option>Hindi</option>
              <option>Chinese</option>
              <option>Japanese</option>
            </select>
            <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
          </div>
          <button
            onClick={() => isEditing.language ? handleSave('language') : handleEdit('language')}
            className="px-8 py-3 bg-blue-600 text-white border border-blue-600 rounded-lg hover:bg-blue-50 hover:text-blue-600 dark:bg-[#73FBFD] dark:text-black dark:border-[#73FBFD] dark:hover:bg-gray-800 dark:hover:text-[#73FBFD] transition-colors font-medium min-w-[80px]"
          >
            {isEditing.language ? 'Save' : 'Edit'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Profile;