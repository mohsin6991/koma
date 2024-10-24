'use client';
import React from "react";
function ErrorBoundary({ error }: { error: Error }) {
  return (
    <div className="bg-green-400">
      <h1>Oops! {error.message}</h1>
    </div>
  );
}
export default  ErrorBoundary;