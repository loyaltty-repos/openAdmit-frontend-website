import type { StructureResolver } from "sanity/structure";

export const structure: StructureResolver = (S) =>
  S.list()
    .title("Blog")
    .items([
      S.documentTypeListItem("post").title("Posts"),
      S.documentTypeListItem("category").title("Categories"),
      S.documentTypeListItem("author").title("Authors"),
      S.documentTypeListItem("caseStudy").title("Case Studies"),
      S.documentTypeListItem("caseStudyCategory").title(
        "Case Study Categories",
      ),
      S.divider(),
      ...S.documentTypeListItems().filter(
        (item) =>
          item.getId() &&
          ![
            "post",
            "category",
            "author",
            "caseStudy",
            "caseStudyCategory",
            // biome-ignore lint/style/noNonNullAssertion: Already checked above
          ].includes(item.getId()!),
      ),
    ]);
