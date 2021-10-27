import styled from "@emotion/styled"
import { addOne } from "~/lib/example"
import { Layout } from "~/components/layout"
import { Web } from "@thesunny/api"
import content from "!!raw-loader!~/content/why-slate-collaborate.md"

const Container = styled.div`
  margin: 1em;
  max-width: 32em;
`
const Title = styled.h1``

const getServerSideProps = Web.getServerSideProps(async () => {
  return {
    props: {},
  }
})

export default function () {
  return (
    <Layout>
      <Title>Hello World</Title>
      {content}
      <p>Luck number {addOne(6)}</p>
    </Layout>
  )
}
