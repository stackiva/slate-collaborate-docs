import styled from "@emotion/styled"
// import { $Container } from "~/components/container"
import Link from "next/link"

const $NavOuter = styled.div`
  color: #f0f0f0;
  background: #002040;
`

const $Nav = styled.div`
  justify-content: space-between;
  a {
    color: #e0e0e0;
    text-decoration: none;
    font-size: 16px;
    margin-right: 20px;
    &.title {
      font-size: 20px;
    }
    i.fa {
      color: rgba(255, 255, 255, 0.5);
      font-size: 14px;
      font-weight: normal;
    }
  }
  width: 1024px;
  margin: 0 auto;
`

export function Navbar() {
  return (
    <$NavOuter>
      <$Nav className="nav py-3">
        <div className="nav-item">
          <Link href="/">
            <a className="title">Slate Collaborate Docs</a>
          </Link>
        </div>
        <div className="nav-item">
          <Link href="/">
            <a>Documentation</a>
          </Link>
          <Link href="https://github.com/stackiva/slate-collaborate-support/issues">
            <a target="_blank">
              Support <i className="fa fa-external-link ms-1" />
            </a>
          </Link>
          <a>License</a>
        </div>
      </$Nav>
    </$NavOuter>
  )
}
