import Image from 'next/image'
import { StaticImageData } from 'next/image'

interface AssistantCardProps {
  image: StaticImageData
  name: string
  role: string
  description: string
}

const AssistantCard = ({ image, name, role, description }: AssistantCardProps) => (
  <div className="flex flex-wrap flex-row justify-center gap-x-16 max-md:gap-8 xl:ml-[174px]">
    <div>
      <Image src={image} alt={name} />
    </div>
    <div className="flex flex-col gap-4 self-center lg:mt-6 xl:mt-0 xl:ml-[107px]">
      <div className="sm:text-base font-semibold text-[#091156] xl:text-lg xl:-mt-3">
        {name} /{' '}
        <span className="text-[14px] font-normal italic text-[#8B8B8B]">
          {role}
        </span>
      </div>
      <div className="text-base font-light tracking-widest text-[#8B8B8B]">
        {description.split('\n').map((line, index) => (
          <span key={index}>
            {line}
            <br />
          </span>
        ))}
      </div>
    </div>
  </div>
)

export default AssistantCard