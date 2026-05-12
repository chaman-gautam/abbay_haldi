"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function AdminGuard({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  const [checking, setChecking] = useState(true);

  useEffect(() => {
    // Check if custom auth cookie exists
    const isAuthenticated = document.cookie.includes("admin-auth=true");

    // If not authenticated, redirect to public login page
    if (!isAuthenticated) {
      router.replace("/login");
      return;
    }

    // Authenticated
    setChecking(false);
  }, [router]);

  // Show loading while checking authentication
  if (checking) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <p className="text-gray-600">Checking authentication...</p>
      </div>
    );
  }

  return <>{children}</>;
}
