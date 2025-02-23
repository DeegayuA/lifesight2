import { FlipWords } from "./ui/flip-words";
import { PlaceholdersAndVanishInput } from "./ui/placeholders-and-vanish-input";
import { useSettings } from '@/components/settings-provider';

export function PlaceholdersAndVanishInputDemo() {
  const { fontSize, highContrast, accentColor } = useSettings(); // Access settings for fontSize and highContrast
  const placeholders = [
    "Can you tell me what’s around me right now?",
    "What’s the text on this document?",
    "Can you help me find the nearest crosswalk?",
    "Please read the text on this sign.",
    "What’s in front of me? Can you describe it?",
    "Where is the nearest bus stop?",
    "Can you guide me to the nearest exit?",
    "What are the objects on my desk?",
    "Can you give me a description of the scene in front of me?",
    "Please help me with reading this label on the product.",
    "Can you tell me if there's a road nearby?",
    "What’s the time on my watch?",
    "Can you help me identify this object?",
    "Is there anything I need to be aware of in my surroundings?",
    "Please give me feedback about the area I'm in right now.",
    "Can you help me set up a high-contrast mode?",
    "Can you help me adjust the font size?",
    "Where can I find the nearest restroom?",
    "Is there a traffic signal I should know about?",
    "What is the current temperature outside?",
  ];
  const words = [
    "Independence", 
    "Empowerment", 
    "Accessibility", 
    "Inclusion", 
    "Equality", 
    "Support", 
    "Freedom", 
    "Clarity", 
    "Understanding", 
    "Opportunity"
  ];
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
  };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("submitted");
  };

  return (
    <div
      className="h-full my-10 flex flex-col justify-center items-center px-4"
      style={{
        fontSize: `${fontSize / 16}rem`,
      }}
    >
<h1
  className="mb-5 sm:mb-10 text-xl text-center sm:text-5xl font-bold tracking-tight text-neutral-700 dark:text-neutral-100 relative"
  style={{
    fontSize: `${fontSize / 16 * 3}rem`,
    color: highContrast ? "var(--color-accent)" : accentColor,
  }}
  aria-live="polite"
>
  Empowering
  <FlipWords words={words} /> <br />
  Through AI Vision
</h1>
      <PlaceholdersAndVanishInput
        placeholders={placeholders}
        onChange={handleChange}
        onSubmit={onSubmit}
        aria-label="Text input for AI-powered questions"
      />
    </div>
  );
}
