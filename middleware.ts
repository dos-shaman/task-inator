import { authMiddleware } from "@clerk/nextjs/server";
import { redirectToSignIn } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

export default authMiddleware({
  publicRoutes: ["/"],
  afterAuth(auth,req){
    if(auth.userId && auth.isPublicRoute){
      let path = "/select-org";
      if(auth.orgId){
          path = `/organization/${auth.orgId}`;
      }
      
      const orgSelection = new URL(path, req.url);
      return NextResponse.redirect(orgSelection);
    }
    if(!auth.userId && !auth.isPublicRoute){
      return redirectToSignIn({ returnBackUrl: req.url });
    }
    if(auth.userId && !auth.orgId && req.nextUrl.pathname !== "/select-org"){
      const orgSelection = new URL("/select-org", req.url);
      return NextResponse.redirect(orgSelection);
    }
  }
});
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

export const config = {
  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
} 