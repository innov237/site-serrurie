const endPoint = 'lepetitecrivain.com/lugginapi/public/api/';

export const getAll = async (route: string) => {
    const data = await (await fetch(endPoint + route)).json();
    return data.results.map()
}