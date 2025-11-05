export default function Footer() {
  return (
    <footer className="text-center py-6 border-t border-gray-300 dark:border-gray-700 mt-8">
      <p className="text-sm text-gray-600 dark:text-gray-400">
        © {new Date().getFullYear()} Bitxbase Events Hub · Developed by{" "}
        <span className="font-semibold text-blue-600 dark:text-blue-400">
          Bagami
        </span>
      </p>
    </footer>
  );
}
