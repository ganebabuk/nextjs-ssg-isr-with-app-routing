export default function CommonFooter() {
    const currentYear = new Date().getFullYear();
    return (
      <footer className="mt-auto p-4">
        <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700"/>
        <p className="text-center font-semibold">&copy;{currentYear} All rights reserved by P&G</p>
      </footer>
    );
  }