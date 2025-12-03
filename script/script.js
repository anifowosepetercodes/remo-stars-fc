/* ADD TO CART*/
/* function addToCart(button) {
    let product = button.closest('.product')
    let quantity = product.querySelector('.ProductQua').value

    localStorage.setItem('cartQuantity',quantity);
    

    window.location.href = "cart.html"

    window.onload = function () {
        let quantity = localStorage.getItem("cartQuantity");

        

        if (quantity) {
            document.querySelector('.quantity').value = quantity;

            document.querySelector('.totalitem').textContent = `${quantity * 6000}`
        }
    }

} */

/*CART*/
/* function calCart(price,quantity) {
    return price * quantity;
}

function updateCartItem(item) {
    let price = item.querySelector('.price').textContent;
    
    
    let quantity = item.querySelector('.quantity').value;
    
    let itemTotal = calCart(price,quantity);
     item.querySelector('.totalitem').textContent = itemTotal;
     return itemTotal;
}

function updateCart() {
    let items = document.querySelectorAll('.cartItems');

    let grandTotal = 0;

    items.forEach( item => { 
        let itemTotal = updateCartItem(item);
        grandTotal += itemTotal;
    });

    document.getElementById('totalprice').textContent = grandTotal;
}
*/

   // REOMOVE BUTTON
/* 
    function remove(button) {
        let cartItem = button.closest('.cartItems');

        let quantityInput = cartItem.querySelector('.quantity');
        quantityInput.value = 0;

        let price = 0;
        let formatted = price.toLocaleString('en-US',
        {maximumFractionDigits: 2});

        let itemTotal = cartItem.querySelector('.totalitem');
        itemTotal.textContent = formatted;
    }  */

/* 
        function removeProducts(productkey,inputElement) {
            if (!inputElement) return;

            inputElement.value = 0;
            localStorage.setItem(productkey + "Qty", 0);

            updateCartIcon();
            updatePriceDisplay();
        } */





    // DELIVERY PAGE

 
    // DETAILS PAGE
/*
    window.onload = function(){
        const savedCount = localStorage.getItem("cartCount")

        document.getElementById("cart-count").textContent = savedCount;
    }

    function addToCart() {
        const input = document.getElementById("quantity");

        const addedQty = parseInt(input.value) ;
        
        input.value = 1;

        let raw = parseInt(localStorage.getItem("cartCount"));
        let cartCount = isNaN(raw) ? 0 :raw;


        cartCount += addedQty;

        localStorage.setItem("cartCount",cartCount);

        document.getElementById("cart-count").textContent = cartCount;
    }


    //ALL PRODUCTS

    window.onload = function () {
        const cart1 = document.getElementById("cart-product1")
        const cart2 = document.getElementById("cart-product2")
        const cart3 = document.getElementById("cart-product3")

        if (cart1) cart1.value = localStorage.getItem("product1Qty") || 0;
        if (cart2) cart2.value = localStorage.getItem("product2Qty") || 0;
        if (cart3) cart3.value = localStorage.getItem("product3Qty") || 0;
         
        const addBtn = document.getElementById("view-cart");

        const qtyInput = document.getElementById("quantity");

        if (addBtn && qtyInput) {
            const productkey = document.body.id;
        

        addBtn.onclick = function () {
            const qty = parseInt(qtyInput.value);
            if (isNaN(qty) || qty <= 0 ) {
               alert("Enter a Valid quantity");
               return; 
            }

            localStorage.setItem(productkey + "Qty",qty);

            qtyInput.value = 0;
        };
      };
    };
     */

