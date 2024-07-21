import Head from 'next/head';
import WordPairs from '@/components/WordPairDisplay';

export default function Home() {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center py-2">
        <Head>
          <title>Random Word Pairs</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
          <h1 className="text-6xl font-bold mb-8">
            Random Word Pairs
          </h1>
          <p className="text-xl">
            Click the button to generate random word pairs.
          </p>
          <p className="text-xl mb-8">
            Link two words from each window to create a new idea.
          </p>
          <WordPairs />
        </main>
      </div>
    );
}