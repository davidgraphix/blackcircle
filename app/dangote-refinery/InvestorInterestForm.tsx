'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import { buttonTap } from '@/lib/motion';

type FormData = {
  fullName: string;
  email: string;
  phone: string;
  investmentRange: string;
  investorType: string;
  subscribeUpdates: boolean;
};

type FormErrors = {
  [key in keyof FormData]?: string;
};

export function InvestorInterestForm() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    fullName: '',
    email: '',
    phone: '',
    investmentRange: '',
    investorType: '',
    subscribeUpdates: true,
  });
  const [errors, setErrors] = useState<FormErrors>({});

  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Full name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!validateEmail(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    }

    if (!formData.investmentRange) {
      newErrors.investmentRange = 'Please select an investment range';
    }

    if (!formData.investorType) {
      newErrors.investorType = 'Please select an investor type';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = e.target;
    const checked = (e.target as HTMLInputElement).checked;

    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));

    if (errors[name as keyof FormData]) {
      setErrors((prev) => ({
        ...prev,
        [name]: undefined,
      }));
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setLoading(true);

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000));

      // Mock storage/submission
      console.log('Form submitted:', formData);

      // Redirect to thank you page
      router.push('/dangote-refinery/thank-you');
    } catch (error) {
      console.error('Form submission error:', error);
      setErrors({ fullName: 'An error occurred. Please try again.' });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white border border-gray-200 rounded-lg shadow-sm p-8">
      <h2 className="text-2xl font-bold text-gray-900 mb-2">Register Your Interest</h2>
      <p className="text-gray-600 text-sm mb-8">Fill in your details to stay informed about the Dangote Refinery listing.</p>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Full Name */}
        <div>
          <label htmlFor="fullName" className="block text-sm font-medium text-gray-900 mb-2">
            Full Name *
          </label>
          <input
            type="text"
            id="fullName"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            placeholder="Enter your full name"
            className={`w-full px-4 py-2.5 border rounded-lg text-sm transition-colors ${
              errors.fullName
                ? 'border-red-300 bg-red-50'
                : 'border-gray-300 bg-white focus:border-blue-500 focus:ring-1 focus:ring-blue-500'
            } focus:outline-none`}
          />
          {errors.fullName && <p className="text-red-600 text-xs mt-1.5">{errors.fullName}</p>}
        </div>

        {/* Email */}
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-900 mb-2">
            Email Address *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your email"
            className={`w-full px-4 py-2.5 border rounded-lg text-sm transition-colors ${
              errors.email
                ? 'border-red-300 bg-red-50'
                : 'border-gray-300 bg-white focus:border-blue-500 focus:ring-1 focus:ring-blue-500'
            } focus:outline-none`}
          />
          {errors.email && <p className="text-red-600 text-xs mt-1.5">{errors.email}</p>}
        </div>

        {/* Phone */}
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-gray-900 mb-2">
            Phone Number *
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Enter your phone number"
            className={`w-full px-4 py-2.5 border rounded-lg text-sm transition-colors ${
              errors.phone
                ? 'border-red-300 bg-red-50'
                : 'border-gray-300 bg-white focus:border-blue-500 focus:ring-1 focus:ring-blue-500'
            } focus:outline-none`}
          />
          {errors.phone && <p className="text-red-600 text-xs mt-1.5">{errors.phone}</p>}
        </div>

        {/* Investment Range */}
        <div>
          <label htmlFor="investmentRange" className="block text-sm font-medium text-gray-900 mb-2">
            Investment Interest Range *
          </label>
          <select
            id="investmentRange"
            name="investmentRange"
            value={formData.investmentRange}
            onChange={handleChange}
            className={`w-full px-4 py-2.5 border rounded-lg text-sm transition-colors ${
              errors.investmentRange
                ? 'border-red-300 bg-red-50'
                : 'border-gray-300 bg-white focus:border-blue-500 focus:ring-1 focus:ring-blue-500'
            } focus:outline-none`}
          >
            <option value="">Select investment range</option>
            <option value="1m-9.99m">₦1m to ₦9.99m</option>
            <option value="10m-24.99m">₦10m to ₦24.99m</option>
            <option value="25m-49.99m">₦25m to ₦49.99m</option>
            <option value="50m-100m">₦50m to ₦100m</option>
            <option value="100m+">₦100m and above</option>
          </select>
          {errors.investmentRange && <p className="text-red-600 text-xs mt-1.5">{errors.investmentRange}</p>}
        </div>

        {/* Investor Type */}
        <div>
          <label htmlFor="investorType" className="block text-sm font-medium text-gray-900 mb-2">
            Investor Type *
          </label>
          <select
            id="investorType"
            name="investorType"
            value={formData.investorType}
            onChange={handleChange}
            className={`w-full px-4 py-2.5 border rounded-lg text-sm transition-colors ${
              errors.investorType
                ? 'border-red-300 bg-red-50'
                : 'border-gray-300 bg-white focus:border-blue-500 focus:ring-1 focus:ring-blue-500'
            } focus:outline-none`}
          >
            <option value="">Select investor type</option>
            <option value="retail">Retail</option>
            <option value="hni">HNI</option>
            <option value="institutional">Institutional</option>
          </select>
          {errors.investorType && <p className="text-red-600 text-xs mt-1.5">{errors.investorType}</p>}
        </div>

        {/* Checkbox */}
        <div className="flex items-start gap-3">
          <input
            type="checkbox"
            id="subscribeUpdates"
            name="subscribeUpdates"
            checked={formData.subscribeUpdates}
            onChange={handleChange}
            className="mt-1 w-4 h-4 border-gray-300 rounded cursor-pointer accent-blue-600"
          />
          <label htmlFor="subscribeUpdates" className="text-sm text-gray-700 cursor-pointer leading-relaxed">
            I would like to receive updates on the Dangote Refinery Offer
          </label>
        </div>

        {/* Submit Button */}
        <motion.button
          type="submit"
          disabled={loading}
          whileTap={buttonTap}
          className="w-full px-6 py-2.5 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed text-sm"
        >
          {loading ? 'Submitting...' : 'Submit Interest'}
        </motion.button>
      </form>
    </div>
  );
}
