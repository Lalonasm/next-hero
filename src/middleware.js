import { cookies } from "next/headers";
import { NextResponse } from "next/server"


const user = false;
const cook = 'next-superhero'

export const middleware = (request) => {

    console.log(request.cookies.get('token'))

    const cookies = request.cookies.get('token')

    if (!cookies || cookies.value !== cook) {

        return NextResponse.redirect(new URL('/login', request.url));
    }
    return NextResponse.next();

}

export const config = {
    matcher: ['/dashboard', '/services'],
}