const searchBox = document.getElementById("searchBox");
const productTable = document.getElementById("productTable");

function renderProducts(filter = "") {
  productTable.innerHTML = "";
  products
    .filter(p => p.name.toLowerCase().includes(filter.toLowerCase()))
    .forEach(p => {
      const row = document.createElement("tr");
      row.innerHTML = `
        <td class="border p-2">${p.code}</td>
        <td class="border p-2">${p.name}</td>
        <td class="border p-2">Rs. ${p.price}</td>
        <td class="border p-2">
          <input type="number" value="1" min="1" class="w-16 qtyInput border rounded">
        </td>
        <td class="border p-2">
          <button class="bg-green-600 text-white px-3 py-1 rounded addBtn">Add</button>
        </td>
      `;
      row.querySelector(".addBtn").addEventListener("click", () => {
        const qty = parseInt(row.querySelector(".qtyInput").value);
        addToBill(p, qty);
      });
      productTable.appendChild(row);
    });
}

searchBox.addEventListener("input", () => renderProducts(searchBox.value));
