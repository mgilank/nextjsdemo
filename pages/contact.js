import Link from 'next/link';

export default function Contact() {
  return (
    <main>
      <h1>Kontak</h1>
      <p>Hubungi kami melalui email: contoh@email.com</p>
      <nav>
        <Link href="/">Beranda</Link> | <Link href="/about">Tentang</Link>
      </nav>
    </main>
  );
}
