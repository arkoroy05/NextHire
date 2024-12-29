import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useNavigate } from 'react-router-dom';
import { TextHoverEffect } from "@/components/ui/text-hover-effect";
import axios from 'axios';

const userInitialData = {
  name: '',
  phoneNumber: '',
  email: '',
  experience: '', // storing as string for easier input handling
};

export default function UserForm() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState(userInitialData);
  const [errors, setErrors] = useState({
    name: '',
    phoneNumber: '',
    email: '',
    experience: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: '' }));
    }
  };

  const validateForm = () => {
    let isValid = true;
    const newErrors = {
      name: '',
      phoneNumber: '',
      email: '',
      experience: '',
    };

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required to proceed';
      isValid = false;
    }

    const phoneRegex = /^[0-9]{10}$/;
    if (!phoneRegex.test(formData.phoneNumber)) {
      newErrors.phoneNumber = 'Enter a valid 10-digit phone number';
      isValid = false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      newErrors.email = 'Enter a valid email address';
      isValid = false;
    }

    const experience = Number(formData.experience);
    if (!formData.experience.trim() || isNaN(experience) || experience < 0) {
      newErrors.experience = 'Enter a valid years of experience';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm() || isSubmitting) return;

    try {
      setIsSubmitting(true);
      
      // Convert experience to number before sending
      const submitData = {
        ...formData,
        experience: Number(formData.experience)
      };

      const response = await axios.post('http://localhost:3000/user-info', submitData);
      
      if (response.data.userId) {
        // Store the userId from the updated API response
        localStorage.setItem('userId', response.data.userId);
        navigate('/form');
      } else if (response.data.user?._id) {
        // Fallback for backward compatibility
        localStorage.setItem('userId', response.data.user._id);
        navigate('/form');
      } else {
        throw new Error('No valid user ID received from server');
      }
    } catch (error) {
      console.error('Submission error:', error);
      // Handle specific error cases
      if (error.response?.data?.error) {
        // If it's a validation error from the server
        setErrors(prev => ({
          ...prev,
          submit: error.response.data.error
        }));
      } else {
        // Generic error handling
        setErrors(prev => ({
          ...prev,
          submit: 'Failed to submit form. Please try again.'
        }));
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="flex ih-full justify-center">
      <div className="absolute container mx-auto p-4 max-w-md border bg-neutral-900/40 backdrop-blur-[0.4rem] z-50 border-lime-500/50 rounded-lg m-5">
        <h1 className="text-4xl font-bold mb-6 text-lime-500">User Details</h1>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <Label htmlFor="name">Name</Label>
            <Input
              id="name"
              value={formData.name}
              onChange={(e) => handleChange('name', e.target.value)}
              placeholder="Enter your name"
            />
            {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
          </div>
          <div>
            <Label htmlFor="phoneNumber">Phone Number</Label>
            <Input
              id="phoneNumber"
              value={formData.phoneNumber}
              onChange={(e) => handleChange('phoneNumber', e.target.value)}
              placeholder="Enter your 10-digit phone number"
            />
            {errors.phoneNumber && <p className="text-red-500 text-sm">{errors.phoneNumber}</p>}
          </div>
          <div>
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              value={formData.email}
              onChange={(e) => handleChange('email', e.target.value)}
              placeholder="Enter your email"
            />
            {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
          </div>
          <div>
            <Label htmlFor="experience">Experience (in years)</Label>
            <Input
              id="experience"
              value={formData.experience}
              onChange={(e) => handleChange('experience', e.target.value)}
              placeholder="Enter your years of experience"
            />
            {errors.experience && <p className="text-red-500 text-sm">{errors.experience}</p>}
          </div>
          {errors.submit && <p className="text-red-500 text-sm mt-2">{errors.submit}</p>}
          <Button type="submit" className="w-full bg-lime-300" disabled={isSubmitting}>
            {isSubmitting ? 'Submitting...' : 'Submit'}
          </Button>
        </form>
      </div>
                    <div className="absolute bottom-0 left-0 z-10 h-full w-full origin-center opacity-70">
                    <TextHoverEffect text="USER" />
                  </div>

    </div>
  );
}