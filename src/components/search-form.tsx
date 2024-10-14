'use client'

import { Search } from 'lucide-react'
import { useRouter, useSearchParams } from 'next/navigation'
import { FormEvent, Suspense } from 'react'

function SearchFormComponent() {
  const router = useRouter()
  const searchParams = useSearchParams()

  function handleSearch(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    const formData = new FormData(event.currentTarget)
    const data = Object.fromEntries(formData)
    const query = data.q

    if (!query) {
      return null
    }

    router.push(`/search?q=${query}`)
  }

  return (
    <form
      onSubmit={handleSearch}
      className="flex w-[320px] items-center gap-3 rounded-full bg-zinc-900 px-5 py-3 ring-zinc-700"
    >
      <Search className="h-5 w-5 text-zinc-500" />
      <input
        placeholder="Buscar produtos..."
        className="flex-1 bg-transparent text-sm outline-none placeholder:text-zinc-500"
        name="q"
        defaultValue={searchParams.get('q') ?? ''}
      />
    </form>
  )
}

export function SearchForm() {
  return (
    <Suspense fallback={null}>
      <SearchFormComponent />
    </Suspense>
  )
}
