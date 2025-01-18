import { GoogleGenerativeAI } from '@google/generative-ai';
import { GEMINI_PROMPT } from './constants';

interface GeminiResponse {
  text: string;
  error?: string;
}

export async function getGeminiResponse(
  input: string,
  imageBase64?: string,
): Promise<GeminiResponse> {
  try {
    const apiKey = process.env.NEXT_PUBLIC_VITE_GEMINI_API_KEY;
    console.log("API Key:", apiKey);

    if (!apiKey) {
      throw new Error('Google Cloud API key is not configured');
    }

    const genAI = new GoogleGenerativeAI(apiKey);
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

    let prompt = GEMINI_PROMPT.replace('{input}', input);

    const parts: Array<{ text: string }> = [{ text: prompt }];

    if (imageBase64) {
      // If the imageBase64 is required to be part of the request, you can either pass it as a string
      // or make use of the API's supported format (e.g., URL or external media).
      // Here, we assume the image might need to be sent separately or as a base64 string.
      parts.push({
        text: `Image: [data:image/jpeg;base64,${imageBase64}]`, // Example of how to include base64 image as text.
      });
    }

    // The contents should include a role, which can typically be 'user' or 'system'
    const result = await model.generateContent({
      contents: [
        {
          role: 'user',  // You can set the role as 'user' or 'system' based on your use case
          parts: parts,
        }
      ],
    });

    const response = result.response;
    if (!response.text()) {
      throw new Error('No text response from Gemini API');
    }

    return {
      text: response.text()
    };
  } catch (error) {
    console.error('Error calling Gemini API:', error);
    return {
      text: '',
      error: 'Failed to get response from AI. Please try again.'
    };
  }
}