/* 

    window.onload = function () {
        console.log("script loaded");
        
        function updateCartIcon() {
            const cartIcon = document.getElementById("cart-count");
        

        if (!cartIcon) return;        
         
        const total =
            (parseInt(localStorage.getItem("product1Qty")) || 0) +
            (parseInt(localStorage.getItem("product2Qty")) || 0) +
            (parseInt(localStorage.getItem("product3Qty")) || 0);

            cartIcon.textContent = total;
    }

    updateCartIcon();

    const addBtn = document.getElementById("add-to-cart");
    
    const qtyInput = document.getElementById("quantity");

    const productkey = document.body.id;

    if (addBtn && qtyInput) {
         addBtn.onclick = function () {
            const newQty = parseInt(qtyInput.value);

            if (isNaN(newQty) || newQty <= 0) {
                alert("Please enter a valid number")
              return;
            }
 
            const oldQty = parseInt(localStorage.getItem(productkey + "Qty")) || 0;

             console.log("saving to:", productkey + "Qty", "Value", totalQty);
             

            const totalQty = oldQty + newQty;

            localStorage.setItem(productkey + "Qty",totalQty);

            qtyInput.value = "";
        };
    }

        const cart1 = document.getElementById("cart-product1")
        const cart2 = document.getElementById("cart-product2")
        const cart3 = document.getElementById("cart-product3")

        if (cart1) cart1.value = localStorage.getItem("product1Qty") || 0;
        if (cart2) cart2.value = localStorage.getItem("product2Qty") || 0;
        if (cart3) cart3.value = localStorage.getItem("product3Qty") || 0;
}; */

/* 

function addToCart() {
    const input = document.getElementById("quantity");

    const addedQty = parseInt(input.value);

    if (isNaN(addedQty) || addedQty <= 0 ) {
        alert("Please input a number");
        return;
    }

    const productkey = document.body.id;

    localStorage.setItem(productkey + "Qty", addedQty);

    const q1 = parseInt(localStorage.getItem("product1Qty") || 0);
    const q2 = parseInt(localStorage.getItem("product2Qty") || 0);
    const q3 = parseInt(localStorage.getItem("product3Qty") || 0);
    
    const totalCart = q1 + q2 + q3;

    localStorage.setItem("cartCount",totalCart);

    document.getElementById("cart-count").textContent = totalCart;
} */
/* 
    window.onload = function(){
        const savedCount = localStorage.getItem("cartCount")

        document.getElementById("cart-count").textContent = savedCount;
    }

    function addToCart() {
        const input = document.getElementById("quantity");

        const addedQty = parseInt(input.value) ;
        
       // input.value = 1;

        let raw = parseInt(localStorage.getItem("cartCount"));
        let cartCount = isNaN(raw) ? 0 :raw;


        cartCount += addedQty;

        localStorage.setItem("cartCount",cartCount);

        document.getElementById("cart-count").textContent = cartCount;
    }
  


 */
/* 
    function getCart() {
        return
        JSON.parse(localStorage.getItem("cart")) || {1:0, 2:0, 3:0};
    }
    function saveCart(cart) {
        localStorage.setItem("cart",JSON.stringify(cart));
        updateCartIcon();
    }
    function updateCartIcon() {
        const cart = getCart();

        const total = cart[1] + cart[2] + cart[3];

        const countEl = document.getElementById("cart-count");

        if (countEl) countEl.textContent = total;
    }

    function addToCart(id) {
        const input = document.getElementById(`product${id}`);

        const qty = parseInt(input.value) || 0;

        const cart = getCart();

        const[id] = qty;

        saveCart(cart);
    }

    function cartInputChange(id) {
        const input = document.getElementById(`product${id}`);

        const qty = parseInt(input.value) || 0;

        const cart = getCart();

        cart[id] = qty;

        saveCart(cart);
    }

    function syncInputs() {
        const cart = getCart();

        for (let index = 1; index <= 3; index++){
            const input = document.getElementById(`product${i}`);

            if (input) input.value = cart[i]
        }
        updateCartIcon();
    }

    document.addEventListener("DOMContentLoaded", syncInputs); */

    /* 
    function setupInput(input, key) {
        if(!input) return;

        input.value = localStorage.getItem(key + "Qty") || 0;

        input.addEventListener("input", () => {
            const qty = parseInt(input.value) || 0;

            localStorage.setItem(key + "Qty", qty);

            updateCartIcon();
            updatePriceDisplay();
        } )
    } */


