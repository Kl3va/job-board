import React, { useState } from 'react'
import {
  JobHubProfileSection,
  JobHubProfileContainer,
} from '../JobHubProfile/JobHubProfileStyles'
import { useAuth } from 'hooks/useAuthProvider'
import { Document, Page, pdfjs } from 'react-pdf'

type Props = {}

const ViewCVTemplate = (props: Props) => {
  pdfjs.GlobalWorkerOptions.workerSrc = new URL(
    'pdfjs-dist/build/pdf.worker.min.js',
    import.meta.url
  ).toString()

  const { user } = useAuth()

  const [numPages, setNumPages] = useState(0)
  const [pageNumber, setPageNumber] = useState(1)

  const onDocumentLoadSuccess = ({ numPages }: { numPages: number }) => {
    setNumPages(numPages)
  }

  return (
    <main>
      <JobHubProfileSection>
        <JobHubProfileContainer>
          {/* {user && 'cvUrl' in user && <p>{user.cvUrl}</p>} */}
          <h1>MY CV</h1>

          {user && 'cvUrl' in user && (
            <Document file={user.cvUrl} onLoadSuccess={onDocumentLoadSuccess}>
              <Page pageNumber={pageNumber}></Page>
            </Document>
          )}
        </JobHubProfileContainer>
      </JobHubProfileSection>
    </main>
  )
}

export default ViewCVTemplate
