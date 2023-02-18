const main = document.querySelector(".main");
const alive = document.querySelector(".alive");

async function fetchArray() {
    try {
        const response = await fetch("https://rickandmortyapi.com/api/character");

        const datas = await response.json();

        for (const data of datas.results) {
            if (data.episode.length > 25) {
                data.character = "main";
            } else {
                data.character = "side";
            }
            console.log(`${data.name} is a ${data.character} character`);
        }
        for (let i = 0; i < datas.results.length; i++) {
            const div = document.createElement("div");

            div.innerHTML = `<ul>
                <li>id: ${datas.results[i].id}</li>
                <li>name: ${datas.results[i].name}</li>
                <li>character: ${datas.results[i].character}</li>
                <li>gender: ${datas.results[i].gender}</li>
                </ul>`;
            main.appendChild(div);
        }

        for (const data of datas.results) {
            if (data.status === "Alive") {
                const part = document.createElement("div");
                part.innerHTML = `<ul>
                    <li>id: ${data.id}</li>
                <li>name: ${data.name}</li>
                <li>species: ${data.species}</li>
                <li>gender: ${data.gender}</li>
                <li>origin: ${data.origin.name}</li>
                    </ul>`;

                alive.appendChild(part);
            }
        }
    } catch (error) {
        console.log("error");
    }
}

fetchArray();