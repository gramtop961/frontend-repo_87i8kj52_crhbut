import { Mail, Send } from 'lucide-react';
import { useState } from 'react';

export default function Contact() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [sent, setSent] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <section id="contact" className="py-20">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <p className="inline-flex items-center gap-2 text-xs font-medium uppercase tracking-wider text-blue-700 bg-blue-50 rounded-full px-3 py-1 w-max ring-1 ring-blue-200">
            <Mail className="h-3 w-3" />
            Get in touch
          </p>
          <h2 className="text-3xl md:text-4xl font-bold mt-4">Let’s build something great</h2>
          <p className="text-gray-600 mt-2">Have a project in mind or just want to say hi? Drop a message.</p>
        </div>

        <form onSubmit={onSubmit} className="grid gap-4 bg-white/80 backdrop-blur p-6 rounded-2xl border border-gray-200 shadow-sm">
          <input
            type="email"
            required
            placeholder="Your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full rounded-lg border border-gray-200 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
          />
          <textarea
            rows={5}
            required
            placeholder="Your message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="w-full rounded-lg border border-gray-200 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
          />
          <button type="submit" className="inline-flex items-center gap-2 justify-center px-5 py-3 rounded-lg bg-gray-900 text-white hover:bg-black transition-colors">
            <Send className="h-4 w-4" />
            Send Message
          </button>
          {sent && (
            <p className="text-sm text-green-700 bg-green-50 border border-green-200 rounded-lg px-3 py-2">
              Thanks! Your message was captured locally for this demo.
            </p>
          )}
        </form>
      </div>
    </section>
  );
}
