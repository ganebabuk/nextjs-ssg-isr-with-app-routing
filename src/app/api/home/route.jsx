export async function GET(req) {
    const data = {
        head: "Welcome to P&G",
        content: `
            <br/>
            <p>Welcome to P&G - Our brands are trusted in millions of living rooms, kitchens, laundry rooms, and bathrooms—and have been passed down from generation to generation. We are the people behind the brands you trust, and we’re committed to making peoples’ lives better in small but meaningful ways, every day.</p>
            <br/><br/>
            <p>As P&G grows, we stay grounded in our purpose, values, and principles and a deep-rooted understanding between each other and our company that being our best and doing our best—for the people who buy our products, for one another, and for the world around us—will lead to mutual success.</p>
            <br/><br/>
            <p>As P&G grows, we stay grounded in our purpose, values, and principles and a deep-rooted understanding between each other and our company that being our best and doing our best—for the people who buy our products, for one another, and for the world around us—will lead to mutual success.</p>
        `
    };

    return new Response(JSON.stringify(data), {
        status: 200,
        headers: {
            'Content-Type': 'application/json',
        },
    });
}
