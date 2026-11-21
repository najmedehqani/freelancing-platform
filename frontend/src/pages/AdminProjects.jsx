import React from 'react'
import PanelProjectsHeader from '../features/projects/PanelProjectsHeader'
import ProjectsTable from '../features/projects/ProjectsTable'

function AdminProjects() {
  return (
   <div>
      <PanelProjectsHeader />
      <ProjectsTable />
    </div>
  )
}

export default AdminProjects