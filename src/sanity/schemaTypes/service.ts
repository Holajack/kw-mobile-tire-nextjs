import { defineField, defineType } from "sanity";

export const service = defineType({
  name: "service",
  title: "Service",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "shortTitle",
      title: "Short Title",
      type: "string",
      description: "Short version for cards (e.g. 'Commercial Trucks')",
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "title", maxLength: 96 },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "text",
      rows: 2,
    }),
    defineField({
      name: "icon",
      title: "Icon Name",
      type: "string",
      description: "Lucide icon name: Truck, Container, Caravan, or HardHat",
      options: {
        list: [
          { title: "Truck", value: "Truck" },
          { title: "Container", value: "Container" },
          { title: "Caravan", value: "Caravan" },
          { title: "HardHat", value: "HardHat" },
        ],
      },
    }),
    defineField({
      name: "features",
      title: "Features",
      type: "array",
      of: [{ type: "string" }],
    }),
    defineField({
      name: "details",
      title: "Details",
      type: "text",
      description: "Longer description for the service detail page",
    }),
    defineField({
      name: "order",
      title: "Display Order",
      type: "number",
    }),
  ],
  orderings: [
    { title: "Display Order", name: "orderAsc", by: [{ field: "order", direction: "asc" }] },
  ],
  preview: {
    select: { title: "shortTitle", subtitle: "description" },
  },
});
