// import { LocalDataSource } from "./data/localDataSource";
import { RemoteDataSource } from "./data/remoteDataSource";
import { HtmlDisplay } from "./htmlDisplay";
import "bootstrap/dist/css/bootstrap.css";

let ds = new RemoteDataSource();

async function displayData(): Promise<HTMLElement> {
    let display = new HtmlDisplay();
    display.props = {
        //products: await ds.getProducts("name"),
        //order: ds.order,
        dataSource: ds
    }
    return display.getContent();
}

document.onreadystatechange = () => {
    if (document.readyState === "complete") {
        displayData().then(elem => {
            let rootElem = document.getElementById("app");
            rootElem.innerHTML = "";
            rootElem.appendChild(elem);
        })
    }
}