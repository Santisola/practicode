import SyntaxHighlighter from 'react-syntax-highlighter'
import { nord } from 'react-syntax-highlighter/dist/esm/styles/hljs'

interface Props {
  value: {
    code: string
    language: string
  },
  classes: string
}

const CodeBlock = ({ value, classes }: Props) => {
  const { code, language } = value
  return (
    <SyntaxHighlighter
        className={classes}
        showLineNumbers={true}
        showInlineLineNumbers={true}
        language={language}
        style={nord}
        customStyle={{
        padding: '1em',
        marginBottom: '2em',
        }}
    >
        {code}
    </SyntaxHighlighter>
  )
}

export default CodeBlock