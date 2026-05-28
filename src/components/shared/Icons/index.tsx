import React from 'react';

interface IconProps extends React.SVGProps<SVGSVGElement> {}

export const PencilIcon: React.FC<IconProps> = (props) => (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
        <path d="M12 20h9M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4Z"/>
    </svg>
);

export const ExportIcon: React.FC<IconProps> = (props) => (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M17 8l-5-5-5 5M12 3v12"/>
    </svg>
);

export const ImportIcon: React.FC<IconProps> = (props) => (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3"/>
    </svg>
);

export const TrashIcon: React.FC<IconProps> = (props) => (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
        <path d="M18 6 6 18M6 6l12 12"/>
    </svg>
);

export const PrinterIcon: React.FC<IconProps> = (props) => (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
        <polyline points="6 9 6 2 18 2 18 9"/>
        <path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"/>
        <rect x="6" y="14" width="12" height="8"/>
    </svg>
);

export const RedTriangle: React.FC<IconProps> = (props) => (
    <svg width="8" height="10" viewBox="0 0 8 10" fill="none" xmlns="http://w3.org" {...props}>
        <path d="M8 5L0 10V0L8 5Z" fill="#dc241f"/>
    </svg>
);
