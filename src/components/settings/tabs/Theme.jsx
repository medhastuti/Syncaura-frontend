import { useState, useEffect } from "react";
import { RefreshCw } from "lucide-react";

const Theme = () => {
  const [theme, setTheme] = useState("Light");
  const [language, setLanguage] = useState("English");
  const [font, setFont] = useState("Arial");
  const [fontSize, setFontSize] = useState("Medium");
  const [zoom, setZoom] = useState(100);
  const [isSyncingCalendar, setIsSyncingCalendar] = useState(false);
  const [isSyncingContact, setIsSyncingContact] = useState(false);

  

  // Apply theme to document
  useEffect(() => {
    if (theme === "Dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  // Apply font to document
  useEffect(() => {
    document.documentElement.style.fontFamily = font;
  }, [font]);

  // Apply font size to document
  useEffect(() => {
    const fontSizeMap = {
      Small: "14px",
      Medium: "16px",
      Large: "18px",
    };
    document.documentElement.style.fontSize = fontSizeMap[fontSize];
  }, [fontSize]);

  // Apply zoom to document
  useEffect(() => {
    document.body.style.zoom = `${zoom}%`;
  }, [zoom]);

  const handleThemeChange = (e) => {
    setTheme(e.target.value);
  };

  const handleLanguageChange = (e) => {
    setLanguage(e.target.value);
    // In a real app, you would trigger i18n language change here
    console.log("Language changed to:", e.target.value);
  };

  const handleFontChange = (e) => {
    setFont(e.target.value);
  };

  const handleFontSizeChange = (e) => {
    setFontSize(e.target.value);
  };

  const handleZoomDecrease = () => {
    if (zoom > 50) {
      setZoom(zoom - 10);
    }
  };

  const handleZoomIncrease = () => {
    if (zoom < 200) {
      setZoom(zoom + 10);
    }
  };

  const handleSyncCalendar = () => {
    setIsSyncingCalendar(true);
    // Simulate sync process
    setTimeout(() => {
      setIsSyncingCalendar(false);
      alert("Calendar synced successfully!");
    }, 1500);
  };

  const handleSyncContact = () => {
    setIsSyncingContact(true);
    // Simulate sync process
    setTimeout(() => {
      setIsSyncingContact(false);
      alert("Contacts synced successfully!");
    }, 1500);
  };

  return (
    <div className="w-full flex justify-center">
      <div className="w-full max-w-[650px]">
        {/* Display Section */}
        <div className="mb-10">
          <h2 className="text-xl font-semibold text-black dark:text-white mb-5">
            Display
          </h2>

          <SettingRow label="Theme" value={theme}>
            <select
              value={theme}
              onChange={handleThemeChange}
              className="w-full h-full px-4 py-3 rounded-xl border-0 bg-transparent
              focus:outline-none cursor-pointer opacity-0 absolute inset-0 z-10
              [&>option]:text-black [&>option]:bg-white dark:[&>option]:text-white dark:[&>option]:bg-gray-800"
            >
              <option value="Light">Light</option>
              <option value="Dark">Dark</option>
              <option value="System">System</option>
            </select>
          </SettingRow>
        </div>

        {/* General Section */}
        <div className="mb-10">
          <h2 className="text-xl font-semibold text-black dark:text-white mb-5">
            General
          </h2>

          <div className="space-y-4">
            <SettingRow label="language" value={language}>
              <select
                value={language}
                onChange={handleLanguageChange}
                className="w-full h-full px-4 py-3 rounded-xl border-0 bg-transparent
                focus:outline-none cursor-pointer opacity-0 absolute inset-0 z-10
                [&>option]:text-black [&>option]:bg-white dark:[&>option]:text-white dark:[&>option]:bg-gray-800"
              >
                <option value="English">English</option>
                <option value="Spanish">Spanish</option>
                <option value="French">French</option>
                <option value="German">German</option>
                <option value="Chinese">Chinese</option>
                <option value="Japanese">Japanese</option>
                <option value="Hindi">Hindi</option>
              </select>
            </SettingRow>

            <SettingRow label="Font" value={font}>
              <select
                value={font}
                onChange={handleFontChange}
                className="w-full h-full px-4 py-3 rounded-xl border-0 bg-transparent
                focus:outline-none cursor-pointer opacity-0 absolute inset-0 z-10
                [&>option]:text-black [&>option]:bg-white dark:[&>option]:text-white dark:[&>option]:bg-gray-800"
              >
                <option value="Inter">Inter</option>
                <option value="Roboto">Roboto</option>
                <option value="Arial">Arial</option>
                <option value="Helvetica">Helvetica</option>
                <option value="'Times New Roman'">Times New Roman</option>
                <option value="Georgia">Georgia</option>
                <option value="'Courier New'">Courier New</option>
              </select>
            </SettingRow>

            <SettingRow label="Font size" value={fontSize}>
              <select
                value={fontSize}
                onChange={handleFontSizeChange}
                className="w-full h-full px-4 py-3 rounded-xl border-0 bg-transparent
                focus:outline-none cursor-pointer opacity-0 absolute inset-0 z-10
                [&>option]:text-black [&>option]:bg-white dark:[&>option]:text-white dark:[&>option]:bg-gray-800"
              >
                <option value="Small">Small</option>
                <option value="Medium">Medium</option>
                <option value="Large">Large</option>
                <option value="Extra Large">Extra Large</option>
              </select>
            </SettingRow>

            <SettingRow label="page zoom" value={`${zoom}%`}>
              <button
                onClick={handleZoomDecrease}
                disabled={zoom <= 50}
                className="text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white
                text-lg transition disabled:opacity-30 disabled:cursor-not-allowed font-normal"
              >
                -
              </button>

              <span className="text-black dark:text-white font-normal text-[15px]">
                {zoom}%
              </span>

              <button
                onClick={handleZoomIncrease}
                disabled={zoom >= 200}
                className="text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white
                text-lg transition disabled:opacity-30 disabled:cursor-not-allowed font-normal"
              >
                +
              </button>
            </SettingRow>
          </div>
        </div>

        {/* Syncing Option Section */}
        <div>
          <h2 className="text-xl font-semibold text-black dark:text-white mb-5">
            Syncing option
          </h2>

          <div className="space-y-4 mb-10">
            <SyncButton 
              label="Sync Calendar" 
              onClick={handleSyncCalendar}
              isSyncing={isSyncingCalendar}
            />
            <SyncButton 
              label="Sync Contact" 
              onClick={handleSyncContact}
              isSyncing={isSyncingContact}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

// Reusable Setting Row Component with proper layout
const SettingRow = ({ label, value, children }) => {
  // Check if children is a select element
  const isSelect = children?.type === 'select';
  
  if (isSelect) {
    // For select dropdowns, render the actual select with custom styling
    return (
      <div className="relative">
        <div className="flex items-center justify-between w-full px-5 py-3 rounded-xl border border-gray-200 bg-[#F9FAFB]
        dark:bg-[#1A1A1A] dark:border-gray-700 pointer-events-none">
          <label className="text-[15px] text-black dark:text-white font-normal">
            {label}
          </label>
          <div className="flex items-center gap-2">
            <span className="text-[15px] text-black dark:text-white font-normal">
              {value}
            </span>
            <svg 
              className="w-3 h-3 text-gray-500 dark:text-gray-400" 
              fill="currentColor" 
              viewBox="0 0 20 20"
            >
              <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </div>
        </div>
        {/* Overlay select that's actually clickable */}
        <div className="absolute inset-0">
          {children}
        </div>
      </div>
    );
  } else {
    // For custom components like the zoom control, wrap in styled container
    return (
      <div className="flex items-center justify-between w-full px-5 py-3 rounded-xl border border-gray-200 bg-[#F9FAFB]
      dark:bg-[#1A1A1A] dark:border-gray-700">
        <label className="text-[15px] text-black dark:text-white font-normal">
          {label}
        </label>
        <div className="flex items-center gap-4">
          {children}
        </div>
      </div>
    );
  }
};

// Sync Button Component with animation
const SyncButton = ({ label, onClick, isSyncing }) => (
  <button
    onClick={onClick}
    disabled={isSyncing}
    className="flex items-center justify-between w-full px-5 py-3 rounded-xl 
    border border-gray-200 bg-[#F9FAFB] text-black
    dark:bg-[#1A1A1A] dark:border-gray-700 dark:text-white
    hover:bg-gray-100 dark:hover:bg-gray-900
    focus:outline-none focus:border-[#2461E6] dark:focus:border-[#73FBFD]
    transition disabled:opacity-50 disabled:cursor-not-allowed"
  >
    <span className="text-[15px] font-normal">{label}</span>
    <RefreshCw 
      size={18} 
      className={`text-gray-500 dark:text-gray-400 transition-transform ${
        isSyncing ? "animate-spin" : ""
      }`} 
    />
  </button>
);

export default Theme;