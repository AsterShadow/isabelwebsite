import { client } from "@/lib/sanity";

async function getDataPainting(slug) {
  const query = `*[_type == "painting" && slug.current == "${slug}"]{
    name,
    slug,
    "main": imageMain.asset->url,
    images,
    price,
    createdAt,
    dimensions,
    status,
    medium,
    support,
    size
  }`;
  const data = await client.fetch(query);
  return data;
}
async function getPaintings() {
  const query = `*[_type == "painting"]{
    name,
    slug,
    "main": imageMain.asset->url,
    images,
    price,
    createdAt,
    dimensions,
    status,
    medium,
    support,
    size
  }`;
  const data = await client.fetch(query);
  return data;
}
export { getPaintings, getDataPainting };