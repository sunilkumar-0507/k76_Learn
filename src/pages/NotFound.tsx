import { useSeo } from '@/hooks/useSeo';
import { Backdrop } from '@/components/PageHero';
import { ButtonLink } from '@/components/Button';

export default function NotFound() {
  useSeo({ title: 'Page not found', description: 'The page you are looking for does not exist.', noindex: true });
  return (
    <section className="relative flex min-h-[80vh] items-center overflow-hidden pt-24">
      <Backdrop />
      <div className="container-site relative text-center">
        <p className="font-mono text-sm text-electric-300">404</p>
        <h1 className="mt-4 text-4xl sm:text-6xl">This page doesn&rsquo;t exist — yet.</h1>
        <p className="mx-auto mt-5 max-w-md text-slate-400">Let&rsquo;s get you back on track.</p>
        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <ButtonLink to="/" arrow>
            Back to Home
          </ButtonLink>
          <ButtonLink to="/courses" variant="secondary">
            Explore Courses
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}
