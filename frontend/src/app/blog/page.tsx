import Title from "@/components/blog/Title/Title";
import Article from "@/components/blog/Article/Article";
import Search from "@/components/blog/Search/Search";
import Post from "@/components/blog/Post/Post";
import Categories from "@/components/blog/Categories/Categories";
import Connect from "@/components/blog/Connect/Connect";
import Tags from "@/components/blog/Tags/Tags";

export default function blog() {
    return (
        <main className="flex flex-col mb-[111px]">
            <section className="w-full mx-auto px-4 py-[3px]">
                <Title />
            </section>
            <section className="w-full mx-auto px-4 pt-16">
                <section className="flex flex-col xl:grid xl:grid-cols-3 gap-4">
                    {/* 1st column */}
                    <div className="xl:col-span-2 p-4 order-2 xl:order-1">
                        <Article />
                    </div>

                    {/* 2nd column */}
                    <div className="p-3 order-1 xl:order-2 flex flex-col items-center xl:items-start">
                        <div className="w-full md:max-w-5xl max-w-md xl:max-w-none md:flex md:gap-8 xl:block">
                            <div className="md:w-1/2 xl:w-full flex flex-col items-center xl:items-start">
                                <Search />
                                <Post />
                            </div>
                            <div className="md:w-1/2 xl:w-full">
                                <Categories />
                                <Tags />
                                {/* <Connect /> */}
                            </div>
                        </div>
                    </div>
                </section>
            </section>
        </main>
    );
}