import WaitlistForm from '@/components/WaitlistForm';

const steps = [
  {
    title: 'Upload your resume',
    description: 'Import your existing resume so BYA can understand your experience and strengths.',
    icon: '📤',
  },
  {
    title: 'Paste the job description',
    description: 'Share the exact JD to help our AI identify the skills and keywords you need to highlight.',
    icon: '🧾',
  },
  {
    title: 'Get tailored assets',
    description: 'Receive an optimized resume, ppt based cover letter, and project idea crafted for that role that will boost your chance to land interview',
    icon: '🚀',
  },
];

const techHighlights = [
  {
    title: 'Structured data extraction',
    description: 'Transforms resumes and job descriptions into consistent JSON so nothing gets lost in translation.',
    icon: '🧠',
  },
  {
    title: 'Compatibility scoring',
    description: 'Measures the match between your background and the role, ensuring you clear the 50% fit threshold.',
    icon: '📊',
  },
  {
    title: 'Adaptive optimization',
    description: 'Refines your resume and cover letter with the keywords, quantifiable wins, and tone recruiters expect.',
    icon: '✨',
  },
  {
    title: 'Project blueprinting',
    description: 'Suggests mini full-stack project ideas that reflect the tech stack and problem space of the job.',
    icon: '💡',
  },
];

