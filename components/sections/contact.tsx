export default function Contact() {
  return (
    <section id="contact" className="py-24 md:py-32 text-center">
      <div className="mx-auto max-w-2xl px-6">

        <h2 className="text-3xl font-semibold text-white mb-6">
          Let’s work together
        </h2>

        <p className="text-white/60 mb-8">
          I'm open for freelance and full-time opportunities.
        </p>

        <a
          href="mailto:youremail@gmail.com"
          className="inline-block rounded-full bg-emerald-400 px-6 py-3 text-black font-medium hover:bg-emerald-300 transition"
        >
          Get in touch
        </a>
      </div>
    </section>
  );
}