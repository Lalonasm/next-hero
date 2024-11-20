export const dynamic = 'force-dynamic'
export function GET() {
    return Response.json({
        currentTime: new Date().toLocaleTimeString()
    })
}

