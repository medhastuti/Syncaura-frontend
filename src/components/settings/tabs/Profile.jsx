import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const Profile = () => {
  const [isEditing, setIsEditing] = useState({
    firstName: false,
    lastName: false,
    email: false,
    phone: false,
    language: false
  });

  const [formData, setFormData] = useState({
    firstName: 'John',
    lastName: 'Doe',
    email: 'JohnDoe@gmail.com',
    phone: '0000000000',
    language: 'English'
  });

  const handleEdit = (field) => {
    setIsEditing(prev => ({
      ...prev,
      [field]: !prev[field]
    }));
  };

  const handleChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSave = async (field) => {
    console.log(`Saving ${field}:`, formData[field]);
    setIsEditing(prev => ({ ...prev, [field]: false }));
  };

  return (
    <div className="w-full">
      {/* Section Title - Left Aligned */}
      <div>
        <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-1">
        Profile
      </h2>
      <p className="text-sm text-black dark:text-gray-400 mb-7">
        Manage your profile settings
      </p>
    </div>

      <div className="w-full max-w-[700px] mx-auto">
        {/* Form Fields Container - Centered */}
        <div className="flex flex-col items-center gap-[28px]">
          {/* First Name Field */}
          <div className="flex items-center">
            <label className="w-[120px] text-[16px] font-normal text-black dark:text-white text-left mr-[2px]">
              First Name
            </label>
            <input
              type="text"
              value={formData.firstName}
              onChange={(e) => handleChange('firstName', e.target.value)}
              disabled={!isEditing.firstName}
              className="w-[385px] h-[54px] px-5 border border-gray-300 dark:border-[#2A2A2A] rounded-xl text-base text-gray-900 dark:text-white bg-white dark:bg-[#0B0B0B]
              focus:outline-none focus:border-[#2461E6] dark:focus:border-[#73FBFD] focus:ring-2 focus:ring-[#2461E6]/10 dark:focus:ring-[#73FBFD]/10
              transition-all duration-200 disabled:bg-gray-50 dark:disabled:bg-[#111] disabled:text-gray-700 dark:disabled:text-gray-400 mr-[28px]"
            />
            <button
              onClick={() => isEditing.firstName ? handleSave('firstName') : handleEdit('firstName')}
              className="w-[72px] px-0 py-1 rounded-full bg-[#2461E6] text-white border border-[#2461E6] text-sm font-normal flex items-center justify-center
              hover:bg-blue-50 hover:text-[#2461E6] 
              dark:bg-[#73FBFD] dark:text-black dark:border-[#73FBFD] 
              dark:hover:bg-gray-800 dark:hover:text-[#73FBFD] transition-colors shadow-sm"

            >
              {isEditing.firstName ? 'Save' : 'Edit'}
            </button>
          </div>

          {/* Last Name Field */}
          <div className="flex items-center">
            <label className="w-[120px] text-[16px] font-normal text-black dark:text-white text-left mr-[2px]">
              Last Name
            </label>
            <input
              type="text"
              value={formData.lastName}
              onChange={(e) => handleChange('lastName', e.target.value)}
              disabled={!isEditing.lastName}
              className="w-[385px] h-[54px] px-5 border border-gray-300 dark:border-[#2A2A2A] rounded-xl text-base text-gray-900 dark:text-white bg-white dark:bg-[#0B0B0B]
              focus:outline-none focus:border-[#2461E6] dark:focus:border-[#73FBFD] focus:ring-2 focus:ring-[#2461E6]/10 dark:focus:ring-[#73FBFD]/10
              transition-all duration-200 disabled:bg-gray-50 dark:disabled:bg-[#111] disabled:text-gray-700 dark:disabled:text-gray-400 mr-[28px]"
            />
            <button
              onClick={() => isEditing.lastName ? handleSave('lastName') : handleEdit('lastName')}
              className="w-[72px] px-0 py-1 rounded-full bg-[#2461E6] text-white border border-[#2461E6] text-sm font-normal flex items-center justify-center
              hover:bg-blue-50 hover:text-[#2461E6] 
              dark:bg-[#73FBFD] dark:text-black dark:border-[#73FBFD] 
              dark:hover:bg-gray-800 dark:hover:text-[#73FBFD] transition-colors shadow-sm"
            >
              {isEditing.lastName ? 'Save' : 'Edit'}
            </button>
          </div>

          {/* Email Field */}
          <div className="flex items-center">
            <label className="w-[120px] text-[16px] font-normal text-black dark:text-white text-left mr-[2px]">
              Email
            </label>
            <input
              type="email"
              value={formData.email}
              onChange={(e) => handleChange('email', e.target.value)}
              disabled={!isEditing.email}
              className="w-[385px] h-[54px] px-5 border border-gray-300 dark:border-[#2A2A2A] rounded-xl text-base text-gray-900 dark:text-white bg-white dark:bg-[#0B0B0B]
              focus:outline-none focus:border-[#2461E6] dark:focus:border-[#73FBFD] focus:ring-2 focus:ring-[#2461E6]/10 dark:focus:ring-[#73FBFD]/10
              transition-all duration-200 disabled:bg-gray-50 dark:disabled:bg-[#111] disabled:text-gray-700 dark:disabled:text-gray-400 mr-[28px]"
            />
            <button
              onClick={() => isEditing.email ? handleSave('email') : handleEdit('email')}
              className="w-[72px] px-0 py-1 rounded-full bg-[#2461E6] text-white border border-[#2461E6] text-sm font-normal flex items-center justify-center
              hover:bg-blue-50 hover:text-[#2461E6] 
              dark:bg-[#73FBFD] dark:text-black dark:border-[#73FBFD] 
              dark:hover:bg-gray-800 dark:hover:text-[#73FBFD] transition-colors shadow-sm"
            >
              {isEditing.email ? 'Save' : 'Edit'}
            </button>
          </div>

          {/* Phone Field */}
          <div className="flex items-center">
            <label className="w-[120px] text-[16px] font-normal text-black dark:text-white text-left mr-[2px]">
              Phone
            </label>
            <input
              type="tel"
              value={formData.phone}
              onChange={(e) => handleChange('phone', e.target.value)}
              disabled={!isEditing.phone}
              className="w-[385px] h-[54px] px-5 border border-gray-300 dark:border-[#2A2A2A] rounded-xl text-base text-gray-900 dark:text-white bg-white dark:bg-[#0B0B0B]
              focus:outline-none focus:border-[#2461E6] dark:focus:border-[#73FBFD] focus:ring-2 focus:ring-[#2461E6]/10 dark:focus:ring-[#73FBFD]/10
              transition-all duration-200 disabled:bg-gray-50 dark:disabled:bg-[#111] disabled:text-gray-700 dark:disabled:text-gray-400 mr-[28px]"
            />
            <button
              onClick={() => isEditing.phone ? handleSave('phone') : handleEdit('phone')}
              className="w-[72px] px-0 py-1 rounded-full bg-[#2461E6] text-white border border-[#2461E6] text-sm font-normal flex items-center justify-center
              hover:bg-blue-50 hover:text-[#2461E6] 
              dark:bg-[#73FBFD] dark:text-black dark:border-[#73FBFD] 
              dark:hover:bg-gray-800 dark:hover:text-[#73FBFD] transition-colors shadow-sm"
            >
              {isEditing.phone ? 'Save' : 'Edit'}
            </button>
          </div>

          {/* Language Field */}
          <div className="flex items-center">
            <label className="w-[120px] text-[16px] font-normal text-black dark:text-white text-left mr-[2px]">
              Language
            </label>
            <div className="w-[385px] relative mr-[28px]">
              <select
                value={formData.language}
                onChange={(e) => handleChange('language', e.target.value)}
                disabled={!isEditing.language}
                className="w-[385px] h-[54px] px-5 border border-gray-300 dark:border-[#2A2A2A] rounded-xl text-base text-gray-900 dark:text-white bg-white dark:bg-[#0B0B0B]
                focus:outline-none focus:border-[#2461E6] dark:focus:border-[#73FBFD] focus:ring-2 focus:ring-[#2461E6]/10 dark:focus:ring-[#73FBFD]/10
                appearance-none transition-all duration-200 disabled:bg-gray-50 dark:disabled:bg-[#111] disabled:text-gray-700 dark:disabled:text-gray-400 mr-[28px]"
              >
                <option>English</option>
                <option>Spanish</option>
                <option>French</option>
                <option>German</option>
                <option>Hindi</option>
                <option>Chinese</option>
                <option>Japanese</option>
              </select>
              <ChevronDown 
                className="absolute right-[20px] top-[50%] translate-y-[-50%] w-[20px] h-[20px] text-black pointer-events-none dark:text-white" 
                strokeWidth={2}
              />
            </div>
            <button
              onClick={() => isEditing.language ? handleSave('language') : handleEdit('language')}
              className="w-[72px] px-0 py-1 rounded-full bg-[#2461E6] text-white border border-[#2461E6] text-sm font-normal flex items-center justify-center
              hover:bg-blue-50 hover:text-[#2461E6] 
              dark:bg-[#73FBFD] dark:text-black dark:border-[#73FBFD] 
              dark:hover:bg-gray-800 dark:hover:text-[#73FBFD] transition-colors shadow-sm"
            >
              {isEditing.language ? 'Save' : 'Edit'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;