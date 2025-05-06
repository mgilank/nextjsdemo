import Link from 'next/link';

export default function About() {
  return (
    <main>
      <h1>Tentang Kami</h1>
      <p>Ini adalah halaman tentang kami.</p>
      <nav>
        <Link href="/">Beranda</Link> | <Link href="/contact">Kontak</Link>
      </nav>
    </main>
  );
}
