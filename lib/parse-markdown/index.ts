import { unified } from "unified"
import { remark } from "remark"
import markdown from "remark-parse"
// import prism from "remark-prism"
import remarkHtml from "remark-html"

export async function parseMarkdown(content: string) {
  const result = await unified()
    .use(markdown)
    // .use(prism as any)
    .use(remarkHtml)
    .process(content)
  return result.value
  // const ast = engine.parse(content)

  // // Unified‘s *process* contains 3 distinct phases: parsing, running and
  // // stringifying. We do not want to go through the stringifying phase, since we
  // // want to preserve an AST, so we cannot call `.process(..)`. Calling
  // // `.parse(..)` is not enough though as plugins (so Prism) are executed during
  // // the running phase. So we need to manually call the run phase (synchronously
  // // for simplicity).
  // // See: https://github.com/unifiedjs/unified#description
  // return engine.runSync(ast)
}
