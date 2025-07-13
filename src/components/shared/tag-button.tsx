import React from 'react';

interface TagButtonProps {
  label: string;
}

export function TagButton({ label }: TagButtonProps) {
  return (
    <button className="px-4 py-2 rounded-lg bg-muted text-muted-foreground text-sm font-medium hover:bg-muted/80 transition-colors">
      {label}
    </button>
  );
}