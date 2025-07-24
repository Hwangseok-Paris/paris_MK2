import Container from "@/components/layout/Container";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-gray-50 py-8 dark:border-gray-700 dark:bg-gray-900">
      <Container>
        <div className="flex flex-col items-center justify-between gap-4 text-sm text-gray-600 dark:text-gray-400 md:flex-row">
          <p>© {new Date().getFullYear()} Paris. All rights reserved.</p>

          <nav className="flex gap-4">
            <Link href="https://github.com/Hwangseok-Paris" target="_blank" rel="noopener">
              GitHub
            </Link>
            <Link href="https://blog.naver.com/hwangseok89" target="_blank" rel="noopener">
              Blog
            </Link>
            <Link href="/privacy">Privacy</Link>
          </nav>
        </div>
      </Container>
    </footer>
  );
}
