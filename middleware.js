import { NextResponse } from "next/server";

// // <Link> still works
// export default function middleware(req) {
//   return NextResponse.next();
// }

// <Link> causes full page reload
export default function middleware(req) {
  return NextResponse.next({
    request: {
      headers: req.headers,
    },
  });
}
