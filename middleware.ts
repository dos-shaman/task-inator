// import { clerkMiddleware, createRouteMatcher, redirectToSignIn } from '@clerk/nextjs/server'
// import { NextResponse } from 'next/server';

// const isPublicRoute = createRouteMatcher(['/','/sign-in(.*)','/sign-up(.*)']);

// export default clerkMiddleware((auth, request) => {
//   if(auth().userId && isPublicRoute(request)){
//     let path = "/select-org";
//     if(auth().orgId){
//         path = `/organization/${auth().orgId}`;
//     }
    
//     const orgSelection = new URL(path, request.url);
//     console.log(request.url);
//     return NextResponse.redirect(orgSelection);
//   }

//   if(auth().userId && !isPublicRoute(request)){
//     return auth().redirectToSignIn({returnBackUrl: request.url});
//   }

//   if(auth().userId && !auth().orgId && request.nextUrl.pathname !== "/select-org"){
//     const orgSelection = new URL("/select-org", request.url);
//     return NextResponse.redirect(orgSelection);
//   }

//   if(!isPublicRoute(request)) {
//     auth().protect();
//   }
// });

import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

const isProtectedRoute = createRouteMatcher([
  '/organization(.*)',
  '/board(.*)',
  '/select-org',
  '/api/cards(.*)'
])



export default clerkMiddleware((auth,req,event)=>{
  if(!auth().userId && isProtectedRoute(req)){
    return auth().redirectToSignIn({returnBackUrl:req.url})
  } 
  
  if(auth().userId && !isProtectedRoute(req)){
    let path : string = '/select-org'

    if( auth().orgId){
      path = `/organization/${auth().orgId}`
    }
    return NextResponse.redirect(new URL(path, req.url))
  }

  if(auth().userId && !auth().orgId && req.nextUrl.pathname !== "/select-org" ){
    return NextResponse.redirect(new URL('/select-org', req.url))
  }


});

export const config = {
  matcher: ['/((?!.*\\..*|_next).*)', '/', '/(api|trpc)(.*)'],
};