export default function HomePage() {
  return (
    <main className="min-h-screen bg-white">
      <div className="mx-auto flex max-w-6xl flex-col gap-24 px-6 pb-24 pt-16 sm:pt-24">
        <section className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div className="max-w-2xl">
            <span className="inline-flex items-center rounded-full bg-indigo-100 px-3 py-1 text-sm font-medium text-indigo-700">
              BeforeYouApply (BYA)
            </span>
            <h1 className="mt-6 text-4xl font-bold text-slate-900 sm:text-5xl">
              Land the interview before you apply.
            </h1>
            <p className="mt-4 text-lg text-slate-600 sm:text-xl">
              AI-powered resume, cover letter, and project kits tailored to every job description.
            </p>
            <WaitlistForm />
            <div className="mt-10 grid gap-6 sm:grid-cols-2">
              {steps.map((step) => (
                <div
                  key={step.title}
                  className="rounded-xl border border-slate-100 bg-white/80 p-5 shadow-sm shadow-indigo-50"
                >
                  <div className="text-3xl">{step.icon}</div>
                  <h3 className="mt-4 text-lg font-semibold text-slate-900">{step.title}</h3>
                  <p className="mt-2 text-sm text-slate-600">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-indigo-900 via-indigo-700 to-emerald-500 p-8 text-white shadow-xl">
            <div className="absolute -left-16 -top-16 h-40 w-40 rounded-full bg-emerald-400/30 blur-2xl" aria-hidden="true" />
            <div className="absolute -bottom-20 -right-10 h-64 w-64 rounded-full bg-white/10 blur-3xl" aria-hidden="true" />
            <div className="relative">
              <h2 className="text-3xl font-semibold">Your AI hiring copilot</h2>
              <p className="mt-4 text-base text-indigo-100">
                BYA blends structured data extraction, smart scoring, and tailored collateral so you approach every
                application with confidence.
              </p>
              <ul className="mt-8 space-y-4 text-base">
                <li className="flex items-start gap-3">
                  <span className="mt-1 text-emerald-300">✔</span>
                  <span>ATS-aligned optimized resume.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 text-emerald-300">✔</span>
                  <span>Personalized narratives based on your achievements and the role.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 text-emerald-300">✔</span>
                  <span>List Project ideas engineered to showcase the skills hiring managers expect.</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section className="grid gap-10">
          <div className="max-w-3xl">
            <h2 className="text-3xl font-semibold text-slate-900 sm:text-4xl">How it works</h2>
            <p className="mt-4 text-lg text-slate-600">
              A streamlined flow that turns every application into a tailored submission.
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-3">
            {steps.map((step, index) => (
              <div key={step.title} className="rounded-2xl border border-slate-100 bg-slate-50/80 p-6 shadow-sm">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-indigo-100 text-2xl text-indigo-700">
                  {index + 1}
                </div>
                <h3 className="mt-4 text-xl font-semibold text-slate-900">{step.title}</h3>
                <p className="mt-2 text-sm text-slate-600">{step.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="grid gap-10">
          <div className="max-w-3xl">
            <h2 className="text-3xl font-semibold text-slate-900 sm:text-4xl">Under the hood</h2>
            <p className="mt-4 text-lg text-slate-600">
              BYA keeps things transparent so you know exactly how the platform elevates your application.
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2">
            {techHighlights.map((feature) => (
              <article
                key={feature.title}
                className="flex flex-col gap-4 rounded-2xl border border-slate-100 bg-white p-6 shadow-md shadow-indigo-50"
              >
                <span className="text-3xl">{feature.icon}</span>
                <div>
                  <h3 className="text-xl font-semibold text-slate-900">{feature.title}</h3>
                  <p className="mt-2 text-sm text-slate-600">{feature.description}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="grid gap-6 rounded-3xl bg-indigo-900 px-8 py-12 text-white shadow-xl">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-semibold sm:text-4xl">Why it matters</h2>
            <p className="mt-4 text-lg text-indigo-100">
              Increase your chances of landing an interview with AI-powered preparation.
            </p>
            <ul className="mt-6 grid gap-4 text-base text-indigo-100 sm:grid-cols-3">
              <li className="rounded-2xl bg-white/10 p-4">
                <h3 className="font-semibold text-white">ATS-optimized resume</h3>
                <p className="mt-2 text-sm text-indigo-100">Structured to surface keywords recruiters are scanning for.</p>
              </li>
              <li className="rounded-2xl bg-white/10 p-4">
                <h3 className="font-semibold text-white">Personalized cover letter</h3>
                <p className="mt-2 text-sm text-indigo-100">Narratives rooted in your achievements and the company’s goals.</p>
              </li>
              <li className="rounded-2xl bg-white/10 p-4">
                <h3 className="font-semibold text-white">Portfolio-ready project</h3>
                <p className="mt-2 text-sm text-indigo-100">Showcase relevant skills with a mini build aligned to the JD.</p>
              </li>
            </ul>
          </div>
          <div className="rounded-2xl bg-white/10 p-6 backdrop-blur">
            <h3 className="text-xl font-semibold">Ready to be first in line?</h3>
            <p className="mt-3 text-sm text-indigo-100">Join the BYA waitlist for early access, launch updates, and exclusive prep tips.</p>
            <div className="mt-6">
              <WaitlistForm />
            </div>
          </div>
        </section>

        <section className="rounded-3xl border border-slate-100 bg-slate-50/80 px-8 py-12 shadow-sm">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-semibold text-slate-900 sm:text-4xl">Join the waitlist</h2>
            <p className="mt-4 text-lg text-slate-600">
              Be the first to try BeforeYouApply and get interview-ready materials tailored to your dream role.
            </p>
            <div className="mt-6 flex justify-center">
              <WaitlistForm />
            </div>
          </div>
        </section>
      </div>

      <footer className="border-t border-slate-200 bg-slate-50">
        <div className="mx-auto flex max-w-6xl flex-col gap-6 px-6 py-10 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between">
          <nav className="flex flex-wrap items-center gap-4 text-sm font-medium text-slate-600">
            <a href="#" className="transition hover:text-indigo-700">
              FAQ
            </a>
            <a href="#" className="transition hover:text-indigo-700">
              Contact
            </a>
            <a href="#" className="transition hover:text-indigo-700">
              LinkedIn
            </a>
            <a href="#" className="transition hover:text-indigo-700">
              Twitter
            </a>
          </nav>
          <p className="text-xs text-slate-400">© 2025 BeforeYouApply, Inc.</p>
        </div>
      </footer>
    </main>
  );
}
