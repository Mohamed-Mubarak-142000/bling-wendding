import React, { useState, useMemo } from "react";
import Select from "react-select";
import countryList from "react-select-country-list";
import Image from "next/image"; // Importing Image from next/image

// Define the type for options including flagImageUrl
interface CountryOption {
  label: string;
  value: string;
  flagImageUrl: string; // Add the flagImageUrl to the type
}

// Function to generate the URL for the flag image
const getFlagImageUrl = (countryCode: string) => {
  if (countryCode && countryCode.length === 2) {
    return `https://flagcdn.com/w20/${countryCode.toLowerCase()}.png`; // Use the country code for flag image URL
  }
  return "";
};

function CountrySelector({
  onChange,
}: {
  onChange: (country: string | undefined) => void;
}) {
  const [valueSelected, setValue] = useState<CountryOption | null>(null);

  // Enhance options to include flag images
  const options = useMemo<CountryOption[]>(() => {
    const countries = countryList().getData();
    return countries.map((country) => {
      const flagImageUrl = getFlagImageUrl(country.value);
      return {
        ...country,
        flagImageUrl, // Add the flagImageUrl
      };
    });
  }, []);

  // Handle option selection
  const changeHandler = (selectedOption: CountryOption | null) => {
    setValue(selectedOption);
    onChange(selectedOption?.label);
  };

  // Set default value to Egypt
  useMemo(() => {
    const defaultOption = options.find((option) => option.value === "EG");
    if (defaultOption) {
      setValue(defaultOption); // Set Egypt as the default
    }
  }, [options]);

  return (
    <div>
      <label
        htmlFor="message"
        className="block mb-2 text-sm font-medium text-gray-900"
      >
        Country
      </label>
      <Select
        options={options}
        value={valueSelected}
        onChange={changeHandler}
        placeholder="Select a country"
        name="country"
        styles={{
          control: (provided) => ({
            ...provided,
            height: 42, // Set height for the control
            minHeight: 42, // Ensure consistent height
          }),
          dropdownIndicator: (provided) => ({
            ...provided,
            padding: 4,
            // Adjust padding for the dropdown indicator
          }),
          clearIndicator: (provided) => ({
            ...provided,
            padding: 4, // Adjust padding for the clear indicator
          }),
          input: (provided) => ({
            ...provided,
            margin: 0, // Remove default margin
          }),
          menu: (provided) => ({
            ...provided,
            maxHeight: "300px", // Set dropdown max-height
            overflowY: "auto", // Enable scrolling
          }),
          menuList: (provided) => ({
            ...provided,
            maxHeight: "250px", // Set dropdown menu list max-height
            overflowY: "auto", // Enable scrolling for the dropdown list
          }),
        }}
        formatOptionLabel={({ label, flagImageUrl }) => (
          <div className="flex items-center">
            {/* Using Next.js Image component */}
            <Image
              src={flagImageUrl}
              alt={label}
              width={20} // Define width for image
              height={15} // Define height for image
              style={{ marginRight: 8 }}
            />
            {label}
          </div>
        )}
      />
    </div>
  );
}

export default CountrySelector;
