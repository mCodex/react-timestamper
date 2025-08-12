"use client";

import { useEffect, useState } from "react";

export default function ServiceWorkerUpdateToast() {
  const [updated, setUpdated] = useState(false);

  useEffect(() => {
    if (!("serviceWorker" in navigator)) return;

    const onControllerChange = () => {
      setUpdated(true);
      // Give the user a moment to see the toast, then reload
      setTimeout(() => window.location.reload(), 1200);
    };

    navigator.serviceWorker.addEventListener("controllerchange", onControllerChange);

    const onVisibility = () => {
      if (document.visibilityState === "visible") {
        navigator.serviceWorker
          .getRegistration("/react-timestamper/")
          .then((reg) => reg?.update())
          .catch(() => {});
      }
    };

    document.addEventListener("visibilitychange", onVisibility);

    return () => {
      navigator.serviceWorker.removeEventListener("controllerchange", onControllerChange);
      document.removeEventListener("visibilitychange", onVisibility);
    };
  }, []);

  if (!updated) return null;

  return (
    <div className="toast toast-bottom toast-center">
      <div className="alert alert-success">
        <span>App updated. Reloading…</span>
      </div>
    </div>
  );
}
