import { defineField, defineType } from "sanity";

export const review = defineType({
  name: "review",
  title: "Review",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "Customer Name",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "initials",
      title: "Initials",
      type: "string",
      description: "Two-letter initials for avatar (e.g. 'MR')",
    }),
    defineField({
      name: "text",
      title: "Review Text",
      type: "text",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "rating",
      title: "Rating (1-5)",
      type: "number",
      validation: (rule) => rule.required().min(1).max(5),
      initialValue: 5,
    }),
    defineField({
      name: "date",
      title: "Date",
      type: "string",
      description: "Display date (e.g. 'March 2026')",
    }),
    defineField({
      name: "location",
      title: "Location",
      type: "string",
      description: "Customer city (e.g. 'Daytona Beach, FL')",
    }),
  ],
  preview: {
    select: { title: "name", subtitle: "location" },
  },
});
