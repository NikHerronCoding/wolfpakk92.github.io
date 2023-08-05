
JSON_DATA = {"items":[{"id":0,"name":"Laptop","description":"Laptop - 15-inch, Intel i7, 16GB RAM, 512GB SSD","picture":"https://webobjects2.cdw.com/is/image/CDW/7063689?$product-detail$","quantity":71,"price":197.0},
{"id":1,"name":"Smartphone","description":"Smartphone - 6.5-inch AMOLED display, 128GB storage, dual-camera","picture":"https://t-mobile.scene7.com/is/image/Tmusprod/Apple-iPhone-14-Pro-Max-Deep-Purple-frontimage","quantity":70,"price":173.0},
{"id":2,"name":"Wireless Headphones","description":"Wireless Headphones - Noise-cancelling, Bluetooth 5.0, 20-hour battery life","picture":"https://target.scene7.com/is/image/Target/GUEST_b308c657-8aec-427b-bcbb-89a88b561fcf?wid=2301&hei=2301&fmt=pjpeg","quantity":75,"price":422.0},
{"id":3,"name":"Smart Watch","description":"Smart Watch - Heart rate monitor, fitness tracker, notifications","picture":"https://t-mobile.scene7.com/is/image/Tmusprod/Apple-Watch-SE-2nd-Gen-40mm-Starlight-Aluminum-Starlight-frontimage","quantity":77,"price":878.0},
{"id":4,"name":"Gaming Console","description":"Gaming Console - 4K gaming, 1TB storage, multiple controller support","picture":"https://i5.walmartimages.com/seo/Xbox-Series-X-Video-Game-Console-Black_9f8c06f5-7953-426d-9b68-ab914839cef4.5f15be430800ce4d7c3bb5694d4ab798.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF","quantity":70,"price":15.0},
{"id":5,"name":"DSLR Camera","description":"DSLR Camera - 24MP sensor, Full HD video, interchangeable lenses","picture":"https://i5.walmartimages.com/asr/27461116-26bd-4bbc-b9b0-a1f2314ff960_1.d58a5892b356f680d609fdbe164b56c8.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF","quantity":6,"price":298.0},
{"id":6,"name":"Fitness Tracker","description":"Fitness Tracker - Step counter, sleep monitor, water-resistant","picture":"https://i5.walmartimages.com/seo/iTech-Unisex-Sport-Smartwatch-Black-Silicone_ce336398-95b7-451c-8b8b-031a3ef52203.b383d506e1354168b903fc163cd9ecf6.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF","quantity":60,"price":796.0},
{"id":7,"name":"External Hard Drive","description":"External Hard Drive - 2TB capacity, USB 3.0, automatic backup","picture":"https://c1.neweggimages.com/ProductImageCompressAll1280/22-234-435-01.jpg","quantity":85,"price":962.0},
{"id":8,"name":"Bluetooth Speaker","description":"Bluetooth Speaker - 20W output, portable, built-in microphone","picture":"https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6507/6507301_sd.jpg;maxHeight=640;maxWidth=550","quantity":54,"price":628.0},
{"id":9,"name":"E-book Reader","description":"E-book Reader - 7-inch E-ink display, adjustable front light, weeks-long battery life","picture":"http://allesebook.de/wp-content/uploads/2015/04/kindle-voyage-rahmenlos-large-schraeg-pagepress3.jpg","quantity":33,"price":684.0}]};


async function main() {
    //let data = (await fetch("http://localhost:8080/ItemList")).json();
    let container = document.getElementById("itemList");
    JSON_DATA.items.map((item) => {
        let text = `<div id=${item.id} class="itemCard">
                        <h3>${item.name}</h3> 
                        <img class="itemImage" src="${item.picture}">
                        <span>${item.description}</span>
                        <span>Quantity Left: ${item.quantity}</span>
                        <h2>$${item.price}.99</h2>
                    </div>`;
        container.innerHTML += text;
    })

}



main();