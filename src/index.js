addEventListener("fetch", (event) => {
  let geo = event.client.geo;

  let respBody = `You are in ${geo.country_name}`;

  event.respondWith(new Response(respBody));
});