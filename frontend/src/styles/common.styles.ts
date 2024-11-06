import tw, { styled } from 'twin.macro'

// Layout Components
export const GridContainer = styled.div`
  ${tw`grid grid-cols-1 lg:grid-cols-2 gap-8`}
`

export const ContentColumn = styled.div`
  ${tw`flex flex-col`}
`

export const ImageColumn = styled.div`
  ${tw`flex justify-center items-center`}
`

export const FlexContainer = styled.div`
  ${tw`flex flex-col justify-center`}
`

export const FlexRow = styled.div`
  ${tw`flex flex-wrap flex-row justify-center max-md:flex-col px-4`}
`

// Typography Components
export const SectionTitle = styled.div`
  ${tw`text-base font-semibold tracking-wide text-[#FF64AE]`}
`

export const MainHeading = styled.h2`
  ${tw`text-4xl font-semibold text-[#091156] leading-tight`}
`

export const SubHeading = styled.div`
  ${tw`text-base tracking-widest font-light text-[#8B8B8B]`}
`

export const BodyText = styled.p`
  ${tw`text-base tracking-widest font-light text-[#8B8B8B]`}
`

// Button Components
export const PrimaryButton = styled.a`
  ${tw`inline-flex px-12 py-4 bg-[#FF64AE] text-white rounded-full font-semibold hover:bg-opacity-90 transition-colors duration-200`}
`

export const VideoButton = styled.button`
  ${tw`flex items-center ml-8 max-xl:mt-6 max-xl:ml-0`}
`

// Card Components
export const Card = styled.div`
  ${tw`flex flex-col items-center p-8 rounded-3xl shadow-lg transition-all duration-300`}
`

// Grid Layout Components
export const ResponsiveGrid = styled.div`
  ${tw`grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 md:gap-10 xl:gap-14`}
`

// Section Components
export const Section = styled.section`
  ${tw`flex flex-col justify-center space-y-12 text-center`}
`

// Image Components
export const ImageWrapper = styled.div`
  ${tw`w-full h-full transform origin-center`}
`

// Form Components
export const FormContainer = styled.div`
  ${tw`flex flex-col items-center`}
`