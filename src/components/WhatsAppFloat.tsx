import { whatsappLink } from '@/config/site';
import { WhatsAppIcon } from './SocialIcon';

export function WhatsAppFloat() {
  return (
    <a
      href={whatsappLink()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Enquire on WhatsApp"
      className="group fixed bottom-5 right-5 z-40 flex items-center gap-2 rounded-full bg-[#25D366] p-3.5 text-white shadow-[0_12px_40px_-8px_rgba(37,211,102,0.6)] transition-all duration-300 hover:-translate-y-1 sm:bottom-6 sm:right-6"
    >
      <span className="absolute inset-0 -z-10 animate-pulse-ring rounded-full bg-[#25D366]/50" aria-hidden="true" />
      <WhatsAppIcon className="h-6 w-6" />
      <span className="hidden max-w-0 overflow-hidden whitespace-nowrap text-sm font-semibold transition-all duration-300 group-hover:max-w-[160px] group-hover:pr-1 sm:inline">
        Chat with us
      </span>
    </a>
  );
}
