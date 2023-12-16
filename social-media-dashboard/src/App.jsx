import Header from "./components/Header";
import stats from "../data/data.json";
import SocialCard from "./components/SocialCard";
import StatsCard from "./components/StatsCard";

function App() {
  const user = stats.user;
  const totalFollowers = stats.total;
  const main = stats.main;
  const substats = stats.sub;

  return (
    <main className="min-h-screen bg-white dark:text-c-white dark:bg-very-dark-blue-bg-d">
      <div className="h-72 lg:h-56 w-full bg-very-pale-blue-bg-top-l dark:bg-very-dark-blue-bg-top-d px-8 pt-12 lg:pt-10 lg:px-20">
        <Header totalFollowers={totalFollowers} />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full px-8 pb-12 -my-20 lg:px-20">
        {main.map((p) => (
          <SocialCard
            key={p.id}
            user={user}
            platform={p.type}
            statsCount={p.count}
            statsTitle={p.text}
            changeCount={p.change}
            isUp={p.isUp}
          />
        ))}
        <h1 className="text-2xl font-bold text-dark-grayish-blue-text-l dark:text-c-white md:col-span-2 lg:col-span-4">
          Overview - Today
        </h1>
        {substats.map((s) => (
          <StatsCard
            key={s.id}
            text={s.text}
            platform={s.type}
            count={s.count}
            change={s.change}
            isUp={s.isUp}
          />
        ))}
      </div>
    </main>
  );
}

export default App;
