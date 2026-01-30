import{r as e,i as y,h as j,u as _,j as t,S,s as A,O as P,P as E}from"./index-B-RPJ948.js";import{P as I}from"./PageHeaderBicolorBackground-DfNAR2kv.js";import"./PageTitle-CZLpa0WS.js";const N="_container_4gwsn_4",b="_error_4gwsn_15",w="_title_4gwsn_18",i={container:N,error:b,title:w};function O(){const[l,d]=e.useState([]),[g,u]=e.useState(!0),[s,m]=e.useState(null),{categorySlug:r}=y(),{title:h,description:f}=A.pages.blog;e.useEffect(()=>{const o=`*[_type == "post"] | order(publishedAt desc) {
  _id,
  "title": titleChinese,
  "slug": slug.current,
  "mainImage": imageAndAlt[0].image,
  "imageAlt": imageAndAlt[0].imageAlt,
  publishedAt,
  "content": paragraph,
  "category": category[0]->categoryNameChinese,
  "categorySlug": category[0]->slug.current,
  "excerpt": array::join(string::split((pt::text(paragraph)), "")[0...50], "") + "...",
}
`;u(!0),m(null),j.fetch(o).then(n=>{const x=n.map(c=>({...c,imageUrl:c.mainImage?_(c.mainImage).width(800).url():"https://placehold.co/400x210/cccccc/ffffff?text=No+Image"}));d(x)}).catch(n=>{console.error("Sanity fetch error:",n),m("無法載入文章，請稍後再試。")}).finally(()=>{u(!1)})},[]);const a=r?l.filter(o=>o.categorySlug===r):l,p=r&&a.length>0?`${a[0].category}`:"所有文章";return t.jsxs(t.Fragment,{children:[t.jsx(S,{title:p,description:f}),t.jsx(I,{title:h}),t.jsx(P,{className:i.container,children:t.jsxs("main",{children:[t.jsx("h1",{className:i.title,children:p}),g&&t.jsx("p",{children:"文章載入中..."}),s&&t.jsx("p",{className:i.error,children:s}),!g&&!s&&t.jsx(E,{posts:a})]})})]})}export{O as default};
