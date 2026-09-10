// ตัวอย่างการยิง API ไปที่ Backend
async function fetchProducts() {
  try {
    const response = await fetch(`${API_BASE_URL}/api/products`);
    const data = await response.json();
    console.log("รายการสินค้า:", data);
  } catch (error) {
    console.error("เกิดข้อผิดพลาดในการดึงข้อมูล:", error);
  }
}

// เรียกทำงานเมื่อเปิดหน้าเว็บ
document.addEventListener("DOMContentLoaded", fetchProducts);
