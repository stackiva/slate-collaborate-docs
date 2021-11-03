import styled from "@emotion/styled"
import { Layout } from "~/components/layout"
import content from "!!raw-loader!~/content/why-slate-collaborate.md"
import { GetStaticProps, InferGetStaticPropsType } from "next"
import { parseMarkdown } from "~/lib/parse-markdown"

// https://blog.nrwl.io/read-and-render-md-files-with-next-js-and-nx-89a85c1d9b44

const Container = styled.div`
  margin: 1em;
  max-width: 32em;
`
export const getStaticProps: GetStaticProps = async (context) => {
  const value = await parseMarkdown(content)
  return {
    props: { html: value },
  }
}

export default function ({
  html,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <Layout>
      <div>Hello World</div>
      {/* <div dangerouslySetInnerHTML={{ __html: html }} /> */}
    </Layout>
  )
}
