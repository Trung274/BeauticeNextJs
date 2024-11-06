'use client'

import ThumbnailAboutUsSVG from './ThumbnailAboutUs'
import tw, { styled } from 'twin.macro'

const GridContainer = styled.div`
  ${tw`grid grid-cols-1 gap-8`}
  ${tw`xl:grid-cols-2`}
`

const ContentColumn = styled.div`
  ${tw`flex flex-col`}
`

const ImageColumn = styled.div`
  ${tw`flex justify-center items-center mx-auto max-w-3xl`}
  ${tw`xl:justify-end xl:mx-0`}
`

const ContentWrapper = styled.div`
  ${tw`flex flex-col gap-y-3`}
  ${tw`lg:ml-44 xl:ml-6`}
`

const ButtonContainer = styled.div`
  ${tw`flex flex-col mt-10`}
  ${tw`xl:flex-row`}
  ${tw`ml-[22px] lg:ml-44 xl:ml-[22px]`}
`

const SectionTitle = styled.div`
  ${tw`text-base tracking-wide font-semibold text-[#FF64AE]`}
`

const MainHeading = styled.h2`
  ${tw`text-4xl font-semibold text-[#091156]`}
`

const BodyText = styled.p`
  ${tw`text-base tracking-widest text-[#8B8B8B]`}
`

const PrimaryButton = styled.a`
  ${tw`inline-flex px-12 py-4 bg-[#FF64AE] text-white rounded-full font-semibold hover:bg-opacity-90 transition-colors duration-200`}
`

const VideoButton = styled.button`
  ${tw`flex items-center mt-6 ml-0`}
  ${tw`xl:mt-0 xl:ml-8`}
`

const PlayIcon = styled.svg`
  ${tw`mr-2`}
`

const VideoText = styled.div`
  ${tw`text-lg ml-1 tracking-wider font-medium text-[#8B8B8B]`}
`

const ImageWrapper = styled.div`
  ${tw`w-full h-full transform origin-center`}
  ${tw`scale-50 sm:scale-100 md:scale-100 lg:scale-110 xl:scale-100`}
  ${tw`translate-x-0 xl:translate-x-8`}
`

const AboutUs = () => (
  <GridContainer>
    <ContentColumn css={tw`mt-[73px] -ml-[1px]`}>
      <ContentWrapper>
        <SectionTitle>About Us</SectionTitle>
        <MainHeading>We are the best beauty clinic</MainHeading>
        <BodyText css={tw`mt-[10px] xl:-ml-[2px] w-full xl:w-[86%]`}> 
          Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit. Elit,
          quam suscipit purus donec <br /> amet. Egestas volutpat facilisi eu
          libero. Nunc, <br /> ipsum ornare mauris sit quam quis enim. Varius <br />
          tellus in suspendisse placerat.
          <br />
          <br />
          Id dui erat sed quam tellus in purus. Pellentesque <br />
          congue fringilla cras tellus enim.
        </BodyText>
      </ContentWrapper>

      <ButtonContainer>
        <div>
          <PrimaryButton href="/learn-more">Learn More</PrimaryButton>
        </div>
        <VideoButton>
          <PlayIcon
            width="49"
            height="50"
            viewBox="0 0 49 50"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-label="Play video"
          >
            <circle cx="24.5" cy="24.9382" r="24.5" fill="#091156" />
            <path
              d="M32.1167 23.6145C33.45 24.3843 33.45 26.3088 32.1167 27.0786L22.8042 32.4551C21.4708 33.2249 19.8042 32.2627 19.8042 30.7231L19.8042 19.9699C19.8042 18.4303 21.4708 17.4681 22.8042 18.2379L32.1167 23.6145Z"
              fill="white"
            />
          </PlayIcon>
          <VideoText>Watch Video</VideoText>
        </VideoButton>
      </ButtonContainer>
    </ContentColumn>

    <ImageColumn css={tw`mt-[45px] xl:mr-8 xl:-ml-[29px]`}>
      <ImageWrapper>
        <ThumbnailAboutUsSVG />
      </ImageWrapper>
    </ImageColumn>
  </GridContainer>
)

export default AboutUs