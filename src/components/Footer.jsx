export default function Footer({ items }) {
  if (items.length === 0) {
    return <footer className="stats">Letss go Belanjaaa!!</footer>;
  } else {
    const totalItems = items.length;
    const boughtItems = items.filter((item) => item.checked).length;
    const percentage = Math.round((boughtItems / totalItems) * 100);
    return (
      <footer className="stats">
        Ada {totalItems} barang di daftar belanjaan, {boughtItems} barang sudah dibeli ({percentage}%)
      </footer>
    );
  }
}
