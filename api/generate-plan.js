import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { profile, prompt } = req.body;

    // Check if API key is actually loading from Vercel settings
    if (!process.env.OPENAI_API_KEY) {
       return res.status(500).json({ error: 'API Key is missing from Vercel settings' });
    }

    const response = await openai.chat.completions.create({
      model: "gpt-4o-mini", // Using mini for reliability in testing
      messages: [
        { role: "system", content: prompt },
        { role: "user", content: `Analyze this user profile: ${profile}` }
      ],
    });

    return res.status(200).json({ text: response.choices[0].message.content });

  } catch (error) {
    console.error('OpenAI Error:', error);
    // This sends the SPECIFIC error back to your website instead of a generic 500
    return res.status(500).json({ 
      error: 'OpenAI API Failed', 
      details: error.message 
    });
  }
}
