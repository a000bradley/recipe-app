import React, { useState } from "react";

interface ToggleProps {
  label: string;
  onChange: (newValue: boolean) => void;
}

const Toggle = ({ label, onChange }: ToggleProps) => {
  const [isChecked, setIsChecked] = useState(false);

  const handleToggleChange = () => {
    setIsChecked(!isChecked);
    onChange && onChange(!isChecked);
  };

  return (
    <div
      className="flex items-center cursor-pointer "
      onClick={handleToggleChange}
    >
      <div className="relative">
        <input
          type="checkbox"
          id="toggle"
          className="hidden"
          checked={isChecked}
          onChange={handleToggleChange}
        />
        <div
          className={`w-10 h-6 bg-gray-300 rounded-full shadow-inner transition duration-300 ease-in-out ${
            isChecked ? "bg-blue-500" : ""
          }`}
          onClick={handleToggleChange}
        />
        <div
          className={`absolute top-1/2 left-1 -translate-y-1/2 w-4 h-4 bg-white rounded-full shadow transition duration-300 ease-in-out ${
            isChecked ? "translate-x-full" : ""
          }`}
        />
      </div>
      {label && (
        <label htmlFor="toggle" className="pl-2 text-gray-700">
          {label}
        </label>
      )}
    </div>
  );
};

export default Toggle;
