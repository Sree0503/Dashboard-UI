// app/page.tsx

import { DataTable } from "@/components/data-table"
import { SiteHeader } from "@/components/site-header"

import data from "@/app/dashboard/data.json"

export default function Page() {
  return (
    <div className="flex flex-1 flex-col">
      <SiteHeader />
      <div className="@container/main flex flex-1 flex-col gap-2">
        <div className="flex flex-col gap-4 py-4 md:gap-6 md:py-6">
          <DataTable data={data} />
        </div>
      </div>
    </div>
  )
}
