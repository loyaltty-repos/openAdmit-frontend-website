"use server";

import { sanityFetch } from "@/sanity/lib/live";
import {
  CASE_STUDIES_QUERY,
  CASE_STUDY_CATEGORIES_QUERY,
  FEATURED_CASE_STUDIES_QUERY,
  POSTS_QUERY,
  RECENT_CASE_STUDIES_QUERY,
  RECENT_POSTS_QUERY,
} from "@/sanity/lib/queries";

export async function getPosts() {
  return await sanityFetch({
    query: POSTS_QUERY,
  });
}

export async function getRecentPosts() {
  return await sanityFetch({
    query: RECENT_POSTS_QUERY,
  });
}

export async function getRecentCaseStudies() {
  return await sanityFetch({
    query: RECENT_CASE_STUDIES_QUERY,
  });
}

export async function getCaseStudyCategories() {
  return await sanityFetch({
    query: CASE_STUDY_CATEGORIES_QUERY,
  });
}

export async function getCaseStudies() {
  return await sanityFetch({
    query: CASE_STUDIES_QUERY,
  });
}

export async function getFeaturedCaseStudies() {
  return await sanityFetch({
    query: FEATURED_CASE_STUDIES_QUERY,
  });
}
