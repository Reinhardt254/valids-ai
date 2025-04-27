import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState, useEffect } from "react";
import { useDropzone } from "react-dropzone";
import Select, { SingleValue } from "react-select";
import { Country, State, City } from "country-state-city";

type OptionType = {
  value: string;
  label: string;
};

// Sample occupations - in a real app, this would come from an API or database
const occupations = [
  { value: "developer", label: "Software Developer" },
  { value: "designer", label: "Designer" },
  { value: "manager", label: "Manager" },
  { value: "marketing", label: "Marketing Professional" },
  { value: "sales", label: "Sales Professional" },
  { value: "student", label: "Student" },
  { value: "freelancer", label: "Freelancer" },
  { value: "other", label: "Other" },
];

const userTypes = [
  { value: "company", label: "Company" },
  { value: "individual", label: "Individual" },
];

const completeProfileSchema = z.object({
  userType: z.string().min(1, "User type is required"),
  bio: z.string().min(1, "Bio is required"),
  username: z.string().min(1, "Username is required"),
  avatarUrl: z.string().min(1, "Avatar URL is required"),
  company: z.string().optional(),
  website: z.string().optional(),
  occupation: z.string().optional(),
  position: z.string().min(1, "Position is required"),
  country: z.string().min(1, "Country is required"),
  city: z.string().min(1, "City is required"),
  state: z.string().min(1, "State is required"),
  zip: z.string().min(1, "Zip is required"),
  phone: z.string().min(1, "Phone is required"),
  email: z.string().email("Invalid email address"),
});

type CompleteProfileFormData = z.infer<typeof completeProfileSchema>;

