import Link from "next/link";

export default function Header() {
  return (
    <header>
      <Link href="/products" passHref>
        <button>Produkte</button>
      </Link>
      <Link href="/categories" passHref>
        <button>Kategorien</button>
      </Link>
      <Link href="/create-product" passHref>
        <button>Produkt hinzufügen</button>
      </Link>
      <Link href="/create-category" passHref>
        <button>Kategorie hinzufügen</button>
      </Link>
    </header>
  );
}
