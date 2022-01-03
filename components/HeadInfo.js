import Head from 'next/head'



const HeadInfo = ({title,keyword, contents}) => {
  return (

      <Head>
        <title>{title}</title>
        <meta keyword = {keyword}/>
        <meta contents = {contents}/>
      </Head>

  )
}

HeadInfo.defaultProps = {
  title : 'My Blog',
  keyword : "blog",
  contents : "My blog"
}

export default HeadInfo
