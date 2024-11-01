import ArticlePost from "./Articles"

const TheBlog: React.FC = () => (
  <div>
    <div className="flex flex-col justify-center pt-36 gap-y-3 text-center">
      <div className="flex flex-col gap-y-3">
        <div className="text-base mt-[11px] font-semibold text-[#FF64AE]">The Blog</div>
        <div className="text-4xl tracking-normal mb-2 text-[#091156] font-semibold">
          Our latest news
        </div>
        <div className="text-base -ml-[2px] tracking-widest font-light text-[#8B8B8B]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </div>
      </div>
      <div className="flex flex-wrap justify-center gap-8 pt-[76px] px-4 sm:px-6 lg:px-8">
        <ArticlePost />
      </div>
    </div>
  </div>
)

export default TheBlog