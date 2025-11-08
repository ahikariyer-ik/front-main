'use client';

import React from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';

export default function MarkdownRenderer({ content }) {
  return (
    <ReactMarkdown
      remarkPlugins={[remarkGfm]}
      rehypePlugins={[rehypeRaw]}
      components={{
        p: ({ node, ...props }) => <p className="text-muted" {...props} />,
        h1: ({ node, ...props }) => <h1 className="mb-3" {...props} />,
        h2: ({ node, ...props }) => <h2 className="mb-3" {...props} />,
        h3: ({ node, ...props }) => <h3 className="mb-3" {...props} />,
        a: ({ node, ...props }) => (
          <a className="text-primary" {...props} target="_blank" rel="noopener noreferrer" />
        ),
        img: ({ node, ...props }) => (
          <img className="img-fluid rounded shadow" {...props} loading="lazy" />
        ),
      }}
    >
      {content}
    </ReactMarkdown>
  );
}
