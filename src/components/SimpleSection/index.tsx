import { FC } from 'react'
import { SimpleSectionProps } from '@models/simpleSection'

const SimpleSection: FC<SimpleSectionProps> = ({
  elementId,
  title,
  description
}) => {
  return (
    <section
      id={elementId}
      className="relative flex flex-col w-9/12 my-8 border border-gray-500 rounded-lg"
    >
      <header
        className="sticky top-0 px-10 py-3 flex justify-start items-center border-b
      border-gray-500 overflow-hidden"
      >
        <h2 className="text-2xl text-white font-bold">#{title}</h2>
      </header>
      <p className="w-full h-full text-justify text-white text-xl p-4">
        {description}
      </p>
    </section>
  )
}

export default SimpleSection
