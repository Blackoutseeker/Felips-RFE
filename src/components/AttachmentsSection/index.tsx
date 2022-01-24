import { FC } from 'react'
import Image from 'next/image'
import { AttachmentsSectionProps } from '@models/attachmentsSection'
import { AttachmentTemplate } from '@models/attachment'
import { attachments } from '@utils/constants'

const AttachmentsSection: FC<AttachmentsSectionProps> = ({
  elementId,
  title
}) => {
  const AttachmentView: FC<AttachmentTemplate> = ({ imageUrl, alt }) => {
    return (
      <div className="flex flex-col items-center my-6 px-5">
        <Image
          className="rounded-md"
          src={imageUrl}
          alt={alt}
          width={1200}
          height={675}
        />
        <span className="text-white text-lg font-semibold my-2">{alt}</span>
      </div>
    )
  }

  const renderAttachments = () =>
    attachments.map(attachment => (
      <AttachmentView key={attachment.imageUrl} {...attachment} />
    ))

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
      {renderAttachments()}
    </section>
  )
}

export default AttachmentsSection
