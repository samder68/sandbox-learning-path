export default async function handler(req, res) {
  // Basic health response for GET requests
  if (req.method === "GET") {
    return res.status(200).json({
      ok: true,
      message: "analyze endpoint is alive. Send a POST with { prompt, responses } to use it."
    });
  }

  // Only allow POST for analysis
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  // If you have not wired AI yet, return a helpful placeholder instead of crashing deployments.
  // This keeps Vercel builds green and lets the front end run.
  try {
    const body = req.body || {};
    return res.status(200).json({
      ok: true,
      mode: "placeholder",
      receivedKeys: Object.keys(body),
      message:
        "Serverless function is set up, but AI analysis is not wired yet. Replace this handler with your OpenAI call when ready."
    });
  } catch (err) {
    return res.status(500).json({
      ok: false,
      error: "Server error in /api/analyze",
      details: err?.message || String(err)
    });
  }
}
