export type Props = {
  state: string
}

export default function Component(props: Props) {
  let stroke = '#333'
  if (props.state === 'off') {
    stroke = '#fff'
  }

  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="none" stroke={stroke} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 18a2 2 0 1 0 4 0a2 2 0 1 0-4 0M16 6a2 2 0 1 0 4 0a2 2 0 1 0-4 0M7.5 16.5l9-9" /></svg>
  )
}

