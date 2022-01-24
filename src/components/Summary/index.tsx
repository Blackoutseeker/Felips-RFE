import { FC } from 'react'
import Link from 'next/link'
import { SummaryItemTemplate } from '@models/summary'
import { FaChevronCircleDown } from 'react-icons/fa'
import { summaryItems } from '@utils/constants'

const SummaryItem: FC<SummaryItemTemplate> = ({ number, name, link }) => {
  // TODO: change tag a to Link from Next

  return (
    <div className="flex items-center p-6 space-x-3">
      <span className="text-white font-bold text-xl">{number}.</span>
      <Link href={link} scroll passHref>
        <a className="text-white hover:underline">
          <h5 className="text-white font-bold text-xl">{name}</h5>
        </a>
      </Link>
      <hr className="flex flex-grow min-w-[50px] border border-gray-700" />
      <Link href={link} scroll passHref>
        <a>
          <FaChevronCircleDown
            className="fill-gray-500 hover:fill-primary duration-200"
            size={25}
          />
        </a>
      </Link>
    </div>
  )
}

const renderSummaryItems = () =>
  summaryItems.map(item => <SummaryItem key={item.number} {...item} />)

const Summary: FC = () => {
  return (
    <section className="relative flex flex-col w-9/12 my-5 border border-gray-500 rounded-lg">
      <header
        className="sticky top-0 flex justify-center items-center h-14 border-b
      border-gray-500 overflow-hidden"
      >
        <h2 className="text-2xl text-white font-bold">Sumário</h2>
      </header>
      {renderSummaryItems()}
    </section>
  )
}

export default Summary
