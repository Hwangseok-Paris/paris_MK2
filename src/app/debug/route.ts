export const dynamic = "force-dynamic";

export async function GET() {
  return new Response(JSON.stringify({ now: Date.now() }), {
    headers: { "content-type": "application/json" },
  });
}
