// src/components/AddNewData.jsx
import React, { useState } from "react";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { Textarea } from "../ui/textarea";

const AddNewData = () => {
  const [formData, setFormData] = useState({ name: "", description: "" });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your Firebase addData logic here
    console.log("Form submitted:", formData);
  };

  return (
    <div>
      <h1 className="text-2xl font-semibold mb-4">Add New Data</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="flex flex-col">
          <Label htmlFor="name">Name</Label>
          <Input
            id="name"
            name="name"
            placeholder="Enter name"
            value={formData.name}
            onChange={handleInputChange}
          />
        </div>

        <div className="flex flex-col">
          <Label htmlFor="description">Description</Label>
          <Textarea
            id="description"
            name="description"
            placeholder="Enter description"
            value={formData.description}
            onChange={handleInputChange}
          />
        </div>

        <Button type="submit">Submit</Button>
      </form>
    </div>
  );
};

export default AddNewData;
