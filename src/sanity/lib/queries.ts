import { defineQuery } from "next-sanity";

export const POSTS_QUERY =
  defineQuery(`*[_type == "post" && defined(slug.current)][0...50] | order(publishedAt desc) {
    _id,
    title,
    slug,
    mainImage,
    publishedAt,
    _updatedAt,
    "categories": categories[]->title,
    author->{name},
}`);

export const RECENT_POSTS_QUERY =
  defineQuery(`*[_type == "post" && defined(slug.current)][0...3] | order(publishedAt desc) {
    _id,
    title,
    slug,
    mainImage,
    publishedAt,
    _updatedAt,
    "categories": categories[]->title,
    author->{name},
  }`);

export const POST_QUERY =
  defineQuery(`*[_type == "post" && slug.current == $slug][0]{
    _id,
    title,
    body,
    mainImage,
    publishedAt,
    _updatedAt,
    "categories": categories[]->title,
    author->{name},
}`);

export const CASE_STUDY_CATEGORIES_QUERY =
  defineQuery(`*[_type == "caseStudyCategory" && defined(slug.current)][0...50] {
    _id,
    title,
    slug,
  }`);

export const CASE_STUDIES_QUERY =
  defineQuery(`*[_type == "caseStudy" && defined(slug.current)][0...50] | order(publishedAt desc) {
    _id,
    title,
    description,
    slug,
    mainImage,
    publishedAt,
    _updatedAt,
    featured,
    "category": category->title,
  }`);

export const FEATURED_CASE_STUDIES_QUERY =
  defineQuery(`*[_type == "caseStudy" && featured == true && defined(slug.current)][0...3] | order(publishedAt desc) {
    _id,
    title,
    description,
    slug,
    mainImage,
    publishedAt,
    _updatedAt,
    featured,
    "category": category->title,
  }`);

export const RECENT_CASE_STUDIES_QUERY =
  defineQuery(`*[_type == "caseStudy" && defined(slug.current)][0...3] | order(publishedAt desc) {
    _id,
    title,
    description,
    slug,
    mainImage,
    publishedAt,
    _updatedAt,
    featured,
    "category": category->title,
  }`);

export const CASE_STUDY_QUERY =
  defineQuery(`*[_type == "caseStudy" && slug.current == $slug][0]{
    _id,
    title,
    description,
    summary,
    body,
    mainImage,
    publishedAt,
    _updatedAt,
    "category": category->title,
    studentQuote,
  }`);
