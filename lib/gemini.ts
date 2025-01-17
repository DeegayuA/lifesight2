import { GoogleGenerativeAI } from '@google/generative-ai';
    import { GEMINI_PROMPT } from './constants';

    interface GeminiResponse {
      text: string;
      error?: string;
    }

    export async function getGeminiResponse(
      input: string,
      imageBase64?: string
    ): Promise<GeminiResponse> {
      try {
        const apiKey = process.env.VITE_GEMINI_API_KEY;
        if (!apiKey) {
          throw new Error('Google Cloud API key is not configured');
        }

        const genAI = new GoogleGenerativeAI(apiKey);
        const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash-exp" });

        const prompt = GEMINI_PROMPT.replace('{input}', input);

        const parts = [{ text: prompt }];

        if (imageBase64) {
          parts.push({
            inlineData: {
              mimeType: "image/jpeg",
              data: imageBase64
            }
          });
        }

        const result = await model.generateContent({
          contents: [{ parts }],
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
