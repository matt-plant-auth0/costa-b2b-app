type LogoProps = React.HTMLAttributes<HTMLImageElement>

export function CostaLogo(props: LogoProps) {
  if(props.className?.includes('theme-dark')){
    return (
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS55YXXfpHCVBHRYP7JpGvoEndRN6b1RO1HiA&s" alt="Costa Coffee" {...props}></img>
    )
  } else {
    return (
      <img src="https://cdn.uk.identity.costacoffee.com/d9eee71cba97be4f97d9.svg" alt="Costa Coffee" className="w-[93px] xl:w-[241px]"></img>
    )
  }
}
