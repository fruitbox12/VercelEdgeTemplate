export const config = {runtime: "edge"}

export default async ({body, query, cookies, headers}) => new Response(JSON.stringify({
    body,
    query,
    cookies,
    headers,
    env: process.env,
    versions: process.versions
}))
