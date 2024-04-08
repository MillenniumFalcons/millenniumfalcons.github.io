import{r,R as T}from"./react-rKaTJ6rC.js";import"./react-dom-6aGZtuvN.js";import{R as w}from"./react-router-Qfa4vrje.js";import{c as R}from"./@remix-run-w2aNq8l3.js";/**
 * React Router DOM v6.21.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */const F="startTransition",u=T[F];function d(t){let{basename:f,children:h,future:o,window:p}=t,s=r.useRef();s.current==null&&(s.current=R({window:p,v5Compat:!0}));let e=s.current,[n,i]=r.useState({action:e.action,location:e.location}),{v7_startTransition:a}=o||{},c=r.useCallback(l=>{a&&u?u(()=>i(l)):i(l)},[i,a]);return r.useLayoutEffect(()=>e.listen(c),[e,c]),r.createElement(w,{basename:f,children:h,location:n.location,navigationType:n.action,navigator:e,future:o})}var m;(function(t){t.UseScrollRestoration="useScrollRestoration",t.UseSubmit="useSubmit",t.UseSubmitFetcher="useSubmitFetcher",t.UseFetcher="useFetcher",t.useViewTransitionState="useViewTransitionState"})(m||(m={}));var S;(function(t){t.UseFetcher="useFetcher",t.UseFetchers="useFetchers",t.UseScrollRestoration="useScrollRestoration"})(S||(S={}));export{d as B};