// SYNC CART AND DETAIL INPUT AND ICON
    window.onload = function () {
        function updateCartIcon() {
            const cartCount = document.getElementById("cart-count");
            if (!cartCount) return;

            const q1 = parseInt(localStorage.getItem("product1Qty"))|| 0;
            const q2 = parseInt(localStorage.getItem("product2Qty"))|| 0;
            const q3 = parseInt(localStorage.getItem("product3Qty"))|| 0;

            const total = q1 + q2 + q3;

            localStorage.setItem("cartCount", total);
            cartCount.textContent = total
        }

        updateCartIcon();

        const input = document.getElementById("quantity");
        const addBtn = document.getElementById("add-to-cart");
        const productkey = document.body.id;

        if (input && addBtn && productkey.startsWith("product")) {
            addBtn.onclick = function () {
                const qty = parseInt(input.value);
                if (isNaN(qty) || qty < 0) {
                    alert("Please enter a number");
                    return;
                }

                localStorage.setItem(productkey + "Qty", qty);
                updateCartIcon();
            };
        }

        const cart1 = document.getElementById("cart-product1");
        const cart2 = document.getElementById("cart-product2");
        const cart3 = document.getElementById("cart-product3");

        if (cart1 || cart2 || cart3) {
            if (cart1) cart1.value = localStorage.getItem("product1Qty") || 0;
            if (cart2) cart2.value = localStorage.getItem("product2Qty") || 0;
            if (cart3) cart3.value = localStorage.getItem("product3Qty") || 0;

            function syncCartInput(productInput, productkey) {
                if (productInput) {
                    productInput.oninput = function () {
                        const newQty = parseInt(productInput.value) || 0;
                        localStorage.setItem(productkey + "Qty", newQty);
                        updateCartIcon();
                    };
                }
            }
            syncCartInput(cart1, "product1");
            syncCartInput(cart2, "product2");
            syncCartInput(cart3, "product3");
        }


    //CART PAGE

    const carts1 = document.getElementById("cart-product1")
    const carts2= document.getElementById("cart-product2")
    const carts3 = document.getElementById("cart-product3")

    const price1 = document.getElementById("price1")
    const price2 = document.getElementById("price2")
    const price3 = document.getElementById("price3")

    function updatePriceDisplay() {
        const q1 = parseInt(localStorage.getItem("product1Qty")) || 0;  
        const q2 = parseInt(localStorage.getItem("product2Qty")) || 0;  
        const q3 = parseInt(localStorage.getItem("product3Qty")) || 0;  


        const unitPrice = 6000;

        if (price1) price1.textContent = (q1 * unitPrice).toLocaleString();
        if (price2) price2.textContent = (q2 * unitPrice).toLocaleString();
        if (price3) price3.textContent = (q3 * unitPrice).toLocaleString();
    }
        if(carts1 || carts2 || carts3 ) {
          if (carts1) carts1.value = localStorage.getItem("product1Qty") || 0;
          if (carts2) carts2.value = localStorage.getItem("product2Qty") || 0;
          if (carts3) carts3.value = localStorage.getItem("product3Qty") || 0;
            
          function syncCartInput(productInput,productkey) {
            if (!productInput) return;
            productInput.oninput = function () {
                const qty = parseInt(productInput.value) || 0;

                localStorage.setItem(productkey + "Qty", qty);

                updateCartIcon();
                updatePriceDisplay();
            };
          }

          syncCartInput(carts1, "product1");
          syncCartInput(carts2, "product2");
          syncCartInput(carts3, "product3");

          updatePriceDisplay();
        }

    // UPDATE CART PRICES

        function updatePriceDisplay() {
            const q1 = parseInt(localStorage.getItem("product1Qty")) || 0;
            const q2 = parseInt(localStorage.getItem("product2Qty")) || 0;
            const q3 = parseInt(localStorage.getItem("product3Qty")) || 0;

            const unitPrice = 6000;

            if (price1) price1.textContent = (q1 * unitPrice).toLocaleString();
            if (price2) price2.textContent = (q2 * unitPrice).toLocaleString();
            if (price3) price3.textContent = (q3 * unitPrice).toLocaleString();
        }
        
        // UPADATE TOTAL PRICE

        function updatePriceDisplay() {
            const q1 = parseInt(localStorage.getItem("product1Qty")) || 0; 
            const q2 = parseInt(localStorage.getItem("product2Qty")) || 0; 
            const q3 = parseInt(localStorage.getItem("product3Qty")) || 0; 

            const unitPrice = 6000;

            const p1 = q1 * unitPrice;
            const p2 = q2 * unitPrice;
            const p3 = q3 * unitPrice;

            const total = p1 + p2 + p3;

            if (price1) price1.textContent = p1.toLocaleString();
            if (price2) price2.textContent = p2.toLocaleString();
            if (price3) price3.textContent = p3.toLocaleString();

            const totalPrice = document.getElementById("total-price");

            if (totalPrice)
                totalPrice.textContent = total.toLocaleString(); 
                
            }

            // FINAL PRICE (TOTAL PRICE - DISCOUNT)
           
            function updatePriceDisplay() {
                const q1 = parseInt(localStorage.getItem("product1Qty")) || 0;
                const q2 = parseInt(localStorage.getItem("product2Qty")) || 0;
                const q3 = parseInt(localStorage.getItem("product3Qty")) || 0;

                const unitPrice = 6000;
                const discount = 2000;

                const p1 = q1 * unitPrice;
                const p2 = q2 * unitPrice;
                const p3 = q3 * unitPrice;

                const total = p1 + p2 + p3;

                const finalTotal = Math.max(total - discount, 0)

                if (price1) price1.textContent = p1.toLocaleString();
                if (price2) price2.textContent = p2.toLocaleString();
                if (price3) price3.textContent = p3.toLocaleString();

                const totalPrice = document.getElementById("total-price");
                const finalTotalPrice = document.getElementById("final-total")

                if (totalPrice)
                    totalPrice.textContent = total.toLocaleString();

                if(finalTotalPrice)
                    finalTotalPrice.textContent = finalTotal.toLocaleString();
            }

                
        
         // REOMOVE BUTTON

        const remove1 = document.getElementById("remove1");
        if (remove1) {
            remove1.onclick = function () {
                localStorage.setItem("product1Qty", 0);
                if (cart1) cart1.value = 0;
                updateCartIcon();
                updatePriceDisplay();
            };
        }

        const remove2 = document.getElementById("remove2");
        if (remove2) {
            remove2.onclick = function () {
                localStorage.setItem("product2Qty", 0);
                if (cart2) cart2.value = 0;
                updateCartIcon();
                updatePriceDisplay();
            };
        }

        const remove3 = document.getElementById("remove3");
        if (remove3) {
            remove3.onclick = function () {
                localStorage.setItem("product3Qty", 0); 
                if (cart3) cart3.value = 0;
                updateCartIcon();
                updatePriceDisplay();
            };
        }
      
    };

    // COUPON

        function applyCoupon() {
            let coupon = document.getElementById("coupon-input").value;

            if (coupon === "") {
                alert("Apply coupon")
            }

            if (coupon === "PETERISFRESH") {
                alert("Coupon accepted")
            }else if (coupon !== "PETERISFRESH" && coupon !== ""){
                alert("Invalid coupon")
            }
        }

    
