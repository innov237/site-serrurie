const endPoint = 'windam.com/public/api/v1';

export const getAllServices = async (route: string) => {
    const data = await (await fetch(endPoint + route)).json();
    return data.results.map()
}