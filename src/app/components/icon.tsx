import Image from "next/image"

const Icon = ({src}) => {
    return (
    <Image src={src} alt="icon" width={24} height={24} />
  )
}

export default Icon;