/* SLIDES */
/* 
  let currentIndex = 0;

        const slides = document.querySelectorAll(".slide");

        function showSlide(index) {
            slides.forEach((slide, i) => {

                slide.classList.remove("active");

                if (i === index)
                    slide.classList.add("active");
            });
        }

        function nextSlide() {  
            currentIndex = (currentIndex + 1) % slides.length;

            showSlide(currentIndex);
        }

        setInterval(nextSlide, 3000);
 */
        document.querySelectorAll(".slideshow").forEach((slider) => {
            const slides = slider.querySelectorAll(".slide");

            let index = 0;
 
             setInterval(() => {     

                slides[index].classList.remove("active");

                index = (index + 1) % slides.length;

                slides[index].classList.add("active");
            }, 3000);
        });

/* INPUT FORMS */

  
    function submit(event) {
         
        event.preventDefault()
               
        const fnm = document.getElementById("fnm").value;
        const pnm = document.getElementById("pnm").value;
        const ema = document.getElementById("ema").value;
        const addr = document.getElementById("addr").value;
        const ct = document.getElementById("ct").value;
        const cn = document.getElementById("cn").value;
        const cnm = document.getElementById("cnm").value;
        const cvv = document.getElementById("cvv").value;
        const ed = document.getElementById("ed").value;


        const fnmerror = document.getElementById("fnm-error");
        const pnmerror = document.getElementById("pnm-error");
        const emaerror = document.getElementById("ema-error");
        const addrerror = document.getElementById("addr-error");
        const cterror = document.getElementById("ct-error");
        const cnerror = document.getElementById("cn-error");
        const cnmerror = document.getElementById("cnm-error");
        const cvverror = document.getElementById("cvv-error");
        const ederror = document.getElementById("ed-error");

        hasError = false;

        if (fnm === "") {
            fnmerror.textContent = "input your full name"
            hasError = true;
        }else{
            fnmerror.textContent = ""
        } 
        if (pnm === "") {
            pnmerror.textContent = "input your phone number"
            hasError = true;
        }else{
            pnmerror.textContent = ""
        } 
        if (ema === "") {
            emaerror.textContent = "input your email address"
            hasError = true;
        }else{
            emaerror.textContent = ""
        } 
        if (addr === "") {
            addrerror.textContent = "input your address"
            hasError = true;
        }else{
            addrerror.textContent = ""
        } 
        if (ct === "") {
            cterror.textContent = "input your city or town"
            hasError = true;
        }else{
            cterror.textContent = ""
        } 
        if (cn === "") {
            cnerror.textContent = "input your card number"
            hasError = true;
        }else{
            cnerror.textContent = ""
        } 
        if (cnm === "") {
            cnmerror.textContent = "input your card name"
            hasError = true;
        }else{
            cnmerror.textContent = ""
        } 
        if (cvv === "") {
            cvverror.textContent = "input your cvv"
            hasError = true;
        } else{
            cvverror.textContent = ""
        }
        if (ed === "") {
            ederror.textContent = "input your expire date"
            hasError = true;
        }else{
            ederror.textContent = ""
        } 
        if (addr.length < 10 ) {
            addrerror.textContent = "minimum address length is 10 character"
            hasError = true;
        }else{
            addrerror.textContent = ""
        } 
        const allowDomain = ["@gmail.com","@yahoo.com","@outlook.com","@hotmail.com"];
        const validDomain = allowDomain.some(domain => ema.endsWith(domain));

        if (!validDomain ) {
            emaerror.textContent = "invalid email address"
            hasError = true;
        }else{
            emaerror.textContent = ""
        } 
         
        if (hasError) {
            return;
        }

        if (confirm("Are you sure you want to proceed?")) {
            alert("Order confirmed");
            document.getElementById("checkout").submit();
        }else{
            alert("Please review your details");
        } 
    }

    function submits(event) {
         
        event.preventDefault()
               
        const fn = document.getElementById("fn").value;
        const ln = document.getElementById("ln").value;
        const em = document.getElementById("em").value;
        const pnm = document.getElementById("pnm").value;
        const sub = document.getElementById("sub").value;
        const mess = document.getElementById("mess").value;


        const fnerror = document.getElementById("fn-error");
        const lnerror = document.getElementById("ln-error");
        const emerror = document.getElementById("em-error");
        const pnmerror = document.getElementById("pnm-error");
        const suberror = document.getElementById("sub-error");
        const messerror = document.getElementById("mess-error");

        hasError = false;

        if (fn === "") {
            fnerror.textContent = "input your first name"
            hasError = true;
        }else{
            fnerror.textContent = ""
        } 
        if (ln === "") {
            lnerror.textContent = "input your last name"
            hasError = true;
        }else{
            lnerror.textContent = ""
        } 
        if (pnm === "") {
            pnmerror.textContent = "input your phone number"
            hasError = true;
        }else{
            pnmerror.textContent = ""
        } 
        if (em === "") {
            emerror.textContent = "input your email address"
            hasError = true;
        }else{
            emerror.textContent = ""
        } 
        if (sub.length < 5 ) {
            suberror.textContent = "minimum subject length is 5 character"
            hasError = true;
        }else{
            suberror.textContent = ""
        } 
        if (mess.length < 10 ) {
            messerror.textContent = "minimum message length is 10 character"
            hasError = true;
        }else{
            messerror.textContent = ""
        } 
        const allowDomain = ["@gmail.com","@yahoo.com","@outlook.com","@hotmail.com"];
        const validDomain = allowDomain.some(domain => em.endsWith(domain));

        if (!validDomain ) {
            emerror.textContent = "invalid email address"
            hasError = true;
        }else{
            emerror.textContent = ""
        } 
         
        if (hasError) {
            return;
        }

        if (confirm("Are you sure all information are correct?")) {
            alert("message recieved");
            document.getElementById("submit").submit();
        }else{
            alert("Please review your infromation");
        } 
    }

    document.body.setAttribute('data-width', window.innerWidth);
    window.onresize = () => {
        document.body.setAttribute('data-width', window.innerWidth);
    };

    // INPUT TO BE NUMBER
   const pnminput = document.getElementById("pnm");
    
   pnminput.addEventListener("input", 
    function () {
       let original = pnminput.value || ""; 
       let filt = original.replace(/[^0-9]/g, "");
       
       pnminput.value = filt;
    })
   const cvvinput = document.getElementById("cvv");
    
   cvvinput.addEventListener("input", 
    function () {
       let original = cvvinput.value || ""; 
       let filt = original.replace(/[^0-9]/g, "");
       
       cvvinput.value = filt;
    })
   const cninput = document.getElementById("cn");
    
   cninput.addEventListener("input", 
    function () {
       let original = cninput.value || ""; 
       let filt = original.replace(/[^0-9]/g, "");
       
       cninput.value = filt;
    })

    // HAMBURGER MENU
