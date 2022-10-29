import Head from "next/head";
import Jobs from "../components/jobs";
import Stats from "../components/stats";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="min-h-screen px-4">
        <div className="hero">
          <div className="hero-content text-center">
            <div className="max-w-lg py-8">
              <h1 className="text-5xl font-bold">Perfect timing</h1>
              <p className="text-3xl py-2">Sustainably schedule your jobs anywhere, anytime</p>
            </div>
          </div>
        </div>
        <Stats />
        <Jobs />
      </main>
    </div>
  );
}
