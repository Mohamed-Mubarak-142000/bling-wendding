// app/not-found/page.tsx
import Link from "next/link";

const NotFound: React.FC = () => {
  return (
    <div>
      <h1>404 - Page Not Found</h1>
      <p>The requested page does not exist.</p>
      <Link href="/">Go Back Home</Link>
    </div>
  );
};

export default NotFound;
