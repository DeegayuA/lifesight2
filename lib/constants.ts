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
          'palette-1-primary': '#0078D4',
          'palette-1-secondary': '#FFD700',
          'palette-1-background-light': '#FFFFFF',
          'palette-1-background-dark': '#1A1A1A',
          'palette-1-text-light': '#000000',
          'palette-1-text-dark': '#FFFFFF',
          'palette-2-primary': '#228B22',
          'palette-2-secondary': '#8FBC8F',
          'palette-2-background-light': '#F0F8FF',
          'palette-2-background-dark': '#2F4F4F',
          'palette-2-text-light': '#2F4F4F',
          'palette-2-text-dark': '#F0F8FF',
          'palette-3-primary': '#D64D3D',
          'palette-3-secondary': '#FF8C00',
          'palette-3-background-light': '#F5F5F5',
          'palette-3-background-dark': '#3C3C3C',
          'palette-3-text-light': '#333333',
          'palette-3-text-dark': '#FF8C00',
          'palette-4-primary': '#2A9D8F',
          'palette-4-secondary': '#264653',
          'palette-4-background-light': '#E0F7FA',
          'palette-4-background-dark': '#1A3D46',
          'palette-4-text-light': '#1A1A1A',
          'palette-4-text-dark': '#E0F7FA',
          'palette-5-primary': '#6A0DAD',
          'palette-5-secondary': '#FFD700',
          'palette-5-background-light': '#F9F9F9',
          'palette-5-background-dark': '#2D1B4D',
          'palette-5-text-light': '#4B0082',
          'palette-5-text-dark': '#FFD700',
          'palette-6-primary': '#A52A2A',
          'palette-6-secondary': '#D2B48C',
          'palette-6-background-light': '#FFF5EE',
          'palette-6-background-dark': '#3E2723',
          'palette-6-text-light': '#3E2723',
          'palette-6-text-dark': '#FFF5EE',
        };

        export const ACCENT_COLORS = [
          { name: 'Classic Black', lightMode: '#f2f2f2', darkMode: '#1a1a1a' },
          { name: 'Classic Blue', lightMode: '#6a7df4', darkMode: '#394aad' },
          { name: 'Soft Green', lightMode: '#98d7b5', darkMode: '#2b6f48' },
          { name: 'Warm Orange', lightMode: '#ffb577', darkMode: '#994d19' },
          { name: 'Vibrant Purple', lightMode: '#aa88d3', darkMode: '#622b6f' },
          { name: 'Bright Yellow', lightMode: '#ffe399', darkMode: '#b38f1a' },
          { name: 'Cool Cyan', lightMode: '#8ed5e9', darkMode: '#29667e' },
          { name: 'Soft Brown', lightMode: '#d1ad86', darkMode: '#6c4d33' },
          { name: 'Muted Red', lightMode: '#ff9797', darkMode: '#992b2b' },
          { name: 'Teal Green', lightMode: '#88d3d3', darkMode: '#2b6f6f' },
        ];

        export const LOGGED_TOKEN = '#*&&%^~!@&*%%$$#'
        export const LOGGED_USER = '#*&%^!@^&*^%$*#'
export const USER = {
    ADMIN: 'ADMIN',
    VOLUNTEER: 'VOLUNTEER'
}
