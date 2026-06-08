const productList = [
    {
        id: "01",
        name: "Phin Sữa Đá",
        price: 39000,
        image: "../assets/sua-da.jpg",
        category: "coffee",
        desc: "Hương vị cà phê Việt Nam đích thực! Từng hạt cà phê hảo hạng được chọn bằng tay, phối trộn độc đáo giữa hạt Robusta từ cao nguyên Việt Nam, thêm Arabica thơm lừng. Cà phê được pha từ Phin truyền thống, hoà cùng sữa đặc sánh và thêm vào chút đá tạo nên ly Phin Sữa Đá – Đậm Đà Chất Phin."
    },
    {
        id: "02",
        name: "Phin Đen Đá",
        price: 35000,
        image: "../assets/den-da.jpg",
        category: "coffee",
        desc: "Dành cho những tín đồ cà phê đích thực! Hương vị cà phê truyền thống được phối trộn độc đáo tại Highlands. Cà phê đậm đà pha hoàn toàn từ Phin, cho thêm 1 thìa đường, một ít đá viên mát lạnh, tạo nên Phin Đen Đá mang vị cà phê đậm đà chất Phin."
    },
    {
        id: "03",
        name: "Bạc xỉu Đá",
        price: 39000,
        image: "../assets/xiu-da.jpg",
        category: "coffee",
        desc: "Nếu Phin Sữa Đá dành cho các bạn đam mê vị đậm đà, thì Bạc Xỉu Đá là một sự lựa chọn nhẹ nhàng hơn, nhưng vẫn thơm ngon, chất lừ không kém!"
    },
    {
        id: "04",
        name: "Phindi Hạnh Nhân",
        price: 49000,
        image: "../assets/hanh-nhan.jpg",
        category: "phindi",
        desc: "PhinDi Hạnh Nhân - Cà phê Phin thế hệ mới với chất Phin êm hơn, kết hợp cùng Hạnh nhân thơm bùi mang đến hương vị mới lạ, không thể hấp dẫn hơn!"
    },
    {
        id: "05",
        name: "Phindi Kem Sữa",
        price: 49000,
        image: "../assets/kem-sua.jpg",
        category: "phindi",
        desc: "PhinDi Kem Sữa - Cà phê Phin thế hệ mới với chất Phin êm hơn, kết hợp cùng Kem Sữa béo ngậy mang đến hương vị mới lạ, không thể hấp dẫn hơn!"
    },
    {
        id: "06",
        name: "Phindi choco",
        price: 49000,
        image: "../assets/choco.jpg",
        category: "phindi",
        desc: "PhinDi Choco - Cà phê Phin thế hệ mới với chất Phin êm hơn, kết hợp cùng Choco ngọt tan mang đến hương vị mới lạ, không thể hấp dẫn hơn!"
    },
    {
        id: "07",
        name: "Trà Sen Vàng",
        price: 55000,
        image: "../assets/sen-vang.jpg",
        category: "tea",
        desc: "Thức uống chinh phục những thực khách khó tính! Sự kết hợp độc đáo giữa trà Ô long, hạt sen thơm bùi và củ năng giòn tan. Thêm vào chút sữa sẽ để vị thêm ngọt ngào."
    },
    {
        id: "08",
        name: "Trà Thạch Đào",
        price: 55000,
        image: "../assets/thach-dao.jpg",
        category: "tea",
        desc: "Vị trà đậm đà kết hợp cùng những miếng đào thơm ngon mọng nước cùng thạch đào giòn dai. Thêm vào ít sữa để gia tăng vị béo."
    },
    {
        id: "09",
        name: "Trà Thanh Đào",
        price: 55000,
        image: "../assets/thanh-dao.jpg",
        category: "tea",
        desc: "Một trải nghiệm thú vị khác! Sự hài hòa giữa vị trà cao cấp, vị sả thanh mát và những miếng đào thơm ngon mọng nước sẽ mang đến cho bạn một thức uống tuyệt vời."
    },
    {
        id: "10",
        name: "Trà Thạch Vải",
        price: 55000,
        image: "../assets/thach-vai.jpg",
        category: "tea",
        desc: "Một sự kết hợp thú vị giữa trà đen, những quả vải thơm ngon và thạch giòn khó cưỡng, mang đến thức uống tuyệt hảo!"
    },
    {
        id: "11",
        name: "Trà Xanh Đậu Đỏ",
        price: 55000,
        image: "../assets/dau-do.jpg",
        category: "tea",
        desc: "Trà xanh đậu đỏ thơm ngon."
    },
    {
        id: "12",
        name: "Freeze Trà Xanh",
        price: 65000,
        image: "../assets/tra-xanh.jpg",
        category: "freeze",
        desc: "Thức uống rất được ưa chuộng! Trà xanh thượng hạng từ cao nguyên Việt Nam, kết hợp cùng đá xay, thạch trà dai dai, thơm ngon và một lớp kem dày phủ lên trên vô cùng hấp dẫn. Freeze Trà Xanh thơm ngon, mát lạnh, chinh phục bất cứ ai!"
    },
    {
        id: "13",
        name: "Freeze Sô-cô-la",
        price: 65000,
        image: "../assets/chocolate.jpg",
        category: "freeze",
        desc: "Thiên đường đá xay sô cô la! Từ những thanh sô cô la Việt Nam chất lượng được đem xay với đá cho đến khi mềm mịn, sau đó thêm vào thạch sô cô la dai giòn, ở trên được phủ một lớp kem whip beo béo và sốt sô cô la ngọt ngào. Tạo thành Freeze Sô-cô-la ngon mê mẩn chinh phục bất kì ai!"
    },
    {
        id: "14",
        name: "Cookies and Cream ",
        price: 65000,
        image: "../assets/cookies.jpg",
        category: "freeze",
        desc: "Một thức uống ngon lạ miệng bởi sự kết hợp hoàn hảo giữa cookies sô cô la giòn xốp cùng hỗn hợp sữa tươi cùng sữa đặc đem say với đá viên, và cuối cùng không thể thiếu được chính là lớp kem whip mềm mịn cùng cookies sô cô la say nhuyễn."
    },
];

function renderProducts() {

    productList.forEach(product => {

        const card = document.createElement("div");

        card.className = "card";

        card.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>${product.price.toLocaleString("vi-VN")} VNĐ</p>

            <a href="chi-tiet.html?id=${product.id}">
                <button>Xem Chi Tiết</button>
            </a>
        `;

        if(product.category === "coffee"){
            document.getElementById("coffee-list").appendChild(card);
        }

        if(product.category === "phindi"){
            document.getElementById("phindi-list").appendChild(card);
        }

        if(product.category === "tea"){
            document.getElementById("tea-list").appendChild(card);
        }

        if(product.category === "freeze"){
            document.getElementById("freeze-list").appendChild(card);
        }
    });
}

function renderProductDetail(){

    const params =
        new URLSearchParams(window.location.search);

    const id = params.get("id");

    const product =
        productList.find(item => item.id === id);

    if(!product) return;

    document.getElementById("productName").innerText =
        product.name;

    document.getElementById("productPrice").innerText =
        product.price.toLocaleString("vi-VN") + " VNĐ";

    document.getElementById("productDesc").innerText =
        product.desc;

    document.getElementById("productImage").src =
        product.image;
}

function addProduct(){
    alert("Đã thêm sản phẩm vào danh sách!");
}

if(document.getElementById("coffee-list")){
    renderProducts();
}

if(document.getElementById("productImage")){
    renderProductDetail();
}

