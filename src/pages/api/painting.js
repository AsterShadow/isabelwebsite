import { client } from "@/lib/sanity";

async function getDataPainting(slug) {
  const query = `*[_type == "painting" && slug =="${slug}"]{}`;
  const data = await client.fetch(query);
  return data;
}
async function getPaintings() {
  const query = `*[_type == "painting"]{}`;
  const data = await client.fetch(query);
  return data;
}

export default {getPaintings, getDataPainting};