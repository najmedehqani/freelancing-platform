import ProposalsTable from "../features/proposals/ProposalsTable"


function AdminProposals() {
  return (
     <div>
      <h1 className="font-black text-secondary-700 text-lg sm:text-xl mb-8">
     لیست پروپزال ها
      </h1>
      <ProposalsTable />
    </div>
  )
}

export default AdminProposals