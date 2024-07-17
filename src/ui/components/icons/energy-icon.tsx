export type Props = {
  state: string
  size: string
}

export default function Component(props: Props) {
  const size = props.size || 'xs'
  let stroke = '#333'
  if (props.state === 'off') {
    stroke = '#fff'
  }

  let sizeLength = '1em'
  switch (size) {
    case 'sm': sizeLength = '1.5em'; break
    case 'md': sizeLength = '2.0em'; break
    case 'xl': sizeLength = '2.5em'; break
  }
    

	return (<svg xmlns="http://www.w3.org/2000/svg" width={sizeLength} height={sizeLength} viewBox="0 0 24 24" {...props}><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="m6.194 11.397l5.998-8.085c.47-.632 1.348-.239 1.348.603v6.258c0 .505.345.913.77.913h2.918c.663 0 1.016.927.578 1.518l-5.998 8.084c-.47.632-1.348.239-1.348-.603v-6.258c0-.505-.345-.913-.77-.913H6.771c-.663 0-1.016-.927-.578-1.517" color={stroke}></path></svg>)
}