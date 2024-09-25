import ArticlePost from "./Articles"


const TheBlog: React.FC = () => (
<div>
<div className="flex flex-col justify-center gap-y-6 text-center">
    <div className="flex flex-col gap-y-5">
      <div className="text-xs font-semibold text-[#FF64AE]">The Blog</div>
      <div className="text-3xl text-[#091156] font-semibold">
        Our lastest news
      </div>
      <div className="text-base font-light text-[#8B8B8B]">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </div>
    </div>
    <div className="flex flex-wrap justify-center gap-8 p-8">
      <ArticlePost />
    </div>
  </div>
</div>
)

export default TheBlog