import HeadInfo from "../components/HeadInfo"

export default function Home({posts}) {
  
  console.log(posts);
  
  return (
    <div>
      <HeadInfo/>
      <h1>Welcome to My Blog</h1>
      <ul>
        {posts.map(post => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  )
}

//서버 사이드 랜더링 => 페이지에 들어올때마다 서버에 요청을 해서 데이터를 받아옴
//즉각적으로 데이터의 변화가 일어날때 사용

// export const getServerSideProps = async() => {
//   const res = await fetch('https://jsonplaceholder.typicode.com/posts?_start=0&_end=10')
//   const posts = await res.json();

//   return {
//     props : {
//       posts
//     }
    
//   }
// }

// next 에서는 스태틱을 추천함
// node js에서 해도 안바낌
// 인크리먼트 스태틱 리 제네레이션

export const getStaticProps = async() => {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts?_start=0&_end=10')
  const posts = await res.json();

  return {
    props : {
      posts
    },
    revalidate : 20
    // 처음 접속이 일어난 후 20초 후에 새로 리 제네레이션 시킬 수 있도록 명령을 진행하는 옵션
    // 즉 즉각적인 변동이 필요한게 아니라면, 이런식으로 진행을 해주면 된다는 것이다.
  }
}