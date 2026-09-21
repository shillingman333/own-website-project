import AboutContent from "../components/AboutContent";

export const metadata = {
  title: "About — Jacob",
  description: "I'm Jacob. Who I am, what I've done, and where I'm heading.",
};

export default function AliasPage() {
  return (
    <main className="page-shell">
      <AboutContent />
    </main>
  );
}
