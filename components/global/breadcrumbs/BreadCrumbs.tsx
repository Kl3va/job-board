import { useRouter } from 'next/router'
import Link from 'next/link'

const BreadCrumbs = () => {
  const router = useRouter()
  const { pathname, asPath } = router
  const lastPath = router.query.jobRole

  // Split the pathname into segments to build the dynamic paths for pages
  const pathSegments = pathname.split('/').filter((segment) => segment !== '')
  const pathSegmentss = pathSegments.pop()

  console.log(pathSegments, router.query.jobRole)

  return (
    <nav aria-label='Breadcrumb'>
      <ul>
        <li>
          {/* <Link href='/apply-for-job/home'>
            <a>Home</a>
          </Link> */}
          {/* <span>&nbsp;&gt;&nbsp;</span> */}
        </li>
        {pathSegments.slice(1).map((segment, index) => {
          const routePath = `/${pathSegments.slice(0, index + 2).join('/')}`
          return (
            <li key={segment}>
              <Link href={routePath}>
                <a>{segment}</a>
              </Link>
              {index !== pathSegments.length - 1 && (
                <span>&nbsp;&gt;&nbsp;</span>
              )}
            </li>
          )
        })}
      </ul>
    </nav>
  )
}

export default BreadCrumbs
