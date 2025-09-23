import OpenAI from "openai";

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY! });

export async function generateSAPContent() {
  const prompt = `Generate authentic, specific content for SAP enterprise software for a B2B technology user list website.

Return detailed information in JSON format:
{
  "heroTitle": "SAP Enterprise Users",
  "heroDescription": "Connect with organizations implementing SAP software",
  "companyCount": 368700,
  "metrics": [
    {"value": "368,700", "label": "SAP Installations"},
    {"value": "$12B", "label": "Annual SAP Investment"},
    {"value": "440K+", "label": "SAP Professionals"}
  ],
  "categories": [
    {
      "name": "Category name",
      "description": "What this category does",
      "features": ["Feature 1", "Feature 2", "Feature 3", "Feature 4"],
      "industries": ["Industry 1", "Industry 2", "Industry 3", "Industry 4"],
      "decisionMakers": ["Job Title 1", "Job Title 2", "Job Title 3", "Job Title 4"],
      "challenges": ["Challenge 1", "Challenge 2", "Challenge 3", "Challenge 4", "Challenge 5", "Challenge 6"]
    }
  ]
}

Generate 6 distinct SAP implementation categories with authentic content reflecting real-world SAP usage patterns, specific industries, actual job titles of SAP decision makers, and genuine implementation challenges organizations face.`;

  try {
    const response = await openai.chat.completions.create({
      model: "gpt-4o",
      messages: [
        {
          role: "system",
          content: "You are an expert in SAP enterprise software and B2B technology markets. Generate authentic content based on real SAP implementations and business contexts."
        },
        {
          role: "user",
          content: prompt
        }
      ],
      response_format: { type: "json_object" },
      temperature: 0.7
    });

    return JSON.parse(response.choices[0].message.content || '{}');
  } catch (error) {
    console.error("Error generating SAP content:", error);
    throw error;
  }
}

console.log("Generating SAP content...");
generateSAPContent().then(content => {
  console.log(JSON.stringify(content, null, 2));
}).catch(console.error);