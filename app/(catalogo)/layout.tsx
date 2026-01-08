import Footer from '@/components/ui/Footer';
import Header from '@/components/ui/Header';
import React from 'react'

export default function AppLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <>
            <Header />
            <main>
                {children}
            </main>
            <Footer />
        </>
    );
}
