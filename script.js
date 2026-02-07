const form = document.getElementById("priceForm");

if (form) {
    const nameInput = document.getElementById("productName");
    const priceInput = document.getElementById("productPrice");
    const table = document.getElementById("priceTable");

    form.addEventListener("submit", function (e) {
        e.preventDefault();

        // Product name: tiro lama oggola
        if (/\d/.test(nameInput.value)) {
            alert("Product name tiro lama oggola");
            return;
        }

        // Price: negative lama oggola
        if (priceInput.value < 0) {
            alert("Qiimaha negative lama oggola");
            return;
        }

        table.innerHTML += `
            <tr>
                <td>${nameInput.value}</td>
                <td>${priceInput.value}</td>
            </tr>
        `;

        form.reset();
    });
}