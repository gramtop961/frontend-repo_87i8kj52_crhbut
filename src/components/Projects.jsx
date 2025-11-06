import { Code2, Rocket, Sparkles } from 'lucide-react';

const items = [
  {
    title: 'Realtime Collaboration Tool',
    description: 'WebRTC + CRDT powered editor with presence and comments.',
    icon: <Sparkles className="h-5 w-5" />,
    stack: ['React', 'WebRTC', 'CRDT', 'Tailwind'],
  },
  {
    title: 'AI Product Finder',
    description: 'Semantic search over 50k products with embeddings and reranking.',
    icon: <Rocket className="h-5 w-5" />,
    stack: ['Next.js', 'FastAPI', 'Pinecone', 'OpenAI'],
  },
  {
    title: 'Design System',
    description: 'Accessible components built with Radix primitives and tokens.',
    icon: <Code2 className="h-5 w-5" />,
    stack: ['Radix', 'Storybook', 'TypeScript', 'Figma'],
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between mb-10">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold">Selected Work</h2>
            <p className="text-gray-600 mt-2">A few things I’ve been building lately.</p>
          </div>
          <a href="#" onClick={(e)=>e.preventDefault()} className="text-sm text-blue-700 hover:underline">See all</a>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {items.map((item) => (
            <article key={item.title} className="group rounded-2xl border border-gray-200 bg-white/80 backdrop-blur p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="h-10 w-10 rounded-lg bg-gray-900 text-white grid place-items-center mb-4">
                {item.icon}
              </div>
              <h3 className="text-lg font-semibold mb-1">{item.title}</h3>
              <p className="text-gray-600 text-sm mb-4">{item.description}</p>
              <div className="flex flex-wrap gap-2">
                {item.stack.map((s) => (
                  <span key={s} className="text-xs px-2 py-1 rounded-full bg-gray-100 text-gray-700">{s}</span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
