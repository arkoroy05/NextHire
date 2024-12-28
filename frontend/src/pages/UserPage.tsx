import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useNavigate } from 'react-router-dom';
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

  const handleChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
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
    if (validateForm()) {
      console.log('Form submitted:', formData);
      const res = await axios.post('http://localhost:3000/user-info', formData);
      localStorage.setItem('userId', res.data.user._id);
      navigate('/form');
    }
  };


  return (
    <div className="container mx-auto p-4 max-w-md">
      <h1 className="text-3xl font-bold mb-6">User Details</h1>
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

        <Button type="submit" className="w-full">
          Submit
        </Button>
      </form>
    </div>
  );
}
