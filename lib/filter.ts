export const filter = async (price, location, setFiltered) => {
    const url = process.env.NEXT_PUBLIC_API_URL;

    const res = await fetch(
        `${url}/venues/filter/?location=${location}&price=${price}$`,
        {
            method: "GET",
        }
    );
    const filtered = await res.json();
    setFiltered(filtered);
    console.log(filtered);
};