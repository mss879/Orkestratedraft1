'use client';

import { useEffect, useState } from 'react';

type Props = {
  queries: ReadonlyArray<string>;
  className?: string;
  placeholder?: string;
  rows?: number;
  style?: React.CSSProperties;
};

export default function TypewriterTextarea({
  queries,
  className,
  placeholder,
  rows = 3,
  style,
}: Props) {
  const [currentQueryIndex, setCurrentQueryIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(55);

  useEffect(() => {
    if (!queries.length) return;

    const currentQuery = queries[currentQueryIndex] ?? '';

    const handleTyping = () => {
      if (!isDeleting) {
        if (displayedText.length < currentQuery.length) {
          setDisplayedText(currentQuery.slice(0, displayedText.length + 1));
          setTypingSpeed(55);
          return;
        }

        setTimeout(() => setIsDeleting(true), 2000);
        return;
      }

      if (displayedText.length > 0) {
        setDisplayedText(currentQuery.slice(0, displayedText.length - 1));
        setTypingSpeed(25);
        return;
      }

      setIsDeleting(false);
      setCurrentQueryIndex((prev) => (prev + 1) % queries.length);
    };

    const timer = window.setTimeout(handleTyping, typingSpeed);
    return () => window.clearTimeout(timer);
  }, [queries, displayedText, isDeleting, currentQueryIndex, typingSpeed]);

  return (
    <textarea
      className={className}
      value={displayedText}
      placeholder={placeholder}
      readOnly
      rows={rows}
      style={style}
    />
  );
}
