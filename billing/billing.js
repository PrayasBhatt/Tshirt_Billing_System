const billTable = document.getElementById("billTable");
const finalTotalEl = document.getElementById("finalTotal");
const discountInput = document.getElementById("discountInput");
const productTableBody = document.getElementById("productTable");
const searchBox = document.getElementById("searchBox");

let billItems = [];
let allProducts = []; 

function addToBill(productCode, qty) {
    if (qty <= 0) {
        return;
    }

    const product = allProducts.find(p => p.code === productCode);

    if (!product) {
        return;
    }

    let foundItem = billItems.find(item => item.code === product.code);

    if (foundItem) {
        foundItem.qty += qty;
    } else {
        billItems.push({ ...product, qty });
    }
    renderBill();
}

function removeFromBill(code) {
    billItems = billItems.filter(item => item.code !== code);
    renderBill();
}

function renderBill() {
    billTable.innerHTML = "";
    let total = 0;
    billItems.forEach(item => {
        const row = document.createElement("tr");
        const rowTotal = item.price * item.qty;
        total += rowTotal;
        row.innerHTML = `
            <td class="border p-2">${item.name}</td>
            <td class="border p-2">Rs. ${item.price}</td>
            <td class="border p-2">${item.qty}</td>
            <td class="border p-2">Rs. ${rowTotal}</td>
            <td class="border p-2 text-center">
                <button class="bg-red-600 text-white px-2 py-1 rounded removeBtn">X</button>
            </td>
        `;
        row.querySelector(".removeBtn").addEventListener("click", () => removeFromBill(item.code));
        billTable.appendChild(row);
    });

    const discount = parseFloat(discountInput.value) || 0;
    total = total - (total * discount / 100);
    finalTotalEl.textContent = "Rs. " + total.toFixed(2);
}

discountInput.addEventListener("input", renderBill);


function renderProducts(products) {
    productTableBody.innerHTML = '';
    products.forEach(product => {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td class="p-2 border">${product.code}</td>
            <td class="p-2 border">${product.name}</td>
            <td class="p-2 border">${product.price.toFixed(2)}</td>
            <td class="p-2 border">
                <input type="number" value="1" min="1" class="w-full px-2 py-1 border rounded-lg qtyInput">
            </td>
            <td class="p-2 border">
                <button class="px-4 py-1 bg-blue-900 hover:bg-blue-700 text-white rounded-lg addBtn" data-product-code="${product.code}">
                    Add
                </button>
            </td>
        `;
        productTableBody.appendChild(row);
    });
}

fetch('products.json')
    .then(response => response.json())
    .then(data => {
        allProducts = data;
        renderProducts(allProducts);
    });

productTableBody.addEventListener('click', (e) => {
    if (e.target.classList.contains('addBtn')) {
        const productCode = e.target.dataset.productCode;
        const qtyInput = e.target.closest('tr').querySelector('.qtyInput');
        const qty = parseInt(qtyInput.value, 10);

        addToBill(productCode, qty);
    }
});

searchBox.addEventListener('input', (e) => {
    const searchTerm = e.target.value.toLowerCase();
    const filteredProducts = allProducts.filter(product => {
        return product.name.toLowerCase().includes(searchTerm) ||
               product.code.toLowerCase().includes(searchTerm);
    });
    renderProducts(filteredProducts);
});