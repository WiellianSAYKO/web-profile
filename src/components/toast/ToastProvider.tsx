"use client";
import React, { createContext, useContext, useState, useEffect, ReactNode } from "react";

type ToastType = "success" | "error" | "info";
type Toast = { id: string; message: string; type?: ToastType };

const ToastContext = createContext<{ addToast: (t: Omit<Toast, "id">) => void } | null>(null);

export function ToastProvider({ children }: { children: ReactNode }) {
  const [toasts, setToasts] = useState<Toast[]>([]);

  const addToast = (t: Omit<Toast, "id">) => {
    const id = String(Date.now()) + Math.random().toString(36).slice(2, 9);
    setToasts((s) => [...s, { id, ...t }]);
  };

  useEffect(() => {
    if (!toasts.length) return;
    const timers = toasts.map((toast) =>
      setTimeout(() => {
        setToasts((s) => s.filter((x) => x.id !== toast.id));
      }, 4500)
    );
    return () => timers.forEach((t) => clearTimeout(t));
  }, [toasts]);

  return (
    <ToastContext.Provider value={{ addToast }}>
      {children}
      <div className="fixed right-4 bottom-6 z-50 flex flex-col items-end space-y-3">
        {toasts.map((t) => (
          <div
            key={t.id}
            className={`max-w-sm w-full px-4 py-3 rounded-lg shadow-lg text-left text-white break-words ${
              t.type === "success" ? "bg-green-600" : t.type === "error" ? "bg-red-600" : "bg-gray-800"
            }`}
          >
            {t.message}
          </div>
        ))}
      </div>
    </ToastContext.Provider>
  );
}

export function useToast() {
  const ctx = useContext(ToastContext);
  if (!ctx) throw new Error("useToast must be used within ToastProvider");
  return ctx;
}

export default ToastProvider;
