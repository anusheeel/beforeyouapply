'use client';

import { FormEvent, useState } from 'react';

export default function WaitlistForm() {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!email) return;
    setIsSubmitting(true);

    try {
      // Replace this with Supabase insert when backend is ready.
      console.log('Waitlist signup:', email);
      await new Promise((resolve) => setTimeout(resolve, 600));
      setSubmitted(true);
    } catch (error) {
      console.error('Failed to join waitlist', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <p className="text-emerald-600 font-semibold" role="status" aria-live="polite">
        🎉 You’re on the waitlist!
      </p>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="mt-8 flex w-full max-w-xl flex-col gap-3 sm:flex-row"
      aria-label="Join the BeforeYouApply waitlist"
    >
      <label htmlFor="email" className="sr-only">
        Email address
      </label>
      <input
        id="email"
        type="email"
        name="email"
        required
        value={email}
        onChange={(event) => setEmail(event.target.value)}
        placeholder="you@example.com"
        className="w-full rounded-md border border-slate-200 px-4 py-3 text-base text-slate-900 shadow-sm transition focus:border-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-200"
      />
      <button
        type="submit"
        disabled={isSubmitting}
        className="inline-flex items-center justify-center whitespace-nowrap rounded-md bg-emerald-500 px-6 py-3 text-base font-semibold text-white shadow-md transition hover:bg-emerald-600 focus:outline-none focus:ring-2 focus:ring-emerald-300 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-70"
      >
        {isSubmitting ? 'Joining…' : 'Join the Waitlist'}
      </button>
    </form>
  );
}
