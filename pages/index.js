import Image from 'next/image'
import Header from '@/components/Header'
import Navbar from '@/components/Navbar'
import Results from '@/components/Results'
import requests from '@/utils/requests'


export default function Home({results}) {
  console.log(results);
  return (
    <main
      className={`min-h-screen items-center`}
    >
     {/* Header */}
      <Header/>
     {/* Navbar */}
      <Navbar/>
      {/* Results */}
      <Results results={results}/>

    </main>
  )
}

//server side rendering

export async function getServerSideProps(context) {
  const genre = context.query.genre;
  const request = await fetch(`https://api.themoviedb.org/3${requests[genre]?.url}`).then((response) => response.json());

  return {
    props: {
      results: request.results,
    }
  }
}
