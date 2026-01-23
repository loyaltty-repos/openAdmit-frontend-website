import { TagIcon } from "@sanity/icons";
import { defineField, defineType } from "sanity";

export const caseStudyCategoryType = defineType({
  name: "caseStudyCategory",
  title: "Case Study Category",
  type: "document",
  icon: TagIcon,
  fields: [
    defineField({
      name: "title",
      type: "string",
    }),
    defineField({
      name: "slug",
      type: "slug",
      options: {
        source: "title",
      },
    }),
  ],
});
