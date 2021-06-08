async function tempo(request, response) {
    const apiSecret = process.env.CONVERTKIT_API_SECRET;
    const dynamicDate = new Date();

    const subscribeResponse = await fetch(`https://api.convertkit.com/v3/subscribers?api_secret=${apiSecret}`);
    const subscribeResponseJson = await subscribeResponse.json();
    const inscritos = subscribeResponseJson.total_subscribers;

    response.json({
        date: dynamicDate.toGMTString(),
        inscritos: inscritos
    });
}

export default tempo;