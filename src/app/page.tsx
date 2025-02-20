import { Suspense } from "react"
import { ClientStuff } from "./client-stuff"

export const dynamic = "force-dynamic"

export default function Home() {
  return (
    <>
      <ClientStuff />
      <div className="border p-4 rounded">
        <Suspense fallback={<div>Loading data in 8 seconds...</div>}>
          <DataFetching />
        </Suspense>
      </div>
    </>
  )
}

async function DataFetching() {
  await new Promise((resolve) => setTimeout(resolve, 8000))
  return <div>Data Fetched</div>
}
