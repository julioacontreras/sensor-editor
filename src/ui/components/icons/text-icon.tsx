export type Props = {
  state: string
}

export default function Component(props: Props) {
  let stroke = '#333'
  if (props.state === 'off') {
    stroke = '#fff'
  }

  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 48 48"><g fill="none" stroke={stroke} strokeLinejoin="round" strokeWidth="4"><rect width="36" height="36" x="6" y="6" rx="3"/><path strokeLinecap="round" d="M16 19v-3h16v3M22 34h4m-2-16v16"/></g></svg>
  )
}

