total = 0

let products = [
    {
        id: 1,
        name: 'Sate Madura',
        image: 'https://kbu-cdn.com/dk/wp-content/uploads/sate-ayam.jpg',
        price: 120000,
        quantity: 0
    },
    {
        id: 2,
        name: 'Nasi Padang',
        image: 'https://assets-pergikuliner.com/4o-dKncqKNS6QQbFDqM52WkrK0o=/fit-in/1366x768/smart/filters:no_upscale()/https://assets-pergikuliner.com/uploads/bootsy/image/12013/picture-1537766225.jpeg',
        price: 120000,
        quantity: 0
    },
    {
        id: 3,
        name: 'Kerak Telor',
        image: 'https://asset.kompas.com/crops/vJPlamN3s9o9DX_lb8RdL2Xn--M=/32x22:1000x667/750x500/data/photo/2022/03/06/622484bdc0cf8.jpg',
        price: 220000,
        quantity: 0
    },
    {
        id: 4,
        name: 'Surabi',
        image: 'https://www.masakapahariini.com/wp-content/uploads/2022/08/surabi-bandung-oncom.jpg',
        price: 123000,
        quantity: 0
    },
    {
        id: 5,
        name: 'Kue Lumpur',
        image: 'https://asset.kompas.com/crops/eOV_amH0dauqoG5XNIUHGHggELk=/78x52:702x468/750x500/data/photo/2020/10/05/5f7b07844f783.jpg',
        price: 320000,
        quantity: 0
    },
    {
        id: 6,
        name: 'Kue Cucur',
        image: 'https://img-global.cpcdn.com/recipes/49072becfd2df381/1200x630cq70/photo.jpg',
        price: 12000,
        quantity: 0
    }
  ];
  
  let daftarBelanja = []
  
  //fungsi untuk daftar menu
  function renderProducts(){
      const menuContainer = document.querySelector("#menu-container")
      menuContainer.innerHTML = ""
      products.forEach((item) =>{
          const menuItem = document.createElement('div')
          menuItem.classList = 'card d-flex align-items-center'
          menuItem.innerHTML = `
          <div class="card-body pb-lg-3">
              <img src="${item.image}" width="150">
              <h5 class="card-title p-sm-2 mb-0">${item.name}</h5>
              <p class="card-text p-sm-2">Rp.${item.price}</p>
              <div class="d-flex justify-content-center">
                  <button id="decrement" class="btn btn-primary text-center" onclick="decreaseItem(${item.id})">-</button>
                  <input type="number" class="form-control text-center w-25" value="${item.quantity}"/>
                  <button id="increment" class="btn btn-primary text-center" onclick="increaseItem(${item.id})">+</button>
              </div>
                  <button type="button" class="btn btn-success mt-2" onclick="tambahDaftarBelanja(${item.id})">Pesan</button>
          </div>
          `
          menuContainer.appendChild(menuItem)    
      })
  }
  
  //fungsi untuk menambahkan jumlah quantity
  function increaseItem(id){
      const productItem = products.find((item) => item.id == id) 
      const index = products.indexOf(productItem)
      productItem.quantity++
      products[index] = productItem
      renderProducts();
  }
  
  //fungsi untuk mengurangi jumlah quantity
  function decreaseItem(id){
      const productItem = products.find((item) => item.id == id) 
      const index = products.indexOf(productItem)
      if (productItem.quantity <= 0 ){
          productItem.quantity = 0
      }
      else{
          productItem.quantity--
      }
      products[index] = productItem
      renderProducts();
  }

  function calculateTotalPrice() {
        let totalPrice = 0;
        daftarBelanja.forEach((item) => {
            const totalItemPrice = item.price * item.quantity;
            totalPrice += totalItemPrice;
        });
        return totalPrice;
    }

    function calculateTotalTax() {
        const totalPrice = calculateTotalPrice();
        const totalTax = totalPrice * 0.11;
        return totalTax;
    }

    function calculateTotalWithTax() {
        const totalPrice = calculateTotalPrice();
        const totalTax = calculateTotalTax();
        return totalPrice + totalTax;
    }

    function calculateSubtotal(harga, quantity) {
        return harga * quantity;
    }

  //list untuk pesanan belanjaan
  function renderDaftarBelanja() {
    const container = document.getElementById('daftar-belanja');
    const totalContainer = document.getElementById('totalPrice');
    const taxContainer = document.getElementById('taxPrice');
    const subtotalContainer = document.getElementById('subtotalPrice');

    container.innerHTML = "";

    let totalPrice = 0;
    let totalTax = 0;
    let subtotal = 0;

    daftarBelanja.forEach((item) => {
        const totalItemPrice = calculateSubtotal(item.price, item.quantity);
        totalPrice += totalItemPrice;
        subtotal += calculateSubtotal(item.price, item.quantity);

        const itemBelanja = document.createElement('div');
        itemBelanja.classList = 'd-flex justify-content-between my-3 border border-2 p-1';
        itemBelanja.innerHTML = `
            <div class="d-flex">
                <img src="${item.image}" width="200">
                <div class="itemProduct">
                    <h3 class="p-3 ">${item.name}</h3>
                    <h5 class="p-3">Rp.${item.price} x ${item.quantity}</h5>            
                </div>
            </div>
            <div class="totalHargaProduk">
                <h5 class="p-3 ">Rp.${totalItemPrice}</h5>
            </div>
        `;
        container.appendChild(itemBelanja);
    });

    totalTax = calculateTotalTax();
    subtotalContainer.textContent = `Total Price (Before Tax): Rp.${subtotal}`;
    taxContainer.textContent = `Tax Price (11% tax): Rp.${totalTax}`;
    totalContainer.textContent = `Total Price: Rp.${calculateTotalWithTax()}`;
}
  
  function tambahDaftarBelanja(id){
      const productItem = products.find((item) => item.id == id) 
      const index = products.indexOf(productItem)
      const itemBelanja = daftarBelanja.find((item) => item.id == id)
      const indexItemBelanja = daftarBelanja.indexOf(itemBelanja)
      if (indexItemBelanja == -1){
          daftarBelanja.push(productItem)
      }
      else{
          daftarBelanja[indexItemBelanja].quantity++
          products[index].quantity--
      }
      renderDaftarBelanja();
  }
  
  // function hapusDaftarBelanja(){
  //     daftarBelanja = []
  //     renderDaftarBelanja();
  // }
  
  // function renderTotalHarga(){
  //     const totalHarga = document.getElementById('total-harga')
  //     totalHarga.innerHTML = ""
  //     const total = daftarBelanja.reduce((total, item) => total + (item.price * item.quantity), 0)
  //     totalHarga.innerHTML = `
  //     <h3 class="p-3 ">Total Harga : Rp.${total}</h3>
  //     `
  //     totalHarga.appendChild(totalHarga)
  // }
            const subtotalContainer = document.createElement("div");
            subtotalContainer.id = "subtotalPrice";
            subtotalContainer.classList.add("col-md-12", "mt-3", "mx-5","text-start");
            document.querySelector("body").appendChild(subtotalContainer);

            const taxContainer = document.createElement("div");
            taxContainer.id = "taxPrice";
            taxContainer.classList.add("col-md-12" ,"mt-3", "mx-5", "text-start");
            document.querySelector("body").appendChild(taxContainer);

            const totalContainer = document.createElement("div");
            totalContainer.id = "totalPrice";
            totalContainer.classList.add("col-md-12", "mt-3", "mx-5","text-start");
            document.querySelector("body").appendChild(totalContainer);

  function updateCart(){
      const cart = document.getElementById('cart')
      cart.innerHTML = ""
      const total = daftarBelanja.reduce((total, item) => total + (item.price * item.quantity), 0)
      const pajak = 0.11;
      const totalPajak = total * pajak;
      cart.innerHTML = `
      <h3 class="p-3 ">Total Harga : Rp.${total}</h3>
      `
      cart.appendChild(cart)
  }
  
  renderProducts();
  renderDaftarBelanja();
  // renderTotalHarga();