export function CompleteProfile() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [selectedCountry, setSelectedCountry] = useState<string | null>(null);
  const [selectedState, setSelectedState] = useState<string | null>(null);
  const [avatarPreview, setAvatarPreview] = useState<string | null>(null);
  const [countries, setCountries] = useState<OptionType[]>([]);
  const [states, setStates] = useState<OptionType[]>([]);
  const [cities, setCities] = useState<OptionType[]>([]);

  useEffect(() => {
    // Load all countries on component mount
    const allCountries = Country.getAllCountries();
    const countryOptions = allCountries.map((country) => ({
      value: country.isoCode,
      label: country.name,
    }));
    setCountries(countryOptions);
  }, []);

  useEffect(() => {
    if (selectedCountry) {
      // Load states for selected country
      const countryStates = State.getStatesOfCountry(selectedCountry);
      const stateOptions = countryStates.map((state) => ({
        value: state.isoCode,
        label: state.name,
      }));
      setStates(stateOptions);
      setSelectedState(null);
      setCities([]);
    }
  }, [selectedCountry]);

  useEffect(() => {
    if (selectedCountry && selectedState) {
      // Load cities for selected state
      const stateCities = City.getCitiesOfState(selectedCountry, selectedState);
      const cityOptions = stateCities.map((city) => ({
        value: city.name,
        label: city.name,
      }));
      setCities(cityOptions);
    }
  }, [selectedCountry, selectedState]);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    accept: {
      "image/*": [".jpeg", ".jpg", ".png", ".gif"],
    },
    maxFiles: 1,
    onDrop: (acceptedFiles) => {
      const file = acceptedFiles[0];
      if (file) {
        const previewUrl = URL.createObjectURL(file);
        setAvatarPreview(previewUrl);
      }
    },
  });

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm<CompleteProfileFormData>({
    resolver: zodResolver(completeProfileSchema),
  });

  const userType = watch("userType");

  const handleUserTypeChange = (selectedOption: SingleValue<OptionType>) => {
    setValue("userType", selectedOption?.value || "");
    // Reset conditional fields
    setValue("company", "");
    setValue("website", "");
    setValue("occupation", "");
  };

  const handleCountryChange = (selectedOption: SingleValue<OptionType>) => {
    setSelectedCountry(selectedOption?.value || null);
    setValue("country", selectedOption?.value || "");
    setValue("state", "");
    setValue("city", "");
  };

  const handleStateChange = (selectedOption: SingleValue<OptionType>) => {
    setSelectedState(selectedOption?.value || null);
    setValue("state", selectedOption?.value || "");
    setValue("city", "");
  };

  const handleCityChange = (selectedOption: SingleValue<OptionType>) => {
    setValue("city", selectedOption?.value || "");
  };

  const onSubmit = async (data: CompleteProfileFormData) => {
    setIsLoading(true);
    setError("");

    try {
      // Handle profile update logic here
      console.log("Profile update data:", data);
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000));
      alert("Profile updated successfully!");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to update profile");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="max-w-xl w-full space-y-8 shadow-md rounded-md bg-gray-50 py-10 px-2 pb-12 sm:px-6 lg:px-10 mt-10 mb-32">
        <div>
          <h1 className="mt-2 text-center text-2xl font-extrabold text-gray-900">
            Complete <span className="text-blue-500">Profile</span>
          </h1>
        </div>

        {error && (
          <div className="rounded-md bg-red-50 p-4">
            <div className="text-sm text-red-700">{error}</div>
          </div>
        )}

        <form className="mt-8 space-y-6" onSubmit={handleSubmit(onSubmit)}>
          <div className="rounded-md -space-y-px flex flex-col gap-6">
            {/* Avatar Upload */}
            <div className="flex flex-col items-center">
              <div
                {...getRootProps()}
                className={`w-36 h-36 border-2 border-dashed rounded-full flex items-center justify-center cursor-pointer ${
                  isDragActive ? "border-blue-500" : "border-gray-300"
                }`}
              >
                <input {...getInputProps()} />
                {avatarPreview ? (
                  <img
                    src={avatarPreview}
                    alt="Avatar preview"
                    className="w-full h-full rounded-full object-cover"
                  />
                ) : (
                  <p className="text-gray-500 text-center text-sm">
                    {isDragActive
                      ? "Drop the image here"
                      : "Drag & drop or click to upload"}
                  </p>
                )}
              </div>
            </div>

            {/* -------------username ------------- */}
            <div>
              <label
                htmlFor="username"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Username
              </label>
              <input
                id="username"
                type="text"
                {...register("username")}
                className="appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Username"
              />
              {errors.username && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.username.message}
                </p>
              )}
            </div>

            {/* -------------phone ------------- */}
            <div>
              <label
                htmlFor="phone"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Phone
              </label>
              <input
                id="phone"
                type="text"
                {...register("phone")}
                className="appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Phone"
              />
              {errors.phone && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.phone.message}
                </p>
              )}
            </div>

            {/* User Type Selection */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                I am a
              </label>
              <Select
                options={userTypes}
                onChange={handleUserTypeChange}
                className="basic-single"
                classNamePrefix="select"
                placeholder="Select user type"
              />
              {errors.userType && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.userType.message}
                </p>
              )}
            </div>

            {/* Company Fields - Only shown for company type */}
            {userType === "company" && (
              <>
                <div>
                  <label
                    htmlFor="company"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Company Name
                  </label>
                  <input
                    id="company"
                    type="text"
                    {...register("company")}
                    className="appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                    placeholder="Company Name"
                  />
                  {errors.company && (
                    <p className="text-red-500 text-xs mt-1">
                      {errors.company.message}
                    </p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="website"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Company Website
                  </label>
                  <input
                    id="website"
                    type="text"
                    {...register("website")}
                    className="appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                    placeholder="Company Website"
                  />
                  {errors.website && (
                    <p className="text-red-500 text-xs mt-1">
                      {errors.website.message}
                    </p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="occupation"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Occupation
                  </label>
                  <Select
                    options={occupations}
                    onChange={(selectedOption) =>
                      setValue("occupation", selectedOption?.value || "")
                    }
                    className="basic-single"
                    classNamePrefix="select"
                    placeholder="Select your occupation"
                  />
                  {errors.occupation && (
                    <p className="text-red-500 text-xs mt-1">
                      {errors.occupation.message}
                    </p>
                  )}
                </div>
              </>
            )}

            {/* Individual Fields - Only shown for individual type */}
            {userType === "individual" && (
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Occupation
                </label>
                <Select
                  options={occupations}
                  onChange={(selectedOption) =>
                    setValue("occupation", selectedOption?.value || "")
                  }
                  className="basic-single"
                  classNamePrefix="select"
                  placeholder="Select your occupation"
                />
                {errors.occupation && (
                  <p className="text-red-500 text-xs mt-1">
                    {errors.occupation.message}
                  </p>
                )}
              </div>
            )}

            {/* Country Dropdown */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Country
              </label>
              <Select
                options={countries}
                onChange={handleCountryChange}
                className="basic-single"
                classNamePrefix="select"
                placeholder="Select a country"
              />
              {errors.country && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.country.message}
                </p>
              )}
            </div>

            {/* State Dropdown */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                State
              </label>
              <Select
                options={states}
                onChange={handleStateChange}
                className="basic-single"
                classNamePrefix="select"
                placeholder="Select a state"
                isDisabled={!selectedCountry}
              />
              {errors.state && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.state.message}
                </p>
              )}
            </div>

            {/* City Dropdown */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                City
              </label>
              <Select
                options={cities}
                onChange={handleCityChange}
                className="basic-single"
                classNamePrefix="select"
                placeholder="Select a city"
                isDisabled={!selectedState}
              />
              {errors.city && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.city.message}
                </p>
              )}
            </div>
          </div>

          <div>
            <button
              type="submit"
              disabled={isLoading}
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              {isLoading ? "Completing..." : "Complete Profile"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
