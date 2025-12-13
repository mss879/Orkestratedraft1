import Link from 'next/link';
import Image from 'next/image';
import PillNav, { type PillNavItem } from '@/components/PillNav';

const NAV_ITEMS: PillNavItem[] = [
  { label: 'Home', href: '/' },
  { label: 'About Us', href: '/#about' },
  { label: 'Contact Us', href: '/#contact' },
];

const FloatingNavbar = () => {
  return (
    <nav className="fixed top-10 left-10 right-10 z-20">
      <div className="flex items-center justify-between gap-4">
        <Link href="/" className="block">
          <Image src="/logo.png" alt="Logo" width={280} height={280} priority />
        </Link>

        <PillNav
          items={NAV_ITEMS}
          activeHref="/"
          ease="power2.easeOut"
          baseColor="#DD3B2F"
          pillColor="#ffffff"
          hoveredPillTextColor="#ffffff"
          pillTextColor="#DD3B2F"
        />
      </div>
    </nav>
  );
};

export default FloatingNavbar;
