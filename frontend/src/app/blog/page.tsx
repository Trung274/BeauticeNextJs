import Title from "../components/blog/Title/Title";
import Article from "../components/blog/Article/Article";
import Search from "../components/blog/Search/Search";
import Post from "../components/blog/Post/Post";
import Categories from "../components/blog/Categories/Categories";
import Connect from "../components/blog/Connect/Connect";
import Tags from "../components/blog/Tags/Tags";

export default function blog() {
    return (
        <main className="flex flex-col">
            <section className="w-full mx-auto px-4 py-[3px]">
                <Title />
            </section>
            <section className="w-full mx-auto px-4 pt-16">
                <section className="grid grid-cols-1 md:grid-cols-3 gap-4">

                    {/* 1st column */}
                    <div className="col-span-1 md:col-span-2 p-4">
                        <Article />
                    </div>

                    {/* 2nd column */}
                    <div className="col-span-1 p-4">
                        <Search />
                        <Post />
                        <Categories />
                        <Tags />
                        <Connect />
                    </div>
                </section>
            </section>
        </main>
    );
}