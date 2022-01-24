import { FC } from 'react'
import Image from 'next/image'
import { signatureImageUrl } from '@utils/constants'

const Signature: FC = () => {
  return (
    <div className="flex flex-col items-center">
      <Image
        src={signatureImageUrl}
        alt="Assinatura do Estagiário"
        width={633}
        height={118}
      />
      <span className="text-white text-lg">Assinatura do Estagiário</span>
    </div>
  )
}

export default Signature
