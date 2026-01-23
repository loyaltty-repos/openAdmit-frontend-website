import type { SchemaTypeDefinition } from "sanity";
import { authorType } from "./authorType";
import { blockContentType } from "./blockContentType";
import { caseStudyCategoryType } from "./caseStudyCategoryType";
import { caseStudyType } from "./caseStudyType";
import { categoryType } from "./categoryType";
import { postType } from "./postType";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    blockContentType,
    categoryType,
    postType,
    authorType,
    caseStudyType,
    caseStudyCategoryType,
  ],
};
