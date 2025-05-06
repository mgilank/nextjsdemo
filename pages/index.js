import Link from 'next/link';

export default function Home() {
  return (
    <main>
      <h1>Beranda</h1>
      <p>Selamat datang di halaman utama.</p>
      <nav>
        <Link href="/about">Tentang</Link> | <Link href="/contact">Kontak</Link>
      </nav>
    </main>
  );
}
