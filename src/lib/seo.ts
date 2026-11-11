import { SITE } from "@/lib/site";

/** Page-level `head` for a route. Pass the page name; the site name is added. */
export const buildPageHead = ({
  title,
  description,
}: {
  title: string;
  description: string;
}) => {
  const fullTitle = `${title} | ${SITE.name}`;

  return {
    meta: [
      { title: fullTitle },
      { name: "description", content: description },
      { property: "og:title", content: fullTitle },
      { property: "og:description", content: description },
    ],
  };
};
