export const SUPPORTED_LANGUAGES = [
  { code: 'en', name: 'English' },
  { code: 'es', name: 'Español' },
  { code: 'fr', name: 'Français' },
  { code: 'de', name: 'Deutsch' },
  { code: 'it', name: 'Italiano' },
  { code: 'pt', name: 'Português' },
  { code: 'ru', name: 'Русский' },
  { code: 'zh', name: 'Chinese' },
  { code: 'ja', name: 'Japanese' },
  { code: 'ko', name: 'Korean' },
] as const;

export const GEMINI_PROMPT = `You are an AI assistant helping a person do their work independently. Based on what you see through the camera and hear from the user input, provide clear, step-by-step guidance. The user asks: "{input}". Respond in a helpful, friendly conversational tone. Focus on practical solutions and clear instructions. DO NOT LIE or make assumptions about capabilities you don't have.`;

export const THEME_COLORS = {
  primary: {
    light: 'hsl(230, 85%, 60%)',
    dark: 'hsl(230, 85%, 70%)',
  },
  secondary: {
    light: 'hsl(280, 75%, 60%)',
    dark: 'hsl(280, 75%, 70%)',
  },
  accent: {
    light: 'hsl(330, 65%, 60%)',
    dark: 'hsl(330, 65%, 70%)',
  },
};