/*
    const ham = document.getElementById("hamburg");
    const nav = document.getElementById("nav-bar")
 
    ham.addEventListener("click", () => {
        nav.classList.toggle("active");
    }); */


  //INPUT VALIDATION

  const fnm = document.getElementById("fnm");

  fnm.addEventListener("blur", function () {
    if (fnm.value.trim() === "") {
        fnm.classList.add("errors");
    }else{
        fnm.classList.remove("errors");
    }
  });

  const pnm = document.getElementById("pnm");

  pnm.addEventListener("blur", function () {
    if (pnm.value.trim() === "") {
        pnm.classList.add("errors");
    }else{
        pnm.classList.remove("errors");
    }
  });

  const ema = document.getElementById("ema");

  ema.addEventListener("blur", function () {
    if (ema.value.trim() === "") {
        ema.classList.add("errors");
    }else{
        ema.classList.remove("errors");
    }
  });

  const addr = document.getElementById("addr");

  addr.addEventListener("blur", function () {
    if (addr.value.trim() === "") {
        addr.classList.add("errors");
    }else{
        addr.classList.remove("errors");
    }
  });

  const ct = document.getElementById("ct");

  ct.addEventListener("blur", function () {
    if (ct.value.trim() === "") {
        ct.classList.add("errors");
    }else{
        ct.classList.remove("errors");
    }
  });

  const cn = document.getElementById("cn");

  cn.addEventListener("blur", function () {
    if (cn.value.trim() === "") {
        cn.classList.add("errors");
    }else{
        cn.classList.remove("errors");
    }
  });

  const cnm = document.getElementById("cnm");

  cnm.addEventListener("blur", function () {
    if (cnm.value.trim() === "") {
        cnm.classList.add("errors");
    }else{
        cnm.classList.remove("errors");
    }
  });

  const cvv = document.getElementById("cvv");

  cvv.addEventListener("blur", function () {
    if (cvv.value.trim() === "") {
        cvv.classList.add("errors");
    }else{
        cvv.classList.remove("errors");
    }
  });

     
 