import DermatologistProfessional from './ProfessionalDermatologist'
import StylistProfessional from './ProfessionalStylist'
import SurgeonProfessional from './ProfessionalSurgeon'

const ProfessionalTeams: React.FC = () => (
  <div className="flex flex-col justify-center space-y-12 text-center py-16">
    <div className="flex flex-col gap-y-5">
      <div className="text-sm font-semibold text-[#FF64AE]">Professional Teams</div>
      <h2 className="text-3xl sm:text-4xl font-semibold text-[#091156]">The Professional expert</h2>
      <p className="text-base font-light mt-2 text-[#8B8B8B] max-w-2xl mx-auto">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam.
      </p>
    </div>
    <div className="flex flex-col lg:flex-row gap-8 lg:gap-4 xl:gap-8 justify-center items-center">
      <SurgeonProfessional />
      <DermatologistProfessional />
      <StylistProfessional />
    </div>
  </div>
)

export default ProfessionalTeams