import AssistantCard from './AssistantCard'
import { ASSISTANT_TEAM } from '@/app/data'

const AssistanceTeam = () => (
  <div className="flex flex-col gap-16 mt-2">
    <div className="flex flex-col gap-4 text-center justify-center self-center">
      <div className="text-base font-semibold text-[#FF64AE]">Assistance Team</div>
      <div className="text-3xl sm:text-4xl xl:-mt-1 font-semibold text-[#091156]">Meet the pro assistance</div>
      <div className="text-base tracking-widest xl:mr-1 xl:mt-[10px] font-light text-[#8B8B8B]">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam.
      </div>
    </div>
    <div className="flex flex-col gap-14 justify-center mx-4 self-center xl:-ml-[330px] xl:mt-[50px] xl:gap-y-20">
      {ASSISTANT_TEAM.map((member, index) => (
        <AssistantCard key={index} {...member} />
      ))}
    </div>
  </div>
)

export default AssistanceTeam