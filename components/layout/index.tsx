import React from "react"
import { Navbar } from "./navbar"
import styled from "@emotion/styled"

const $Content = styled.div`
  padding: 20px 0;
  max-width: 1024px;
  margin: 0 auto;
`

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <Navbar />
      <$Content>{children}</$Content>
    </div>
  )
}
