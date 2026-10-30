import { Instagram, Linkedin, Twitter, Youtube } from 'lucide-react';

const icons = { Instagram, LinkedIn: Linkedin, YouTube: Youtube, X: Twitter };

export function SocialIcon({ name, className }: { name: keyof typeof icons; className?: string }) {
  const Icon = icons[name];
  return <Icon className={className} aria-hidden="true" />;
}

export function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M17.47 14.38c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.48-.89-.79-1.49-1.77-1.66-2.07-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.8.37-.27.3-1.04 1.02-1.04 2.48 0 1.46 1.07 2.88 1.21 3.08.15.2 2.1 3.2 5.08 4.49.71.31 1.26.49 1.7.63.71.22 1.36.19 1.87.12.57-.09 1.76-.72 2.01-1.41.25-.69.25-1.29.17-1.41-.07-.13-.27-.2-.57-.35zM12.04 21.5h-.01a9.47 9.47 0 0 1-4.83-1.32l-.35-.21-3.59.94.96-3.5-.23-.36a9.45 9.45 0 0 1-1.45-5.05c0-5.23 4.26-9.49 9.5-9.49a9.43 9.43 0 0 1 6.71 2.78 9.43 9.43 0 0 1 2.78 6.72c0 5.24-4.26 9.49-9.49 9.49zm8.08-17.57A11.35 11.35 0 0 0 12.04.5C5.74.5.62 5.62.62 11.92c0 2.01.53 3.98 1.53 5.71L.52 23.5l6.01-1.58a11.4 11.4 0 0 0 5.45 1.39h.01c6.3 0 11.42-5.13 11.42-11.42 0-3.05-1.19-5.92-3.35-8.08z" />
    </svg>
  );
}
