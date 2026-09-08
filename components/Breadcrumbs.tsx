import React from 'react';
import Link from 'next/link';
import { ChevronRight, Home } from 'lucide-react';

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
  isDarkMode?: boolean;
}

export default function Breadcrumbs({ items, isDarkMode = false }: BreadcrumbsProps) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    'itemListElement': [
      {
        '@type': 'ListItem',
        'position': 1,
        'name': 'Home',
        'item': 'https://sektorlokal.id'
      },
      ...items.map((item, idx) => ({
        '@type': 'ListItem',
        'position': idx + 2,
        'name': item.label,
        ...(item.href ? { 'item': `https://sektorlokal.id${item.href}` } : {})
      }))
    ]
  };

  const mutedText = isDarkMode ? 'text-[#8A93A8]' : 'text-[#64748B]';

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <nav aria-label="Breadcrumb" className="flex items-center gap-1.5 text-xs font-mono py-4">
        <Link href="/" className="flex items-center gap-1 hover:text-[#E11D48] transition opacity-70 hover:opacity-100">
          <Home className="w-3.5 h-3.5" />
          <span className="sr-only">Home</span>
        </Link>
        {items.map((item, idx) => {
          const isLast = idx === items.length - 1;
          return (
            <React.Fragment key={idx}>
              <ChevronRight className="w-3 h-3 opacity-40 shrink-0" />
              {isLast || !item.href ? (
                <span className="text-[#E11D48] font-bold truncate max-w-[220px] sm:max-w-none">
                  {item.label}
                </span>
              ) : (
                <Link href={item.href} className={`hover:text-[#E11D48] transition ${mutedText} hover:opacity-100 truncate`}>
                  {item.label}
                </Link>
              )}
            </React.Fragment>
          );
        })}
      </nav>
    </>
  );
}
