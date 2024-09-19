import BeautyConsultation from "./Consultation"
import SkinTreatments from "./SkinTreatment"
import BeautyProduct from './BeautyProduct'

const CoreServices: React.FC = () => (
    <div className="flex flex-col justify-center gap-y-6 -mt-[300px] text-center">
    <div className="flex flex-col gap-y-5">
      <div className="text-xs font-semibold text-[#FF64AE]">Main Sevices</div>
      <div className="text-3xl font-semibold">
        Learn services to focus <br /> on your beauty
      </div>
      <div className="text-base font-light text-[#8B8B8B]">
        Porta rhoncus orci condimentum vitae lobortis eu dignissim non massa.
        Non parturient <br /> amet, feugiat tellus sagittis, scelerisque eget
        nulla turpis.
      </div>
    </div>
    <div className="flex flex-row gap-x-2 self-center max-lg:flex-col">
      <BeautyConsultation />
      <SkinTreatments />
      <BeautyProduct />
    </div>
  </div>
)
export default CoreServices
