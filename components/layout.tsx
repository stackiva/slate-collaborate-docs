import React from "react"

export function Layout({ children }: { children: React.ReactNode }) {
  return <div className="container">{children}</div>
}
