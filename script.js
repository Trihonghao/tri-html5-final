// 1. Hiển thị thông báo chào mừng khi vừa vào trang (Tính năng Extra 5)
window.onload = function() {
    console.log("Portfolio đã sẵn sàng!");
};

// 2. Hiệu ứng cuộn mượt mà khi nhấn vào Menu (Tính năng Extra 6)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// 3. Thay đổi màu nền Header khi cuộn chuột (Tính năng Extra 7)
window.onscroll = function() {
    const header = document.querySelector('header');
    if (window.scrollY > 50) {
        header.style.backgroundColor = '#111'; // Đậm hơn khi cuộn xuống
    } else {
        header.style.backgroundColor = '#333'; // Màu gốc
    }
};