export default function ADHDLifeHacksBlog() {
  return (
    <main className="min-h-screen bg-white text-gray-800 p-6">
      <header className="max-w-4xl mx-auto py-10">
        <h1 className="text-4xl font-bold mb-4">ADHD Life Hacks & Tools</h1>
        <p className="text-lg text-gray-600">A blog for neurodivergent minds who want to thrive — not just survive.</p>
      </header>

      <section className="max-w-4xl mx-auto py-8">
        <h2 className="text-2xl font-semibold mb-4">Latest Posts</h2>
        <div className="grid gap-6">
          <article className="border p-4 rounded-2xl shadow-md hover:shadow-lg transition">
            <h3 className="text-xl font-bold mb-2">Top 10 ADHD-Friendly Productivity Apps (2025)</h3>
            <p className="text-gray-600 mb-2">Discover our top app picks for focus, organization, and task management.</p>
            <a href="#" className="text-blue-600 hover:underline">Read more</a>
          </article>
          <article className="border p-4 rounded-2xl shadow-md hover:shadow-lg transition">
            <h3 className="text-xl font-bold mb-2">How to Create a Dopamine-Friendly Morning Routine</h3>
            <p className="text-gray-600 mb-2">Step-by-step guide to help you actually get out of bed and feel good about it.</p>
            <a href="#" className="text-blue-600 hover:underline">Read more</a>
          </article>
          <article className="border p-4 rounded-2xl shadow-md hover:shadow-lg transition">
            <h3 className="text-xl font-bold mb-2">Body Doubling: The Secret ADHD Power Tool</h3>
            <p className="text-gray-600 mb-2">How to use body doubling for chores, work, and errands — even virtually.</p>
            <a href="#" className="text-blue-600 hover:underline">Read more</a>
          </article>
        </div>
      </section>

      <footer className="max-w-4xl mx-auto py-10 text-center text-sm text-gray-500">
        © 2025 ADHD Life Hacks Blog — Empowering neurodivergent lives one hack at a time.
      </footer>
    </main>
  );
}