import React from "react";

import { useFormik } from "formik";
import * as Yup from "yup";
import useAddData from "@/hooks/useAddData";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

const validationSchema = Yup.object({
  name: Yup.string().required("Name is required"),
  image: Yup.string().required("Image is required"),
  location: Yup.string().required("Location is required"),
  price: Yup.string().required("Price is required"),

  size: Yup.string().required("Size is required"),
  bedrooms: Yup.number()
    .required("Number of Bedrooms is required")
    .min(1, "At least 1 bedroom is required"),
  bathrooms: Yup.number()
    .required("Number of Bathrooms is required")
    .min(1, "At least 1 bathroom is required"),
  featured: Yup.boolean(),
  tag: Yup.string().nullable(),
  collection: Yup.string().required("Collection Name is required"),
});

const AddNewData = () => {
  const { addNewData } = useAddData();

  // Formik form handling
  const formik = useFormik({
    initialValues: {
      name: "",
      image: "",
      location: "",
      price: "",
      size: "",
      bedrooms: "",
      bathrooms: "",
      featured: false,
      tag: "",
      collection: "",
    },
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      const { collection, ...restValues } = values;

      const dataToSubmit = {
        name: restValues.name,
        img: restValues.image,
        location: restValues.location,
        price: restValues.price,
        size: restValues.size,
        bedrooms: parseInt(restValues.bedrooms, 10),
        bathrooms: parseInt(restValues.bathrooms, 10),
        featured: restValues.featured === "true",
        tag: restValues.featured ? restValues.tag || "" : "",
      };

      try {
        if (!collection) {
          throw new Error("Collection name is required");
        }
        await addNewData(collection, dataToSubmit);
      } catch (e) {
        console.error("Error adding document: ", e);
      }

      console.log("Form submitted:", values);
    },
  });

  const myFields = [
    { fieldname: "name", placeholder: "Enter property name" },
    { fieldname: "image", placeholder: "Enter property image" },
    { fieldname: "location", placeholder: "Enter location" },
    { fieldname: "price", placeholder: "Enter price" },
    { fieldname: "size", placeholder: "Enter size" },
    { fieldname: "bedrooms", placeholder: "Enter number of bedrooms" },
    { fieldname: "bathrooms", placeholder: "Enter number of bathrooms" },

    {
      fieldname: "collection",
      placeholder: "Enter Firebase Collection/DB name",
    },
    { fieldname: "featured", placeholder: "Is this a featured property?" },
    { fieldname: "tag", placeholder: "Enter tag" },
  ];

  return (
    <div>
      <h1 className="text-2xl font-semibold mb-4">Add New Data</h1>
      <form onSubmit={formik.handleSubmit} className="space-y-4">
        {myFields.map((field) =>
          field.fieldname === "Featured" ? (
            <div className="flex items-center space-x-2">
              <Checkbox
                key={field.fieldname}
                fieldName={field.fieldname}
                formik={formik}
                id={field.fieldname}
              />
              <label
                htmlFor={field.fieldname}
                className="text-md font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 my-3"
              >
                is this a featured property?
              </label>
            </div>
          ) : (
            <InputField
              key={field.fieldname}
              fieldName={field.fieldname}
              placeholder={field.placeholder}
              formik={formik}
            />
          )
        )}

        <Button
          type="submit"
          className="bg-mainColor hover:bg-secondColor h-12 text-md"
        >
          Add Property
        </Button>
      </form>
    </div>
  );
};

export default AddNewData;

// InputField Component for each field
export const InputField = ({ fieldName, placeholder, formik }) => {
  return (
    <div className="flex flex-col">
      <Label className="my-2 text-md" htmlFor={fieldName}>
        {fieldName.toUpperCase()}
      </Label>
      <div className=" grid grid-cols-1 md:grid-cols-2 gap-6">
        {fieldName == "featured" ? (
          <select
            id={fieldName}
            name={fieldName}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values[fieldName]}
            className="text-md border p-2 rounded"
          >
            <option value={false}>False</option>
            <option value={true}>True</option>
          </select>
        ) : (
          <Input
            id={fieldName}
            name={fieldName}
            placeholder={placeholder}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values[fieldName]}
            className="text-md"
          />
        )}
      </div>
      {formik.touched[fieldName] && formik.errors[fieldName] ? (
        <div className="text-red-500">{formik.errors[fieldName]}</div>
      ) : null}
    </div>
  );
};
